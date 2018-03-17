<template>
  <div class="vue-better-calendar">
    aaa
  </div>
</template>

<script>
  import * as utils from './utils/date-utils'

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

  export default {
    name: COMPONENT_NAME
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
