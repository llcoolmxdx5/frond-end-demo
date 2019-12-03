<template>
  <div class="item-container">
    <div class="photo">
      <img :src="item.img | replaceUrl" alt width="64" height="90" />
    </div>
    <div class="content">
      <div class="title">
        <h1 class="line-elipse">{{item.nm}}</h1>
        <span :class="item.version" class="version"></span>
        <span class="preShow" v-if="item.preShow"></span>
      </div>
      <div class="score" v-if="item.globalReleased  && item.sc">
        <span>观众评&nbsp;</span>
        <span class="grade">{{ item.sc }}</span>
      </div>
      <div class="score" v-else-if="item.globalReleased && !item.sc">
        <span>暂无评分</span>
      </div>
      <div class="score" v-else>
        <span class="grade">{{ item.wish }}</span>
        <span>&nbsp;人想看</span>
      </div>
      <p class="line-elipse" v-if="item.star">主演: {{ item.star }}</p>
      <p>{{ item.showInfo }}</p>
    </div>
    <div :class="item.globalReleased ? 'btn' : 'btn1'">
      <span>{{item.globalReleased ? "购票" : "预售" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieItem",
  props: ["item"]
};
</script>

<style lang="scss">
@import "style/mixin.scss";
.item-container {
  display: flex;
  width: 344px;
  height: 90px;
  padding: 12px 14px 12px 15px;
  @include border-1px(#d8d8d8);
  &:after {
    left: 90px;
    right: 15px;
  }
  .photo {
    width: 64px;
    margin-right: 10px;
  }
  .content {
    width: 203px;
    padding-right: 5px;
    .title {
      display: flex;
      h1 {
        font-size: 17px;
        line-height: 1.5;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
      }
      .version,
      .preShow {
        background-size: contain;
        background-repeat: no-repeat;
        height: 14px;
        display: inline-block;
        margin-top: 5px;
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        margin-right: 3px;
      }
      .imax.v3d {
        width: 43px;
        background-image: url("../../../assets/img/v3dimax.png");
      }
      .imax.v2d {
        width: 43px;
        background-image: url("../../../assets/img/v2dimax.png");
      }
      .v3d {
        background-image: url("../../../assets/img/3d.png");
      }
      .preShow {
        width: 23px;
        background-image: url("../../../assets/img/pre-show.png");
      }
    }
    span {
      display: inline;
    }
    .score {
      margin-top: 7px;
      width: 203px;
      span {
        color: #666;
      }
      .grade {
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
      }
    }
    p {
      margin-top: 7px;
      font-size: 13px;
      line-height: 15px;
      color: #666;
    }
  }
  .btn,
  .btn1 {
    width: 47px;
    font-size: 12px;
    height: 27px;
    margin: auto;
    background-color: #f03d37;
    text-align: center;
    border-radius: 4px;
    span {
      color: #fff;
      line-height: 28px;
    }
  }
  .btn1 {
    background-color: #3c9fe6;
  }
  .line-elipse {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
