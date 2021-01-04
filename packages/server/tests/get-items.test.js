const http = require("http")
const test = require("ava")
const listen = require("test-listen")
const mongoose = require("mongoose")
require("../src/models")
const getApp = require("../src/app")
const connectToTempDatabase = require("./connect-to-temp-database")
const axios = require("axios")

const InventoryItem = mongoose.model("InventoryItem")

test.serial("get items", async (t) => {
  await connectToTempDatabase(async () => {
    let url = await listen(http.createServer(getApp()))
    await axios.get(`${url}/api/rpc/seed-database`)
    const { data: resData } = await axios.get(`${url}/api/item`)
    t.is(resData.length, 20)
    t.truthy(resData[0]._id)
    t.truthy(resData[0].title)
    t.truthy(resData[0].imageSrc)
    t.truthy(resData[0].price)
  })
})

test.serial("search items", async (t) => {
  await connectToTempDatabase(async () => {
    let url = await listen(http.createServer(getApp()))
    await axios.get(`${url}/api/rpc/seed-database`)
    const { data: resData } = await axios.get(`${url}/api/item?q=shirt`)
    t.is(resData.length, 3)
    t.truthy(resData[0].title.includes("Shirt"))
  })
})
