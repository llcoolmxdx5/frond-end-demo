<template>
  <div class="result-balls">
    <div v-if="hasPeriod" class="balls-text">{{result&&result.issue_number}}</div>
    <div :class="['balls-number', 'wrapper-' + gameType]" v-if="result && !animation">
      <div class="balls-frame">
        <div v-if="result.status !== 0 && result.status !== 'valid'">官方未开</div>
        <div
          v-else
          v-for="(num, index) in resultNums.formattedNums"
          :key="index"
          :class="getResultClass(num)">
          <span class="num">{{num.data}}</span>
          <p class="ball-zodiac ball-padding" v-if="resultZodiac"> {{resultZodiac[index]}} </p>
        </div>
      </div>
    </div>
    <game-result-animate
      v-else-if="animation"
      :gameCode="result.game_code"
      :gameType="gameType"
      :lastNums="resultNums.lastNums"
      :resultNums="resultNums.formattedNums" />
  </div>
</template>

<script>
import GameResultAnimate from './ResultAnimation'
import _ from 'lodash'

export default {
  props: {
    result: Object,
    noPeriod: Boolean,
    noAnimation: Boolean
  },
  components: {
    GameResultAnimate
  },
  data () {
    return {
      resetUnknownMs: 3000,
      animation: false,
      timer: null
    }
  },
  watch: {
    noPeriod: {
      handler (newVal, oldVal) {
        if (newVal && !oldVal) this.initUnknown()
      },
      immediate: true
    },
    result: {
      handler () {
        if (this.result) {
          this.resetResultAnimation()
        }
      },
      immediate: true
    }
  },
  computed: {
    gameType () {
      console.log(this.result)
      let gameCode = this.result.game_code
      let gameType = this.result.game_type.code

      return gameType !== 'other' ? gameType : gameCode
    },
    hasPeriod () {
      return !this.noPeriod
    },
    resultNums () {
      let gameType = this.gameType
      let formattedNums = []
      let lastNums = []
      if (!this.result.result_str) {
        return {
          formattedNums: [],
          lastNums: []
        }
      }

      // others
      let rawNums = this.result.result_str.split(',')
      if (this.result.game_code === 'bjkl8') {
        rawNums.pop()
      }

      rawNums.forEach((rawBall) => {
        if (rawBall[0] === '0' && rawBall !== '0') {
          rawBall = rawBall.slice(1)
        }
        formattedNums.push({ type: 'num', data: rawBall })

        lastNums.push(rawBall)
      })

      if (gameType === 'mark6') {
        formattedNums.splice(6, 0, { type: 'text', data: '＋' })
      } else if (gameType === 'dd') {
        formattedNums.push({ type: 'text', data: '总和' })

        lastNums.push('')
        const sum = _.reduce(rawNums, (sum, nums) => { return sum + Number(nums) }, 0)
        formattedNums.push({ type: 'num', data: sum })

        lastNums.push(sum)
      }
      return {
        formattedNums,
        lastNums
      }
    },
    resultZodiac () {
      if (this.result.zodiac) {
        let arr
        if (typeof (this.result.zodiac) === 'string') {
          arr = this.result.zodiac.split(',')
        } else {
          arr = this.result.zodiac.slice()
        }

        arr.splice(6, 0, '+')
        return arr
      } else {
        return null
      }
    }
  },
  methods: {
    getResultClass (num) {
      if (num.type === 'text') {
        return ['text', 'result']
      }
      let gameClass = `result-${this.gameType}`
      let resultClass = `resultnum-${num.data}`
      let winClass = num.win ? 'win' : '' // 牛牛
      return [gameClass, resultClass, winClass, 'result']
    },
    resetResultAnimation () {
      if (this.noAnimation) {
        return
      }
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
          game_code: this.result.game_code,
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
        game_code: this.result.game_code,
        latestResult
      })
    },
    startTimer (ms) {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve()
        }, ms)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.result-balls {
  width: 100%;
  flex:0 0 auto;
  display: flex;
  color: #999;
  padding: 2px 0;
  .balls-text {
    font-size: 13px;
    flex: 1;
    align-self: center;
    text-align: center;
    white-space: nowrap;
  }
  @media screen and (max-width: 320px) {
    .balls-text {
      font-size: 12px;
    }
  }
  .balls-number {
    display: flex;
    flex: 2.5;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    .balls-frame {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      max-width: 300px;
    }
  }
  .text {
    font-size: 12px;
    .ball-zodiac {
      text-indent: -9999px;
    }
    .num {
      display: inherit!important;
      /*line-height: 30px;*/
    }
  }

  .result {
    margin-right: 3px;
    .num {
      display: none;
    }
  }
  .ball-sum {
    display: inline-block;
    font-size: 12px;
  }
  .ball-zodiac {
    text-align: center;
    font-size: 12px;
    margin-left: 1px;
  }
  .ball-padding {
    /*padding-top: 10px;*/
  }
  .wrapper-mark6 .result{
    margin-bottom: 2px;
  }
  .result-kl8 {
    margin-bottom: 2px;
  }

}
</style>
