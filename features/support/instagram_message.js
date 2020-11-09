const {Builder, By, Key, until, xpath, timeout, id, click, ENTER} = require("selenium-webdriver");
const {Given, When, Then, defineSupportCode} = require("cucumber");
const { isRegExp } = require("util");
const { access } = require("fs");

const driver = new Builder().forBrowser("chrome").build();

Given('I visit instagram', {timeout: 10 * 1000}, async function() {
    await driver.get("https://www.instagram.com");
});

When('I see log in form', {timeout: 10 * 1000}, async function() {
    const condition = until.elementLocated(By.name('username'));
    await driver.wait(condition);
});

Then('I log in with {string} username and {string} password', async function(user, pass) {
    const username = await driver.findElement(By.name("username"));
    username.sendKeys('user')
    const password = await driver.findElement(By.name("password"));
    password.sendKeys('pass', Key.ENTER);
});

When('I see message button',{timeout:10 *1000}, async function(){
    const condition = until.elementLocated(By.className('xWeGp'));
    await driver.wait(condition);
});

Then('I click in with message icon {string}',{timeout: 10 * 1000}, async function(mesaj){
    const mesajlar = await driver.findElement(By.className('xWeGp')).click();
    
});

When('I see declaration button',{timeout: 10 * 1000}, async function(){
    const condition = until.elementLocated(By.className('aOOlW   HoLwm '));
    await driver.wait(condition);
});

Then('I see button click in with {string}',{timeout: 10 * 1000}, async function(bildirim){
    const bildirimbutonu = await driver.findElement(By.className('aOOlW   HoLwm ')).click();
    
});

When('I see messages', {timeout: 20 * 1000}, async function(){
    const condition = until.elementLocated(By.xpath('//a[contains(@href,"/direct/t/")]'));
    await driver.wait(condition);
});

Then('I see person click in with {string}',{timeout: 10 * 1000}, async function(kisibul){
    const kisisec = await driver.findElement(By.xpath('//a[contains(@href,"/direct/t/")][1]')).click();
});

When('I see message column', {timeout: 10 * 1000}, async function(){
    const condition = until.elementLocated(By.css('.X3a-9 textarea:focus'));
    await driver.wait(condition);
});

Then('I see click message column {string}', {timeout: 10 * 1000}, async function(mesajyaz){
    const mesajgonder = await driver.findElement(By.css('.X3a-9 textarea:focus')).sendKeys('TEST_TEXT',Key.ENTER);
});
