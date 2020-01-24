/* eslint-disable no-unused-vars */
<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload" type="primary">上传</el-button>
  </div>
</template>

<script>
const LENGTH = 10
export default {
  data () {
    return {
      container: {
        file: null,
        data: []
      }
    }
  },
  methods: {
    handleFileChange (e) {
      let file = e.target.file
      if (!file) return
      Object.assign(this.$data, this.options.data())
      this.container.file = file
    },
    createFileChunk (file, length = LENGTH) {
      // 生成切片
      const fileChunkList = []
      const chunkSize = Math.ceil(file.size / length)
      let cur = 0
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + chunkSize) })
        cur += chunkSize
      }
      return fileChunkList
    },
    async uploadChunks () {
      // 上传切片
      const requestList = this.data.map(({ chunk, hash }) => {
        const formData = new FormData() // https://www.jianshu.com/p/e984c3619019
        formData.append('chunk', chunk)
        formData.append('hash', hash)
        formData.append('filename', this.container.file.name)
        return { formData }
      }).map(async ({ formData }) => {
        this.request({
          url: 'http://localhost:3000',
          data: formData
        })
      })
      await Promise.all(requestList)
      await this.mergeRequest()
    },
    async mergeRequest () {
      await this.request({
        url: 'http://localhost:3000/merge',
        headers: {
          'content-type': 'application/json'
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      })
    },
    async handleUpload () {
      if (!this.container.file) return
      const fileChunkList = this.createFileChunk(this.container.file)
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + '-' + index // 文件名 + 数组下标
      }))
    },
    request ({ url, method = 'post', data, headers = {}, requestList }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resolve({ data: e.target.response })
        }
      })
    }
  }
}
</script>
