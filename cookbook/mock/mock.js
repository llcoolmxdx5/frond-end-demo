const swiper = require('./swiper.json');
const hotcate = require('./cookbook-hotcate.json')
const list = require('./cookbook-list.json')
const category = require('./cookbook-category.json')

module.exports = function () {
  return {
    swiper,
    hotcate,
    list,
    category
  }
};
