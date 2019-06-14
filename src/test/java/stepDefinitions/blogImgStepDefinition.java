package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.BlogImagePage;
import pageObjects.SearchPage;
import resources.base;

public class blogImgStepDefinition extends base {

	// page objects

	BlogImagePage bi = new BlogImagePage(driver);

	

	@When("^Click on the first blog featured image$")
	public void click_on_the_first_blog_featured_image() throws Throwable {
    	bi.getFeaturedBtn().click();
        
    }

    @Then("^The image is displayed in the blog post page$")
    public void the_image_is_displayed_in_the_blog_post_page() throws Throwable {
     
    	Assert.assertTrue(bi.getFeaturedImage().isDisplayed());
    }

   

}


