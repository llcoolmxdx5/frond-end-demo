<template>
  <div class="result-balls" v-if="result">
    <!-- <div class="balls-text">
      <span class="game-name">{{ gameName }}</span>
      <span v-if="hasPeriod" class="issue">{{result.issue_number}}期</span>
    </div> -->
    <!-- <AudioButton class="audio-button"/> -->
    <div class="invalid" v-if="result.status!=='valid'">
      官方未开
    </div>
    <div :class="['balls-number', 'wrapper-' + result.game_type.code]" v-else-if="!animation">
      <span
        v-for="(option, index) in resultNums"
        :key="index"
        :class="option.class"
        :zodiac="option.zodiac">
        {{option.text}}
      </span>
      <el-popover
        ref="popover"
        v-if="result.invalidResult&&result.invalidResult.count>1"
        placement="bottom"
        width="auto"
        trigger="hover">
        <ul class="invalid-result-panel">
          <li class="invalid-result-issue" v-for="(issue, index) in invalidResultIssue" :key="index">
            {{issue}}
          </li>
          <li @click="toMoreDetail" class="invalid-result-issue more-detail" v-if="result.invalidResult.count>10">...</li>
        </ul>
      </el-popover>
      <div
        v-if="result.invalidResult&&result.invalidResult.count>0"
        v-popover:popover class="invalid-result-hint">
          <i class="el-icon-warning"></i>
          目前{{invalidResultText(result.invalidResult)}}官方尚未开奖，待官方开奖后本平台将在第一时间开奖，敬请放心投注
      </div>
    </div>
    <result-animation v-else :lastNums="lastNums"
      :gameType="gameType"
      :gameCode="result.game_code"
      :resultNums="resultNums" />
  </div>
</template>

<script>
// import AudioButton from '../components/AudioButton'
import ResultAnimation from '../components/ResultAnimation'

export default {
  props: {
    noPeriod: {
      type: Boolean,
      default: false
    },
    gameCode: {
      type: String
    },
    gameName: {
      type: String
    }
  },
  data () {
    return {
      lastNums: [],
      resultNums: [],
      resetUnknownMs: 4000,
      animation: false,
      timer: null
    }
  },
  components: {
    // AudioButton,
    ResultAnimation
  },
  watch: {
    gameCode () {
      this.lastNums = []
    },
    noPeriod: {
      handler (newVal, oldVal) {
        if (this.result && newVal && !oldVal) this.initUnknown()
      },
      immediate: true
    },
    result: {
      handler () {
        if (this.result) {
          const rawNums = this.result.result_str.split(',')
          this.setNums(rawNums)
          this.resetResultAnimation()
        }
      },
      immediate: true
    }
  },
  computed: {
    result () {
      let result = this.$store.state.latestResultMap[this.gameCode]
      if (result && result.zodiac && typeof (result.zodiac) === 'string') {
        result.zodiac = result.zodiac.split(',')
      }
      return result
    },
    gameType () {
      return this.result.game_type.code === 'other' ? this.gameCode : this.result.game_type.code
    },
    hasPeriod () {
      return !this.noPeriod
    },
    invalidResultIssue () {
      if (!this.result || !this.result.invalidResult) {
        return []
      }
      let invalidResults = this.result.invalidResult
      return invalidResults.data.map((r, i) => {
        if (i === invalidResults.data.length - 1) {
          return r
        }
        return r + ','
      })
    }
  },
  methods: {
    setNums (rawNums) {
      let nums = [...rawNums]
      let resultNums = []
      let lastNums = []
      let gameType = this.gameType

      if (this.result.game_code === 'bjkl8') {
        nums.pop()
      }

      if (gameType === 'mark6') {
        nums.forEach((rawBall, index) => {
          if (rawBall[0] === '0' && rawBall !== '0') {
            rawBall = rawBall.slice(1)
          }
          resultNums.push({
            class: `ball result-${gameType} resultnum-${rawBall} zodiac small`, zodiac: this.result.zodiac[index]
          })
          if (index === 5) {
            resultNums.push({ text: '＋', class: 'text' })
          }
          lastNums.push(rawBall)
        })
      } else if (this.gameType === 'dd') {
        let sum = 0
        nums.forEach((rawBall, index) => {
          if (rawBall[0] === '0' && rawBall !== '0') {
            rawBall = rawBall.slice(1)
          }
          resultNums.push({ class: `ball result-${gameType} resultnum-${rawBall}` })
          sum += Number(rawBall)
          lastNums.push(rawBall)
        })
        resultNums.push({ text: '总和', class: 'text' })
        lastNums.push('')

        resultNums.push({ class: `ball result-${gameType} resultnum-${sum}` })
        lastNums.push(sum)
      } else if (gameType === 'kl8') {
        nums.forEach((rawBall) => {
          if (rawBall[0] === '0' && rawBall !== '0') {
            rawBall = rawBall.slice(1)
          }
          resultNums.push({ class: `ball result-${gameType} resultnum-${rawBall} small` })
          lastNums.push(rawBall)
        })
      } else {
        nums.forEach((rawBall) => {
          if (rawBall[0] === '0' && rawBall !== '0') {
            rawBall = rawBall.slice(1)
          }
          resultNums.push({ class: `ball result-${gameType} resultnum-${rawBall}` })
          lastNums.push(rawBall)
        })
      }
      this.resultNums = resultNums
      this.lastNums = lastNums
    },
    resetResultAnimation () {
      const resetAnimation = () => {
        this.animation = true
        const delay = this.startTimer(this.resetUnknownMs)
        delay.then(() => {
          this.animation = false
          if (this.noPeriod && !this.result.unknown) this.setNoPeriodAnimation()
          else this.timer = null
        })
      }
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.animation = false
      this.$nextTick(() => {
        resetAnimation()
      })
    },
    setNoPeriodAnimation () {
      // 即時開獎結果處理
      const delay = this.startTimer(this.resetUnknownMs)
      delay.then(() => {
        const latestResult = Object.assign(
          {},
          this.result,
          {
            result_str: this.result.result_str
              .split(',')
              .map(r => 'unknown')
              .join(','),
            unknown: true
          }
        )
        this.$store.dispatch('updateLatestResultMap', {
          gameCode: this.result.game_code,
          gameType: this.result.game_type.code,
          latestResult
        })
        this.timer = null
      })
    },
    initUnknown () {
      // 初始為問號
      const latestResult = Object.assign(
        {},
        this.result,
        {
          result_str: this.result.result_str
            .split(',')
            .map(r => 'unknown')
            .join(','),
          unknown: true
        }
      )
      this.$store.dispatch('updateLatestResultMap', {
        gameCode: this.result.game_code,
        gameType: this.result.game_type.code,
        latestResult
      })
    },
    startTimer (ms) {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve()
        }, ms)
      })
    },
    invalidResultText (result) {
      if (result.count > 1) {
        return `共${result.count}期`
      }
      return `${result.data[0]}期`
    },
    toMoreDetail () {
      if (this.$route.name !== 'GameHistory') {
        this.$router.push({ path: `/game/${this.$route.params.gameId}/history` })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game-name {
  font-size: 16px;
  font-weight: 500;
}

.result-balls {
  min-height: 100px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  .balls-text {
    line-height: 1.5;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: #666;
    p {
      height: 18px;
      line-height: 18px;
    }
    .issue {
      color: #999;
    }
  }
  .audio-button{
    text-align: center;
  }
  .balls-number {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 500px;
    margin: 0 auto;
    margin-left: 6px;
    .ball {
      display: inline-block;
      margin-left: 18px;
    }
    .text {
      margin-left: 5px;
      color: #666;
    }
    .zodiac {
      position: relative;
      &::before {
        position: absolute;
        content: attr(zodiac);
        top: 28px;
        left: 7px;
        color: #999;
      }
    }
  }
  .ball-sum {
    display: inline-block;
  }
  .wrapper-mark6 {
    padding-bottom: 10px;
    .invalid-result-hint {
      bottom: -30px;
    }
  }
}

.invalid {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #ff435a;
}

.invalid-result-panel {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  box-sizing: border-box;
}

.invalid-result-hint {
  position: absolute;
  white-space: nowrap;
  text-align: left;
  height: 20px;
  line-height: 20px;
  bottom: -25px;
  left: 0;
  font-size: 12px;
  background-color: #fdf6ec;
  color: #e6a23c;
  padding: 2px 5px;
  border-radius: 4px;
}

.invalid-result-issue {
  margin-right: 10px;
  font-size: 12px;
}
.more-detail {
  font-size: 14px;
  cursor: pointer;
}
</style>
