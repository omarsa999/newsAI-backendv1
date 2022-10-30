// this file will have the connection with the rapid api
import axios from "axios"

const summryProvider = async (txt) => {
  const options = {
    method: "POST",
    url: "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.summryProviderAPI,
      "X-RapidAPI-Host":
        "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
    },
    data: `{"language":"ar","strength":3,"text":"${txt}"}`.toString(),
  }
  return axios.request(options)
}

export default summryProvider
