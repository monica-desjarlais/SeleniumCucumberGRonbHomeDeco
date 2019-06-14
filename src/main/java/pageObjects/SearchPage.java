package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//rahulonlinetutor@gmail.com
public class SearchPage {

	
	public WebDriver driver;
	
	By livingbtn=By.xpath("//a[contains(text(),'Living Rooms')]");
	By search=By.xpath("//input[@name='s']");
	By result = By.xpath("//div[@class='hfeed']//div[1]//h2//a");
	
	
	public SearchPage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		
		this.driver=driver;
		
	}


	
	//public WebElement getSearchBox()
	//{
		//return driver.findElement(searchBox);
	//}
	
	public WebElement getLivingBtn()
	{
			return driver.findElement(livingbtn);
	}
	
	public WebElement getSearch()
	{
		return driver.findElement(search);
	}
	
	
	public WebElement getResult()
	{
		return driver.findElement(result);
	}
	
	
		
		
		
	
	
}
