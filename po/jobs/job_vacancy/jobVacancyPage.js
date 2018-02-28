'use strict';

class JobVacancyPage{
    constructor (){

        this.VacancyName = element(by.css(".vacancy-page__header"));
        this.VacancyLocation = element(by.css(".vacancy-page__location"));
        this.VacancyDescription = element(by.css(".vacancy-page__top-description"));

        this.ApplyForForm = element(by.css(".section__sidebar"));
        this.ApplyForFormVacationName = this.ApplyForForm.$('.form-component__description div');
        this.ApplyForFormLocation = this.ApplyForForm.$('.form-component__location');
        this.SortByRelevance = element(by.cssContainingText('.search-result__sorting-item', 'Date'));

        this.SocialNetworks = element(by.css(".utility-menu__list"));
        // this.SearchResultsPosition = this.SearchResults.$(".search-result__item-name");
        // this.SearchResultsLocation = this.SearchResults.$(".search-result__location");
        // this.SearchResultsDescription = this.SearchResults.$(".search-result__item-description");
        // this.SearchResultsApplyButton = this.SearchResults.$(".search-result__item-apply");
        // this.SearchResultsHotIcon = this.SearchResults.$("li[class*='hot']");
        // this.SearchResultsRelocationIcon = this.SearchResults.$(".icon");
    };
}

module.exports = JobVacancyPage;