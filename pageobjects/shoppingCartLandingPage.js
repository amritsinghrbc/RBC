module.exports = {
    elements: {
        productFound: {
            selector: "//*[@class='products-found']",
            locateStrategy: 'xpath',
        },
        imagesLoaded: {
            selector: "//*[@class='shelf-item__thumb']",
            locateStrategy: 'xpath',
        },
        xsSize:{
            selector: "//*[@type='checkbox' and @value='XS']",
            locateStrategy: 'xpath',
        },

        sSize:{
            selector: "//*[@type='checkbox' and @value='S']",
            locateStrategy: 'xpath',
        },

        mSize:{
            selector: "//*[@type='checkbox' and @value='M']",
            locateStrategy: 'xpath',
        },

        mLSize:{
            selector: "//*[@type='checkbox' and @value='ML']",
            locateStrategy: 'xpath',
        },

        lSize:{
            selector: "//*[@type='checkbox' and @value='L']",
            locateStrategy: 'xpath',
        },

        xlSize:{
            selector: "//*[@type='checkbox' and @value='XL']",
            locateStrategy: 'xpath',
        },

        xxlSize:{
            selector: "//*[@type='checkbox' and @value='XXL']",
            locateStrategy: 'xpath',
        },

        addToCartButton:{
            selector: "(//*[@class='shelf-item__buy-btn'])[16]",
            locateStrategy: 'xpath',
        },

        addToCartButtonCatTeeBlack:{
            selector:"//p[contains(text(),'Cat Tee')]/parent::div/child::div[@class='shelf-item__buy-btn']",
            locateStrategy: 'xpath',
        },

        addToCartButtonDarkThug:{
            selector:"//p[contains(text(),'Dark Thug')]/parent::div/child::div[@class='shelf-item__buy-btn']",
            locateStrategy: 'xpath',
        },

        checkOutIcon:{
            selector:"//*[@class='bag bag--float-cart-closed']",
            locateStrategy: 'xpath',
        }
    },

    commands: [{
        visitPage: function(browser) {
            browser.url('https://react-shopping-cart-67954.firebaseapp.com/')
            this.assert.elementPresent('@productFound', 'Product found is displayed to the User')
            .assert.elementPresent('@imagesLoaded', 'Images are displayed to the User')
            .assert.elementPresent('@xsSize', 'XS Small Size Checkbox is Present')
            .assert.elementPresent('@sSize', ' Small Size Checkbox is Present')
            .assert.elementPresent('@mSize', 'Medium Small Size Checkbox is Present')
            .assert.elementPresent('@mLSize', 'Medium Large Small Size Checkbox is Present')
            .assert.elementPresent('@lSize', 'Large Size Checkbox is Present')
            .assert.elementPresent('@xlSize', 'Xtra Large Small Size Checkbox is Present')
            .assert.elementPresent('@xxlSize', 'XXL  Size Checkbox is Present')
            .assert.elementPresent('@addToCartButton', 'addToCartButton is Present')
        },

        addItemToCart: function(browser,diff) {
            if(diff==true){
                this.click('@addToCartButtonCatTeeBlack',function(){
                    console.log("Button addItemToCart is Clicked")
                })

                this.click('@addToCartButtonDarkThug',function(){
                    console.log("Button addItemToCart is Clicked")
                })

            }
            else{
                this.click('@addToCartButtonCatTeeBlack',function(){
                    console.log("Button addItemToCart is Clicked")
                })
            }


        },

        goToCheckOutPage :function (browser) {
            this.click('@checkOutIcon',function(){
                console.log("Button checkOutIcon is Clicked")
            })
        }

    }]
};
