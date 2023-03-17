const express = require("express")
const app = express()
const path = require("path")
const data = require("./data.json")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get("/r/:subdiv", (req, res) => {
  const { subdiv } = req.params
  const page = data[subdiv]
  if (page) {
    res.render("subdiv.ejs", { ...page })
  } else {
    res.render("notfound.ejs", { subdiv })
  }
})

app.get("/dog", (req, res) => {
  const dog = ["dog1", "dog2", "dog3", "jennifer"]
  res.render("dog.ejs", { dog })
})

app.get("/", (req, res) => {
  const value = Math.random() * 10 + 1
  res.render("home.ejs", { number: value })
})

app.listen("3000", () => {
  console.log("Listening To The Port")
})
