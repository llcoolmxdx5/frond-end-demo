import axios from 'axios'

const axiosFox = axios.create()
const foxHost = process.env.VUE_APP_FOX_URL
console.log('fox')
console.log(axiosFox)
console.log(process.env.VUE_APP_FOX_URL)
console.log('fox')
// console.log(${foxHost} + '/result/history/')


const fox = {
  fetchHistory (option) {
    // console.log()
    let url = `${foxHost}/result/history/?limit=30`
    Object.keys(option).forEach(key => {
      if (option[key]) {
        url += `&${key}=${option[key]}`
      }
    })
    return axiosFox.get(url)
  },
  fetchStatistic (code) {
    return axiosFox.get(`${urls.fox.statistic}?game_code=${code}`)
  },
  fetchTrendChart (params) {
    return axiosFox.get(urls.fox.trend_chart, { params })
  }
}

export {
  fox,
  axiosFox
}
