'use strict';

const CareersPage = require('./careers/careers_page/careersPage');
const JobVacancyPage = require('./jobs/job_vacancy/jobVacancyPage');
const ProposedJobsPage = require('./jobs/proposed_jobs/proposedJobsPage');
const MasterPage = require('./master/masterPage');
const ErrorPage = require('./404ErorPage/ErorPage');

class World {
	constructor (){
		this.CareersPage = new CareersPage();
		this.JobVacancyPage = new JobVacancyPage();
		this.ProposedJobsPage = new ProposedJobsPage();
		this.MasterPage = new MasterPage();
		this.ErrorPage = new ErrorPage();
	}
}

module.exports = new World();