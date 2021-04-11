<template>
  <div class="home">
  	<Header></Header>
    <div class="mainContent" :style="{minHeight: resultsHeight + 'px'}">
      <div class="contenter">
        <div class="middleBox">
          <h3 class="zoneTitle">官方彩种</h3>
          <div class="lotteryListTable">
            <div class="lotteryListHead">
              <ul>
                <li class="cz">彩种</li>
                <li class="kjhm">期数</li>
                <li class="kjsj">开奖号码</li>
                <li class="czlast">操作</li>
              </ul>
            </div>
            <ul class="lotteryListBody">
              <li class="ltItem" v-for="(item, index) in latestResultMap">
                <div class="ltIntro cz" :key="index">
                  <div :class="`lotteryPic ${index}`"></div>
                  <div class="lotteryName">
                    <div class="title">
                      {{ item.display_name }}
                    </div>
                    <div class="more" @click="gameRules(item)">
                      <i class="el-icon-warning-outline"></i>游戏介绍
                    </div>
                  </div>
                </div>
                <div class="kajianhao kjhm numbox">
                  {{ item.issue_number }} 期
                </div>
                <div class="openTime kjsj">
                  <!-- {{ item.result_str }} -->
                  <game-result :game-code="item.game_code"/>
                </div>
                <div class="czlast">
                  <router-link
                  :to="{
                    name: 'History',
                    query: {
                      gameCode: item.game_code,
                      typeCode: item.game_type.code
                    }
                  }">
                    历史开奖
                    <i class="el-icon-arrow-right"></i>
                  </router-link>
                </div>
              </li>
            </ul>
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
import GameResult from '@/components/GameResult'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
  	return {
      gameDescVisible: false,
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
    ...mapState([
      'latestResultMap',
    ]),
    resultsHeight () {
      return (document.documentElement.clientHeight || document.body.clientHeight) - 450
    }
  },
  mounted () {
  },
  watch: {
    
  },
  components: {
    Header,
    GameDescDialog,
    Countdown,
    GameResult,
    Footer
  },
  methods: {
    gameRules(val) {
      if(val.latest_result) {
        this.currentGame = val.latest_result
      } else {
        this.currentGame = val
      }
      this.gameDescVisible = true
    }
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.mainContent {
  width: 100%;
  padding-top: 20px;
  margin-bottom: 40px;
  .contenter {
    width: 1200px;
    margin: 0 auto;
  }
  .middleBox {
    background: #fff;
    width: 1200px;
    margin-top: 20px;
    padding-bottom: 55px;
    border-top: 2px solid #d41f2b;
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
    width: 149px;
    line-height: 100px;
    cursor: pointer;
    text-align: center;
    float: left;
    font-size: 14px;
    color: #488ded;
    a {
      color: #488ded;
    }
  }
  .lotteryListBody {
    .ltItem {
      clear: both;
      height: 100px;
      display: block;
      margin-top: 1px;
    }
    .liItem > div {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    & > li:nth-child(odd) {
      background: #f9f9f9;
    }
    /*& > li:nth-child(even) {
      background: #f5f5f5;
    }*/
    /*& > li:first-child {
      padding-top: 20px;
    }*/
    .ltIntro {
      /*padding: 15px 0 15px 10px;*/
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
      margin-top: 10px;
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
        margin-top: 18px;
        font-size: 19px;
        color: #666;
      }
      .more {
        margin-top: 16px;
        color: #488ded;
        cursor: pointer;
        font-size: 14px;
      }
    }
    .kajianhao {
      width: 200px;
      line-height: 100px;
      text-align: center;
      /*padding: 13.1px 0 0;*/
      height: 100%;
      color: #999;
    }
    .openTime {
      height: 100%;
      /*padding: 15px 0 15px 10px;*/
    }
    .czlast {
      width: 130px;
      height: 100%;
    }
  }
}
</style>


