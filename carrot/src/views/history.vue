<template>
  <div class="home">
  	<Header></Header>
    <div class="mainContent">
      <div class="contenter">
        <div class="middleBox">
          <!-- <h3 class="zoneTitle">官方彩种</h3> -->
          <div class="lotteryListTable">
            <ul class="lotteryListBody">
              <li class="ltItem" 
                v-for="(item, index) in latestResultMap" 
                v-if="gameCode == index" 
              >
                <div class="ltIntro cz" :key="index">
                  <div :class="`lotteryPic ${index}`"></div>
                  <div class="lotteryName">
                    <div class="title">
                      {{ item.display_name }}
                    </div>
                    <div class="kajianhao">
                      {{ item.issue_number }} 期
                    </div>
                    <div class="more" @click="gameRules(item)">
                      <i class="el-icon-warning-outline"></i>游戏介绍
                    </div>
                  </div>
                </div>
                <div class="openTime kjsj">
                  <!-- {{ item.result_str }} -->
                  <AudioButton class="audio-button"/>
                  <game-result :game-code="gameCode"/>
                </div>
                <!-- <game-result :game-code="gameCode" :game-name="currentGame.display_name" :no-period="noPeriod"/> -->
                 
                <Countdown
                type="card"
                v-if="schedule && schedule.id"
                :schedule="schedule"
                :realSchedule="realSchedule"
                :currentGame="currentGame"
                :gameClosed="gameClosed"
                :closeCountDown="closeCountDown"
                :resultCountDown="resultCountDown"/>
              </li>
            </ul>
            <div class="schedule-container" v-loading="loading">
              <div class="user-actions">
                <div class="filters">
                  <div class="input">
                    <el-date-picker
                      v-if="gameCode === 'hkl' || gameCode === 'fc3d'"
                      id="date"
                      type="daterange"
                      v-model="selectedDate"
                      value-format="yyyy-MM-dd"
                      format="yyyy-MM-dd"
                      range-separator="~"
                      unlink-panels
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                    <el-date-picker
                      v-else
                      id="date"
                      type="date"
                      v-model="selectedDate"
                      placeholder="选择日期"
                      value-format="yyyy-MM-dd"
                      format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                  <div class="input m-l">
                    <el-input type="number" :disabled="loading" v-model="inputPeriod" placeholder="输入期数">
                    </el-input>
                  </div>
                </div>
                <div class="refresh">
                  <el-button type="primary" @click="getLatest()">刷新数据</el-button>
                </div>
              </div>
              <div class="historydata m-b-xlg">
                <div v-if="!schedules.length" class="noData">~ 暂无资料 ~</div>
                <table v-else class="history-table">
                  <tr>
                    <th v-for="(fieldsObject, fieldsIndex) in nowGameTable"
                      class="th"
                      :key="'fields-' + gameCode + fieldsIndex">
                      {{fieldsObject.displayName}}
                      <template v-if="fieldsObject.buttons">
                        <el-button
                          type="info"
                          size="mini"
                          plain
                          :class="['category-btn', { active: nowDisplay === button.show }]"
                          v-for="(button, index) in fieldsObject.buttons"
                          :key="fieldsIndex + gameCode + index"
                          @click="nowDisplay = button.show">
                          {{ button.displayName }}
                        </el-button>
                      </template>
                      <div>
                        <template v-if="fieldsObject.subHeads">
                          <div v-for="subHead in fieldsObject.subHeads"
                            :key="'field-' + gameCode + '-subHead-' + subHead.key"
                            :style="{'display': 'inline-block',
                                    'width': 1/fieldsObject.subHeads.length * 100 + '%'}">
                            <template v-if="subHead.displayName">
                              <span>{{subHead.displayName}}</span>
                            </template>
                          </div>
                        </template>
                      </div>
                    </th>
                  </tr>
                  <tr v-for="(schedule, scheduleIndex) in schedules"
                    :key="scheduleIndex + 'issue-' + schedule.issue_number">
                    <td v-for="(fieldsObject, fieldsIndex) in nowGameTable"
                      :key="gameCode + 'field-content-'+ fieldsIndex">
                      <template v-if="!fieldsObject.buttons && fieldsObject.key !== 'result_str'">
                        <span v-if="schedule[fieldsObject.key]">
                          {{schedule[fieldsObject.key]}}
                        </span>
                        <span v-else-if="schedule.result_category"
                          :class="schedule.result_category[fieldsObject.key]">
                            {{schedule.result_category[fieldsObject.key] |resultFilter}}
                        </span>
                        <div v-if="fieldsObject.subHeads && !schedule.result_category">暂无统计资料</div>
                        <div v-else>
                          <template v-if="fieldsObject.subHeads">
                            <span :class="{
                                win : schedule.result_category[subHead.key + '_result'] === 'win',
                                seperate: gameCode === 'msnn' || gameCode === 'pk10nn'
                              }"
                              v-for="subHead in fieldsObject.subHeads"
                              :key="'centent-' + gameCode + '-subHead-' + subHead.key"
                              :style="{'display': 'inline-block',
                                      'width': 1/fieldsObject.subHeads.length * 100 + '%'}">
                              <b v-if="gameCode === 'msnn'|| gameCode === 'pk10nn'">
                                <p>{{schedule.result_category[subHead.key].slice(0, 2)}}</p>
                                <p>{{schedule.result_category[subHead.key].slice(3)}}</p>
                              </b>
                              <b v-else :class="schedule.result_category[subHead.key]">
                                {{schedule.result_category[subHead.key] |resultFilter}}
                              </b>
                            </span>
                          </template>
                        </div>
                      </template>
                      <template v-else>
                        <ResultNums
                          v-if="schedule.status === 0"
                          :schedule="schedule"
                          :displayType="nowDisplay"
                          :gameCode="gameCode"
                          :gameType="typeCode!=='other'?typeCode:gameCode">
                        </ResultNums>
                        <div v-else>官方未开</div>
                      </template>
                    </td>
                  </tr>
                </table>
                <el-pagination v-if="totalCount > pageSize"
                  :current-page.sync="currentPage"
                  @current-change="handlePageChange"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="totalCount">
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <game-desc-dialog :currentGame="currentGame" :visible.sync="gameDescVisible"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GameDescDialog from '@/components/GameDescDialog'
import Countdown from '@/components/Countdown'
import ResultNums from '@/components/ResultNums'
import GameResult from '@/components/GameResult'
import AudioButton from '@/components/AudioButton'
import { Indicator } from '@/assets/js/utils/'
import historySetting from '@/assets/js/utils/historySetting.js'
import { axiosFox, getToken, fox, getRestTime } from '@/api'
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  name: 'home',
  data() {
    const today = this.$moment().format('YYYY-MM-DD')
    let selectedDate
    if (this.gameCode === 'hkl' || this.gameCode === 'fc3d') {
      selectedDate = [this.$moment().startOf('month').format('YYYY-MM-DD'), today]
    } else {
      selectedDate = today
    }
  	return {
      gameDescVisible: false,
      result: "",
      gameCode: '',
      typeCode: '',
      currentGame: {
        code: "",
        name: ""
      },
      times: [],
      countdownInterval: setInterval(this.countdown, 1000),

      schedules: '',
      nowDate: this.$moment().format('YYYY-MM-DD'),
      loading: false,
      nowDisplay: 'number',
      nowGameTable: [],
      inputPeriod: '',
      selectedDate: selectedDate,
      currentPage: 1,
      pageSize: 30,
      totalCount: 0,

      realSchedule: null,
      schedule: {},
      scheduleInterval: '',
      indicator: null,
      closeCountDown: null,
      resultCountDown: null,
      diffBetweenServerAndClient: 0,
      hasDestroy: false,
  	}
  },
  computed: {
    ...mapState([
      'latestResultMap',
    ]),
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
    }
  },
  mounted () {
    this.getToken()
  },
  watch: {
    'conditions': function () {
      this.initFetchHistory()
    },
    'schedule.id': {
      handler (val) {
        if (val) {
          this.startScheduleTimer()
        }
      },
      immediate: true
    }
  },
  filters: {
    resultFilter: function (val) {
      return historySetting.resultFilter(val)
    }
  },
  created () {
    this.nowGameTable = historySetting.getTableSetting(this.$route.query.gameCode, this.$route.query.typeCode)
    this.indicator = new Indicator(() => {
      clearInterval(this.scheduleInterval)
      this.startScheduleTimer()
      }, () => {
    })
  },
  components: {
    Header,
    GameDescDialog,
    Countdown,
    ResultNums,
    GameResult,
    AudioButton,
    Footer
  },
  methods: {
    initFetchHistory: _.debounce(function () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.getHistory((this.currentPage - 1) * this.pageSize)
      }, (1 * 60 * 1000))
      this.schedules = ''
      this.getHistory(0)
      this.nowDisplay = 'number'
      this.currentPage = 1
    }, 500),
    async getToken() {
      console.log('token')
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
    getLatest () {
      this.getHistory()
    },
    handlePageChange (currentPage) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.fetchData((this.currentPage - 1) * this.pageSize)
      }, (7 * 60 * 1000))
      this.getHistory((currentPage - 1) * this.pageSize)
    },
    getParam() {
      console.log('xxx')
      this.gameCode = this.$route.query.gameCode
      this.typeCode = this.$route.query.typeCode
      this.$store.state.nowGame = this.gameCode 
      this.fetchScheduleAndResult()
      const today = this.$moment().format('YYYY-MM-DD')
      if (this.gameCode === 'hkl' || this.gameCode === 'fc3d') {
        this.selectedDate = [this.$moment().startOf('month').format('YYYY-MM-DD'), today]
      } else {
        this.selectedDate = today
      }
      this.getHistory()
    },
    fetchScheduleAndResult () {
      let promises = [getRestTime(this.gameCode)]
      Promise.all(promises).then(results => {
        console.log('this.hasDestroy')
        console.log(this.hasDestroy)
        console.log('this.hasDestroy')
        // if (this.hasDestroy) {
        //   return
        // }
        const schedule = results[0].data.ret
        console.log(schedule)
        if(schedule) {
          this.schedule = schedule
          console.log(this.schedule)
          let serverTime = this.$moment(this.schedule.schedule_result)
          this.schedule.schedule_result = this.$moment().add(schedule.result_left, 's')
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
        this.resultCountDown = this.diffTime(resultTime, true, true)
      }, 1000)
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
    getHistory(offset) {
      fox.fetchHistory(
        {
          ...this.conditions,
          game_code: this.gameCode,
          offset
        }
      ).then((result) => {
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
          this.totalCount = result.data.count
          this.schedules = result.data.results
        }
      })
    },
    gameRules(val) {
      if(val.latest_result) {
        this.currentGame = val.latest_result
      } else {
        this.currentGame = val
      }
      this.gameDescVisible = true
    }
  },
  beforeDestroy () {
    this.hasDestroy = true
    clearInterval(this.scheduleInterval)
    if (this.indicator) {
      this.indicator.destroy()
    }
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.mainContent {
  width: 100%;
  background-color: #f0f0f0;
  padding-top: 20px;
  .contenter {
    width: 1200px;
    margin: 0 auto;
  }
  .middleBox {
    background: #fff;
    width: 1200px;
    /*margin-top: 20px;*/
    padding-bottom: 40px;
    border-top: 40px solid #333;
  }
  .zoneTitle {
    float: left;
    font-size: 16px;
    color: #f73b32;
    font-weight: 400;
    margin: 20px 30px;
  }
  .lotteryListTable {
    margin: 0 auto;
    clear: both;
    width: 1140px;
  }
  .lotteryListHead {
    ul {
      li {
        height: 50px;
        line-height: 50px;
        background: #302525;
        text-align: center;
        font-size: 14px;
        color: #fff;
        font-weight: 400;
        display: inline-block;
      }
    }
  }
  .cz {
    width: 218px;
    float: left;
  }
  .kjhm {
    width: 200px;
    float: left;
  }
  .kjsj {
    width: 572px;
    float: left;
  }
  .czlast {
    width: 130px;
    line-height: 100px;
    cursor: pointer;
    text-align: center;
    float: left;
    font-size: 14px;
    color: #488ded;
  }
  .lotteryListBody {
    height: 100px;
    width: 1120px;
    margin: 0 auto;
    /*border: 1px solid #ccc;*/
    .ltItem {
      clear: both;
      height: 100px;
      display: block;
      margin-top: 30px;
    }
    .liItem > div {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    .ltIntro {
      padding: 15px 0 15px 10px;
      height: 100%;
      text-align: left;
    }
    .lotteryPic {
      display: inline-block;
      width: 80px;
      height: 80px;
      float: left;
      vertical-align: middle;
      background-size: cover;
      margin-left: 20px;
    }
    .luckyk3 {
      background-image: url('../assets/img/luckyk3.png');
    }
    .mlaft {
      background-image: url('../assets/img/mlaft.png');
    }
    .hkl {
      background-image: url('../assets/img/hkl.png');
    }
    .lotteryName {
      display: inline-block;
      vertical-align: middle;
      width: 110px;
      margin-left: 8px;
      float: left;
      text-align: left;
      .title {
        margin-top: 10px;
        font-size: 19px;
        color: #666;
      }
      .more {
        margin-top: 3px;
        color: #488ded;
        cursor: pointer;
        font-size: 14px;
      }
    }
    .kajianhao {
      color: #999;
      margin-top: 5px;
    }
    .openTime {
      /*width: 300px;*/
      height: 100%;
    }
    .czlast {
      width: 130px;
      height: 100%;
    }
  }
}
.bigger,
.even,
.dragon,
.composite {
  color: $red;
}

.schedule-container {
  clear: both;
  text-align: center;
}

.historydata {
  padding: 10px;
  background: #fff;
}

.history-table {
  width: 100%;
  background: white;
  border-collapse: collapse;
  margin-bottom: 10px;
  th {
    font-weight: bold;
    background-color: #eee;
    color: #333;
    .category-btn {
      border-radius: 2px;
      border: solid 1px #dddddd;
      background-color: #ffffff;
      color: #666;

      &:hover {
        opacity: .8;
      }

      &.active {
        border: solid 1px #ccc;
        background-color: #eee;
      }
    }
  }

  td,
  th {
    border: $cell-border;
    height: $cell-height;
    line-height: $cell-height;
    vertical-align: middle;
  }

  .group-name {
    line-height: $cell-height;
    text-align: center;
    font-weight: bold;
  }
}

.user-actions {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .filters,
  .refresh {
    margin-left: 10px;
    padding-top: 10px;
    .input {
      display: inline-block;
    }
  }
  .refresh {
    padding-right: 10px;
  }
}

.win {
  box-sizing: border-box;
  background-color: lighten(#409EFF, 30%);
}

.seperate {
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  &:last-child {
    border: none;
  }
}
.audio-button{
  text-align: center;
  float: left;
  line-height: 100px;
  height: 100px;
}
.noData {
  line-height: 200px;
}
</style>


