import _ from 'lodash'
import gameTranslator from './gameTranslator'

/**
 * 1. Get chunks from original list using 'size' as chunk's length
 * 2. Regroup the 'keyUnion' inside the list
 *
 *    For example: unionChunked(playgroups, 'display_name', 'plays', 4)
 *
 * @param      {<Array>}  raw      The playgroups
 * @param      {<Int>}  size      The chunk size
 * @return     {<Array>}  Regrouped lists
 */

export function unionChunked (raw, size, groupCodes) {
  const playgroups = []
  // sort groups in raw by the orders in groupCodes
  groupCodes.forEach(code => {
    const matchedGroup = _.find(raw, group => group.code === code)
    if (matchedGroup) {
      let aliases = _.uniqBy(matchedGroup.plays, 'alias').map(play => play.alias)
      if (aliases[0]) {
        aliases.forEach(alias => {
          playgroups.push({
            ...matchedGroup,
            alias,
            plays: _.filter(matchedGroup.plays, play => {
              return play.alias === alias
            })
          })
        })
      } else {
        playgroups.push(matchedGroup)
      }
    }
  })
  // turn plays in playgroups into chunks
  playgroups.forEach(playgroup => {
    playgroup['plays'] = _.chunk(playgroup['plays'], size)
  })
  if (playgroups.length < 2) {
    return playgroups
  }

  let groupResult = {}

  playgroups.forEach(item => {
    const key = item['alias'] || item['display_name']
    if (!groupResult[key]) {
      groupResult[key] = item
    } else {
      groupResult[key]['plays'] = groupResult[key]['plays'].concat(item['plays'])
    }
  })

  let result = _.map(groupResult, playgroup => playgroup)
  result[0]['active'] = true

  return result
}

export function formatPlayGroup (raw, formatting) {
  let sections = []
  formatting.forEach(format => {
    let chunkedRawGroups = unionChunked(raw, format.play_col, format.grp_code)
    let playgroups = []
    format.grp_code.forEach(code => {
      let targetGroup = _.filter(chunkedRawGroups, x => x.code === code)
      if (targetGroup) {
        playgroups = playgroups.concat(targetGroup)
      }
    })
    sections.push({
      groupCol: format.grp_col,
      playCol: format.play_col,
      playgroups: playgroups
    })
  })
  return sections
}

export function msgFormatter (error) {
  let formatMsg
  let msgs = error.msg
  let responseMsg = error.response.data.message
  if (Array.isArray(msgs)) {
    let arr = []
    msgs.forEach(msg => {
      if (typeof msg === 'string') {
        arr.push(msg)
      } else {
        Object.keys(msg).forEach(key => {
          arr.push(msg[key])
        })
      }
    })
    formatMsg = arr.join(', ')
  } else {
    if (msgs && msgs.message) {
      formatMsg = msgs.message
      return formatMsg
    } else if (responseMsg) {
      formatMsg = responseMsg
      return formatMsg
    }
    formatMsg = msgs
  }
  return formatMsg
}

export function setIndicator (onActivate, onInactivate) {
  let hidden = 'hidden'

  // Standards:
  if (hidden in document) {
    document.addEventListener('visibilitychange', onchange)
  } else if ((hidden = 'mozHidden') in document) {
    document.addEventListener('mozvisibilitychange', onchange)
  } else if ((hidden = 'webkitHidden') in document) {
    document.addEventListener('webkitvisibilitychange', onchange)
  } else if ((hidden = 'msHidden') in document) {
    document.addEventListener('msvisibilitychange', onchange)
  } else if ('onfocusin' in document) { // IE 9 and lower:
    document.onfocusin = document.onfocusout = onchange
  } else { // All others:
    window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange
  }

  function onchange (evt) {
    let v = 'visible'
    let h = 'hidden'
    let status = ''
    let evtMap = {
      focus: v,
      focusin: v,
      pageshow: v,
      blur: h,
      focusout: h,
      pagehide: h
    }

    evt = evt || window.event
    if (evt.type in evtMap) {
      status = evtMap[evt.type]
    } else {
      status = this[hidden] ? 'hidden' : 'visible'
    }
    if (status === v && onActivate) {
      onActivate()
    } else if (status === h && onInactivate) {
      onInactivate()
    }
  }

  // set the initial state (but only if browser supports the Page Visibility API)
  if (document[hidden] !== undefined) {
    onchange({ type: document[hidden] ? 'blur' : 'focus' })
  }
}

export class Indicator {
  constructor (onActivate, onInactivate) {
    this.onActivate = onActivate
    this.onInactivate = onInactivate
    this.hidden = 'hidden'

    this.onchange = function (evt) {
      let v = 'visible'
      let h = 'hidden'
      let status = ''
      let evtMap = {
        focus: v,
        focusin: v,
        pageshow: v,
        blur: h,
        focusout: h,
        pagehide: h
      }
      evt = evt || window.event
      if (evt.type in evtMap) {
        status = evtMap[evt.type]
      } else {
        status = document[this.hidden] ? 'hidden' : 'visible'
      }
      if (status === v && onActivate) {
        onActivate()
      } else if (status === h && onInactivate) {
        onInactivate()
      }
    }.bind(this)

    if (this.hidden in document) {
      document.addEventListener('visibilitychange', this.onchange)
    } else if ((this.hidden = 'mozHidden') in document) {
      document.addEventListener('mozvisibilitychange', this.onchange)
    } else if ((this.hidden = 'webkitHidden') in document) {
      document.addEventListener('webkitvisibilitychange', this.onchange)
    } else if ((this.hidden = 'msHidden') in document) {
      document.addEventListener('msvisibilitychange', this.onchange)
    } else if ('onfocusin' in document) { // IE 9 and lower:
      document.onfocusin = document.onfocusout = this.onchange
    } else { // All others:
      window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.onchange
    }

    // set the initial state (but only if browser supports the Page Visibility API)
    if (document[this.hidden] !== undefined) {
      this.onchange({ type: document[this.hidden] ? 'blur' : 'focus' })
    }
  }

  destroy () {
    if (this.hidden === 'hidden') {
      document.removeEventListener('visibilitychange', this.onchange)
    } else if (this.hidden === 'mozHidden') {
      document.removeEventListener('mozvisibilitychange', this.onchange)
    } else if (this.hidden === 'webkitHidden') {
      document.removeEventListener('webkitvisibilitychange', this.onchange)
    } else if (this.hidden === 'msHidden') {
      document.removeEventListener('msvisibilitychange', this.onchange)
    } else if ('onfocusin' in document) { // IE 9 and lower:
      document.onfocusin = document.onfocusout = null
    } else { // All others:
      window.onpageshow = window.onpagehide = window.onfocus = window.onblur = null
    }
  }
}

export function filtAmount (evt) {
  // prevent key in: + - . e
  if (evt.keyCode === 43 || evt.keyCode === 45 || evt.keyCode === 46 || evt.keyCode === 101) {
    evt.preventDefault()
  }
}

export function statisticTranslator (code) {
  return gameTranslator[code]
}

export function getCookie (name) {
  let arr = document.cookie.split('; ')
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('=')
    if (arr2[0] === name) {
      return arr2[1]
    }
  }
  return ''
}
