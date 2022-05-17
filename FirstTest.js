const {By,Key, Builder} = require("selenium-webdriver");
require('geckodriver');

async function example(){
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://demo.guru99.com/test/login.html");

    //text
    await driver.findElement(By.id('email')).sendKeys('Vijay@gmail.com');

    //radio
    await driver.findElement(By.id('passwd')).sendKeys('Vijay');

    await driver.findElement(By.id('SubmitLogin')).click();

    driver.sleep(2000);

    //await driver.quit();

}

example();