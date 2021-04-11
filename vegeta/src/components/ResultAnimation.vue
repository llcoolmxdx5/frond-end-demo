<template>
  <div :class="['balls-number', 'wrapper-' + (gameType||gameCode)]">
    <div class="balls-frame">
      <div v-if="gameType === 'k3'" class="jsk3-loading">
        <div class="camera">
          <div class="space space1">
              <div class="dice dice1"></div>
              <div class="dice dice2"></div>
              <div class="dice dice3"></div>
              <div class="dice dice4"></div>
              <div class="dice dice5"></div>
              <div class="dice dice6"></div>
          </div>
        </div>
        <div class="camera">
          <div class="space space2">
              <div class="dice dice1"></div>
              <div class="dice dice2"></div>
              <div class="dice dice3"></div>
              <div class="dice dice4"></div>
              <div class="dice dice5"></div>
              <div class="dice dice6"></div>
          </div>
        </div>
        <div class="camera">
          <div class="space space3">
              <div class="dice dice1"></div>
              <div class="dice dice2"></div>
              <div class="dice dice3"></div>
              <div class="dice dice4"></div>
              <div class="dice dice5"></div>
              <div class="dice dice6"></div>
          </div>
        </div>
      </div>
      <div
        v-else
        :class="getResultClass(chunk)"
        v-for="(chunk, chunkIndex) in resultChunks"
        :key="chunkIndex">
        <b v-if="chunk.type==='text'">{{chunk.data}}</b>
        <ul v-else
          :style="getAnimateStyle(chunkIndex)"
          :class="`ul ${getAnimateClass(chunkIndex)}`">
          <li
            v-for="(num, index) in chunk"
            :key="index"
            :class="`result result-${gameType} resultnum-${num} nn-animation-${chunkIndex}`">
            <span class="num" style="display: none;">{{num}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const randomGeneratorFactory = (code, gameType) => {
  if (gameType === 'pk10') {
    return () => Math.floor(Math.random() * 10 + 1)
  } else if (gameType === 'time-lottery' || gameType === 'dd') {
    return () => Math.floor(Math.random() * 10)
  } else if (gameType === '11pick5') {
    return () => Math.floor(Math.random() * 11 + 1)
  } else if (gameType === 'mark6' || code === 'cqlf' || code === 'gdklsf') {
    return () => Math.floor(Math.random() * 20 + 1)
  } else if (gameType === 'kl8') {
    return () => Math.floor(Math.random() * 80 + 1)
  } else {
    return () => Math.floor(Math.random() * 6 + 1)
  }
}
export default {
  name: 'GameResultAnimate',
  props: {
    gameCode: {
      type: String
    },
    gameType: {
      type: String
    },
    resultNums: {
      type: Array
    },
    lastNums: {
      type: Array
    }
  },
  computed: {
    resultChunks () {
      const randomGenerator = randomGeneratorFactory(this.gameCode, this.gameType)
      return this.resultNums.map((num, index) => {
        if (num.type === 'text') {
          return num
        } else {
          const arr = []
          for (let i = 0; i < 4; i++) {
            arr.push(randomGenerator())
          }
          arr.push(arr[0])
          arr[0] = num.data
          return arr
        }
      })
    }
  },
  methods: {
    getResultClass (num) {
      if (num.type === 'text') {
        return ['text', 'view']
      }
      return [`result-${this.gameType} result`, 'view']
    },
    getAnimateClass (chunkIndex) {
      return this.gameType === 'pk10' ? `step-${chunkIndex % 2 ? 'odd' : 'even'}` : 'scroll-animating'
    },
    getAnimateStyle (chunkIndex) {
      let animationDuration = ''
      const getDuration = (speed = 1.5) => (chunkIndex + 1) / speed
      if (this.gameType === 'dd') {
        animationDuration = `${(getDuration())}s`
      } else {
        animationDuration = `${getDuration((Math.random() * 5) + 3)}s`
      }
      return this.gameType === 'pk10' ? `` : { animationDuration }
    }
  }
}
</script>
<style lang="scss" scoped>
$dice_side: 19px;
.balls-number {
  flex: 2.5;
  flex-wrap: wrap;
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
.view {
  position: relative;
  margin-right: 3px;
  background: none;
  overflow: hidden;
  border-radius: 0;
  &::before {
    display: none;
  }
  &.text {
    font-size: 12px;
  }
  .scroll-odd {
    width: 100%;
    animation: 1s scrollUp linear infinite normal;
  }
  .scroll-even {
    width: 100%;
    animation: 1.5s scrollDown linear infinite normal;
  }
  .ul {
    position: absolute;
    top: 0;
    left: 0;
  }
  .scroll-animating {
    animation-name: scroll;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    will-change: transform;
  }
  .step-odd {
    width: 100%;
    animation: 1s changeStep step-start infinite normal;
  }
  .step-even {
    width: 100%;
    animation: 1s changeStep step-start infinite normal;
  }
  &.result-kl8  {
    margin-bottom: 2px;
  }
}
.ball-sum {
  display: inline-block;
  font-size: 12px;
}
.wrapper-mark6 .view{
  /*margin-bottom: 40px; // for zodiac text height*/
}

@keyframes scroll {
  0% {
    transform: translateY(-100%);
  }
  75% {
    transform: translateY(-30%);
  }
  95% {
    transform: translateY(2%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes scrollUp {
  0% {
      transform: translateY(0);
  }
  100% {
      transform: translateY(-80%);
  }
}
@keyframes scrollDown {
  0% {
      transform: translateY(-80%);
  }
  100% {
      transform: translateY(0);
  }
}
@keyframes changeStep {
  0% {
      transform: translateY(0);
  }
  25% {
      transform: translateY(-20%);
  }
  50% {
      transform: translateY(-40%);
  }
  75% {
      transform: translateY(-60%);
  }
  100% {
      transform: translateY(-80%);
  }
}
.jsk3-loading {
  display: flex;
  height: 27px;
}
.camera{
    width: $dice_side;
    height: $dice_side;
    perspective-origin:center center;
    perspective:500px;
    &:nth-child(2){
      margin: 0 15px;
    }
}
.space{
    position:relative;
    width: 100%;
    height: 100%;
    transform-style:preserve-3d;
    transform-origin: $dice_side/2 center $dice_side/-2;
}
.space1 {
  animation:roll .2s linear .1s infinite;
}
.space2 {
  animation:roll2 .2s linear .2s infinite;
}
.space3 {
  animation:roll3 .2s linear .3s infinite;
}
.dice {
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: $dice_side $dice_side*6;
  background-image: url("~@/assets/img/ball_4.png");
  background-repeat:  no-repeat;
}
.dice1{
    background-position: 0 0;
}
.dice2{
    background-position: 0 ($dice_side * -1);
    transform-origin:left top;
    transform:translateX($dice_side - 1px) rotateY(90deg);
}
.dice3{
    background-position: 0 ($dice_side * -2);
    transform:translateZ(-($dice_side - 1px)) rotateY(180deg);
}
.dice4{
    background-position: 0 ($dice_side * -3);
    transform-origin:right top;
    transform:translateX(-($dice_side - 1px)) rotateY(-90deg);
}
.dice5{
    background-position: 0 ($dice_side * -4);
    transform-origin:center bottom;
    transform:translateY(-($dice_side - 1px)) rotateX(90deg);
}
.dice6{
    background-position: 0 ($dice_side * -5);
    transform-origin:center top;
    transform:translateY($dice_side - 1px) rotateX(-90deg);
}

@keyframes roll{
    0%{
        transform:rotateY(0) rotateZ(30deg);
    }
    100%{
        transform:rotateY(-359.9deg) rotateZ(30deg);
    }
}
@keyframes roll2{
    0%{
        transform:rotateY(0) rotateZ(45deg);
    }
    100%{
        transform:rotateY(-359.9deg) rotateZ(45deg);
    }
}
@keyframes roll3{
    0%{
        transform:rotateY(0) rotateZ(60deg);
    }
    100%{
        transform:rotateY(-359.9deg) rotateZ(60deg);
    }
}
</style>
