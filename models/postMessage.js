import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  title: String,
  postBody: String,
  summarized: String,
  author: String,
  originalPostLink: String,
  published_date: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
