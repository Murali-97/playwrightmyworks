Feature: Cookies feature in the creatio CRM application
As a user of the creatio CRM application, I want to verify all the validation related to cookies


Scenario: verify that the cookies popup is launched when the user opens the application for the first time
    Given Launch the ceatio CRM application
    Then cookies popup should be displayed

  Scenario: Verify the cookies popup content
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the content of the cookies popup
            """
            We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes. We also may share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. Please, see more details on the \"About\" tab
            """