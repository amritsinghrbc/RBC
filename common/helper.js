var helperMethods = module.exports = {

    validateLowestToHighestSortOrder:(browser,xpath)=>{
    browser.useXpath();
    // wait for element to appear
    browser.waitForElementPresent(xpath, 30000, function () {
    // verify the count here
    browser.elements("xpath",xpath, function(result){
        var index =0;
            for(var i in result.value) {
                this.elementIdText(result.value[i].ELEMENT,function(result) {
                        var priceOfFirstItem = result.value;
                        //console.log(priceOfFirstItem)


                });
            }

    });
});
}

}