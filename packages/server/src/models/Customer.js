const mongoose = require("mongoose")
const { Schema } = mongoose

const CustomerSchema = new Schema()
CustomerSchema.add({
  email: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  city: { type: String },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  stripeCustomerId: {
    type: String,
  },
  stripePaymentMethodId: {
    type: String,
  },
})

mongoose.model("Customer", CustomerSchema)
