// this file will have the connection with the rapid api
import axios from "axios"

const options = {
  method: "GET",
  url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
  params: { lang: "ar", country: "il", media: "True" },
  headers: {
    "X-RapidAPI-Key": "85e71fb41amsh6ade5a3c69cddd6p1130f8jsnbfe4477ee31a",
    "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
  },
}

const newsProvider = async () => {
  return axios.request(options)
}

export default newsProvider
