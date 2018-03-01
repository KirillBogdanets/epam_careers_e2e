'use strict';

class MasterPage {
    constructor() {
        this.Header = element(by.css('.header__wrapper'));
        this.HeaderLogo = element(by.css('.header__logo'));

        this.SearchForm = element.all(by.css('.job-search__form')).first();
        this.SearchFormInput = this.SearchForm.$('.job-search__input');

        this.SearchFormLocation = this.SearchForm.$('.select-box-selection');
        this.SearchFormLocationDropdown = this.SearchForm.$('.select-box-results');
        this.SearchFormLocationCountry = this.SearchForm.$$('.optgroup');
        this.SearchFormLocationCity = this.SearchForm.$$('.dropdown-cities .option');
        this.SearchFormLocationHighlightedElement = this.SearchForm.$("li[class='option highlighted']");

        this.SearchFormSkills = this.SearchForm.$('.multi-select-filter');
        this.SearchFormSkillsDropdown = this.SearchForm.$('.multi-select-dropdown-container');
        this.SearchFormSkillsSelectedCounter = this.SearchForm.$('.counter');
        this.SearchFormSkillsDropdownElements = this.SearchFormSkillsDropdown.$$('.checkbox-custom-label');

        this.SearchFormFindButton= this.SearchForm.$('.job-search__submit');

        this.SelectedScills = element.all(by.css('.filter-tag'));
        this.SelectedSkillsRemoveButton = $$('.unselect-tag');
    }

    isExpandedLocationDropdown(){
        return this.SearchFormLocation.getAttribute('aria-expanded').then(value => value);
    };

    isExpandedSkillsDropdown(){
        return this.SearchFormSkills.getAttribute('class').then(value => value);
    };
}

module.exports = MasterPage;