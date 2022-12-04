import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js"
import newsRoutes from "./routes/news.js"
import { scheduleJob } from "node-schedule"
import axios from "axios"

// require("dotenv").config()
const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes)
app.use("/news", newsRoutes)

app.get("/", (req, res) => {
  res.status(200).send("Hello API")

  // // 1- get the news
  // try {
  //   const freshNews = getNews()
  //   console.log(freshNews[0])
  //   res.status(200).send("Hello API")
  // } catch (error) {
  //   res.status(404).json({ message: error.message })
  // }
  // //
  // // Here will be the buisness logic
  // //
})

const CONNECTION_URL = process.env.CONNECTION_URLs

// System flow:
//  1- get the news
//  2- save the news to const
//  3- summry the news
//  4- save to mongoDB || dirctly to Cache
//

// "mongodb+srv://admin:jEcvup-kaqbex-9dofpu@cluster0.ie6rnc3.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`))

// Scheduling Jobs - get news every 30 min

// mongoose.set("useFindAndModify", false)ss

// scheduleJob("get news", "0 */12 * * *", async () => {
//   await axios.get("http://localhost:5000/news/start")
//   console.log("get ")
// })
