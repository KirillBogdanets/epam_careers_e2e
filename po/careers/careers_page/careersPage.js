'use strict';

const MasterPage = require("../../master/masterPage");

class CareersPage extends MasterPage{
	constructor (){
		super();

		this.Sections = element.all(by.css("div[class='section__wrapper']"));
	};
}

module.exports = CareersPage;