const http = require("http")
const test = require("ava")
const listen = require("test-listen")
const mongoose = require("mongoose")
require("../src/models")
const getApp = require("../src/app")
const connectToTempDatabase = require("./connect-to-temp-database")
const axios = require("axios")
const stripe = require("stripe")(process.env.STRIPE_SK)

const InventoryItem = mongoose.model("InventoryItem")

test.serial("create customer test", async (t) => {
  await connectToTempDatabase(async () => {
    let url = await listen(http.createServer(getApp()))
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number: "4242424242424242",
        exp_month: 1,
        exp_year: 2030,
        cvc: "123",
      },
    })
    const { data: resData } = await axios.post(`${url}/api/customer`, {
      firstName: "Jane",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      state: "New York",
      city: "Brockport",
      zip: 14420,
      streetAddress: "123 Main Street",
      paymentMethodId: paymentMethod.id,
    })
    t.truthy(resData._id)
    t.truthy(resData.stripeCustomerId)
    t.truthy(resData.stripePaymentMethodId)
  })
})
