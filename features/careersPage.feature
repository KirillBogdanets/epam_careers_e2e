Feature: Careers Page

  Background:
    Given I wait until "CareersPage > Header" element is visible
    Then I am on Careers page
    And Page URL should contain "/careers"
    And Page title should be equal "Careers"

  @home-page
  @task
  Scenario: Verify that on Careers page I can see Logo in Header and Search Form with all fields
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchForm" element should be in viewport
      And "CareersPage > SearchFormInput" element should be visible
      And "CareersPage > SearchFormLocation" element should be visible
      And "CareersPage > SearchFormSkills" element should be visible
      And "CareersPage > SearchFormFindButton" element should be visible
    When I click "CareersPage > SearchFormLocation" element
    And I wait 2 seconds
    And I click "CareersPage > #2 of SearchFormLocationCountry" element
    And I wait 5 seconds