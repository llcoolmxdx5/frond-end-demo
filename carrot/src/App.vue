<template>
  <div id="app" :style="{minHeight: resultsHeight + 'px'}">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
import { fox } from '@/api'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      result: "",
      currentGame: {
        code: "",
        name: ""
      },
      times: [],
      countdownInterval: setInterval(this.countdown, 1000)
    }
  },
  computed: {
    // ...mapState([
    //   'latestResultMap'
    // ]),
    resultsHeight () {
      return (document.documentElement.clientHeight || document.body.clientHeight)
    }
  },
  mounted () {
    // 初始化
    this.init()
  },
  watch: {

  },
  components: {
  },
  methods: {
    init() {
      if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
      }else{
        // 实例化socket
        this.socket = new WebSocket(process.env.VUE_APP_WS_URL)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },

    open() {
      console.log("socket连接成功")
    },
    error() {
      console.log("连接错误")
    },
    getMessage(response) {

      if (typeof response.data !== 'string') return

      try {
        let data = JSON.parse(response.data)
        switch (data.type_eider) {

          case 'game-result-initial':
            let result = data.latest_result_map
            for (var i in result) {
              console.log(result[i])
              this.times[i] = Math.ceil(this.$moment(result[i].schedule_close).diff() / 1000)
            }
            this.$store.dispatch('initLatestResultMap', data.latest_result_map)
            break
          case 'game-result':
          case 'instant-game-result':
            const latestResult = data.latest_result
            const gameCode = data.latest_result.game_code
            console.log(data.latest_result)
            this.$store.dispatch('updateLatestResultMap', { gameCode, latestResult })
            if (this.$store.state.nowGame == gameCode) {
              this.$store.dispatch('refreshResult')
            }
            break
          default:
            break
        }
      } catch (e) {
        console.log('有错误')
      }
    },
    close() {
      console.log("socket已经关闭")
    },
    diffTime (target, flag, noDayField = false) {
      target = target || this.$moment()
      const duration = this.$moment.duration(target.diff())
      let days = duration.days()
      let hours = duration.hours()
      let minutes = duration.minutes()
      let seconds = duration.seconds()

      if (noDayField && days > 0) {
        hours += (days * 24)
        days = 0
      }

      if (flag && (days + hours + minutes + seconds <= 0)) {
        clearInterval(this.scheduleInterval)
        this.fetchScheduleAndResult()
      }
      days = days < 0 ? 0 : days
      hours = hours < 0 ? 0 : hours
      minutes = minutes < 0 ? 0 : minutes
      seconds = seconds < 0 ? 0 : seconds
      return {
        days,
        hours,
        minutes,
        seconds
      }
    },
    startScheduleTimer () {
      clearInterval(this.scheduleInterval)
      if (this.hasDestroy) {
        return
      }
      if (!this.schedule || !this.schedule.id) {
        return
      }
      this.scheduleInterval = setInterval(() => {
        const closeTime = this.schedule.schedule_close
        const resultTime = this.schedule.schedule_result
        this.closeCountDown = this.diffTime(closeTime)
        this.resultCountDown = this.diffTime(resultTime, true, true)
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/base.scss';
  @import '@/assets/css/vars.scss';
  @import '@/assets/css/resultsball.scss';
</style>


