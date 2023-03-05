'use strict';

const { By } = require("selenium-webdriver");

module.exports = class HomePage{
    #driver;

    constructor(webdriver){
        this.#driver = webdriver;
    }

    goToPage(){
        this.#driver.get("http://shop.qa.rs/");
    }

    getPageHeaderTitle(){
       return this.#driver.findElement(By.css('h1')).getText();
    }

    isBugListDivDisplayed(){

        return this.#driver.findElement(
            By.xpath(
                '//*[@class="row" and contains(., "ORDER YOUR BUGS TODAY")]'
            )).isDisplayed();
    }
}