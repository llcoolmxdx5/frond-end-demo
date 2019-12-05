import Vue from 'vue'

Vue.filter('formatImg', (url, wh) => {
  return url.replace(/w.h/, wh);
})

