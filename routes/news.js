import express from "express"

import {
  getNews,
  saveNews,
  summariser,
  summariserId,
  posting,
  start,
} from "../controllers/news.js"

const router = express.Router()

router.get("/start", start)
router.post("/posting", posting)
router.get("/", getNews)
router.post("/", saveNews)
router.get("/byid", summariserId)
router.post("/", summariserId)
router.post("/sum", summariser)

export default router
