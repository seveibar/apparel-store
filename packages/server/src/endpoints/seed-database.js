const fs = require("fs")
const Papa = require("papaparse")
const pathToApparelCSV = require.resolve("../assets/apparel.csv")
const apparelCSV = fs.readFileSync(pathToApparelCSV).toString()
const apparelItems = Papa.parse(apparelCSV, { header: true })
const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")

const InventoryItem = mongoose.model("InventoryItem")

const prices = [4.99, 9.99, 12.99, 15.99, 19.99]

module.exports = asyncHandler(async (req, res) => {
  for (let i = 0; i < apparelItems.data.length; i++) {
    const item = apparelItems.data[i]
    const title = item["Title"]
    const imageSrc = item["Image Src"]
    const description = item["Body (HTML)"]
    if (!title) continue
    const newItem = new InventoryItem({
      title,
      imageSrc,
      description,
      price: prices[(i * 43) % prices.length],
    })
    await newItem.save()
  }
  res.status(200).send({ success: true })
})
