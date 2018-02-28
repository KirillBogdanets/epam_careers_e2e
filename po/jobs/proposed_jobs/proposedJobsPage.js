'use strict';

const MasterPage = require("../../master/masterPage");

class ProposedJobsPage extends MasterPage{
    constructor (){
        super();

        this.SearchErrorMessage = element(by.css(".job-search__error-message"));
        this.SearchMessage = element(by.css("search-result__heading"));
        this.RelocationHelpCheckbox = element(by.css(".job-search__filter-label"));

        this.SortByField = element(by.css(".search-result__sorting-list"));
        this.SortByRelevance = element(by.cssContainingText('.search-result__sorting-item', 'Relevance'));
        this.SortByRelevance = element(by.cssContainingText('.search-result__sorting-item', 'Date'));

        // this.SearchResults = element.all(by.css(".search-result__item"));
        // this.SearchResultsPosition = this.SearchResults.$(".search-result__item-name");
        // this.SearchResultsLocation = this.SearchResults.$(".search-result__location");
        // this.SearchResultsDescription = this.SearchResults.$(".search-result__item-description");
        // this.SearchResultsApplyButton = this.SearchResults.$(".search-result__item-apply");
        // this.SearchResultsHotIcon = this.SearchResults.$("li[class*='hot']");
        // this.SearchResultsRelocationIcon = this.SearchResults.$(".icon");

        this.ViewMoreButton = element(by.css('.search-result__view-more'));
    };


}

module.exports = ProposedJobsPage;