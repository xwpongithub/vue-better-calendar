import Calendar from './vue-better-calendar'

/* eslint-disable no-undef */
Calendar.version = '1.0.0'

Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calendar)
}

export default Calendar
