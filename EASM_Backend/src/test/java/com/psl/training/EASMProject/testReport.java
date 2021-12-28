package com.psl.training.EASMProject;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class testReport {
	
	WebDriver driver;
	
	@BeforeTest
	public void driverSetup() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mira_andhale\\Documents\\workspace-spring-tool-suite-4-4.13.0.RELEASE\\Group5_MiniProject_EASM-master (1).zip_expanded\\Group5_MiniProject_EASM-master\\EASMProject\\drivers\\chromedriver.exe"); WebDriver driver = new ChromeDriver();
		String baseUrl = "http://localhost:4200/";
		System.out.println("Opening the site");
		driver = new ChromeDriver();
		driver.get(baseUrl);
		driver.manage().window().maximize();
		String testTitle = "Employee Assessment Score Management";
		String originalTitle = driver.getTitle();
		Assert.assertEquals(originalTitle, testTitle);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Test
	public void signUp() {
		
		driver.findElement(By.name("adminId")).sendKeys("1234556");
		driver.findElement(By.name("firstname")).sendKeys("ABCD");
		driver.findElement(By.name("lastname")).sendKeys("EFGH");
		driver.findElement(By.name("emailId")).sendKeys("ABCD@gmail.com");
		driver.findElement(By.name("password")).sendKeys("12345678");
		driver.findElement(By.id("signup")).click();
		
		
	}

}

