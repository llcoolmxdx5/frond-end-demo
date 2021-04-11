<template>
  <div>
    <h3 class="warn">1、[和值] 点数，大小单双。</h3>
    <ul>
      <li><span class="warn">大：</span> 开奖号码的总和大于等于11（11－18），即为中奖。注：开出豹子则通吃。</li>
      <li><span class="warn">小：</span> 开奖号码的总和小于等于10（3－10），即为中奖。注：开出豹子则通吃。</li>
      <li><span class="warn">单：</span> 开奖号码的总和为单数，即为中奖。</li>
      <li><span class="warn">双：</span> 开奖号码的总和为双数，即为中奖。</li>
      <li><span class="warn">点数：</span>开奖号码的总和为所选的和值，即为中奖。</li>
    </ul>
    <h3 class="warn">2、[三连号]</h3>
    <ul>
      <li><span class="warn">三连号通选：</span> 对所有3码相连的组合（123、234、345、456）进行投注，开出任一组合即为中奖。</li>
      <li><span class="warn">三连号单选：</span> 对任意一个3码相连的组合（123、234、345、456）进行投注，所选组合开出即中奖。</li>
    </ul>
    <h3 class="warn">3、[三同号]</h3>
    <ul>
      <li><span class="warn">三同号通选：</span> 对所有3码相同的组合（111、222、333、444、555、666）进行投注，开出任一组合即为中奖。</li>
      <li><span class="warn">三同号单选：</span> 对任意一个3码相同的组合（111、222、333、444、555、666）进行投注，所选组合开出即中奖。</li>
    </ul>
    <h3 class="warn">4、[二同号]</h3>
    <ul>
      <li><span class="warn">二同号：</span>开奖号码中三个号码内出现两个相同号码，即为中奖。豹子将视为不中奖。</li>
    </ul>
    <h3 class="warn">5、[跨度]</h3>
    <ul>
      <li><span class="warn">大：</span> 开奖号码中，最大数减去最小数结果为3、4、5，即为中奖</li>
      <li><span class="warn">小：</span> 开奖号码中，最大数减去最小数结果为0、1、2，即为中奖</li>
      <li><span class="warn">单：</span> 开奖号码中，最大数减去最小数结果为1、3、5，即为中奖</li>
      <li><span class="warn">双：</span> 开奖号码中，最大数减去最小数结果为0、2、4，即为中奖</li>
      <li><span class="warn">点数：</span>开奖号码中，最大数减去最小数结果为所选点数，即为中奖</li>
    </ul>
    <h3 class="warn">6、[牌点]</h3>
    <ul>
      <li><span class="warn">大：</span> 开奖号码相加，若个位数为6-9或者0，即为中奖。</li>
      <li><span class="warn">小：</span> 开奖号码相加，若个位数为1-5，即为中奖。</li>
      <li><span class="warn">单：</span> 开奖号码相加，若个位数为单数，即为中奖。</li>
      <li><span class="warn">双：</span> 开奖号码相加，若个位数为双数，即为中奖。</li>
      <li><span class="warn">点数：</span> 开奖号码相加，结果为所选点数，即为中奖。</li>
    </ul>
    <h3 class="warn">7、[不出号码]</h3>
    <ul>
      <li><span class="warn">不出号码：</span>开奖号码中不存在你所选数字，即为中奖。</li>
    </ul>
    <h3 class="warn">8、[必出号码]</h3>
    <ul>
      <li><span class="warn">必出号码：</span>开奖号码中存在你所选数字，即为中奖。</li>
    </ul>
    <h3 class="warn">9、[六猴]</h3>
    <ul>
      <li><span class="warn">猴一：</span>三颗骰子任两颗相同，另外一颗是一点，即为猴一，例如：122、133。</li>
      <li><span class="warn">猴二：</span>三颗骰子任两颗相同，另外一颗是二点，即为猴二，例如：112、233。</li>
      <li><span class="warn">猴三：</span>三颗骰子任两颗相同，另外一颗是三点，即为猴三，例如：113、344。</li>
      <li><span class="warn">猴四：</span>三颗骰子任两颗相同，另外一颗是四点，即为猴四，例如：114、455。</li>
      <li><span class="warn">猴五：</span>三颗骰子任两颗相同，另外一颗是五点，即为猴五，例如：115、566。</li>
      <li><span class="warn">猴六：</span>三颗骰子任两颗`相同，另外一颗是六点，即为猴六，例如：116、226。</li>
      <li><span class="warn">天猴：</span>三颗骰子分别为4,5,6时，即为天猴。</li>
      <li><span class="warn">地猴：</span>三颗骰子分别为1,2,3时，即为地猴。</li>
      <li><span class="warn">無猴：</span>除天候、地猴外，三个骰子数字不同，即为無猴。</li>
      <li>注：若三粒骰子平面点数相同（豹子），以上皆视为不中奖。</li>
    </ul>
    <h3 class="warn">10、[长牌]</h3>
    <ul>
      <li><span class="warn">长牌：</span>开奖结果任两码与投注组合相同，即为中奖。</li>
      <li>如开奖号码为1、2、3、则投注长牌12、长牌23、长牌13皆视为中奖。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'K3RuleTemplate'
}
</script>
