'use strict';

class JobVacancyPage{
    constructor (){

        this.VacancyName = element(by.css(".vacancy-page__header h1"));
        this.VacancyLocation = element(by.css(".vacancy-page__location"));
        this.VacancyDescription = element(by.css(".vacancy-page__top-description"));

        this.ApplyForForm = element(by.css(".section__sidebar"));
        this.ApplyForFormVacationName = this.ApplyForForm.$('.form-component__description div');
        this.ApplyForFormLocation = this.ApplyForForm.$('.form-component__location');

        this.SocialNetworks = element(by.css(".utility-menu__list"));
    };
}

module.exports = JobVacancyPage;