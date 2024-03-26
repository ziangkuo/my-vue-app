<template>
    <div>
      <input type="file" @change="uploadFile"/>
      <button @click="submit">提交</button>
    </div>
  </template>
   
  <script>
  import axios from 'axios'
   
  export default {
    data() {
      return {
        file: null
      }
    },
    methods: {
      uploadFile(event) {
        this.file = event.target.files[0]
      },
   
      async submit() {
        if (!this.file) return
   
        // 创建 FormData 对象
        const formData = new FormData()
   
        // 添加文件到 FormData 对象
        formData.append('file', this.file)
   
        // 上传文件
        await axios.post('/upload', formData)
   
        // 提交后从服务器下载字幕
        const response = await axios.get('/download', { responseType: 'blob' })
   
        // 创建下载链接并触发下载
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'subtitle.txt') // 文件名
        document.body.appendChild(link)
        link.click()
      }
    }
  }
  </script>