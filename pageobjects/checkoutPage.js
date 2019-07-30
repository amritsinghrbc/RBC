module.exports = {
    elements: {
        bagQuantity: {
            selector: "//*[@class='bag__quantity']",
            locateStrategy: 'xpath',
        },

        numOfItemsInTheCart:{
            selector:"//*[@class='float-cart__shelf-container']/div",
            locateStrategy:'xpath'
        },

        checkoutButton:{
            selector:"//*[@class='buy-btn']",
            locateStrategy:'xpath'
        },

        subTotal:{
            selector:"//*[@class='sub-price__val']",
            locateStrategy:'xpath'
        },

        closeButton:{
            selector:"//*[@class='float-cart__close-btn']",
            locateStrategy:'xpath'
        },

        checkOutIconClosed:{
            selector:"//*[@class='bag bag--float-cart-closed']",
            locateStrategy: 'xpath',
        },

        removeItems:{
            selector:"//*[@class='shelf-item__del']",
            locateStrategy: 'xpath',
        }



    },

    commands: [{
        isDisplayed: function(browser) {
            this.assert.elementPresent('@checkoutButton', 'check out Button is Present')
            this.assert.elementPresent('@closeButton', 'Close Button Button is Present')
            this.assert.elementPresent('@subTotal', 'Sub Total Button is Present')
        },

        verifyBagQuantity:function(browser,expectedValue){
            this.expect.element('@bagQuantity').text.to.equal(expectedValue)
        },

        verifySubTotalPrice:function(browser,expectedValue){
            this.expect.element('@subTotal').text.to.equal(expectedValue)
        },

        closeCheckOutPage:function(browser){
            this.click('@closeButton',function(){
                console.log("close Button is Clicked")
                browser.pause(5000)
            })
            this.assert.elementPresent('@checkOutIconClosed','checkOutIconClosed is present')
        },

        removeItemsFromCart:function(browser){
            this.click('@removeItems',function(){
                console.log("remove Item Button is Clicked")
            })
        }




    }]
};
