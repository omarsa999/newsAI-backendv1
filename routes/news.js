import express from "express"

import { getNews, saveNews } from "../controllers/news.js"

const router = express.Router()

router.get("/", getNews)
router.post("/", saveNews)

export default router
