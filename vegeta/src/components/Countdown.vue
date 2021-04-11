<template>
  <div class="countdown-panel">
    <p class="issue">{{realSchedule||schedule.issue_number}}</p>
    <div :class="['schedule', {'long':closeCountDown&&closeCountDown.days}]" v-if="schedule && schedule.issue_number">
      <div class="title">封盘</div>
      <span v-if="!closeCountDown" class="label red">···</span>
      <span v-else-if="!gameClosed" class="label red">
        <span v-if="closeCountDown.days > 0">{{closeCountDown.days}}天</span>
        <span v-if="closeCountDown.hours > 0">{{closeCountDown.hours | complete}}:</span>{{closeCountDown.minutes | complete}}:{{closeCountDown.seconds | complete}}
      </span>
      <span v-else class="label red">已封盘</span>
    </div>
    <div :class="['schedule', {'long':resultCountDown&&resultCountDown.days} ]" v-if="schedule && schedule.issue_number">
      <div class="title">开奖</div>
      <span v-if="!resultCountDown" class="label green">···</span>
      <span v-else-if="!realSchedule && !ended" class="label green">
        <span v-if="resultCountDown.days > 0">{{resultCountDown.days}}天</span>
        <span v-if="resultCountDown.hours > 0">{{resultCountDown.hours | complete}}:</span>{{resultCountDown.minutes | complete}}:{{resultCountDown.seconds | complete}}
      </span>
      <span v-else class="label red">已结束</span>
    </div>
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
      return value < 10 ? ('0' + value) : value
    }
  }
}
</script>
<style lang="scss" scoped>
.countdown-panel {
  flex:0 0 auto;
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
  height: 20px;
}
.issue {
  flex: 1;
  font-size: 13px;
  text-align: center;
  white-space: nowrap;
}
.countdown {
  font-size: 14px;
}
.schedule {
  text-align: center;
  flex: 1.25;
  .title {
    display: inline-block;
    color: #666;
    font-size: 13px;
  }
  .label {
    display: inline-block;
    margin-left: 2px;
    border-radius: 4px;
  }
}
@media screen and (max-width: 320px) {
  .issue {
    font-size: 12px;
  }
  .schedule.long {
    .label {
      margin-left: 0px;
      font-size: 13px;
      padding: 0 2px;
    }
  }
}
</style>
