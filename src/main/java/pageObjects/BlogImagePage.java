package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//rahulonlinetutor@gmail.com
public class BlogImagePage {

	
	public WebDriver driver;
	
	By featbtn=By.xpath("//div[@class='hfeed']//div[1]//a//img");
	By featimg=By.cssSelector("img[class='single-thumbnail featured']");
	
	
	public BlogImagePage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		
		this.driver=driver;
		
	}


	
	
	public WebElement getFeaturedBtn()
	{
			return driver.findElement(featbtn);
	}
	
	public WebElement getFeaturedImage()
	{
		return driver.findElement(featimg);
	}
	
	

	
		
		
		
	
	
}
