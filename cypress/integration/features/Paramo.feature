Feature: Paramo Technologies

  I want to work with you
  
  @focus  
  Scenario Outline: User Registration
    Given I open Demo.Casino page on the Browser
    When I press on SingUp button
    And I complete field Email "<Email>"
    And I complete field Password "<Password>"
    And I agree terms & conditions
    And I select question 
    And I complete field Login "<Login>"
    And I create account
    Then I register the new User

  Examples:
    | Email                       | Password  | Login           |
    | rioseconicolas@paramo.com   | Password1 | RiosecoNicolas  |
    | rioseconicolas2@paramo.com  | Password2 | RiosecoNicolas2 |
 

  Scenario Outline: Login
    Given I open Demo.Casino page on the Browser
    When I press on SingIn button
    And I complete my "<Username>" and my "<Password>"
    And I press on SignIn
    Then I logged in

  Examples:
    | Username        | Password  |
    | RiosecoNicolas  | Password1 |
