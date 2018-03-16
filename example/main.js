import Vue from 'vue'
import App from './App'

import 'example/common/stylus/index.styl'

import Calendar from '../src'

Vue.use(Calendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
