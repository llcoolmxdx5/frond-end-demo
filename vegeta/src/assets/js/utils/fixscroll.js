function stopDefault (e) {
  e.stopPropagation()
  e.preventDefault()
}

const eventWaitForRemove = []

export default {
  inserted: function (el) {
    let scrollTouchStartPosition
    el.addEventListener('touchmove', stopDefault)

    const startHandler = (ev) => {
      if (el.scrollHeight !== el.clientHeight) {
        scrollTouchStartPosition = ev.changedTouches[0].screenY

        el.removeEventListener('touchmove', stopDefault)
        el.addEventListener('touchmove', stopDefault)
      };
    }
    el.addEventListener('touchstart', startHandler)
    eventWaitForRemove.push({ key: 'touchstart', func: startHandler })

    const moveHandler = (ev) => {
      if (el.scrollHeight !== el.clientHeight) {
        (el.scrollTop <= 0 && ev.changedTouches[0].screenY > scrollTouchStartPosition) || (el.scrollTop >= el.scrollHeight - el.clientHeight && ev.changedTouches[0].screenY < scrollTouchStartPosition) ? el.addEventListener('touchmove', stopDefault) : el.removeEventListener('touchmove', stopDefault)
      }
    }
    el.addEventListener('touchmove', moveHandler)
    eventWaitForRemove.push({ key: 'touchmove', func: moveHandler })

    const endHandler = (ev) => {
      if (el.scrollHeight !== el.clientHeight) {
        el.addEventListener('touchmove', stopDefault)
      }
    }
    el.addEventListener('touchend', endHandler)
    eventWaitForRemove.push({ key: 'touchend', func: endHandler })
    eventWaitForRemove.push({ key: 'touchmove', func: stopDefault })
  },
  unbind: function (el) {
    eventWaitForRemove.forEach(config => {
      el.removeEventListener(config.key, config.func)
    })
    eventWaitForRemove.length = 0
  }
}
