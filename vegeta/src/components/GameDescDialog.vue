<template>
  <el-dialog
    :title="currentGame.display_name + '游戏介绍'"
    :visible="visible"
    @update:visible="updateDialogVisible"
    custom-class="game-desc-dialog"
    width="70%"
    top="10vh"
    append-to-body>
    <div class="main">
      <!-- <h2 class="rules-sub-title" v-if="currentPlaySettings && currentPlaySettings.length">游戏资讯</h2> -->
      <!-- <el-table v-if="currentPlaySettings && currentPlaySettings.length" class="m-b-lg" v-loading="loading" :data="currentPlaySettings" stripe>
        <el-table-column :label="''" prop="display_name">
        </el-table-column>
        <el-table-column label="赔率" prop="odds">
        </el-table-column>
        <el-table-column label="反水" prop="return_rate">
        </el-table-column>
        <el-table-column label="单注最低金额">
          <template slot-scope="scope">
            <span>{{ scope.row.min_per_bet | currency('￥')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="单注最高金额">
          <template slot-scope="scope">
            <span>{{ scope.row.max_per_bet | currency('￥')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="单期最低金额">
          <template slot-scope="scope">
            <span>{{ scope.row.max_per_draw | currency('￥')}}</span>
          </template>
        </el-table-column>
      </el-table> -->
      <h2 class="rules-sub-title">具体规则</h2>
      <template>
        <template>
          <component :is="`${currentGame.game_code}`"
            :currentType="currentGame.game_code"
            :gameName="currentGame.display_name"/>
        </template>
      </template>
    </div>
  </el-dialog>
</template>

<script>
// import {
//   fetchPlaySetting,
//   getGameIntro
// } from '../../api'
import hkl from './rules/hkl'
import luckyk3 from './rules/luckyk3'
import mlaft from './rules/mlaft'

// import timeLottery from './rules/templates/time-lottery.vue'
import Vue from 'vue'
// import { each } from 'lodash'

export default {
  props: {
    visible: Boolean,
    currentGame: Object
  },

  name: 'gameIntros',

  components: {
    hkl,
    luckyk3,
    mlaft
  },

  data () {
    return {
      // currentPlaySettings: [],
      // loading: false,
      introLoading: false,
      // setting: {},
      // intro: {},
      // hasTemplateGameTypes: ['k3', 'time-lottery', 'mark6', '11pick5', 'pk10']
    }
  },

  watch: {
    // 'currentGame': {
    //   handler () {
    //     this.fetchPlaySetting()
    //     this.initIntros()
    //   },
    //   immediate: true
    // }
  },

  methods: {
    updateDialogVisible (visible) {
      this.$emit('update:visible', visible)
    },
    // initIntros () {
    //   this.introLoading = true
    //   getGameIntro(this.currentGame.code).then((res) => {
    //     const setting = res.find(i => i.id === this.currentGame.id)
    //     this.intro = setting || {}
    //     if (setting) {
    //       this.generate()
    //     }
    //   }).catch(() => {}).finally(() => {
    //     this.introLoading = false
    //   })
    // },
    // generate () {
    //   Vue.component(`manual-${this.currentGame.code}`, {
    //     functional: true,
    //     props: {
    //       gameName: {
    //         type: String,
    //         required: true
    //       },
    //       currentType: {
    //         type: String,
    //         required: true
    //       },
    //       intro: {
    //         type: Object,
    //         required: true
    //       }
    //     },
    //     render: function (h, context) {
    //       const { intro, currentType, gameName } = context.props
    //       const firstOpenTime = intro.schedule_setting.first_open_time
    //       const lastOpenTime = intro.schedule_setting.last_open_time
    //       const drawInterval = intro.schedule_setting.draw_interval
    //       const closeBefore = intro.schedule_setting.close_before
    //       const numsOfSchedulesPerDay = intro.schedule_setting.num_of_schedules_per_day
    //       const description = intro.description
    //       const scheduleDesc = `${gameName}从北京时间（GMT+8）每天 ${firstOpenTime}开到 ${lastOpenTime}，每 ${drawInterval} 开一次奖，开奖前${closeBefore}封盘，每天共开${numsOfSchedulesPerDay}期。`
    //       const site = intro.official_link ? `${intro.official_website || ''} ${intro.official_link}` : ''

    //       const getComponent = (type) => {
    //         switch (type) {
    //           case 'k3':
    //             return k3
    //           case 'time-lottery':
    //             return timeLottery
    //           case 'mark6':
    //             return markSix
    //           case '11pick5':
    //             return elevenPickFive
    //           case 'pk10':
    //             return pkTen
    //           default:
    //             return null
    //         }
    //       }

    //       return h('section', { 'class': 'rule-details' }, [
    //         h('p', { 'class': 'm-b' }, site),
    //         h('p', { 'class': 'm-b' }, scheduleDesc),
    //         h('p', { 'class': 'm-b' }, description),
    //         h(getComponent(currentType))
    //       ])
    //     }
    //   })
    // },
    // fetchPlaySetting () {
    //   this.currentPlaySettings = []
    //   this.loading = true

    //   fetchPlaySetting(this.currentGame.id).then(playSettings => {
    //     each(playSettings, (item) => {
    //       item.return_rate = item.return_rate + '%'
    //     })
    //     this.currentPlaySettings = playSettings
    //     this.loading = false
    //   }, () => {
    //     this.loading = false
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

.el-dialog__wrapper /deep/ .game-desc-dialog.el-dialog {
  max-width: 1200px;
}

.main {
  height: calc(80vh - 54px);
  overflow-y: auto;
}

.rules-sub-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.rules-container {
  height: 100%;
  min-height: 100vh;
}

.main /deep/ .rule-details {
  line-height: 1.6;

  .warn {
    color: $watermelon;
  }

  .bold {
    font-weight: bolder;
  }

  h3 {
    margin-top: 10px;
    font-weight: bold;
  }

  section {
    margin: 10px;
  }

  ul {
    margin: 10px auto;
  }

  li {
    margin: 10px 0;
    list-style: initial;
    margin-left: 10px;
    &.pure {
      list-style: none;
      margin-left: 0;
    }
  }

  b {
    font-weight: bold;
  }
}
</style>
