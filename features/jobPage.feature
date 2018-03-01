Feature: Job Page

  Background:
    Given I wait until "CareersPage > Header" element is visible
    Then I am on Careers page

  @job-page
  @task
  @ticket_05
  Scenario Outline: Verify that after applying job offer I can see job position with selected jobs value
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormInput" element should be in viewport
    When I enter "<Keyword>" text into "CareersPage > SearchFormInput" element
    Then I click "CareersPage > SearchFormFindButton" element
      And I wait until "ProposedJobsPage > #1 of SearchResultsPosition" element is visible
      And Value of "ProposedJobsPage > SearchFormInput" element should be equal to "<Keyword>" ignoring case
      And I remember text of "ProposedJobsPage > #<Offer #> of SearchResultsPosition" element as "First Value"
      And I remember text of "ProposedJobsPage > #<Offer #> of SearchResultsLocation" element as "Second Value"
    When I click "ProposedJobsPage > #<Offer #> of SearchResultsApplyButton" element
    Then I wait until "JobVacancyPage > VacancyName" element is visible
      And Page URL should contain "/job."
    Then Text of "JobVacancyPage > VacancyName" element should be equal to "$First Value" ignoring case
      And Text of "JobVacancyPage > VacancyLocation" element should be equal to "$Second Value" ignoring case
    Then "JobVacancyPage > ApplyForForm" element should be visible
      And Text of "JobVacancyPage > ApplyForFormVacationName" element should be equal to "$First Value" ignoring case
      And Text of "JobVacancyPage > ApplyForFormLocation" element should be equal to "$Second Value" ignoring case
    When I scroll to the "JobVacancyPage > SocialNetworks" element
    Then "JobVacancyPage > SocialNetworks" element should be in viewport

    Examples:
      |  Keyword   | Offer #           |
      |  Test      |   5               |
      |  Dev       |   6               |
      |  HR        |   3               |