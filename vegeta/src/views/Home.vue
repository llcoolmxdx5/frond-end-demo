<template>
  <div class="home">
  	<Header></Header>
    <div class="mainContent" :style="{minHeight: resultsHeight + 'px'}">
      <div class="contenter">
        <div class="middleBox">
          <h3 class="zoneTitle">官方彩种</h3>
          <div class="lotteryListTable">
            <ul class="lotteryListBody">
              <li class="ltItem" v-for="(item, index) in latestResultMap">
                <router-link
                  :to="{
                    name: 'History',
                    query: {
                      gameCode: item.game_code,
                      typeCode: item.game_type.code
                    }
                  }">
                  <div class="ltIntro cz" :key="index">
                    <div class="lotteryName">
                      {{ item.display_name }}
                    </div>
                    <div class="numbox">当前期数: <span class="red"> &nbsp;{{ item.issue_number }}</span>  期</div>
                  </div>
                  <div class="game-result">
                    <game-result :result="item" /> 
                  </div>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import GameResult from '@/components/GameResult'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
  	return {
  	}
  },
  computed: {
    ...mapState([
      'latestResultMap',
    ]),
    resultsHeight () {
      return (document.documentElement.clientHeight || document.body.clientHeight) - 150
    }
  },
  mounted () {
  },
  watch: {
    
  },
  components: {
    Header,
    GameResult
  },
  methods: {
    
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.mainContent {
  width: 100%;
  margin-bottom: 40px;
  .contenter {
    width: 100%;
    margin: 0 auto;
  }
  .middleBox {
    background: #f0f0f0;
    width: 100%;
    padding-bottom: 55px;
    border-top: 2px solid #d41f2b;
  }
  .zoneTitle {
    float: left;
    font-size: 16px;
    color: #f73b32;
    font-weight: 400;
    margin: 10px 15px;
  }
  .lotteryListTable {
    margin: 0 auto;
    clear: both;
    width: 96%;
  }
  .cz {
    width: 100%;
    float: left;
  }
  .kjsj {
    float: left;
  }
  .czlast {
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
    clear: both;
    padding: 0;
    .ltItem {
      clear: both;
      height: 140px;
      display: block;
      background: rgb(255, 255, 255);
      margin-top: 16px;
      border: 1px solid #ccc;
    }
    .ltItem a {
      height: 100%;
      display: block;
    }
    .liItem > div {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    .ltIntro {
      text-align: left;
      height: 70px;
      line-height: 60px;
    }
    .game-result {
      width: 100%;
      clear: both;
    }
    .lotteryPic {
      display: inline-block;
      width: 30%;
      height: 100%;
      float: left;
      vertical-align: middle;
      background-size: cover;
      margin-left: 4%;
      margin-top: 20px;
    }
    .luckyk3 {
      background-image: url('../assets/img/luckyk3.png');
      background-size: 80px 80px;
    }
    .mlaft {
      background-image: url('../assets/img/mlaft.png');
      background-size: 80px 80px;
      background-repeat: no-repeat;
    }
    .hkl {
      background-image: url('../assets/img/hkl.png');
      background-size: 80px 80px;
    }
    .lotteryName {
      display: inline-block;
      vertical-align: middle;
      width: 30%;
      height: 100%;
      margin-left: 10px;
      color: #656565;
      float: left;
      font-size: 18px;
      text-align: left;
    }
    .numbox {
      height: 100%;
      float: right;
      font-size: 13px;
      width: 60%;
      color: #333;
    }
    .kajianhao {
      text-align: center;
      color: #999;
      text-align: left;
      text-indent: 1rem;
    }
    .openTime {
    }
    .czlast {
      height: 100%;
    }
  }
}
/deep/.balls-text {
  display: none;
}
</style>


