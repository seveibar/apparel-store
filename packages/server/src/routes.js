const getItems = require("./endpoints/get-items")
const seedDatabase = require("./endpoints/seed-database")
const postCustomer = require("./endpoints/post-customer")
const postPaymentIntent = require("./endpoints/post-payment-intent")
const postOrder = require("./endpoints/post-order")

module.exports = (app) => {
  app.post("/api/customer", postCustomer)
  app.post("/api/payment-intent", postPaymentIntent)
  app.post("/api/order", postOrder)
  app.get("/api/item", getItems)
  app.get("/api/rpc/seed-database", seedDatabase)
}
