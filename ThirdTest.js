const {Builder, By, Key} = require('selenium-webdriver');
require('geckodriver');
//Click on checkbox and radiobutton
//Enter text, click and verify
//Context click

(async function test(){
    let driver = await new Builder().forBrowser('firefox').build();

    driver.get("https://www.flipkart.com/");

    driver.findElement(By.xpath("//*[contains(@class, '_2KpZ6l _2doB4z')]")).click();

    driver.findElement(By.xpath("//*[contains(@src, '22fddf3c7da4c4f4')]")).click();

    driver.findElement(By.xpath("//*[@class='_3879cV' or contains(text(), 'realme')]")).click();

    //driver.findElement(By.xpath("//*[contains(@title, 'POCO')]")).click();
})();