const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const Stripe = require("stripe")

const Customer = mongoose.model("Customer")
const stripe = Stripe(process.env.STRIPE_SK)

module.exports = asyncHandler(async (req, res) => {
  const { customerId, totalCost } = req.body

  const customer = await Customer.findById(customerId)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.floor(totalCost * 100),
    currency: "USD",
    customer: customer.stripeCustomerId,
    payment_method: customer.stripePaymentMethodId,
  })

  res.status(200).send(paymentIntent)
})
