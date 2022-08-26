import express from "express"

import { getNews, saveNews, summariser } from "../controllers/news.js"

const router = express.Router()

router.get("/", getNews)
router.post("/", saveNews)
router.post("/sum", summariser)

export default router
