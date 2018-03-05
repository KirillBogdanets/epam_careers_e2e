'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');
let MemoryObject = require('./memory/memory');

Given(/^I am on Careers page$/, () => {
    return browser.wait(EC.visibilityOf(world.CareersPage.Sections.get(0)), DEFAULT_STEP_TIMEOUT);
});

Then(/^"([^"]*)" element should( not)? be visible$/, (element, shouldNotBe) => {
    return utils.visibilityOf(element, shouldNotBe);
});

Then(/^"([^"]*)" element should( not)? be in viewport$/, (element, shouldNotBe) => {
    return utils.isInViewPort(element, shouldNotBe);
});

Then(/^Text of "([^"]*)" element should be equal to "([^"]*)"( ignoring case)?$/, (element, givenText, ignoringCase) => {
    return utils.isTextsEquals(element, givenText, ignoringCase);
});

Then(/^Text of #"([^"]*)" element of "([^"]*)" collection should be equal to "([^"]*)"$/, (number, collection, givenText) => {
    return utils.collectionTextWorker(number, collection, givenText);
});

Then(/^I wait until "([^"]*)" element is visible$/, (element) => {
    return utils.visibilityOf(element);
});

Then(/^Page URL should contain "([^"]*)"$/, (givenUrl) => {
    return browser.getCurrentUrl().then(url => {
        return expect(url).to.include(givenUrl);
    });
});

When(/^Page title should be equal "([^"]*)"$/, (givenTitle) => {
    return browser.getTitle().then(title => {
        return expect(title).to.be.equal(givenTitle);
    });
});

Then(/^Location dropdown should( not)? be expanded$/, (shouldNotBe) => {
    if (shouldNotBe) {
        return world.MasterPage.isExpandedLocationDropdown().then(val => {
            return expect(val).to.equal('false', 'Location Dropdown is Expanded');
        });
    }
    return world.MasterPage.isExpandedLocationDropdown().then(val => {
        return expect(val).to.equal('true', 'Location Dropdown is not Expanded');
    });
});

Then(/^Skills dropdown should( not)? be expanded$/, (shouldNotBe) => {
    if (shouldNotBe) {
        return world.MasterPage.isExpandedSkillsDropdown().then(val => {
            return expect(val).to.not.include('open', 'Skills Dropdown is Expanded');
        });
    }
    return world.MasterPage.isExpandedSkillsDropdown().then(val => {
        return expect(val).to.include('open', 'Skills Dropdown is not Expanded');
    });
});

Then(/^Count of "([^"]*)" elements should be equal (\d+)$/, (elements, count) => {
    return parser.parser(elements).count().then(arraysSize => {
        return expect(arraysSize).to.be.equal(count, `${elements} size (${arraysSize}) is different then given count (${count})`);
    });
});

Then(/^Value of "([^"]*)" element should be equal to "([^"]*)"( ignoring case)?$/, (element, givenText, ignoringCase) => {
    return parser.parser(element).getAttribute('value').then(value => {
        return ignoringCase ?
            expect(value.toLowerCase()).to.equal(givenText.toLowerCase()) :
            expect(value).to.equal(givenText);
    });
});

Then(/^Each element of "([^"]*)" collection should (be equal|contain) "([^"]*)" text( ignoring case)?$/, (elements, expected, givenText, ignoringCase) => {
    return parser.parser(elements).getText().then(texts => {
        if (ignoringCase) {
            return givenText.includes("$") ?
                expect(utils.collectionComparingTextsWorker(texts, MemoryObject.getter(givenText.replace("$", "")).toUpperCase(), expected), `Not every element from ${texts} collection ${expected} ${givenText}`).to.be.true :
                expect(utils.collectionComparingTextsWorker(texts, givenText.toUpperCase(), expected), `Not every element from ${texts} collection ${expected} ${givenText}`).to.be.true;
        }
        return givenText.includes("$") ?
            expect(utils.collectionComparingTextsWorker(texts, MemoryObject.getter(givenText.replace("$", "")), expected), `Not every element from ${texts} collection ${expected} ${MemoryObject.getter(givenText.replace("$", ""))}`).to.be.true :
            expect(utils.collectionComparingTextsWorker(texts, givenText, expected), `Not every element from ${texts} collection ${expected} ${givenText}`).to.be.true;

    });
});