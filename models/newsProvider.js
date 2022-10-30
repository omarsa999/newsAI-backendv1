// this file will have the connection with the rapid api
import axios from "axios"

const options = {
  method: "GET",
  url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
  params: { lang: "ar", country: "il", media: "True" },
  headers: {
    "X-RapidAPI-Key": process.env.newsProviderAPI,
    "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
  },
}

const newsProvider = async () => {
  return axios.request(options)
}

export default newsProvider
