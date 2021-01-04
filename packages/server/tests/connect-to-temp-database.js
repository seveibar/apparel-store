const mongoose = require("mongoose")

const InventoryItem = mongoose.model("InventoryItem")

module.exports = async (func) => {
  // Connect to database
  await new Promise((resolve, reject) => {
    const testDatabaseName = `testdb_${Math.random().toString(36).slice(2, 7)}`
    console.log(`connecting to mongodb temp database "${testDatabaseName}"...`)
    mongoose.connection.on("error", console.log).once("open", resolve)
    mongoose.connect(`mongodb://localhost:27017/${testDatabaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  await InventoryItem.createIndexes()

  async function deleteDatabase() {
    // TODO delete database
  }

  await func()
    .then(async (res) => {
      await deleteDatabase()
      return mongoose.connection.close()
    })
    .catch(async (err) => {
      await deleteDatabase()
      await mongoose.connection.close()
      throw err
    })
}
