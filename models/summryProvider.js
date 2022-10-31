// this file will have the connection with the rapid api
import axios from "axios"

const summryProvider = async (txt) => {
  const apiKey = "9f1028a0ddmsh45694ba7a9684d8p1485b6jsn84e6edc9723d"
  // process.env.summryProviderAPI
  const options = {
    method: "POST",
    url: "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host":
        "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
    },
    data: `{"language":"ar","strength":3,"text":"${txt}"}`.toString(),
  }
  return axios.request(options)
}

export default summryProvider
