"use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const {By, key, until } = require("selenium-webdriver");
const chai = require("chai");
const HomePage = require("../pages/home.page");
const assert = chai.assert;
const expect = chai.expect;

describe("shop.QA.rs test", function(){
    let driver;
    let pageHomepage;
    
    before(function(){
        driver = new webdriver.Builder().forBrowser("chrome").build();
        pageHomepage = new HomePage(driver);
    });

    after(async function(){
        await driver.quit();
    });

    beforeEach(function(){

    });

    afterEach(function(){

    });

    it("Verify homepage is open", async function(){
            await pageHomepage.goToPage();
            const pageTitle = await pageHomepage.getPageHeaderTitle();
            expect(pageTitle).to.contain("(QA) Shop");
            await driver.sleep(3000);

            
            expect(await pageHomepage.isBugListDivDisplayed()).to.be.true;
    });
});

