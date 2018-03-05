Feature: Careers Page

  Background:
    Given I wait until "CareersPage > Header" element is visible
    Then Page URL should contain "/careers"
    And Page title should be equal "Careers"

  @career-page
  @task
  @ticket_01
  @mobile
  Scenario: Verify that on Careers page I can see Logo in Header and Search Form with all fields
    Given "CareersPage > HeaderLogo" element should be visible
    When "CareersPage > SearchForm" element should be in viewport
    Then "CareersPage > SearchFormInput" element should be visible
      And "CareersPage > SearchFormLocation" element should be visible
      And "CareersPage > SearchFormSkills" element should be visible
      And "CareersPage > SearchFormFindButton" element should be visible
      And Location dropdown should not be expanded
      And Skills dropdown should not be expanded
      And "CareersPage > SelectedScills" element should not be visible

  @career-page
  @task
  @ticket_02
  @mobile
  Scenario Outline: Verify that on Careers page after clicking on Location Field on Search Form I can see dropdown
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormLocation" element should be in viewport
    When I click "CareersPage > SearchFormLocation" element
    Then "CareersPage > SearchFormLocationDropdown" element should be visible
      And Location dropdown should be expanded
      And Text of "CareersPage > SearchFormLocationHighlightedElement" element should be equal to "<Highlighted text>"
    When I click "CareersPage > #<Country #> of SearchFormLocationCountry" element
    Then "CareersPage > #<City #> of SearchFormLocationCity" element should be visible
    And I remember text of "CareersPage > #<City #> of SearchFormLocationCity" element as "First Value"
      And I click "CareersPage > #<City #> of SearchFormLocationCity" element  
    Then "CareersPage > SearchFormLocationDropdown" element should not be visible
      And Location dropdown should not be expanded
    Then I remember text of "CareersPage > SearchFormLocation" element as "Second Value"
      And Remembered text as "First Value" should be equal to "Second Value"
    When I click "CareersPage > SearchFormLocation" element
    Then I remember text of "CareersPage > SearchFormLocationHighlightedElement" element as "Third Value"
      And Remembered text as "Third Value" should be equal to "First Value"

  Examples:
    | Highlighted text | Country #  | City # |
    |  All Locations   |  5         |  5     | 
    |  All Locations   |  13        |  2     |
    |  All Locations   |  10        |  2     |
    |  All Locations   |  8         |  3     |
    |  All Locations   |  6         |  3     |
    |  All Locations   |  3         |  2     |

  @career-page
  @task
  @ticket_03
  @mobile
  Scenario Outline: Verify that on Careers page after clicking on Skills Field on Search Form I can see dropdown and check some primery skills
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormSkills" element should be in viewport
      And I scroll to the "CareersPage > SearchFormLocation" element
    When I click "CareersPage > SearchFormSkills" element
    Then "CareersPage > SearchFormSkillsDropdown" element should be visible
      And Skills dropdown should be expanded
    When I click "CareersPage > #<First Skill #> of SearchFormSkillsDropdownElements" element
    Then I click "CareersPage > #<Second Skill #> of SearchFormSkillsDropdownElements" element
      And I click "CareersPage > #<Third Skill #> of SearchFormSkillsDropdownElements" element
    Then Text of "CareersPage > SearchFormSkillsSelectedCounter" element should be equal to "3"
      And I remember text of "CareersPage > #<First Skill #> of SearchFormSkillsDropdownElements" element as "First Value"
      And I remember text of "CareersPage > #<Second Skill #> of SearchFormSkillsDropdownElements" element as "Second Value"
      And I remember text of "CareersPage > #<Third Skill #> of SearchFormSkillsDropdownElements" element as "Third Value"
    When I click "CareersPage > SearchFormSkills" element
    Then "CareersPage > SearchFormSkillsDropdown" element should not be visible
      And Skills dropdown should not be expanded
    Then Text of "CareersPage > #1 of SelectedScills" element should be equal to "$First Value" ignoring case
      And Text of "CareersPage > #2 of SelectedScills" element should be equal to "$Second Value" ignoring case
      And Text of "CareersPage > #3 of SelectedScills" element should be equal to "$Third Value" ignoring case
    When I click "CareersPage > #1 of SelectedSkillsRemoveButton" element
    Then Text of "CareersPage > SearchFormSkillsSelectedCounter" element should be equal to "2"
      And Count of "CareersPage > SelectedScills" elements should be equal 2

  Examples:
    | First Skill #    | Second Skill #    | Third Skill #    | 
    |  5               |   1               |  12              |
    |  13              |   2               |  4               |
    |  10              |   7               |  9               |

  @proposed-page
  @task
  @negative
  @ticket_07
  Scenario Outline: Verify that after adding invalid value into the page url 404 page with error message will opened
    Given "CareersPage > HeaderLogo" element should be visible
    Then "CareersPage > SearchFormInput" element should be in viewport
    When I remember page url as "Url"
    Then I add "<Invalid Value>" after "<Place In URL>" into the remembered url "$Url"
    When I open "$Url" url
    Then I wait until "ErrorPage > ErrorMessage" element is visible
      And "ErrorPage > HomeLink" element should be visible
      And Page URL should contain "/404"
      And Page title should be equal "Error 404"
    Then Text of "ErrorPage > ErrorMessage" element should be equal to "Oops, the page you're looking for cannot be found. "

    Examples:
      |  Invalid Value                       | Place In URL          |
      |  ss                                  | /careers              |
      |  *                                   | /careers              |
      |  212                                 | com/                  |



