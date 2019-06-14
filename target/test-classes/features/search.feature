@Search
Feature:  Search Validation
Scenario Outline: Verify the search functionality 
Given Initialize the browser with chrome
And Navigate to "http://ronbhomedeco.xyz/" 
Given Click on Living Rooms menu 
When User enters <query> in the Search box and click the Enter key
Then The first result displayed should contain the <query>
And close browser

Examples:
|query|
|Bedroom|







