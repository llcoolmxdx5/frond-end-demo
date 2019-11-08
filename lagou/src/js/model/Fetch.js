class Fetch {
  constructor() {

  }
  getPositionList(pageNo, pageSize=15) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `/fetch/listmore.json?pageNo=${pageNo}&pageSize=${pageSize}`,
        type: 'GET',
        success(_data) {
          resolve(_data)
        },
        error(_data) {
          reject(_data)
        }
      })
    })
  }

  getSearchList(params){
    let {city, positionName, pageNo, pageSize} = params
    let enUrl = encodeURI(`/fetch/search.json?city=${city}&positionName=${positionName}&pageNo=${pageNo}&pageSize=${pageSize}`)
    console.log(enUrl)
    return new Promise((resolve, reject) => {
      $.ajax({
        url: enUrl,
        type: 'GET',
        success(_data) {
          resolve(_data)
        },
        error(_data) {
          reject(_data)
        }
      })
    })
  }
}
export default new Fetch()