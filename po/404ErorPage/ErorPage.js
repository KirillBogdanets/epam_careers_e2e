'use strict';

class ErrorPage{
    constructor (){
        this.ErrorMessage = element(by.css(".section__wrapper b"));
        this.HomeLink = element(by.css(".text a"));
    };
}

module.exports = ErrorPage;