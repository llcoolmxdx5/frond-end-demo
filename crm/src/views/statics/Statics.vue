<template>
  <div class="stat-wrapper">
    <div id="polyline" ref="polyline" class="polyline"></div>
    <div id="pie" class="pie"></div>
  </div>
</template>

<script>
import ECharts from "echarts";
export default {
  name: "Statics",
  data() {
    return {
      pielist: []
    };
  },
  methods: {
    initBar() {
      var myChart = ECharts.init(this.$refs.polyline);
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    initPie() {
      var myChart = ECharts.init(document.getElementById("pie"));
      let option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.pielist,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  async mounted() {
    this.initBar();
    let rs = await this.$http.get("/api/stat/getlist");
    this.pielist = rs.data.list;
    this.$nextTick(() => {
      this.initPie();
    });
  }
};
</script>
<style lang="scss" scoped>
.stat-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .polyline {
    width: 400px;
    height: 400px;
  }
  .pie {
    width: 400px;
    height: 400px;
    margin-left: 10px;
  }
}
</style>

