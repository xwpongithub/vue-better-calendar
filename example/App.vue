<template>
  <div id="app">
    <!--<vue-better-calendar ref="calendar" mode="multi"/>-->
    <vue-better-calendar ref="calendar" mode="sign" :signedDates="signedDates"
    @select-sign-date="onSelectSignDate"/>
    <!--<vue-better-calendar ref="calendar" mode="single" v-model="singleDate"/>-->
    <!--<vue-better-calendar :disabledDates="disabledDates" ref="calendar" mode="multi" :limitBeginDate="[2018, 3, 22]" :limitEndDate="[2018, 3, 25]"/>-->
    <!--<vue-better-calendar :disabledDates="disabledDates" ref="calendar" :limitBeginDate="[2018, 3, 22]" :limitEndDate="[2018, 3, 25]"/>-->
    <!--<vue-better-calendar ref="calendar" :limitBeginDate="[2018, 3, 22]" :limitEndDate="[2018, 3, 25]"/>-->
    <!--<vue-better-calendar ref="calendar" v-model="range"/>-->
    <button @click="resetChoose">取消选择</button>
    <button @click="backToToday">回到今天</button>
    <button @click="sign">点击签到</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        signedDates: ['2018-02-28', '2018-03-01', '2018-03-05', '2018-03-24'],
        range: [[2017, 12, 1], [2019, 2, 16]],
        disabledDates: [[2018, 3, 23], [2018, 3, 24]],
        singleDate: [2018, 4, 24]
      }
    },
    methods: {
      resetChoose() {
        this.$refs.calendar.resetRangDate()
      },
      backToToday() {
        this.$refs.calendar.setToday()
      },
      onSelectSignDate(dates) {
        if (dates.status) {
          this.signedDates = dates.signedDates
        }
      },
      sign() {
        this.$refs.calendar.sign()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    padding:10px
    box-sizing:border-box
</style>
