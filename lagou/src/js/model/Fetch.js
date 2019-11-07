class Fetch {
  constructor() {

  }
  getPositionList() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/fetch/listmore.json?pageNo=1&pageSize=15',
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