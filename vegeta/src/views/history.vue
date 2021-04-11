<template>
  <div class="home">
    <mt-header :title="currentGame.display_name">
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
    </mt-header>
    <div class="mainContent">
      <Countdown
          :schedule="schedule"
          :realSchedule="realSchedule"
          v-if="schedule.id"
          :currentGame="currentGame"
          :gameClosed="gameClosed"
          :closeCountDown="closeCountDown"
          :resultCountDown="resultCountDown"/>
      <GameResult :result="latestResultMap[gameCode]" /> 
    </div>
    <div class="header" ref="headerHeight">
      <span class="title">选择日期</span>
      <div class="choose">
        <div v-if="gameCode === 'hkl' || gameCode === 'fc3d'" class="date-picker">
          <div @click="selectData" class="date-content">
            {{ selectedDate[0] | moment('YYYY-MM') }}
          </div>
          <mt-datetime-picker
              lockScroll="true"
              ref="datePicker"
              v-model="selectedDate[0]"
              class="myPicker"
              type="date"
              year-format="{value}"
              month-format="{value}"
              date-format="{value}"
              @confirm="dateConfirm()"
            >
          </mt-datetime-picker>
        </div>
        <div v-else class="date-picker" >
          <div @click="selectData" class="date-content">{{ selectedDate | moment('YYYY-MM-DD') }}</div>
          <mt-datetime-picker
              lockScroll="true"
              ref="datePicker"
              v-model="selectedDate"
              class="myPicker"
              type="date"
              year-format="{value}"
              month-format="{value}"
              date-format="{value}"
              @confirm="dateConfirm()"
            >
          </mt-datetime-picker>
          <i class="solid-triangle point-down"></i>
        </div>
      </div>
      <div class="fresh" @click="refresh">刷新</div>

      <div class="type-btns" v-if="compareTypes">
        <v-button :type="type === activeType ? 'primary' : 'default'"
          class="type-btn"
          @click.native="activeType = type"
          v-for="(type, index) in compareTypes"
          :key="index">{{type | typeFilter}}</v-button>
      </div>
    </div>
    <div :class="['info-content','history',{'add': compareTypes}]"  :style="{height: resultsHeight + 'px'}">
      <div :class="['history-container', compareTypes ? 'additional' : 'simple']">
      <div class="content">
        <v-table class="table">
          <tr
            class="set-px"
            v-for="(schedule, scheduleIndex) in records.results"
            :key="'scheduleIndex' + scheduleIndex">
            <td width="30%">
              <p class="issue-number">
                {{schedule.issue_number}}

                <span class="issued-at">{{schedule.schedule_result | moment('MM-DD HH:mm')}}</span>
              </p>
            </td>
            <td>
              <div class="invalid text-center" v-if="schedule.status !== 0">官方未开</div>
              <div class="lottery-result" v-else>
                <ResultNums
                  :activeType="activeType"
                  :record="schedule"
                  :game="game" />
              </div>
            </td>
          </tr>
          <tr v-if="loading">
            <td class="condition text-center p-t-lg">
              <div class="loading">
                <!-- <mt-spinner type="fading-circle"></mt-spinner> -->
              </div>
            </td>
          </tr>
          <tr v-else-if="!records.results.length">
            <td colspan="2"  class="condition" >
              <div class="no-more" v-if="!records.results.length">没有更多数据</div>
              </td>
          </tr>
          <tr v-else-if="(pagination.total > records.results.length)">
            <td colspan="2" class="condition" >
              <v-button
                type="default"
                action-type="button"
                class="add-more"
                @click.native="addMore">
                <div class="loading" v-if="addMoreLoading">
                  <mt-spinner type="fading-circle"></mt-spinner>
                </div>
                <span v-else>加载更多</span>
              </v-button>
            </td>
          </tr>
          <tr v-else>
            <td colspan="2" class="condition" >
              <v-button
                type="default"
                action-type="button"
                class="add-more">
                <span>没有更多数据</span>
              </v-button>
            </td>
          </tr>
        </v-table>
      </div>
    </div>
    
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Countdown from '@/components/Countdown'
import ResultNums from '@/components/ResultNums'
import GameResult from '@/components/GameResult'
import VButton from '@/components/Button'
import DateSelector from '@/components/DateSelector'
import { changeableCompareTypes } from '@/assets/js/utils/lotteryRecordSetting'
import FixScroll from '@/assets/js/utils/fixscroll'
import { Toast, Indicator } from 'mint-ui'
import VTable from '@/components/Table'
import historySetting from '@/assets/js/utils/historySetting.js'
import { axiosFox, getToken, fox, getRestTime } from '@/api'
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  name: 'home',
  data() {
  	return {
      activeType: 'number',
      records: { results: [] },
      pagination: {
        total: 0,
        offset: 0
      },
      addMoreLoading: false,
      result: "",
      selectedDate: '',
      gameCode: '',
      typeCode: '',
      game: {
        code: '',
        type: {
          code: ''
        }
      },
      currentGame: {
        code: "",
        name: "",
        display_name: ""
      },
      countdownInterval: setInterval(this.countdown, 1000),
      nowDate: this.$moment().format('YYYY-MM-DD'),
      loading: false,
      nextCursor: '',
      realSchedule: null,
      schedules: [],
      schedule: {
        id: null
      },
      scheduleInterval: '',
      diffBetweenServerAndClient: 0,
      closeCountDown: null,
      resultCountDown: null,
      hasDestroy: false
  	}
  },
  computed: {
    ...mapState([
      'latestResultMap',
    ]),
    resultsHeight () {
      var ss =document.getElementById("headerHeight")
      return (document.documentElement.clientHeight || document.body.clientHeight) - 160
    },
    conditions () {
      if (!Array.isArray(this.selectedDate)) {
        return {
          schedule_result_after: this.selectedDate,
          schedule_result_before: this.selectedDate,
          issue_number_q: this.inputPeriod
        }
      }
      return {
        schedule_result_after: this.selectedDate[0],
        schedule_result_before: this.selectedDate[1],
        issue_number_q: this.inputPeriod
      }
    },
    gameClosed () {
      if (this.realSchedule) {
        return true
      }
      if (!this.closeCountDown || this.noPeriod) {
        return false
      }
      const c = this.closeCountDown
      return c.days + c.hours + c.minutes + c.seconds === 0
    },
    compareTypes () {
      return changeableCompareTypes[this.gameCode] || changeableCompareTypes[this.typeCode]
    },
    queryTime () {
      
      if (this.gameCode === 'hkl' || this.gameCode === 'fc3d') {
        const date = this.$moment(this.selectedDate[0])
        return {
          schedule_result_after: date.date(1).format('YYYY-MM-DD'),
          schedule_result_before: date.add(1, 'months').date(0).format('YYYY-MM-DD')
        }
      } else {
        const date = this.$moment(this.selectedDate)
        const dateFormat = date.format('YYYY-MM-DD')
        return {
          schedule_result_after: dateFormat,
          schedule_result_before: dateFormat
        }
      }
    }
  },
  mounted () {
    this.getToken()
  },
  watch: {
    'latestResultMap': function(val) {
      this.currentGame.display_name = val[this.gameCode].display_name
    },
    '$store.state.isResultRefreshing' () {
      this.getHistory()
    }
  },
  filters: {
    typeFilter (val) {
      switch (val) {
        case 'number':
          return '号码'
        case 'thanSize':
          return '大小'
        case 'oddEven':
          return '单双'
        case 'ballOfSumThanSize':
          return '合大小'
        case 'ballOfSumOddEven':
          return '合单双'
        case 'tailThanSize':
          return '尾大小'
        case 'zodiac':
          return '生肖'
        default:
          return val
      }
    }
  },
  created () {
  },
  methods: {
    refresh() {
      this.getHistory()
    },
    selectData() {
      this.$refs['datePicker'].open()
    },
    dateConfirm () { 
      this.initRecords()
    },
    //获得token
    async getToken() {
      const { data } = await getToken()
      if(data.code === 2000) {
        axiosFox.interceptors.request.use((config) => {
          let token = data.token
          if (token) {
            config.headers.common['Authorization'] = 'JWT ' + token
          }
          return config
        }, function (error) {
          return Promise.reject(error)
        })
      }
      this.getParam()
    },
    // 从路由中获得参数
    getParam() {
      this.gameCode = this.$route.query.gameCode
      this.typeCode = this.$route.query.typeCode
      this.currentGame.code = this.$route.query.gameCode
      if(!!this.latestResultMap[this.gameCode]) {
        this.currentGame.display_name = this.latestResultMap[this.gameCode].display_name
      }
      this.$store.state.nowGame = this.gameCode 
      this.game.code = this.$route.query.gameCode
      this.game.type.code = this.$route.query.typeCode
      this.fetchScheduleAndResult()
      const today = this.$moment().format('YYYY-MM-DD')
      if (this.gameCode === 'hkl' || this.gameCode === 'fc3d') {
        this.selectedDate = [this.$moment().startOf('month').format('YYYY-MM-DD'), today]
      } else {
        this.selectedDate = today
      }
      this.getHistory()
    },
    //获得历史开奖
    getHistory(offset) {
      if(this.loading) {
        return
      }
      this.loading = true
      Indicator.open()
      let data = {
        game_code: this.gameCode,
        offset: this.pagination.offset
      }
      Object.assign(data, this.queryTime)
      fox.fetchHistory(data).then((result) => {
        if (result.data.results) {
          if (this.gameCode === 'bjkl8') {
            _.each(result.data.results, (schedule) => {
              let resultArr = schedule.result_str.split(',')
              resultArr.pop() // for bjkl8 useless 21th num
              schedule.result_str = resultArr.join()
            })
          }
          _.each(result.data.results, (schedule) => {
            schedule.schedule_result = this.$moment(schedule.schedule_result).format('YYYY-MM-DD HH:mm:ss')
          })
          this.pagination.total = result.data.count
          this.records.results = result.data.results
          this.loading = false
          this.nextCursor = result.data.next_cursor
          this.loading = false
          Indicator.close()
        }
      })
    },
    initRecords () {
      this.records.results = []
      this.pagination = {
        offset: 0,
        total: 0
      }
      this.getHistory()
    },
    addMore () {
      if (this.loading) {
        return
      }
      this.addMoreLoading = true
      this.pagination.offset += 30

      let data = {
        game_code: this.game.code,
        cursor: this.nextCursor
      }
      Object.assign(data, this.queryTime)
      fox.fetchHistory(data).then((response) => {
        this.pagination.total = response.data.count
        this.records.results.push(...response.data.results)
        this.addMoreLoading = false
        this.nextCursor = response.data.next_cursor
      })
    },
    //获得剩余时间
    fetchScheduleAndResult () {
      let promises = [getRestTime(this.gameCode)]
      Promise.all(promises).then(results => {
        const schedule = results[0].data.ret
        if(schedule.result_left < 3) {
          this.fetchScheduleAndResult()
        }
        if (schedule) {
          this.schedule = schedule
          let serverTime = this.$moment(this.schedule.schedule_result)
          this.schedule.schedule_result = this.$moment().add(schedule.result_left + 3, 's')
          this.diffBetweenServerAndClient = serverTime.diff(this.schedule.schedule_result)
          this.schedule.schedule_close = this.$moment().add(schedule.close_left, 's')
        } else {
          this.closeCountDown = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        }
        this.startScheduleTimer()
      }).catch(() => { })
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
        this.resultCountDown = this.diffTime(resultTime, true)
      }, 1000)
    },
    diffTime (target, flag) {
      const duration = this.$moment.duration(target.diff())
      let days = duration.days()
      let hours = duration.hours()
      let minutes = duration.minutes()
      let seconds = duration.seconds()
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
    back() {
      this.$router.go(-1)
    }
  },
  components: {
    Countdown,
    ResultNums,
    GameResult,
    VTable,
    VButton,
    DateSelector,
    Toast,
    Indicator
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
  @import '@/assets/css/vars.scss';

.mint-header {
  position: fixed;
  width: 100%;
  z-index: 200;
  top: 0;
}
.topbar-left {
  position: absolute;
  top: 0;
  left: 0;
}
.info-content {
  box-sizing: border-box;
  background-color: #fff;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: 163px;
}
.add {
  top: 203px;
}
.mainContent {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 200;
  top: 40px;
  padding-top: 20px;
}



.v-table.table {
  line-height: 1.5;
}
.history-container {
  height: 100%;
  overflow: hidden;
  &.additional {
    .header {
      height: 80px;
    }
    .content {
      height: calc(100%);
    }
  }

  &.simple {
    .header {
      height: 45px;
    }
    .content {
      height: 100%;
    }
  }

  
  .content {
    padding-bottom: 70px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.header {
  position: fixed;
  top: 112px;
  /*height: 100px;*/
  /*line-height: 48px;*/
  width: 100%;
  font-size: 16px;
  background-color: #f5f5f5;
  z-index: 2;
  .title {
    display: block;
    text-indent: 10px;
    float: left;
    height: 48px;
    line-height: 48px;
    width: 40%;
  }
  .choose {
    width: 30%;
    height: 48px;
    line-height: 48px;
    float: left;
  }
  .fresh {
    width: 20%;
    height: 48px;
    line-height: 48px;
    float: right;
  }
}
.condition {
  padding: 5px;
}
.date-picker {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /*width: 135px;*/
  height: 100%;
  margin-left: auto;
  padding-right: 5px;
  &-input {
    padding: 0 5px 0 0;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: right;
    color: #999;
  }
  .solid-triangle {
    border-top: 5px solid #999;
  }
}

.issue-number {
  align-items: center;
  font-size: 14px;
  color: #666;
  .issued-at {
    display: block;
    color: #999;
    font-size: 13px;
  }
}

.lottery-result {
  color: #999;
  font-size: 13px;
}

.add-more, .no-more{
  width: 100%;
  position: relative;
  font-size: 14px;
}

.no-more {
  text-align: center;
  color: #666;
}

.invalid {
  line-height: 50px;
}

.type-btns {
  display: inline-block;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  overflow-x: auto;
  text-align: center;
}

.type-btn {
  display: inline-block;
  width: auto;
  height: 32px;
  font-size: 14px;
  margin-left: 5px;
  &.v-btn {
    margin-top: 0;
  }
}

.v-table td {
  vertical-align: middle;
}
.date-content {
  color: #488ded;
}
.loading {
  height: 100%;
  font-size: 18px;
  text-align: center;
  width: 20px;
  margin: 0 auto;
  font-size: 4px;
  text-align: center;
}
.set-px {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.v-table td {
  border-right: 1px solid #e0e0e0;
  text-indent: 12px;
}
</style>
<style lang="scss">
.result-balls .ball-padding {
  display: none;
}
@media (min-width: 320px){
  .balls-frame .result-mark6 {
    width: 27px;
  }
  .result-pk10 {
    width: 19px;
  }
  .lottery-num.single-row .ball {
    margin-right: 3px;
  }
  .zodiac::after {
    width: 12px!important;
  }
}
@media (min-width: 360px){

}
@media (min-width: 375px){
  .balls-frame .result-mark6 {
    width: 28px;
  }
  .result-pk10 {
    width: 20px;
  }
  .v-table tr{
    line-height: 1.8;
  }
}
@media (min-width: 384px){
  .balls-frame .result-mark6 {
    width: 28px;
  }
  .result-pk10 {
    width: 22px;
  }
  .content table.v-table {
    line-height: 2.5;
    margin-top: 10px;
  }
  .lottery-num.single-row .ball {
    margin-right: 3px;
  }
}
@media (min-width: 414px){
  .balls-frame .result-mark6 {
    width: 28px;
  }
  .result-pk10 {
    width: 22px;
  }
  .v-table tr{
    line-height: 2.5;
  }
  .lottery-num.single-row .ball {
    margin-right: 3px;
  }
}
</style>

