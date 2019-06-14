$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("blogImg.feature");
formatter.feature({
  "line": 2,
  "name": "Check Blog Image",
  "description": "",
  "id": "check-blog-image",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@blogImage"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Verify if the image is displayed for the first blog post",
  "description": "",
  "id": "check-blog-image;verify-if-the-image-is-displayed-for-the-first-blog-post",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://ronbhomedeco.xyz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on the first blog featured image",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The image is displayed in the blog post page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 9845026029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ronbhomedeco.xyz/",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 5612014098,
  "status": "passed"
});
formatter.match({
  "location": "blogImgStepDefinition.click_on_the_first_blog_featured_image()"
});
formatter.result({
  "duration": 2540280776,
  "status": "passed"
});
formatter.match({
  "location": "blogImgStepDefinition.the_image_is_displayed_in_the_blog_post_page()"
});
formatter.result({
  "duration": 389911157,
  "status": "passed"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "duration": 4728304568,
  "status": "passed"
});
formatter.uri("comment.feature");
formatter.feature({
  "line": 2,
  "name": "Blog Comment Functionality",
  "description": "",
  "id": "blog-comment-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BlogComment"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify if we can post a comment in the blog",
  "description": "",
  "id": "blog-comment-functionality;verify-if-we-can-post-a-comment-in-the-blog",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://ronbhomedeco.xyz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on the first blog featured image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003ccomment\u003e in the comment input",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \u003cname\u003e in the name input",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \u003cemail\u003e in the email input",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Post Comment button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The \u003cname\u003e should display first in the comments list",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "blog-comment-functionality;verify-if-we-can-post-a-comment-in-the-blog;",
  "rows": [
    {
      "cells": [
        "comment",
        "name",
        "email"
      ],
      "line": 15,
      "id": "blog-comment-functionality;verify-if-we-can-post-a-comment-in-the-blog;;1"
    },
    {
      "cells": [
        "Beautiful",
        "usrtest",
        "tstuser@gmail.com"
      ],
      "line": 16,
      "id": "blog-comment-functionality;verify-if-we-can-post-a-comment-in-the-blog;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify if we can post a comment in the blog",
  "description": "",
  "id": "blog-comment-functionality;verify-if-we-can-post-a-comment-in-the-blog;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BlogComment"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://ronbhomedeco.xyz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on the first blog featured image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Beautiful in the comment input",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters usrtest in the name input",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters tstuser@gmail.com in the email input",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Post Comment button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The usrtest should display first in the comments list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 6094114907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ronbhomedeco.xyz/",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 8993696940,
  "status": "passed"
});
formatter.match({
  "location": "blogImgStepDefinition.click_on_the_first_blog_featured_image()"
});
formatter.result({
  "duration": 3106655511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beautiful",
      "offset": 12
    }
  ],
  "location": "PostCommentStepDefinition.user_enters_in_the_comment_input(String)"
});
formatter.result({
  "duration": 2308459204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usrtest",
      "offset": 12
    }
  ],
  "location": "PostCommentStepDefinition.user_enters_in_the_name_input(String)"
});
formatter.result({
  "duration": 952661138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tstuser@gmail.com",
      "offset": 12
    }
  ],
  "location": "PostCommentStepDefinition.user_enters_in_the_email_input(String)"
});
formatter.result({
  "duration": 1366390521,
  "status": "passed"
});
formatter.match({
  "location": "PostCommentStepDefinition.user_clicks_on_post_comment_button()"
});
formatter.result({
  "duration": 2434720901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usrtest",
      "offset": 4
    }
  ],
  "location": "PostCommentStepDefinition.the_should_display_first_in_the_comments_list(String)"
});
formatter.result({
  "duration": 428462835,
  "status": "passed"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "duration": 1974015764,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Validation",
  "description": "",
  "id": "search-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the search functionality",
  "description": "",
  "id": "search-validation;verify-the-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://ronbhomedeco.xyz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Living Rooms menu",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cquery\u003e in the Search box and click the Enter key",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The first result displayed should contain the \u003cquery\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-validation;verify-the-search-functionality;",
  "rows": [
    {
      "cells": [
        "query"
      ],
      "line": 12,
      "id": "search-validation;verify-the-search-functionality;;1"
    },
    {
      "cells": [
        "Bedroom"
      ],
      "line": 13,
      "id": "search-validation;verify-the-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the search functionality",
  "description": "",
  "id": "search-validation;verify-the-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://ronbhomedeco.xyz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Living Rooms menu",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters Bedroom in the Search box and click the Enter key",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The first result displayed should contain the Bedroom",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 4741986588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ronbhomedeco.xyz/",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 6412928969,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.click_on_Living_Rooms_menu()"
});
formatter.result({
  "duration": 2731006556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bedroom",
      "offset": 12
    }
  ],
  "location": "SearchStepDefinition.user_enters_in_the_search_box_and_click_the_enter_key(String)"
});
formatter.result({
  "duration": 1681839531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bedroom",
      "offset": 46
    }
  ],
  "location": "SearchStepDefinition.the_first_result_displayed_should_contain_the(String)"
});
formatter.result({
  "duration": 185143407,
  "status": "passed"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "duration": 1738841769,
  "status": "passed"
});
});