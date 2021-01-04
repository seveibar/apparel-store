const mongoose = require("mongoose")
const { Schema } = mongoose

const InventoryItemSchema = new Schema({
  title: {
    type: String,
    index: true,
    unique: true,
  },
  imageSrc: {
    type: String,
  },
  price: {
    type: Number,
  },
})

InventoryItemSchema.index({
  title: "text",
})

mongoose.model("InventoryItem", InventoryItemSchema)
