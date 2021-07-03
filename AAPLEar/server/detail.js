const products = require("./product");

class Detail {
  constructor(id) {
    this.id = Number(id);
  }

  query() {
    for (let i = 0; i < products.length; i++) {
      if (products[i]["id"] === this.id) {
        return products[i];
      }
    }
  }

  getData() {
    this.data = {
      head: {
        status: "200",
        data: null,
      },
      body: this.query(),
    };
    return this.data;
  }
}

module.exports = Detail;
