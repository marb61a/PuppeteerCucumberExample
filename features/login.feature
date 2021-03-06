Feature: Login
    As a user
    I can login to application

    Scenario: User can login to application
        Given I open login page
        When I fill in login form
        And I click on the submit button
        Then I expect to see application content
