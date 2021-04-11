<template>
  <div
    class="cube-select"
    :class="{ 'cube-select_disabled': disabled }"
    :title="title"
    :value="value"
    @click="showDatePicker">
    <span v-if="value" class="cube-select-text">{{ value }}</span>
    <span v-else class="cube-select-placeholder">{{ placeholder }}</span>
    <i class="cube-select-icon"></i>
  </div>
</template>
<script>
export default {
  name: 'DateSelector',
  props: {
    value: String,
    title: String,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    minDate: {
      type: Date,
      default: () => new Date(2010, 0, 1)
    },
    maxDate: {
      type: Date,
      default: () => {
        const nowYear = new Date().getFullYear()
        return new Date(nowYear + 5, 11, 31)
      }
    },
    zIndex: {
      type: Number,
      default: 100
    },
    columnCount: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    createDatePicker () {
      let obj = {
        min: this.minDate,
        max: this.maxDate,
        value: this.value ? new Date(this.value) : new Date(),
        format: {
          year: 'YYYY',
          month: 'MM',
          date: 'DD'
        },
        onSelect: this.selectHandle,
        zIndex: this.zIndex,
        columnCount: this.columnCount,
        cancel: () => { this.visible = false },
        select: () => { this.visible = false }
      }

      if (this.visible) {
        this.datePicker.$updateProps(obj)
        return
      }
      this.visible = true

      this.datePicker = this.$createDatePicker(obj)
    },
    showDatePicker () {
      if (this.disabled) {
        return
      }
      this.createDatePicker()
      this.datePicker.show()
    },
    selectHandle (date, selectedVal, selectedText) {
      let format = ['YYYY', 'MM', 'DD'].slice(0, this.columnCount).join('-')
      this.$emit('input', this.$moment(date).format(format))
    }
  }
}
</script>
