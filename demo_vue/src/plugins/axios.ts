import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
  headers: { 
    'Content-type': 'application/json',
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5OTExNjAwMCwiZXhwIjoxNjk5MTE2MDYwfQ.CW23SuDymFhU2Uym8sTnElb4u2Vlkc3gJB-c63Wjmmo"
  }
})

export default axios
