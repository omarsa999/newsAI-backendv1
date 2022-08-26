import express from "express"
import newsProvider from "../models/newsProvider.js"
import summryProvider from "../models/summryProvider.js"
import axios from "axios"
import data from "../data.json" assert { type: "json" }

const url = "http://localhost:5000/posts"

const router = express.Router()
// pipline:
//  1- get the news
//  2- save to mongoDB

// this function will comunicate with newsProvider.getNews function
export const getNews = async (req, res) => {
  try {
    const news = await newsProvider()
    res.status(200).json(news.data)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const saveNews = async (req, res) => {
  try {
    // const data = await getNews()
    for (const post of data) {
      // const post = data[0]
      const postData = {
        title: post.title,
        postBody: post.summary,
        selectedFile: "pass",
        creator: post.author,
        tags: "pass",
      }
      const newPostData = await axios.post(url, postData)
      console.log(postData, newPostData)
    }
    res.status(201)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const summariser = async (req, res) => {
  try {
    const txt =
      "في ختام اجتماع ثلاثي بمشاركة نتنياهو : بن جفير وسموتريتش يتفقان على خوض الانتخابات في قائمة واحدة"
    const summary = await summryProvider(txt)
    // console.log(summary)
    res.status(200).send(summary.data.rewrite)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export default router
