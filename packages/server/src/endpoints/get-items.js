const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")

const InventoryItem = mongoose.model("InventoryItem")

module.exports = asyncHandler(async (req, res) => {
  const items = await InventoryItem.find(
    req.query.q ? { $text: { $search: req.query.q } } : {}
  )
  res.status(200).send(items)
})
