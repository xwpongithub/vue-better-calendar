<template>
  <div class="vue-better-calendar">

    <div class="calendar-header">
      <div class="calendar-ctl">

        <div class="calendar-btn calendar-btn-prev" @click.stop="prev">
          <svg width="20" height="20" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g class="transform-group">
              <g transform="scale(0.015625, 0.015625)">
                <path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" :fill="ctlColor"></path>
              </g>
            </g>
          </svg>
        </div>

        <div class="calendar-ctl-month" @click.stop="changeYear">
          <div class="month">
            <div class="select-month-panel" :style="{top: `-${month * 20}px`}">
              <ul>
                <li class="item" v-for="m in months">{{m}}</li>
              </ul>
            </div>
          </div>
          <div class="year">
            <span>{{year}}</span>
          </div>
        </div>

        <div class="calendar-btn calendar-btn-next" @click.stop="next">
          <svg width="20" height="20" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g class="transform-group">
              <g transform="scale(0.015625, 0.015625)">
                <path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z" :fill="ctlColor"></path>
              </g>
            </g>
          </svg>
        </div>

      </div>
    </div>

    <div class="calendar-body">
      <div class="calendar-weeks">
        <ul>
          <li v-for="weekday in weeks" class="weekday">
            <span>{{weekday}}</span>
          </li>
        </ul>
      </div>

      <div class="calendar-dates" :class="{'has-line': hasLine}">

        <div class="date-row" v-for="(dates, k1) in days">
           <ul>
             <li @click.stop="selectDate(k1, k2)" ref="dayItem" :style="styleObj(date)" v-for="(date,k2) in dates" class="calendar-day" :class="[{'is-weekend': k2 === 0 || k2 === 6}, getDateCls(date)]">
               <template v-if="!date.disabled">
                 <p class="text text-day" :style="{lineHeight: `${dayItemLineHeight}px`}" :class="{'is-special-day': k2 === 0 || k2 === 6|| ((date.isLunarFestival || date.isGregorianFestival) && showLunar)}">
                   {{date.day}}
                 </p>
                 <p v-if="showLunar" class="text text-fest-day" :class="{'is-lunar': date.isLunarFestival, 'is-gregorian': date.isGregorianFestival}">
                   {{date.lunar}}
                 </p>
                 <p class="text text-custom-day" v-if="date.eventName">
                   {{date.eventName.title}}
                 </p>
               </template>
               <template v-else-if="showDisableDate">
                 <p class="text text-day" :style="{lineHeight: `${dayItemLineHeight}px`}" :class="{'is-special-day': k2 === 0 || k2 === 6|| ((date.isLunarFestival || date.isGregorianFestival) && showLunar)}">
                   {{date.day}}
                 </p>
                 <p v-if="showLunar" class="text text-fest-day" :class="{'is-lunar': date.isLunarFestival, 'is-gregorian': date.isGregorianFestival}">
                   {{date.lunar}}
                 </p>
                 <p class="text text-custom-day" v-if="date.eventName">
                   {{date.eventName.title}}
                 </p>
               </template>
             </li>
           </ul>
        </div>

      </div>
    </div>

    <transition name="panel-show">
      <div class="calendar-year-panel" v-show="showYearPanel">
        <div class="item-year" v-for="y in years" @click.stop="selectYear(y)" :class="{active: y === year}">
          <span>{{y}}</span>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import * as utils from './utils/date-utils'
  import {pad, isValidColor} from './utils/utils'

  const COMPONENT_NAME = 'vue-better-calendar'

  const MULTI_MODE = 'multi'
  // 范围选择模式
  const RANGE_MODE = 'range'
  // 签到模式
  const SIGN_MODE = 'sign'
  // 单选模式
  const SINGLE_MODE = 'single'

  const EVENT_SELECT_YEAR = 'select-year'
  const EVENT_SELECT_MONTH = 'select-month'
  const EVENT_SELECT_RANGE_DATE = 'select-range-date'
  const EVENT_SELECT_MULTI_DATE = 'select-multi-date'
  const EVENT_CLICK_DISABLE_DATE = 'click-disable-date'
  const EVENT_SELECT_SIGN_DATE = 'select-sign-date'
  const EVENT_SELECT_SINGLE_DATE = 'select-single-date'
  const EVENT_RESET_SELECT_RANGE_DATE = 'reset-select-range-date'
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
        default: RANGE_MODE,
        validator(value) {
          return [MULTI_MODE, RANGE_MODE, SIGN_MODE, SINGLE_MODE].indexOf(value) > -1
        }
      },
      notSignInOtherMonthsTxt: {
        type: String,
        default: '不能在本月外进行签到'
      },
      notSignInOtherDaysTxt: {
        type: String,
        default: '签到只能在当天进行'
      },
      alreadySignTxt: {
        type: String,
        default: '本日已经进行过签到'
      },
      signSuccessTxt: {
        type: String,
        default: '签到成功'
      },
      // 开始选择日期
      limitBeginDate: {
        type: Array,
        default() {
          return []
        }
      },
      // 结束选择日期
      limitEndDate: {
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
        default: true
      },
      // 屏蔽的日期
      disabledDates: {
        type: Array,
        default() {
          return []
        }
      },
      hasLine: {
        type: Boolean,
        default: true
      },
      // 是否显示农历
      showLunar: {
        type: Boolean,
        default: true
      },
      showDisableDate: {
        type: Boolean,
        default: true
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
      },
      ctlColor: {
        type: String,
        default: '#5e7a88',
        validator(value) {
          return isValidColor(value)
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
        defaultSingleSelectDay: [],
        showYearPanel: false,
        beginDate: [],
        endDate: [],
        dayItemMinHeight: 0,
        dayItemLineHeight: 'initial'
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
        this.$nextTick(() => {
          this.render()
        })
      },
      render() {
        let year = this.year
        let month = this.month
        let firstDayOfMonth = new Date(year, month, 1).getDay() // 前一个月的第一天是星期几
        let lastDateOfMonth = new Date(year, month + 1, 0).getDate() // 当月最后一天
        let lastDayOfLastMonth = new Date(year, month, 0).getDate() // 前一个月的最后一天
        const now = new Date()

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
                year: this.year,
                month: this._getPrevMonth(true),
                disabled: true
              },
              this._getLunarInfo(this.prevYear, this._getPrevMonth(true), k),
              this._getEvents(this.prevYear, this._getPrevMonth(true), k))
              temp[line].push(disabledDate)
              k++
            }
          }
          let options
          if (this.mode === RANGE_MODE) {
            options = Object.assign(
              {
                day: i,
                year: this.year,
                month: this.month + 1,
                disabled: false
              },
              this._getLunarInfo(this.year, this.month + 1, i),
              this._getEvents(this.year, this.month + 1, i))
            let limitBeginDate = this.limitBeginDate
            if (limitBeginDate.length) {
              let beginTime = Number(new Date(parseInt(limitBeginDate[0]), parseInt(limitBeginDate[1]) - 1, parseInt(limitBeginDate[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let limitEndDate = this.limitEndDate
            if (limitEndDate.length) {
              let endTime = Number(new Date(parseInt(limitEndDate[0]), parseInt(limitEndDate[1]) - 1, parseInt(limitEndDate[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let disabledDates = this.disabledDates
            if (disabledDates.length) {
              if (disabledDates.filter(v => {
                return this.year === v[0] && this.month === v[1] - 1 && i === v[2]
              }).length) {
                options.disabled = true
              }
            }
            let beginDate = this.beginDate
            let endDate = this.endDate
            if (beginDate.length) {
              let beginTime = Number(new Date(beginDate[0], beginDate[1], beginDate[2]))
              let endTime = Number(new Date(endDate[0], endDate[1], endDate[2]))
              let stepTime = Number(new Date(this.year, this.month, i))
              if (beginTime <= stepTime && endTime >= stepTime && !options.disabled) {
                options.selected = true
              }
            }
            temp[line].push(options)
          } else if (this.mode === MULTI_MODE) {
            // 判断是否选中
            if (this.value.filter(v => {
              return this.year === v[0] && this.month === v[1] - 1 && i === v[2]
            }).length) {
              options = Object.assign({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: true,
                disabled: false
              },
              this._getLunarInfo(this.year, this.month + 1, i),
              this._getEvents(this.year, this.month + 1, i))
            } else {
              options = Object.assign({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: false,
                disabled: false
              },
              this._getLunarInfo(this.year, this.month + 1, i),
              this._getEvents(this.year, this.month + 1, i))
              const limitBeginDate = this.limitBeginDate
              if (limitBeginDate.length) {
                let beginTime = Number(new Date(parseInt(limitBeginDate[0]), parseInt(limitBeginDate[1]) - 1, parseInt(limitBeginDate[2])))
                if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
              }
              const limitEndDate = this.limitEndDate
              if (limitEndDate.length) {
                let endTime = Number(new Date(parseInt(limitEndDate[0]), parseInt(limitEndDate[1]) - 1, parseInt(limitEndDate[2])))
                if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
              }
              let disabledDates = this.disabledDates
              if (disabledDates.length) {
                if (disabledDates.filter(v => {
                  return this.year === v[0] && this.month === v[1] - 1 && i === v[2]
                }).length) {
                  options.disabled = true
                }
              }
            }
            temp[line].push(options)
          } else if (this.mode === SIGN_MODE) {
            options = Object.assign({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: false,
                disabled: false
              },
              this._getLunarInfo(this.year, this.month + 1, i),
              this._getEvents(this.year, this.month + 1, i))
            let everyDay = +new Date(`${this.year}/${this.month + 1}/${i}`)
            let today = +new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`)
            if (everyDay === today) options.isToday = true
            if (this._checkInDates(everyDay) > -1) {
              options.selected = true
            }
            let limitBeginDate = this.limitBeginDate
            if (limitBeginDate.length) {
              let beginTime = Number(new Date(parseInt(limitBeginDate[0]), parseInt(limitBeginDate[1]) - 1, parseInt(limitBeginDate[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let limitEndDate = this.limitEndDate
            if (limitEndDate.length) {
              let endTime = Number(new Date(parseInt(limitEndDate[0]), parseInt(limitEndDate[1]) - 1, parseInt(limitEndDate[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let disabledDates = this.disabledDates
            if (disabledDates.length) {
              if (disabledDates.filter(v => {
                  return this.year === v[0] && this.month === v[1] - 1 && i === v[2]
                }).length) {
                options.disabled = true
              }
            }
            temp[line].push(options)
          } else if (this.mode === SINGLE_MODE) {
            options = Object.assign({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: false,
                disabled: false
              },
              this._getLunarInfo(this.year, this.month + 1, i),
              this._getEvents(this.year, this.month + 1, i))
            if (!selectedDates.length && now.getFullYear() === this.year && now.getMonth() + 1 === this.month + 1) {
              options.selectd = true
              this.defaultSingleSelectDay = [line, temp[line].length - 1]
            } else if (selectedDates.length && this.year === Number(selectedDates[0]) && this.month + 1 === Number(selectedDates[1]) && i === Number(selectedDates[2])) {
              options.selected = true
              this.defaultSingleSelectDay = [line, temp[line].length - 1]
            }
            let limitBeginDate = this.limitBeginDate
            if (limitBeginDate.length) {
              let beginTime = Number(new Date(parseInt(limitBeginDate[0]), parseInt(limitBeginDate[1]) - 1, parseInt(limitBeginDate[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let limitEndDate = this.limitEndDate
            if (limitEndDate.length) {
              let endTime = Number(new Date(parseInt(limitEndDate[0]), parseInt(limitEndDate[1]) - 1, parseInt(limitEndDate[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            let disabledDates = this.disabledDates
            if (disabledDates.length) {
              if (disabledDates.filter(v => {
                  return this.year === v[0] && this.month === v[1] - 1 && i === v[2]
                }).length) {
                options.disabled = true
              }
            }
            temp[line].push(options)
          }
          // 到周六换行
          if (day === 6 && i < lastDateOfMonth) {
            line++
          } else if (i === lastDateOfMonth) {
            let k = 1
            for (let d = day; d < 6; d++) {
              temp[line].push(Object.assign(
                {
                  day: k,
                  year: this.year,
                  month: this._getNextMonth(true),
                  disabled: true
                },
                this._getLunarInfo(this.nextYear, this._getNextMonth(true), k),
                this._getEvents(this.nextYear, this._getNextMonth(true), k)
              ))
              k++
            }
            nextMonthPushDays = k
          }
        } // for 循环结束
        // 补充第六行让视觉稳定
        if (line <= 5 && nextMonthPushDays > 0) {
          for (let i = line + 1; i <= 5; i++) {
            temp[i] = []
            let start = nextMonthPushDays + (i - line - 1) * 7
            for (let d = start; d <= start + 6; d++) {
              temp[i].push(Object.assign({
                  day: d,
                  year: this.year,
                  month: this._getNextMonth(true),
                  disabled: true
                },
                this._getLunarInfo(this.nextYear, this._getNextMonth(true), d),
                this._getEvents(this.nextYear, this._getNextMonth(true), d)
              ))
            }
          }
        }
        this.days = temp
        setTimeout(() => {
          if (this.$refs.dayItem) {
            const dayItemWidth = this.$refs.dayItem[0].offsetWidth
            this.dayItemMinHeight = dayItemWidth || 0
            if (!this.showLunar) {
              this.dayItemLineHeight = dayItemWidth - 20
            }
          }
        }, 20)
      },
      // 选中日期
      selectDate(row, col) {
        let now = new Date()
        let selectedDay = this.days[row][col]
        if (selectedDay.disabled) {
          let tempMonth = this.isZeroPad ? pad(selectedDay.month) : selectedDay.month
          let tempDay = this.isZeroPad ? pad(selectedDay.day) : selectedDay.day
          this.$emit(EVENT_CLICK_DISABLE_DATE, [String(this.year), String(tempMonth), String(tempDay)], this.mode)
          return
        }
        if (this.mode === RANGE_MODE) {
          if (this.beginDate.length === 0 || this.endDateTemp !== 0) {
            this.beginDate = [this.year, this.month, this.days[row][col].day]
            this.beginDateTemp = this.beginDate
            this.endDate = [this.year, this.month, this.days[row][col].day]
            this.endDateTemp = 0
          } else {
            this.endDate = [this.year, this.month, this.days[row][col].day]
            this.endDateTemp = 1
            // 判断结束日期小于开始日期则自动颠倒过来
            if (+new Date(this.endDate[0], this.endDate[1], this.endDate[2]) <
              +new Date(this.beginDate[0], this.beginDate[1], this.beginDate[2])) {
              this.beginDate = this.endDate
              this.endDate = this.beginDateTemp
            }
            // 小于10左边打补丁
            let begin = []
            let end = []
            if (this.isZeroPad) {
              this.beginDate.forEach((item, i) => {
                i === 1 && (item += 1)
                begin.push(String(pad(item)))
              })
              this.endDate.forEach((item, i) => {
                i === 1 && (item += 1)
                end.push(String(pad(item)))
              })
            } else {
              begin = this.beginDate
              end = this.endDate
            }
            let beginStamp = +new Date(`${begin[0]}/${begin[1]}/${begin[2]}`)
            let endStamp = +new Date(`${end[0]}/${end[1]}/${end[2]}`)
            let selectedDates = []
            this.days.forEach(row => {
              row.forEach(col => {
                let dayStamp = +new Date(`${col.year}/${col.month}/${col.day}`)
                if (!col.disabled) {
                  if (dayStamp >= beginStamp && dayStamp <= endStamp) {
                    let tempMonth = this.isZeroPad ? pad(col.month) : col.month
                    let tempDay = this.isZeroPad ? pad(col.day) : col.day
                    selectedDates.push([String(col.year), String(tempMonth), String(tempDay)])
                  }
                }
              })
            })
            this.$emit(EVENT_SELECT_RANGE_DATE, selectedDates)
          }
          this.render()
        } else if (this.mode === MULTI_MODE) {
          // 如果已经选过则过滤掉
          let filterDay = this.multiDays.filter(v => {
            return this.year === v[0] && this.month === v[1] - 1 && this.days[row][col].day === v[2]
          })
          if (filterDay.length) {
            this.multiDays = this.multiDays.filter(v => {
              return this.year !== v[0] || this.month !== v[1] - 1 || this.days[row][col].day !== v[2]
            })
          } else {
            this.multiDays.push([this.year, this.month + 1, this.days[row][col].day])
          }
          this.days[row][col].selected = !this.days[row][col].selected
          this.multiDays = this.multiDays.sort((d1, d2) => {
            return +new Date(d1[0], d1[1] - 1, d1[2]) > +new Date(d2[0], d2[1] - 1, d2[2])
          })
          let selectedMultiDays = []
          this.multiDays.forEach((date) => {
            let tempMonth = date[1]
            let tempDay = date[2]
            if (this.isZeroPad) {
              tempMonth = pad(tempMonth)
              tempDay = pad(tempDay)
            }
            selectedMultiDays.push([String(date[0]), String(tempMonth), String(tempDay)])
          })
          this.$emit(EVENT_SELECT_MULTI_DATE, selectedMultiDays)
        } else if (this.mode === SIGN_MODE) {
          let signedDates = this.signedDates.slice()
          const currentMonth = now.getMonth() + 1
          if (this.month + 1 !== currentMonth) {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.notSignInOtherMonthsTxt,
              signedDates
            })
            return
          }
          let selectedDay = +new Date(`${this.year}/${this.month + 1}/${this.days[row][col].day}`)
          if (selectedDay !== +new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`)) {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.notSignInOtherDaysTxt,
              signedDates
            })
            return
          }
          if (this._checkInDates(selectedDay) < 0) {
            signedDates.push(`${this.year}-${pad(this.month + 1)}-${pad(this.days[row][col].day)}`)
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: true,
              msg: this.signSuccessTxt,
              signedDates
            })
          } else {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.alreadySignTxt,
              signedDates
            })
          }
        } else if (this.mode === SINGLE_MODE) {
          // 取消上次选中
          if (this.defaultSingleSelectDay.length) {
            this.days.forEach(v => {
              v.forEach(vv => {
                vv.selected = false
              })
            })
          }
          // 设置当前选中天
          this.days[row][col].selected = true
          this.day = this.days[row][col].day
          this.defaultSingleSelectDay = [row, col]
          this.$emit(EVENT_SELECT_SINGLE_DATE, [String(this.year), String(pad(this.month + 1)), String(pad(this.days[row][col].day))])
        }
      },
      getDateCls(date) {
        let dateCls = {
          'is-today': date.isToday,
          selected: date.selected,
          disabled: date.disabled
        }
        if (date.eventName && date.eventName.className) {
          dateCls[date.eventName.className] = date.eventName.className
        }
        return dateCls
      },
      styleObj(date) {
        let style = {
          minHeight: `${this.dayItemMinHeight}px`
        }
        if (date.eventName && date.eventName.styles) {
          style = Object.assign({}, style, date.eventName.styles)
        }
        return style
      },
      // 上月
      prev() {
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
        this.render()
        this.$emit(EVENT_SELECT_YEAR, year)
      },
      setToday() {
        let now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        this.render()
        // 遍历当前日找到选中
        this.days.forEach(item => {
          let day = item.find(vv => vv.day === this.day && !vv.disabled)
          day && (day.selected = true)
        })
      },
      // 取消选择
      resetRangDate() {
        this.beginDate = []
        this.endDate = []
        this.$emit(EVENT_RESET_SELECT_RANGE_DATE)
        this.render()
      },
      _checkInDates(d) {
        return this.signedDates.findIndex(date => {
          let itemDay = date.replace(/-/g, '/')
          return +new Date(itemDay) === d
        })
      },
      _emitSelectMonthEvent(eventType) {
        this.render()
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
        let data
        if (eventName) {
          data = {}
          data.eventName = eventName
        }
        return data
      }
    },
    watch: {
      events() {
        this.$nextTick(() => {
          this.render()
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
          setTimeout(this.render, 60)
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-better-calendar
    position: relative
    min-width:300px
    font-family: "PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif
    .calendar-header
      .calendar-ctl
        display:flex
        padding:6px 0
        .calendar-btn
          position: relative
          margin-top:6px
          flex:0 0 20px
          width:20px
          vertical-align:middle
          &::after
            content:''
            display:block
            position: absolute
            pointer-events:none
            left:-10px
            top:-10px
            z-index:15
            width:40px
            height:40px
          &.calendar-btn-prev
            text-align:left
          &.calendar-btn-next
            text-align:right
        .calendar-ctl-month
          flex:1
          .month
            position: relative
            margin:0 auto
            width:100px
            height:20px
            overflow:hidden
            text-align:center
            color:#5e7a88
            .select-month-panel
              position: absolute
              left:0
              top:0
              height:240px
              width:100%
              transition:top .5s cubic-bezier(0.075, 0.82, 0.165, 1)
              .item
                overflow:hidden
                height:20px
                width:100%
                text-align:center
                font-size:14px
          .year
            text-align:center
            font-size:10px
            line-height: 1
            color:#999
    .calendar-body
      .calendar-weeks
        ul
          display:flex
          width:100%
          overflow:hidden
          .weekday
            flex:1
            box-sizing:border-box
            font-family:inherit
            text-align:center
            font-size:14px
            padding:15px
      .calendar-dates
        position: relative
        &.has-line
          &::before, &::after
            content: ""
            display: block
            position: absolute
            transform-origin: 0 0
          &::before
            border-left: 1px solid #ccc
            top: 0
            left: 0
            height: 100%
            transform-origin: left 0
          &::after
            border-bottom: 1PX solid #ccc
            left: 0
            bottom: 0
            width: 100%
            transform-origin: 0 bottom
          @media (min-resolution: 2dppx)
            &::before,&::after
              transform: scale(.5) translateZ(0)
            &::before
              height:200%
            &::after
              width:200%
          @media (min-resolution: 3dppx)
            &::before,&::after
              transform: scale(.333) translateZ(0)
            &::before
              height:300%
            &::after
              width:300%
          .date-row
            ul
              .calendar-day
                position: relative
                &::before, &::after
                  content: ""
                  display: block
                  position: absolute
                  transform-origin: 0 0
                &::before
                  border-top: 1px solid #ccc
                  left: 0
                  top: 0
                  width: 100%
                  transform-origin: 0 top
                &::after
                  border-right: 1px solid #ccc
                  top: 0
                  right: 0
                  height: 100%
                  transform-origin: right 0
                @media (min-resolution: 2dppx)
                  &::before,&::after
                    transform: scale(.5) translateZ(0)
                  &::before
                    width:200%
                  &::after
                    height:200%
                @media (min-resolution: 3dppx)
                  &::before,&::after
                    transform: scale(.333) translateZ(0)
                  &::before
                    width:300%
                  &::after
                    height:300%
        .date-row
          ul
            display:flex
            width:100%
            overflow:hidden
            .calendar-day
              flex: 1
              box-sizing:border-box
              font-family:inherit
              text-align:center
              padding:10px 5px
              &.disabled
                color:#ccc
                .text
                  &.text-day
                    &.is-special-day
                      color: #ccc
                  &.text-fest-day
                    &.is-lunar,&.is-gregorian
                      color: #ccc
              &.is-today
                background-color: #6098bf
                color:#fff
              &.selected
                .text
                  &.text-day
                    border-radius:10px
                    background-color: #5e7a88
                    color:#fff
                    &.is-special-day
                      background-color: #ff0000
                      color: #fff
              .text
                display: -webkit-box
                overflow: hidden
                text-overflow: ellipsis
                word-wrap: break-word
                white-space: normal !important
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
                line-height:1.25
                &.text-custom-day,&.text-fest-day
                  font-size:11px
                &.text-day
                  &.is-special-day
                    color: #ff0000
                &.text-fest-day
                  &.is-lunar,&.is-gregorian
                    color: #09cd2c
    .calendar-year-panel
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      flex-wrap:wrap
      overflow: auto
      left:0
      right:0
      top:44px
      bottom:0
      background-color: #fff
      transform:translateY(0)
      .item-year
        margin:0 5px
        width:60px
        line-height: 30px
        border-radius: 20px
        text-align:center
        border:1px solid #fbfbfb
        color:#999
        &.active
          border:1px solid #5e7a88
          background-color:#5e7a88
          color:#fff
      &.panel-show-enter,&.panel-show-leave-to
        opacity:0
        transform:translateY(-10px)
      &.panel-show-enter-active,&.panel-show-leave-active
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1)
</style>
