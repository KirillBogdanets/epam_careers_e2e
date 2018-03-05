'use strict';

class ECHelper{
    visibility(shouldNotBe){
        return shouldNotBe ? 'invisibilityOf' : 'visibilityOf';
    };
}

module.exports = new ECHelper();