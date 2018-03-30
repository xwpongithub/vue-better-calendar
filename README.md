# vue-better-calendar
A calendar component for vuejs.

[![npm](https://img.shields.io/npm/v/vue-better-calendar.svg?style=flat-square)](https://www.npmjs.com/package/vue-better-calendar)
[![downloads](https://img.shields.io/npm/dm/vue-better-calendar.svg)](https://www.npmjs.com/package/vue-better-calendar)

## 关于vue-better-calendar
vue-better-calendar是一个基于vue的日期选择插件，它提供了四种日期选择模式（范围选择，多选，签到，单选）
### demo
签到： https://codepen.io/lijinrong/pen/pLpxvo?editors=1111

## 安装

### 使用npm安装
```node
  npm install --save vue-better-calendar
```

### ES6方式导入
```javascript
  import VueBetterCalendar from 'vue-better-calendar'
  Vue.use(VueBetterCalendar)
```

### 在组件中引入
```javascript
  <vue-better-calendar></vue-better-calendar>
```

### 直接连入页面使用
```javascript
  <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-better-calendar@1.0.0/dist/vue-better-calendar.js"></script>
```
```html
  <vue-better-calendar></vue-better-calendar>
```

### 参数
|名称|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|mode|String|multi|日期选择模式，支持四个有效值：multi 多选，range 范围选择，sign 签到，single 单选|
|notSignInOtherMonthsTxt|String|不能在本月外进行签到|签到时点击本月外日期时的文本提示|
|notSignInOtherDaysTxt|String|签到只能在当天进行|签到时点击本月内非当天日期时的文本提示|
|alreadySignTxt|String|本日已经进行过签到|签到时点击已经签过到的日期时的文本提示|
|signSuccessTxt|String|签到成功|签到成功时的文本提示|
|limitBeginDate|Array|[]|限制可被选择的日期范围的开始日期，传参格式:[2018, 3, 1]|
|limitEndDate|Array|[]|限制可被选择的日期范围的结束日期，传参格式:[2018, 4, 24]|
|signedDates|Array|[]|已经签过到的日期,仅在签到模式下有用，传参格式：['2018-03-01', '2018-03-05']|
|isZeroPad|Boolean|true|点选日期后返回结果中的日期月份和天数不够两位数时是否补0|
|disabledDates|Array|[]|设置不可被选择的日期，传参格式:[[2018, 3, 1], [2018, 3, 24]]|
|hasLine|Boolean|true|是否为日期项加上自带边框|
|showLunar|Boolean|true|是否显示农历|
|showDisableDate|Boolean|true|是否显示不可被选择的日期|
|weeks|Array|['日', '一', '二', '三', '四', '五', '六']|星期栏文本|
|months|Array|['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']|月份栏文本|
|events|Object|{'2018-3-22': {className: 'price',title: '¥232',styles: {}}}|为某个日期添加单独的事件和文本|
|ctlColor|String|#5e7a88|切换按钮颜色|

### 支持事件
|名称|回调参数|说明|
|:-:|:-:|:-:|
|select-year|year|选择年份时触发|
|select-month|month, year|选择月份时触发|
|select-range-date|selectedDates|范围选择模式下，选中想选择的日期范围时触发，返回选中的所有日期|
|select-multi-date|selectedMultiDays|多选模式下，选中想选择的日期时触发，返回选中的所有日期|
|click-disable-date|date,mode|点击不可选择日期时触发，返回所点击的日期和当前日期模式|
|select-sign-date|{status,msg,signedDates}|点击日期签到时触发，status表示签到是否成功，msg为此次签到是否成功的提示语，signedDates为目前已经签过到的所有日期|
|select-single-date|date|单选模式下，选则日期时触发，返回所选择的日期|
|reset-select-range-date|无回调参数|范围选择模式下，重置选择的日期时触发|
|next|month, year|切换到下一个月或者下一年时触发|
|prev|month, year|切换到上一个月或者上一年时触发|

### 支持方法
|名称|描述|
|:-:|:-:|
|setToday|选中当天日期|
|resetRangDate|范围选择模式下，重置已选择的日期范围|
|sign|单独通过按钮点击进行签到，会触发select-sign-date事件|
