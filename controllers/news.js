import express from "express"

import newsProvider from "../models/newsProvider.js"

const router = express.Router()

// this function will comunicate with newsProvider.getNews function
export const getNews = async (req, res) => {
  try {
    const news = await newsProvider()
    res.status(200).json(news)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// export const getNews = async (req, res) => {
//   try {
//     const news = await newsProvider()
//     news.data.articles.forEach((post) => {
//       const newArticle = {
//         title: post.title,
//         data: post.summary,
//         timestamp: post.author,
//         thumbnail: post.media,
//         header: "pass",
//         images: "pass",
//       }
//       // i have to save them as array of json objects
//     })
//     console.log(news.data.articles)
//     res.status(200).json(news.data.articles)
//   } catch (error) {
//     res.status(404).json({ message: error.message })
//   }
// }

export default router
