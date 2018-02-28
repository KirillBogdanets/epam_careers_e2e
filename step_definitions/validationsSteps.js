'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');

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
    return browser.wait(EC.visibilityOf(parser.parser(element)), DEFAULT_STEP_TIMEOUT);
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