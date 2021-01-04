const http = require("http")
const test = require("ava")
const listen = require("test-listen")
const mongoose = require("mongoose")
require("../src/models")
const getApp = require("../src/app")
const connectToTempDatabase = require("./connect-to-temp-database")
const axios = require("axios")

const InventoryItem = mongoose.model("InventoryItem")

test("seed database", async (t) => {
  await connectToTempDatabase(async () => {
    let url = await listen(http.createServer(getApp()))
    const { data: resData } = await axios.get(`${url}/api/rpc/seed-database`)
    t.truthy(resData.success)
    const items = await InventoryItem.find({})
    t.is(items.length, 20)
  })
})
