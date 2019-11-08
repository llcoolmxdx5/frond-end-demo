class Detail {
    constructor() {
      console.log('detail:' + location.search.replace('?', ''))
    }
  }
  
  export default new Detail();