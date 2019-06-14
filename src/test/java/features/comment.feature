@BlogComment
Feature:  Blog Comment Functionality
Scenario Outline: Verify if we can post a comment in the blog
Given Initialize the browser with chrome
And Navigate to "http://ronbhomedeco.xyz/"
And Click on the first blog featured image  
Given User enters <comment> in the comment input
And   User enters <name> in the name input
And   User enters <email> in the email input
When User clicks on Post Comment button
Then The <name> should display first in the comments list
And close browser

Examples:
|comment|name|email| 
|Beautiful|user|user@gmail.com|







