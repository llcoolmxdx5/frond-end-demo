class Detail {
    constructor() {
      console.log('detail:' + location.search.replace('?', ''))
      this.initEvent()
    }
    initEvent() {
      $('#header i').on('click', () => {
        location.href = '/#position'
      })
    }
  }
  
  export default new Detail();