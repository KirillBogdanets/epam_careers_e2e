'use strict';

class MasterPage {
    constructor() {
        this.Header = element(by.css('.header__wrapper'));
        this.HeaderLogo = element(by.css('.header__logo'));

        this.SearchForm = element.all(by.css('.job-search__form')).first();
        this.SearchFormInput = this.SearchForm.$('.job-search__input');

        this.SearchFormLocation = this.SearchForm.$('.job-search__location');
        this.SearchFormLocationDropdown = this.SearchForm.$('#select-box-location-lc-results');
        this.SearchFormLocationAllLocationsButton = this.SearchForm.$('#select-box-location-x4-result-3rzp-all_locations');
        this.SearchFormLocationCountry = this.SearchForm.$$('.optgroup');
        this.SearchFormLocationCity = this.SearchForm.$$('.dropdown-cities .option');

        this.SearchFormSkills = this.SearchForm.$('.selected-params');
        this.SearchFormSkillsDropdown = this.SearchForm.$('.multi-select-dropdown-container');
        this.SearchFormSkillsSelectedCounter = this.SearchForm.$('.counter');
        this.SearchFormSkillsDropdownElements = this.SearchFormSkillsDropdown.$$('.checkbox-custom-labelr');

        this.SearchFormFindButton= this.SearchForm.$('.job-search__submit');

        this.SelectedScills = element.all(by.css('.filter-tag'));
        // this.SelectedSkillsRemoveButton = this.SelectedScills.$('.unselect-tag');
    }
}

module.exports = MasterPage;