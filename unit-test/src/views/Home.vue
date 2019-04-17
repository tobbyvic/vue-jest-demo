<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="showUploadModal">上传文件</button>

    <div class="upload-modal" v-if="uploadModalFlag">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      uploadModalFlag: false
    }
  },
  methods: {
    showUploadModal() {
      this.uploadModalFlag = !this.uploadModalFlag;
    }
  },
}
</script>
<style lang="scss" scoped>
  .upload-modal {
    position: fixed;
    width: 400px;
    height: 400px;
    background: red;
  }
</style>
