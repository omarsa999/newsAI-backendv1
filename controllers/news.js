import express from "express"
import summryProvider from "../models/summryProvider.js"
import axios from "axios"
import PostMessage from "../models/postMessage.js"
import newsProvider from "../models/newsProvider.js"

import data from "../data.json" assert { type: "json" }

// const url = "http://localhost:5000/posts"

const router = express.Router()

export const start = async (req, res) => {
  try {
    // Get news
    const latest = await axios.get("http://localhost:5000/news", {
      timeout: 30000,
    })
    latest.data.sort((a, b) => {
      if (a.rank < b.rank) return -1
      if (a.rank > b.rank) return 1
      return 0
    })
    const latestNews = latest.data.slice(0, 5)
    const postsArray = []
    for (const onePost of latestNews) {
      postsArray.push({
        title: onePost.title,
        postBody: onePost.summary,
        author: onePost.media,
        summarized: "",
      })
    }
    // // Summrizing
    // for (const post of latestNews) {
    //   const sym = await axios.post(
    //     "http://localhost:5000/news/sum",
    //     {
    //       text: post.title,
    //     },
    //     {
    //       timeout: 30000,
    //     }
    //   )
    //   post.summarized = sym.data.rewrite
    // }

    // Saving
    await axios.post("http://localhost:5000/news", postsArray, {
      timeout: 30000,
    })

    res.status(200).send(postsArray)
    console.log(postsArray)
    // .json(latest)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// this function will comunicate with newsProvider.getNews function
export const getNews = async (req, res) => {
  try {
    const news = await newsProvider()
    console.log(news.data.articles)
    res.status(200).json(news.data.articles)

    // res.status(200).send(news)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// Posts news post into the DB as is
export const saveNews = async (req, res) => {
  try {
    const url = "http://localhost:5000/posts"
    const postsArray = req.body

    for (const onePost of postsArray) {
      // const { title, postBody, author, summarized } = onePost
      // const postData = {
      //   title,
      //   postBody,
      //   author,
      //   summarized,
      // }

      const newPostData = await axios.post(url, onePost)

      // const newPostData = await axios.post(url, postData)
    }

    // const { title, postBody, author, summarized } = req.body
    // const post = req.body
    // for (const post of data) {
    // const postData = {
    //   title,
    //   postBody,
    //   author,
    //   summarized,
    // title: post.title,
    // postBody: post.summary,
    // author: post.author,
    // summarized: post.summarized,
    // }
    // const newPostData = await axios.post(url, postData)
    // console.log(newPostData)

    res.status(201)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const summariserId = async (req, res) => {
  const postID = "63093c9113c1812490837d5f"
  const postData = await PostMessage.findById(postID)
  // const sumryedText = await
  const post = await PostMessage.findByIdAndUpdate(postID, {
    summarized: "ok ok",
  })
  console.log(post)
  // const updatedPost = { summarized: "dsfsdfds" }
  // await axios.patch(`${url}/${postID}`, updatedPost)
  res.status(200).json(post)
}

export const summariser = async (req, res) => {
  try {
    const txt = req.body.text
    // console.log(txt)
    const summary = await summryProvider(txt)
    // console.log(summary)
    res.status(200).send(summary.data)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export default router
