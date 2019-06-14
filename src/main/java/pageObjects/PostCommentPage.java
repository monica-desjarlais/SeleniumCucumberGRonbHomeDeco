package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//rahulonlinetutor@gmail.com
public class PostCommentPage {

	
	public WebDriver driver;
	
	By featbtn=By.xpath("//div[@class='hfeed']//div[1]//a//img");
	By textarea = By.xpath("//textarea[@id='comment']");
	By name = By.xpath("//input[@id='author'] ");
	By email= By.xpath("//input[@id='email']");
	By submit = By.xpath("//input[@id='submit']");
	By newuser= By.xpath("//cite[@class='fn']");
	
	public PostCommentPage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		
		this.driver=driver;
		
	}
	
	
	public WebElement getNewUser()
	{
			return driver.findElement(newuser);
	}

	public WebElement getName()
	{
			return driver.findElement(name);
	}
	
	public WebElement getEmail()
	{
			return driver.findElement(email);
	}
	
	
	public WebElement getSubmit()
	{
			return driver.findElement(submit);
	}
	
	
	public WebElement getTextarea()
	{
			return driver.findElement(textarea);
	}
	
	

	
	
	public WebElement getFeaturedBtn()
	{
			return driver.findElement(featbtn);
	}
	
	
	

	
		
		
		
	
	
}
