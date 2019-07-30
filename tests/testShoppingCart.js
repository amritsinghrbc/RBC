const helperFunction = require("../common/helper");

module.exports = {
  'Demo RBC Shopping Cart Landing Page' : function (client) {
    client
      .page.shoppingCartLandingPage().visitPage(client);
      client.end()
  },

    'Verify checkout Page is Displayed Successfully' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.shoppingCartLandingPage().goToCheckOutPage(client)
        client.page.checkoutPage().isDisplayed(client)
        client.end()
    },

    'Verify items are added to the cart successfully' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.checkoutPage().verifyBagQuantity(client,'0')
        client.page.shoppingCartLandingPage().addItemToCart(client)
        client.page.shoppingCartLandingPage().addItemToCart(client)
        client.page.shoppingCartLandingPage().addItemToCart(client)
        client.page.checkoutPage().verifyBagQuantity(client,'3')
        client.page.checkoutPage().isDisplayed(client)
        client.page.checkoutPage().verifySubTotalPrice(client,'$ 32.70')
        client.page.checkoutPage().closeCheckOutPage(client)
        client.end()
    },

    'Verify that Items can be deleted from the cart successfully' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.shoppingCartLandingPage().addItemToCart(client)
        client.page.shoppingCartLandingPage().addItemToCart(client,true)
        client.page.shoppingCartLandingPage().addItemToCart(client,true)
        client.page.checkoutPage().verifyBagQuantity(client,'5')
        client.page.checkoutPage().isDisplayed(client)
        client.page.checkoutPage().removeItemsFromCart(client)
        client.page.checkoutPage().verifyBagQuantity(client,'2')
        client.page.checkoutPage().closeCheckOutPage(client)
        client.end()

    },

    'Verify that Items can be filtered out using Small Sizes' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.shoppingCartLandingPage().selectASize(client,"S")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'2 Product(s) found.')
        client.page.shoppingCartLandingPage().selectASize(client,"S")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'16 Product(s) found.')
        client.pause(5000)

        client.end()

    },

    'Verify that Items can be filtered out using Large Sizes' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.shoppingCartLandingPage().selectASize(client,"L")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'10 Product(s) found.')
        client.page.shoppingCartLandingPage().selectASize(client,"L")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'16 Product(s) found.')
        client.pause(5000)

        client.end()

    },

    'Verify that Items can be filtered out using XLarge Sizes' : function (client) {
        client.page.shoppingCartLandingPage().visitPage(client)
        client.page.shoppingCartLandingPage().selectASize(client,"XL")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'10 Product(s) found.')
        client.page.shoppingCartLandingPage().selectASize(client,"XL")
        client.pause(2000)
        client.page.shoppingCartLandingPage().verifyNumberOfProductsFound(client,'16 Product(s) found.')
        client.pause(5000)

        client.end()

    },






}