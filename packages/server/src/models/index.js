const path = require("path")
const fs = require("fs")

// Bootstrap Models
fs.readdirSync(__dirname)
  .filter((file) => ~file.search(/^[^.].*\.js$/))
  .filter((file) => file !== "index.js")
  .forEach((file) => require(path.join(__dirname, file)))
