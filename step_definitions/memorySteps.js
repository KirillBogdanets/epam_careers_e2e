'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');

When(/I remember "([^"]*)" element size as "([^"]*)"$/, (element, saveAs) => {
    return utils.sizeRemember(element, saveAs);
});

Then(/^Remembered value as "([^"]*)" should be (bigger then|smaller then|different then|equal to) "([^"]*)"$/, (firstValue, expected, secondValue) => {
    return utils.sizeHelper(firstValue, expected, secondValue);
});