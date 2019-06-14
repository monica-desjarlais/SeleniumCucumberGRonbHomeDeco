package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.SearchPage;
import resources.base;

public class SearchStepDefinition extends base {

	// page objects

	SearchPage sp = new SearchPage(driver);

	@Given("^Click on Living Rooms menu$")
	public void click_on_Living_Rooms_menu() throws Throwable {

		sp.getLivingBtn().click();

	}

	@When("^User enters (.+) in the Search box and click the Enter key$")
	public void user_enters_in_the_search_box_and_click_the_enter_key(String query) throws Throwable {

		sp.getSearch().sendKeys(query);
		sp.getSearch().sendKeys(Keys.ENTER);

	}

	@Then("^The first result displayed should contain the (.+)$")
	public void the_first_result_displayed_should_contain_the(String query) throws Throwable {

		String s = query;
		String ql = s.toLowerCase();
		String qu = s.toUpperCase();

		String result = sp.getResult().getText();

		if(result.contains(ql) || result.contains(qu) ) {

		System.out.println(result);
		
		}
		
		else {
			System.out.println(query+ " wasn't found in the first search result " );
		}

	}

}
