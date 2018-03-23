<template>
  <div id="app">
    <vue-better-calendar ref="calendar"/>
    <button @click="resetChoose">取消选择</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      resetChoose() {
        this.$refs.calendar.resetRangDate()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    padding:10px
    box-sizing:border-box
</style>
