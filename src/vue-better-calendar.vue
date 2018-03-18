<template>
  <div class="vue-better-calendar">
    aaa
  </div>
</template>

<script>
  import * as utils from './utils/date-utils'
  import {pad} from './utils/utils'

  console.log(utils.lYearDays(1987))
  console.log(utils.leapMonth(1987))
  console.log(utils.leapDays(1987))
  console.log(utils.monthDays(1987, 1))
  console.log(utils.solarDays(2016, 2))
  console.log(utils.toGanZhiYear(2018))
  console.log(utils.toAstro(6, 14))
  console.log(utils.toGanZhi(2))
  console.log(utils.getTerm(1987, 3))
  console.log(utils.toChinaMonth(1))
  console.log(utils.toChinaDay(9))
  console.log(utils.getAnimal(2017))
  console.log(utils.solar2lunar(1987, 11, 1))
  console.log(utils.lunar2solar(1993, 1, 8))

  const COMPONENT_NAME = 'vue-better-calendar'

  const EVENT_SELECT_YEAR = 'select-year'
  const EVENT_SELECT_MONTH = 'select-month'
  const EVENT_NEXT = 'next'
  const EVENT_PREV = 'prev'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        years:[],
        year: 0,
        month: 0,
        day: 0,
        days: [],
        showYearPanel: false
      }
    },
    computed: {
      prevYear() {
        let value = this.year
        if (this.month - 1 < 0){
          value--
        }
        return value
      },
      prevMonth(isString) {
        let value = this.month
        if (this.month - 1 < 0) {
          value = 11
        } else {
          value--
        }
        // 用于显示目的（一般月份是从0开始的）
        if(isString){
          return value + 1
        }
        return value
      },
      nextYear(){
        let value = this.year
        if (this.month + 1 > 11) {
          value++
        }
        return value
      },
      nextMonth(isString) {
        let value = this.month
        if (this.month + 1 > 11) {
          value = 0
        } else {
          value++
        }
        // 用于显示目的（一般月份是从0开始的）
        if(isString){
          return value + 1
        }
        return value
      }
    },
    methods: {
      render(year, month) {},
      // 上月
      prev(e) {
        if (this.month === 0) {
          this.month = 11
          this.year = parseInt(this.year) - 1
        } else {
          this.month = parseInt(this.month) - 1
        }
        this._emitSelectMonthEvent(EVENT_PREV)
      },
      //  下月
      next() {
        if (this.month === 11) {
          this.month = 0
          this.year = parseInt(this.year) + 1
        } else {
          this.month = parseInt(this.month) + 1
        }
        this._emitSelectMonthEvent(EVENT_NEXT)
      },
      changeYear() {
        if (this.showYearPanel) {
          this.showYearPanel = false
          return
        }
        this.showYearPanel = true
        this.years = []
        for (let i = ~~this.year - 10; i < ~~this.year + 10; i++) {
          this.years.push(i)
        }
      },
      selectYear(year) {
        this.showYearPanel = false
        this.year = year
        this.render(this.year, this.month)
        this.$emit(EVENT_SELECT_YEAR, year)
      },
      setToday() {
        let now = new Date();
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        this.render(this.year,this.month)
        // 遍历当前日找到选中
        this.days.forEach(item => {
          let day = item.find(vv => vv.day === this.day && !vv.disabled)
          day && (day.selected = true)
        })
      },
      _emitSelectMonthEvent(eventType) {
        this.render(this.year, this.month)
        const currentMonth = this.month + 1
        this.$emit(EVENT_SELECT_MONTH, currentMonth, this.year)
        this.$emit(eventType, currentMonth, this.year)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
