Feature: Filter Items

As a user I want to filter items by catagories

Scenario Outline: User filter items by "Price - low to high"
Given I am on the login page
When I login with <username> and <password>
When I apply the filter "Price (low to high)"
Then The product should be sorted by price in ascending order
When I logout of the application
Then I should be logged out

Examples:
    |username       | password      |
    |standard_user  | secret_sauce  |
