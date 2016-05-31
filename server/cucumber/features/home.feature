Feature: Visit home page
    As a user
    I want to visit the home page

    Scenario: Visit index page
        Given I am on the homepage
        Then the title should equal "Angular end-to-end"
