const fse = require('fs-extra')
const path = require('path')
const multiparty = require('multiparty')

const UPLOAD_DIR = path.resolve(__dirname, '..', 'target')

const resolvePost = req => new Promise(resolve => {
  let chunk = ''
  req.on('data', data => {
    chunk += data
  })
  req.on('end', () => {
    resolve(JSON.stringify(chunk))
  })
})

const mergeFileChunk = async (filePath, filename) => {
  const chunkDir = `${UPLOAD_DIR}/${filename}`
  const chunkPaths = await fse.readdir(chunkDir)
  await fse.writeFile(filePath, '')
  chunkPaths.forEach(chunkPath => {
    fse.appendFileSync(filePath, fse.readdirSync(`${chunkDir}/${chunkPath}`))
    fse.unlinkSync(`${chunkDir}/${chunkPath}`)
  })
  fse.rmdirSync(chunkDir) // 合并后删除保存切片的目录
}

module.exports = class {
  async handleMerge (req, res) {
    const data = await resolvePost(req)
    const { filename } = data
    const filePath = `${UPLOAD_DIR}/${filename}`
    await mergeFileChunk(filePath, filename)
    res.end(
      JSON.stringify({
        code: 0,
        message: 'file merged success'
      })
    )
  }
  async handleFormData (req, res) {
    const multipart = new multiparty.Form()
    multipart.parse(req, async (err, fields, files) => {
      if (err) return
      const [chunk] = files.chunk
      const [hash] = fields.filename
      const [filename] = fields.filename
      const chunkDir = `${UPLOAD_DIR}/${filename}`

      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }
      await fse.move(chunk.path, `${chunkDir}/${hash}`)
      res.end('received file chunk')
    })
  }
}
