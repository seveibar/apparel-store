const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const Stripe = require("stripe")

const Customer = mongoose.model("Customer")
const stripe = Stripe(process.env.STRIPE_SK)

module.exports = asyncHandler(async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    state,
    zip,
    phone,

    paymentMethodId,
  } = req.body

  if (phone) {
    phone = phone.replace(/[^0-9]/g, "")
    if (phone.length === 10) {
      phone = "+1 " + phone
    }
  }

  if (!firstName) return res.status(400).send("firstName is required")
  if (!lastName) return res.status(400).send("lastName is required")
  if (!email) return res.status(400).send("email is required")
  if (!streetAddress) return res.status(400).send("streetAddress is required")
  if (!city) return res.status(400).send("city is required")
  if (!state) return res.status(400).send("state is required")
  if (!zip) return res.status(400).send("zip is required")

  // TODO validate paymentMethod

  // TODO/NOTE: You would normally want a sign-in system to validate that we're
  // allowed to use this customer's data!!
  let customer = await Customer.findOne({ email })

  if (!customer) {
    // Create Customer

    let stripeCustomer
    try {
      stripeCustomer = await stripe.customers.create({
        name: firstName + " " + lastName,
        email,
        shipping: {
          address: {
            city,
            country: "US",
            line1: streetAddress,
            postal_code: zip,
            state,
          },
          name: firstName + " " + lastName,
          phone,
        },
        payment_method: paymentMethodId,
      })
    } catch (e) {
      if (!e.status) throw e
      return res
        .status(e.response.status)
        .send(`Stripe Error with code: ${e.response.statusText}`)
    }

    customer = new Customer({
      firstName,
      lastName,
      email,
      streetAddress,
      state,
      city,
      zip,
      stripeCustomerId: stripeCustomer.id,
      stripePaymentMethodId: paymentMethodId,
    })

    await customer.save()
  }

  res.status(200).send(customer)
})
