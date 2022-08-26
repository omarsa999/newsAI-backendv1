// reorgnuse the json object into an array
const jsonIntoArray = (JsonNews) => {
  JsonNews.data.articles.forEach((post) => {
    const newArticle = {
      title: post.title,
      data: post.summary,
      timestamp: post.author,
      thumbnail: post.media,
      header: "pass",
      images: "pass",
    }
  })
  return JsonNews
}
// save the array into the db where it have to go

export { jsonIntoArray }
