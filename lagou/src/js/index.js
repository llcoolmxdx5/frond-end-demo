import User from './user.js'

class Index {

  constructor() {
    console.log('index')
    this.getName();
  }

  async getName() {
    let name = await User.getUsername()
    console.log(name);
  }

}

new Index()