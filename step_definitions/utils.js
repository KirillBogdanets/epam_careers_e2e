'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
let MemoryObject = require('./memory/memory');
const parser = require('./poParser');
const ECHelper = require('./EC/ecHelper');

const inViewPortHelper = (coordinates, shouldNotBe) => {
    return browser.executeScript("return window.scrollY;").then((scrollTop) => {
        return browser.executeScript("return window.innerHeight;").then((innerHeight) => {
            if (shouldNotBe) {
                if (coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight) {
                    throw new Error();
                }
            } else {
                if (!(coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight)) {
                    throw new Error();
                }
            }
        });
    });
};
const isInViewPort = (element, shouldNotBe) => {
    return parser.parser(element).getLocation().then((coordinates) => {
        return inViewPortHelper(coordinates, shouldNotBe);
    });
};

const textHelper = (firstValue, expected, secondValue) => {
	switch (expected) {
        case "different then":
            return expect(MemoryObject.getter(firstValue).to.not.equal(MemoryObject.getter(secondValue), `${MemoryObject.getter(firstValue)} is equal to the ${MemoryObject.getter(secondValue)}`));
        case "equal to":
            return expect(MemoryObject.getter(firstValue)).to.equal(MemoryObject.getter(secondValue), `${MemoryObject.getter(firstValue)} is not equal to the ${MemoryObject.getter(secondValue)}`);
	}
};

const visibilityOf = (element, shouldNotBe) => {
    return browser.wait(EC[ECHelper.visibility(shouldNotBe)](parser.parser(element)), 20000);
};

const scrollToTheElementHelper = (element) => {
    return parser.parser(element).getLocation().then((location) => {
        return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
    });
};

const isTextsEquals = (element, givenText, ignoringCase) => {
    if (ignoringCase){
        return parser.parser(element).getText().then((text) => {
            return givenText.includes("$") ?
            expect(text.toLowerCase()).to.equal(MemoryObject.getter(givenText.replace("$", "")).toLowerCase()) :
            expect(text).to.equal(givenText.toLowerCase());
        });
    } else {
        return parser.parser(element).getText().then((text) => {
            return givenText.includes("$") ? 
            expect(text.toLowerCase()).to.equal(MemoryObject.getter(givenText.replace("$", ""))) :
            expect(text).to.equal(givenText);
        });
    }
};

const textRememberer = (element, saveAs) => {
    return parser.parser(element).getText().then((value) => {
        MemoryObject.setter(saveAs, value);
    });
};

const collectionTextWorker = (number, collection, givenText) => {
    return parser.parser(collection).then((item) => {
        return item[`${parseFloat(number)-1}`].getText().then((text) => {
            return expect(text).to.equal(givenText);
        });
    });
};

const collectionComparingTextsWorker = (array, givenText, expected) => {
    switch (expected) {
        case "equal to":
            return array.every(element => element === givenText);
        case "contain":
            return array.every(element => element.includes(givenText));
    }
};

module.exports = {
	isInViewPort,
    textHelper,
    visibilityOf,
    scrollToTheElementHelper,
    isTextsEquals,
    textRememberer,
    collectionTextWorker,
    collectionComparingTextsWorker
};