<template>
  <div class="button" @click="audioStatus = !audioStatus">
    <audio ref="audio" :src="audio"></audio>
    <icon v-if="audioStatus" name="volume-up" scale="1"></icon>
    <icon v-else name="volume-off" scale="1"></icon>
  </div>
</template>

<script>
import 'vue-awesome/icons/volume-off'
import 'vue-awesome/icons/volume-up'

export default {
  name: 'AudioButton',
  data () {
    return {
      audio: require('../assets/img/win.mp3'),
      audioStatus: false
    }
  },
  methods: {
    play () {
      if (this.audioStatus) {
        this.$refs.audio.play()
      }
    }
  },
  watch: {
    '$store.state.isResultRefreshing' () {
      this.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  top: 3px;
  height: 30px;
  line-height: 30px;
  width: 30px;
  cursor: pointer;
  color: #666;
}
</style>
