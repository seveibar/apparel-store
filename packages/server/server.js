const mongoose = require("mongoose")
require("./src/models")
const app = require("./src/app")()

connectToDatabase()

function connectToDatabase() {
  console.log("connecting to mongodb...")
  mongoose.connection
    .on("error", console.log)
    .on("disconnected", connectToDatabase)
    .once("open", app.startServer)
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/shop",
    {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
}
