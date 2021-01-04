const mongoose = require("mongoose")
const { Schema } = mongoose

const OrderSchema = new Schema()
OrderSchema.add({
  totalCost: { type: Number },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  items: {
    type: Array,
  },
})

mongoose.model("Order", OrderSchema)
