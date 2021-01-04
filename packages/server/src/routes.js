const getItems = require("./endpoints/get-items")
const seedDatabase = require("./endpoints/seed-database")
const postCustomer = require("./endpoints/post-customer")

module.exports = (app) => {
  app.post("/api/customer", postCustomer)
  app.get("/api/item", getItems)
  app.get("/api/rpc/seed-database", seedDatabase)
}
