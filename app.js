require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT
const test = process.env.TEST

app.get("/", function (req, res) {
  res.send(`Hello World! >> ${test}`)
})


app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
