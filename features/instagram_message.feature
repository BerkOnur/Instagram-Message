Feature: instagram

    Scenario: Finding some cheese
        Given I visit instagram
        When I see log in form
        Then I log in with "USERNAME" username and "PASSWORD" password
        When I see message button
        Then I click in with message icon "xWeGp"
        When I see declaration button
        Then I see button click in with "aOOlW   HoLwm "
        When I see messages
        Then I see person click in with "2"
        When I see message column
        Then I see click message column ".X3a-9 textarea:focus"

        