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

    }




}