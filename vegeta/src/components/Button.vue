<template>
  <button
    :class="classes"
    :disabled="disabled"
    :type="actionType">
    <cube-loading class="loading-icon" v-if="loading"/>
    <span v-else-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'primary'].includes(val)
    },
    disabled: Boolean,
    actionType: {
      type: String,
      default: 'submit'
    },
    loading: Boolean,
    mini: Boolean,
    plain: Boolean
  },
  computed: {
    classes () {
      return [
        'v-btn',
        {
          'v-btn_disabled': this.disabled,
          'v-btn_mini': this.mini,
          'v-btn_plain': this.plain
        },
        `v-btn_${this.type}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$vBtnHeight: 42px;
$vBtnFontSize: 18px;
$vBtnFontColor: #fff;
$vBtnActiveFontColor: rgba(255,255,255,.6);
$vBtnDisabledFontColor: rgba(255,255,255,.6);
$vBtnBorderRadius: 5px;

$vBtnDefaultFontColor: #000;
$vBtnDefaultActiveFontColor: rgba(0,0,0,.6);
$vBtnDefaultDisabledFontColor: rgba(0,0,0,.3);

$vBtnDefaultBg: #f8f8f8;
$vBtnDefaultActiveBg: #DEDEDE;
$vBtnDefaultDisabledBg: #F7F7F7;

$vBtnPrimaryBg: #488ded;
$vBtnPlainPrimaryColor: #488ded;
$vBtnPrimaryActiveBg: darken($vBtnPrimaryBg, 10%);
$vBtnPrimaryDisabledBg: #488ded;

.v-btn {
  position: relative;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  font-size: $vBtnFontSize;
  text-align: center;
  text-decoration: none;
  color: $vBtnFontColor;
  line-height: $vBtnHeight / $vBtnFontSize;
  border-radius: $vBtnBorderRadius;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-appearance: none;
  outline: 0;
  border-width: 0;
  overflow: hidden;

  &:after {
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, .2);
    transform: scale(.5);
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: $vBtnBorderRadius*2;
  }

  &_mini {
    display: inline-block;
    width: auto;
    padding: 0 1.32em;
    line-height: 2.3;
    font-size: 13px;
  }

  &_default {
    color: $vBtnDefaultFontColor;
    background-color: $vBtnDefaultBg;
    &.v-btn_plain {
      &:after {
        border-color: $vBtnDefaultFontColor;
      }
    }
    &:not(.v-btn_disabled):visited {
        color: $vBtnDefaultFontColor;
    }
    &:not(.v-btn_disabled):active {
        color: $vBtnDefaultActiveFontColor;
        background-color: $vBtnDefaultActiveBg;
    }
  }

  &_primary {
    background-color: $vBtnPrimaryBg;
    &.v-btn_plain {
      color: $vBtnPlainPrimaryColor;
      &:after {
        border-color: $vBtnPrimaryBg;
      }
    }
    &:not(.v-btn_disabled):visited {
        color: $vBtnFontColor;
    }
    &:not(.v-btn_disabled):active {
        color: $vBtnActiveFontColor;
        background-color: $vBtnPrimaryActiveBg;
    }
  }

  &_disabled {
    color: $vBtnDisabledFontColor;
    opacity: .5;
    &.v-btn_plain {
      &:after {
        border-color: $vBtnDisabledFontColor;
      }
    }
    &.v-btn_default {
        color: $vBtnDefaultDisabledFontColor;
        background-color: $vBtnDefaultDisabledBg;
    }
    &.v-btn_primary {
        background-color: $vBtnPrimaryDisabledBg;
    }
  }

  &_plain {
    background: transparent;
    &:after {
      content: " ";
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 0;
      border-width: 1px;
      border-style: solid;
      transform: scale(.5);
      transform-origin: 0 0;
      box-sizing: border-box;
      border-radius: $vBtnBorderRadius*2;
    }
  }
}

.loading-icon {
  vertical-align: middle;
  display: inline-block;
}
</style>
