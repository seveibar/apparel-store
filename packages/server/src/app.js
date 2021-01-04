const express = require("express")
const initRoutes = require("./routes")

module.exports = () => {
  const app = express()
  initRoutes(app)
  app.startServer = () => {
    const port = process.env.PORT || 3001
    console.log(`starting server on http://localhost:${port}...`)
    app.listen(port)
  }
  return app
}
