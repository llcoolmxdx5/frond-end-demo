<template>
  <div class="home">
  	<Header></Header>
    <div class="rule-content">
      <div class="guize_menu">
        <ul>
          <li v-for="(item, index) in rulesData" :key="index">
            {{ item.game_name }}
          </li>
        </ul>
      </div>
      <div class="guize">
        <div class="guize_detail">
          <div class="container">
            <RulesHkl></RulesHkl>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import RulesHkl from '@/components/rules/hkl'
export default {
  name: 'home',
  data() {
  	return {
      selecte: 'hkl',
      rulesData: [
        {
          game_code: 'hkl',
          game_name: '香港六合彩'
        },
        {
          game_code: 'luckyk3',
          game_name: '幸运快3'
        },
        {
          game_code: 'mlaft',
          game_name: '幸运飞艇'
        }
      ]
  	}
  },
  computed: {
    
  },
 mounted () {
    // 初始化
  },
  watch: {
    
  },
  components: {
    Header,
    RulesHkl
  },
  methods: {
  	
  }
}
</script>

<!-- style cover -->
<style lang="scss">
@import '@/assets/css/vars.scss';
.rule-content {
  width: 1200px;
   margin: 0 auto;
  .guize_menu {
    width: 230px;
    height: auto;
    overflow: hidden;
    float: left;
    display: block!important;
    border: 1px solid #c2c2c2;
    background-color: #fff;
    margin-right: 30px;
    ul {
      width: 100%;
      height: auto;
      text-align: center;
      li {
        font-size: 14px;
        display: block;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #c2c2c2;
      }
      .selected {
        background-color: hsla(0,0%,85%,.92941);
      }
    }
  }
  .guize {
    width: 940px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }
  .guize_detail {
    width: 942px;
    background-color: rgb(255, 255, 255);
    display: inline-block;
    font-family: 微软雅黑;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(194, 194, 194);
    border-image: initial;
    .container {
      padding: 50px;
      margin-top: 30px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 922px;
      margin: 0 auto;
    }
  }
}

</style>


