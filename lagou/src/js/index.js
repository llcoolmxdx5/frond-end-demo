import Router from './router/Router'

class Index {

  constructor() {
    this.initEvent();
    this.initSwipper()
  }

  initEvent() {
    let self = this;
    $("#index_nav li").on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      let hash = $(this).attr('data-hash');
      Router.go(hash)
      let index = $(this).index()
      self.mySwiper.slideTo(index, 400, false);
    })

    $(window).on('hashchange', () => {
      let hash = location.hash.replace('#', '')
      $("#index_nav").find('li[data-hash="' + hash + '"]').addClass('active').siblings().removeClass('active');
    })
  }

  initSwipper() {
    this.mySwiper = new Swiper('.swiper-container', {
      // loop: true, // 循环模式选项
      on: {
        slideChange: function () {
          let cur = $("#index_nav").find('li').eq(this.activeIndex);
          cur.addClass('active').siblings().removeClass('active');
          let hash = cur.attr('data-hash');
          Router.go(hash)
        },
      },
    })
  }

}

new Index()