Feature: Proposed Page

  Background:
    Given I wait until "CareersPage > Header" element is visible
    Then I am on Careers page

  @proposed-page
  @task
  @ticket_04
  Scenario Outline: Verify that on Careers page after entering value into the Keyword Field and clicking on Find Button each proposed job should contain entered value
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormInput" element should be in viewport
    When I enter "<Keyword>" text into "CareersPage > SearchFormInput" element
    Then I click "CareersPage > SearchFormLocation" element
      And "CareersPage > SearchFormLocationDropdown" element should be visible
      And Location dropdown should be expanded
    When I click "CareersPage > #<Country #> of SearchFormLocationCountry" element
    Then "CareersPage > #<City #> of SearchFormLocationCity" element should be visible
      And I remember text of "CareersPage > #<City #> of SearchFormLocationCity" element as "First Value"
      And I click "CareersPage > #<City #> of SearchFormLocationCity" element
    Then "CareersPage > SearchFormLocationDropdown" element should not be visible
    When I click "CareersPage > SearchFormFindButton" element
    Then I wait until "ProposedJobsPage > HeaderLogo" element is visible
      And Page URL should contain "/job-listings"
      And Page title should be equal "Job Listings"
      And I wait 2 seconds
      And "ProposedJobsPage > SearchMessage" element should be visible
      And Value of "ProposedJobsPage > SearchFormInput" element should be equal to "<Keyword>" ignoring case
    Then Text of "ProposedJobsPage > SearchFormLocation" element should be equal to "$First Value" ignoring case
      And Each element of "ProposedJobsPage > SearchResultsPosition" collection should contain "<Keyword>" text
      And Each element of "ProposedJobsPage > SearchResultsLocation" collection should contain "$First Value" text ignoring case

    Examples:
      |  Keyword                             | Country #         | City #    |
      |  Test Automation Engineer            |   5               |  6        |
      |  DevOps Engineer                     |   15              |  3        |
      |  HR                                  |   25              |  3        |

  @proposed-page
  @task
  @negative
  @ticket_06
  Scenario Outline: Verify that after input invalid value into the Input Field at Search form will return error message at Proposed Job
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormInput" element should be in viewport
    When I enter "<Invalid Keyword>" text into "CareersPage > SearchFormInput" element
    When I click "CareersPage > SearchFormFindButton" element
    Then I wait until "ProposedJobsPage > HeaderLogo" element is visible
      And Page URL should contain "/job-listings"
      And Page title should be equal "Job Listings"
      And "ProposedJobsPage > <Message Type>" element should be visible

    Examples:
      |  Invalid Keyword                     | Message Type          |
      |                                      | SearchMessage         |
      |  213                                 | SearchErrorMessage    |
      |  Хочу Быть автоматизатором!!!        | SearchErrorMessage    |
      |  [^0-9]+([0-9]+)[^0-9]+([0-9]+).+    | SearchErrorMessage    |
      |  T E S T E R                         | SearchErrorMessage    |
      |  'HR'                                | SearchErrorMessage    |
      |  *                                   | SearchMessage         |