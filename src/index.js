import Calendar from './vue-better-calendar'

/* eslint-disable no-undef */
Calendar.version = __VERSION__

Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calendar)
}

export default Calendar
