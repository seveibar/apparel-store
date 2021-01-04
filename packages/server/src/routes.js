const getItems = require("./endpoints/get-items")
const seedDatabase = require("./endpoints/seed-database")

module.exports = (app) => {
  app.get("/api/item", getItems)
  app.get("/api/rpc/seed-database", seedDatabase)
}
