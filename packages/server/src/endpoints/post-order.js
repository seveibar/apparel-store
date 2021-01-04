const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const Stripe = require("stripe")

const Customer = mongoose.model("Customer")
const Order = mongoose.model("Order")
const stripe = Stripe(process.env.STRIPE_SK)

module.exports = asyncHandler(async (req, res) => {
  // TODO validate totalCost against database inventory items
  //   let stripeCharge
  //   try {
  //   stripeCharge = await stripe.charges.create({
  //     amount: ,
  //     currency: "usd",
  //     source:
  //   })
  // } catch (e) {
  //   return res
  //   .status(e.response.status)
  //   .send(`Stripe Error with code: ${e.response.statusText}`)
  // }
})
