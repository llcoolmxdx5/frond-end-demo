class User {

    getUsername() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('zhangsan !!!')
        }, 2000)
      })
    }
  }
  
  export default new User();