'use strict';

const CareersPage = require('./careers/careers_page/careersPage');
const JobVacancyPage = require('./jobs/job_vacancy/jobVacancyPage');
const ProposedJobsPage = require('./jobs/proposed_jobs/proposedJobsPage');

class World {
	constructor (){
		this.CareersPage = new CareersPage();
		this.JobVacancyPage = new JobVacancyPage();
		this.ProposedJobsPage = new ProposedJobsPage();
	}
}

module.exports = new World();