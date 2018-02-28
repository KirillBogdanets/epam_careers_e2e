'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');

Then(/^I wait (\d+) seconds$/, (number) => {
	let seconds = parseFloat(number);
    return browser.sleep(Math.floor(seconds * 1000));
});

Then(/^I enter "([^"]*)" text into "([^"]*)" element$/, (givenText, element) => {
    return parser.parser(element).sendKeys(givenText);
});

Then(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});



