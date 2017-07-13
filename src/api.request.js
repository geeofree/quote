import axios from 'axios'

const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?count=1'
const request = axios.create({
  baseURL: url,
  headers: {
    'X-Mashape-Key': 'Oq1nNEx7ebmshKAc4t4WawOoYBU5p1QRSB5jsnsqsjWEofWRoH',
    'Accept': 'application/json'
  }
})

export default request
