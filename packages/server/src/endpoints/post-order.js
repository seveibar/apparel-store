const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const stripe = require("stripe")(process.env.STRIPE_SK)

const Customer = mongoose.model("Customer")
const Order = mongoose.model("Order")

module.exports = asyncHandler(async (req, res) => {
  // TODO auth, validate customer
  // TODO validate totalCost against database inventory items
  const { customerId, totalCost, items, paymentIntentId } = req.body

  const customer = await Customer.findById(customerId)

  if (!customer) return res.status(404).send("Customer not found")

  const amountToChargeCents = Math.floor(totalCost * 100)

  let paymentIntent
  try {
    paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId)
  } catch (e) {
    if (!e.response) throw e
    return res
      .status(e.response.status)
      .send(`Stripe Error with code: ${e.response.statusText}`)
  }

  const order = new Order({
    customerId: customerId,
    stripePaymentIntentId: paymentIntentId,
    totalCostCents: amountToChargeCents,
    items,
  })

  await order.save()

  res.status(200).send(order)
})
