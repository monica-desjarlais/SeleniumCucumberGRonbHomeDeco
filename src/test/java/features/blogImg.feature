@blogImage
Feature:  Check Blog Image 
Scenario: Verify if the image is displayed for the first blog post
Given Initialize the browser with chrome
And Navigate to "http://ronbhomedeco.xyz/" 
When Click on the first blog featured image 
Then The image is displayed in the blog post page
And close browser








