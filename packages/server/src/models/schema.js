const mongoose = require("mongoose")
const { Schema } = mongoose

const CustomerSchema = new Schema()
CustomerSchema.add({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
})

const CartSchema = new Schema()
CartSchema.add({})

const PurchaseItemSchema = new Schema()
PurchaseItemSchema.add({})

mongoose.model("Customer", CustomerSchema)
mongoose.model("Cart", CartSchema)
mongoose.model("PurchaseItem", PurchaseItemSchema)
