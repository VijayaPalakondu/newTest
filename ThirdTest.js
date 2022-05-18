const { until } = require('selenium-webdriver');
const {Builder, By, Key} = require('selenium-webdriver');
require('geckodriver');
//Click on checkbox and radiobutton
//Enter text, click and verify
//Context click

(async function test(){
    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get("https://www.flipkart.com/");

    await driver.findElement(By.xpath("//*[contains(@class, '_2KpZ6l _2doB4z')]")).click();

    await driver.findElement(By.xpath("//*[contains(@src, '22fddf3c7da4c4f4')]")).click();

    //the belwo method is not working 
    //await driver.findElement(By.xpath("//*[@class='_3YgSsQ']/div/a/div/img[contains(@src,'0f46b1ccbe7d0620')]")).click();
    driver.sleep(3000);
    driver.findElement(By.xpath("//input[@name='q']")).sendKeys("POCO", Key.ENTER);

    // await driver.manage().setTimeouts( { implicit: 5000 } ,()=>{
    //     driver.findElement(By.xpath("//div[contains(text(), 'POCO C31 (Royal Blue, 32'  )]")).click();
    // });
    //await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'POCO C31 (Royal Blue, 32'  )]")),30000);
    await driver.findElement(By.xpath("//div[contains(text(), 'POCO C31 (Royal Blue, 32'  )]")).click();

    await driver.wait(until.elementLocated(By.xpath("//input[@id='pincodeInputId']")),30000);
    await driver.findElement(By.xpath("//input[@id='pincodeInputId']")).sendKeys('516227' , Key.ENTER);
    
})();