import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js"
import newsRoutes from "./routes/news.js"

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes)
app.use("/news", newsRoutes)

app.get("/", (req, res) => {
  res.send("Hello API")
})

const CONNECTION_URL = process.env.CONNECTION_URLs

// "mongodb+srv://admin:jEcvup-kaqbex-9dofpu@cluster0.ie6rnc3.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`))

// mongoose.set("useFindAndModify", false)ss
