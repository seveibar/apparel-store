const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") })

const express = require("express")
const initRoutes = require("./routes")
const bodyParser = require("body-parser")

module.exports = () => {
  const app = express()
  app.use(bodyParser.json())
  initRoutes(app)
  app.startServer = () => {
    const port = process.env.PORT || 3001
    console.log(`starting server on http://localhost:${port}...`)
    app.listen(port)
  }
  return app
}
