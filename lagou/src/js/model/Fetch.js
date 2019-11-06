class Fetch {
  constructor() {

  }
  getPositionList() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/fetch/api/positionlist',
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