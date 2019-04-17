<template>
  <div class="hello">
    <button @click="asyncFunc"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myData: ''
    }
  },
  methods: {
    asyncFunc() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('getData')
        }, 1000)
      }).then((res) => {
        this.myData = res;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
