import express from "express"

import {
  getNews,
  saveNews,
  summariser,
  summariserId,
  start,
} from "../controllers/news.js"

const router = express.Router()

router.get("/start", start)

router.get("/", getNews)
router.post("/", saveNews)
router.get("/byid", summariserId)
router.post("/", summariserId)
router.post("/sum", summariser)

export default router
