<template>
  <div class="vue-better-calendar">
    aaa
  </div>
</template>

<script>
  import * as utils from './utils/date-utils'
  import {pad} from './utils/utils'

  const COMPONENT_NAME = 'vue-better-calendar'

  const MULTI_MODE = 'multi'
  const RANGE_MODE = 'range'
  const SIGN_MODE = 'sign'

  const EVENT_SELECT_YEAR = 'select-year'
  const EVENT_SELECT_MONTH = 'select-month'
  const EVENT_NEXT = 'next'
  const EVENT_PREV = 'prev'

  export default {
    name: COMPONENT_NAME,
    props: {
      // 默认日期
      value: {
        type: Array,
        default() {
          return []
        }
      },
      // 日历模式
      mode: {
        type: String,
        default: MULTI_MODE,
        validator(value) {
          return [MULTI_MODE, RANGE_MODE, SIGN_MODE].indexOf(value) > -1
        }
      },
      // 开始选择日期
      beginDate: {
        type: Array,
        default() {
          return []
        }
      },
      // 结束选择日期
      endDate: {
        type: Array,
        default() {
          return []
        }
      },
      // 已经签过到的日期
      signedDates: {
        type: Array,
        default() {
          return []
        }
      },
      // 是否小于10补0
      isZeroPad: {
        type: Boolean,
        default: false
      },
      // 屏蔽的日期
      disabledDate: {
        type: Array,
        default() {
          return []
        }
      },
      // 是否显示农历
      showLunar: {
        type: Boolean,
        default: false
      },
      // 自定义星期名称
      weeks: {
        type: Array,
        default() {
          return ['日', '一', '二', '三', '四', '五', '六']
        }
      },
      // 自定义月份
      months: {
        type: Array,
        default() {
          return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        }
      },
      // 自定义事件
      // {'2018-2-28': 'wifeBirthday'}
      events: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        years: [],
        days: [],
        multiDays: [],
        year: 0,
        month: 0,
        day: 0,
        today: [],
        showYearPanel: false
      }
    },
    computed: {
      prevYear() {
        let value = this.year
        if (this.month - 1 < 0) {
          value--
        }
        return value
      },
      nextYear() {
        let value = this.year
        if (this.month + 1 > 11) {
          value++
        }
        return value
      }
    },
    created() {
      this.festival = {
        // 中国传统节日对应的日期
        lunar: {
          '1-1': '春节',
          '1-15': '元宵节',
          '2-2': '龙头节',
          '5-5': '端午节',
          '7-7': '七夕节',
          '7-15': '中元节',
          '8-15': '中秋节',
          '9-9': '重阳节',
          '10-1': '寒衣节',
          '10-15': '下元节',
          '12-8': '腊八节',
          '12-23': '祭灶节'
        },
        // 西方传统节日对应的日期
        gregorian: {
          '1-1': '元旦',
          '2-14': '情人节',
          '3-8': '妇女节',
          '3-12': '植树节',
          '4-5': '清明节',
          '5-1': '劳动节',
          '5-4': '青年节',
          '6-1': '儿童节',
          '7-1': '建党节',
          '8-1': '建军节',
          '9-10': '教师节',
          '10-1': '国庆节',
          '12-24': '平安夜',
          '12-25': '圣诞节'
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        if (this.value.length) {
          if (this.mode === RANGE_MODE || this.mode === MULTI_MODE) {
            this.year = parseInt(this.value[0][0])
            this.month = parseInt(this.value[0][1]) - 1
            this.day = parseInt(this.value[0][2])
            if (this.mode === RANGE_MODE) {
              let endYear = parseInt(this.value[1][0])
              let endMonth = parseInt(this.value[1][1]) - 1
              let endDay = parseInt(this.value[1][2])
              this.beginDate = [this.year, this.month, this.day]
              this.endDate = [endYear, endMonth, endDay]
            } else {
              this.multiDays = this.value
            }
          } else {
            this.year = parseInt(this.value[0])
            this.month = parseInt(this.value[1]) - 1
            this.day = parseInt(this.value[2])
          }
        }
        this.render(this.year, this.month)
      },
      render(year, month) {
        let firstDayOfMonth = new Date(year, month, 1).getDay() // 前一个月的第一天是星期几
        let lastDateOfMonth = new Date(year, month + 1, 0).getDate() // 当月最后一天
        let lastDayOfLastMonth = new Date(year, month, 0).getDate() // 前一个月的最后一天

        let selectedDates = this.value
        let i
        let line = 0
        let temp = []
        let nextMonthPushDays = 1
        for (i = 1; i <= lastDateOfMonth; i++) {
          let day = new Date(year, month, i).getDay()
          let k
          // 第一行
          if (day === 0) {
            temp[line] = []
          } else if (i === 1) {
            temp[line] = []
            k = lastDayOfLastMonth - firstDayOfMonth + 1
            for (let j = 0; j < firstDayOfMonth; j++) {
              let disabledDate = Object.assign({
                day: k,
                disabled: true
              },
              this._getLunarInfo(this.prevYear, this._getPrevMonth(true), k),
              this._getEvents(this.prevYear, this._getPrevMonth(true), k))
              temp[line].push(disabledDate)
              k++
            }
            console.log(temp[line])
          }
        }
      },
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
        let now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        this.render(this.year, this.month)
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
      },
      // 获取农历信息
      _getLunarInfo(year, month, day) {
        let lunarInfo = utils.solar2lunar(year, month, day)
        let lunarValue = lunarInfo.IDayCn
        let isLunarFestival = false
        let isGregorianFestival = false
        if (this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay]) {
          lunarValue = this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay]
          isLunarFestival = true
        } else if (this.festival.gregorian[month + '-' + day]) {
          lunarValue = this.festival.gregorian[month + '-' + day]
          isGregorianFestival = true
        }
        return {
          lunar: lunarValue,
          isLunarFestival: isLunarFestival,
          isGregorianFestival: isGregorianFestival
        }
      },
      _getPrevMonth(isString) {
        let value = this.month
        if (this.month - 1 < 0) {
          value = 11
        } else {
          value--
        }
        // 用于显示目的（一般月份是从0开始的）
        if (isString) {
          return value + 1
        }
        return value
      },
      _getNextMonth(isString) {
        let value = this.month
        if (this.month + 1 > 11) {
          value = 0
        } else {
          value++
        }
        // 用于显示目的（一般月份是从0开始的）
        if (isString) {
          return value + 1
        }
        return value
      },
      // 获取自定义事件
      _getEvents(year, month, day) {
        if (!Object.keys(this.events).length) return
        let eventName = this.events[`${year}-${month}-${day}`]
        let data = {}
        if (eventName) {
          data.eventName = eventName
        }
        return data
      }
    },
    watch: {
      events() {
        this.$nextTick(() => {
          this.render(this.year, this.month)
        })
      },
      value: {
        handler() {
          this.init()
        },
        deep: true
      },
      mode() {
        this.init()
      },
      signedDates: {
        handler() {
          this.$nextTick(() => {
            this.render(this.year, this.month)
          })
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
