Feature: Login to demo site

 Scenario Outline: As a user, I can not login with invalid credentials
   Given I am on the login page
   When I login with <username> and <password>
   Then I should see error message

   Examples:
   |username      | password      |   
   |test          | testpass      |

  Scenario Outline: Login with valid credentials
    Given I am on the login page
    When I login with <username> and <password>
    Then I am on the home page
    When I logout of the application
    Then I should be logged out

    Examples:
    |username       | password      |
    |standard_user  | secret_sauce  |
    |problem_user   | secret_sauce  |

   