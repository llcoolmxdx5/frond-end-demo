import Router from './router/Router'

class Index {

  constructor() {
    this.initEvent();
  }

  initEvent() {
    $("#index_nav li").on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      let hash = $(this).attr('data-hash');
      Router.go(hash)
    })
  }

}

new Index()