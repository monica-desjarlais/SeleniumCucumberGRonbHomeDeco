package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.PostCommentPage;
import resources.base;

public class PostCommentStepDefinition extends base {

	// page objects
     PostCommentPage pc = new PostCommentPage(driver);
	

	 
	    @Given("^User enters (.+) in the comment input$")
	    public void user_enters_in_the_comment_input(String comment) throws Throwable {
	    	pc.getTextarea().clear();
	    	pc.getTextarea().sendKeys(comment);
	    	pc.getTextarea().sendKeys(Keys.TAB);
	    }

	    @When("^User clicks on Post Comment button$")
	    public void user_clicks_on_post_comment_button() throws Throwable {
	    	pc.getSubmit().click();
	       
	    }

	    @Then("^The (.+) should display first in the comments list$")
	    public void the_should_display_first_in_the_comments_list(String name) throws Throwable {
	    	
			//WebDriverWait d = new WebDriverWait(driver, 10);
			//d.until(ExpectedConditions.urlToBe("http://ronbhomedeco.xyz/wp-comments-post.php"));
			
			String n = name;
			String nl = n.toLowerCase();
			String nu = n.toUpperCase();
			String display= pc.getNewUser().getText();		

			if(display.contains(nl) || display.contains(nu) ) {
				
				System.out.println("The comment of " + name + "is displayed");
			}
			
			else {
				
				System.out.println("The comment of " + name + "is not displayed");
				
			}
	        
	    }
  

	    @And("^Click on the first blog featured image  $")
	    public void click_on_the_first_blog_featured_image() throws Throwable {
	       pc.getFeaturedBtn().click();
	    }

	    @And("^User enters (.+) in the name input$")
	    public void user_enters_in_the_name_input(String name) throws Throwable {
	    	pc.getName().clear();
	        pc.getName().sendKeys(name);
	        pc.getName().sendKeys(Keys.TAB);
	    }

	    @And("^User enters (.+) in the email input$")
	    public void user_enters_in_the_email_input(String email) throws Throwable {
	    	pc.getEmail().clear();
	        pc.getEmail().sendKeys(email);
	    }

	  

}


