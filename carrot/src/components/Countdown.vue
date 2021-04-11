<template>
  <div class="countdown-panel">
    <template v-if="type === 'default'">
      <p class="issue">{{realSchedule||schedule.issue_number}}期</p>
      <div class="schedules">
        <div class="schedule" v-if="schedule && schedule.issue_number">
          封盘
          <span v-if="!closeCountDown" class="red countdown">···</span>
          <span v-else-if="!gameClosed" class="red countdown">
            <span v-if="closeCountDown.days > 0">{{closeCountDown.days}}天 </span>
            <span v-if="closeCountDown.hours > 0">{{closeCountDown.hours | complete}}:</span>{{closeCountDown.minutes | complete}}:{{closeCountDown.seconds | complete}}
          </span>
          <span v-else class="red countdown">已封盘</span>
        </div>
        <div class="schedule" v-if="schedule && schedule.issue_number">
          开奖
          <span v-if="!resultCountDown" class="green countdown">···</span>
          <span v-else-if="!realSchedule && !ended" class="green countdown">
            <span v-if="resultCountDown.days > 0">{{resultCountDown.days}}天 </span>
            <span v-if="resultCountDown.hours > 0">{{resultCountDown.hours | complete}}:</span>{{resultCountDown.minutes | complete}}:{{resultCountDown.seconds | complete}}
          </span>
          <span v-else class="green countdown">已结束</span>
        </div>
      </div>
    </template>
    <template v-if="type === 'card'">
      <div class="wrapper" v-if="schedule && schedule.issue_number">
        <div class="closing-panel">
          <p class="issue">距离下期 {{ realSchedule || schedule.issue_number }} 期开奖</p> 
          <!-- <p class="closing-countdown">
            封盘
            <span class="red">
              <template v-if="!closeCountDown">···</template>
              <template v-else-if="!gameClosed">
                <span v-if="closeCountDown.days > 0">{{closeCountDown.days}}天 </span>
                <span v-if="closeCountDown.hours > 0">{{closeCountDown.hours | complete}}:</span>{{closeCountDown.minutes | complete}}:{{closeCountDown.seconds | complete}}
              </template>
              <template v-else>已封盘</template>
            </span>
          </p> -->
        </div>
        <div class="result-panel">
          <p class="result-countdown">
            <div class="cards-wrapper">
              <span v-if="!resultCountDown" class="green countdown">···</span>

              <span v-else-if="!realSchedule && !ended" class="countdown">
                <template v-if="resultCountDown.hours > 0">
                  <span class="card" v-for="(str, index) in getCompleted(resultCountDown.hours)" :key="'hour' + index">{{str}}</span>
                  <span class="colon">:</span>
                </template>
                <template>
                  <span class="card" v-for="(str, index) in getCompleted(resultCountDown.minutes)" :key="'min' + index">{{str}}</span>
                  <span class="colon">:</span>
                </template>
                <span class="card" v-for="(str, index) in getCompleted(resultCountDown.seconds)" :key="'sec' + index">{{str}}</span>
              </span>
              <span v-else class="green countdown">已结束</span>
          </div>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    realSchedule: String,
    schedule: {
      type: Object
    },
    currentGame: {
      type: Object
    },
    gameClosed: {
      type: Boolean
    },
    closeCountDown: {
      type: Object
    },
    resultCountDown: {
      type: Object
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    ended () {
      const r = this.resultCountDown
      return r.hours + r.hours + r.seconds + r.minutes === 0
    }
  },
  filters: {
    complete (value) {
      value = parseInt(value)
      return value < 10 ? ('0' + value) : (value + '')
    }
  },
  methods: {
    getCompleted (timer) {
      let completed = this.$options.filters.complete(timer)
      return completed
    }
  }
}
</script>

<style lang="scss" scoped>
.countdown-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #666;
  width: 280px;
  background: #f5f5f5;
  margin-left: auto;
  font-size: 14px;
}
.schedules {
  display: flex;
}
.schedule {
  display: flex;
  margin-left: 12px;
}
.issue {
  text-align: right;
  padding: 5px 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  /*color: $primary;*/
}
.countdown {
  min-width: 35px;
  margin-left: 5px;
}

.wrapper {
  .closing-panel {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    .issue {
      padding: 0;
      font-size: 14px;
      color: #666;
      margin-right: 20px;
    }

    .closing-countdown {
      color: #333;
    }
  }
  .result-panel {
    display: flex;
    align-items: center;

    .cards-wrapper {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      font-size: 22px;
      color: #fff;
      .colon {
        color: #333;
        padding-right: 3px;
        padding-left: 3px;
      }
    }

    .card {
      width: 28px;
      height: 36px;
      line-height: 36px;
      border-radius: 4px;
      background-color: #333;
      text-align: center;
      padding: 3px 5px;
      + .card {
        margin-left: 5px;
      }
    }
  }
}
</style>
