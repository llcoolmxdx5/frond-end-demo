<template>
  <div :class="['lottery-num', resultNums.length >= 20 ? 'multi-row' : 'single-row']">
    <div :class="[ option.class, option.type,
      { result: resultNums.length >= 20 }
      ]"
      :data-zodiac="option.zodiac"
      v-for="(option, index) in resultNums"
      :key="index">
      <span v-if="option.num" class="num">{{option.num}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotteryRecordNum',
  props: {
    record: Object,
    game: Object,
    activeType: String
  },
  computed: {
    resultNums () {
      let gameType = this.game.type.code
      gameType = gameType !== 'other' ? gameType : this.game.code
      let formattedNums = []
      let rawNums = this.record.result_str.split(',')
      if (this.game.code === 'bjkl8') { rawNums.pop() }
      let comparision = {
        oddEven: 'ball_odd_even_',
        thanSize: 'ball_than_size_',
        tailThanSize: 'ball_tail_than_size_',
        ballOfSumOddEven: 'ball_of_sum_number_odd_even_',
        ballOfSumThanSize: 'ball_of_sum_number_than_size_',
        zodiac: 'ball_chinese_zodiac_'
      }
      let resultCategory = this.record.result_category || {}
      rawNums.forEach((rawBall, i) => {
        if (rawBall[0] === '0' && rawBall !== '0') { rawBall = rawBall.slice(1) }

        let index = i + 1
        let data = resultCategory[comparision[this.activeType] + index]
        let obj = {}

        obj.type = this.activeType
        if (this.activeType === 'number') {
          obj.num = rawBall
          obj.class = `ball result-${gameType} resultnum-${rawBall}`
        } else if (this.activeType === 'zodiac') {
          obj.zodiac = data
          obj.class = 'zodiac'
        } else {
          obj.class = `${data || 'default'}`
        }

        formattedNums.push(obj)
      })
      return formattedNums
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin badge($name) {
  background: url('../assets/img/icon-#{$name}.svg');
  background-size: 100% 100%;
  background-position: center center;
  display: inline-block;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
  background-repeat: no-repeat;
  margin: 1px;
  @media only screen and (max-width: 360px) {
    width: 20px;
    height: 20px;
  }
}

.zodiac {
  display: block;
}

.bigger {
  @include badge(bigger);
}

.smaller {
  @include badge(smaller);
}

.even {
  @include badge(even);
}

.odd {
  @include badge(odd);
}

.equal {
  @include badge(equal);
}

.zodiac {
  &::after {
    content: attr(data-zodiac);
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
  
}
.num {
  display: none;
}
.ball {
  margin-left: 1px;
  flex: 0 0 auto;
}
.lottery-num {
  display: flex;
  justify-content: center;
  align-items: center;
  &.single-row {
    .ball {
      margin-right: 5px;
      @media screen and (max-width: 320px) {
        margin-right: 1px;
      }
    }
  }
  &.multi-row {
    flex-wrap: wrap;
    height: 50px;
    width: 250px;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
    @media screen and (max-width: 320px) {
      width: 200px;
    }
  }
}
/*.result-pk10 {
  width: 20px;
  height: 20px;
}*/
</style>
