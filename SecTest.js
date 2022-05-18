const { Builder, By , Key } = require('selenium-webdriver');
require('geckodriver')

async function testing(){
    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://demo.guru99.com/test/upload/');

    let upload = await driver.findElement(By.xpath("//input[@class='upload_txt']"))

    upload.sendKeys('/Users/vijaybhaskarreddy/Desktop/Screenshot 2022.png');
    console.log('File uploaded successfully ');

    await driver.findElement(By.xpath("//input[@class='field_check']")).click();

    await driver.findElement(By.xpath("//button[@id='submitbutton']")).click();

    console.log('submitted successfully');
}

testing()