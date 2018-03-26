(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-better-calendar"] = factory();
	else
		root["vue-better-calendar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(21), __webpack_require__(44), __webpack_require__(50), __webpack_require__(51)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/assign'), require('./utils/date-utils'), require('./utils/utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.assign, global.dateUtils, global.utils);
    global.vueBetterCalendar = mod.exports;
  }
})(this, function (module, exports, _keys, _assign, _dateUtils, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _assign2 = _interopRequireDefault(_assign);

  var utils = _interopRequireWildcard(_dateUtils);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'vue-better-calendar';

  var MULTI_MODE = 'multi';

  var RANGE_MODE = 'range';

  var SIGN_MODE = 'sign';

  var SINGLE_MODE = 'single';

  var EVENT_SELECT_YEAR = 'select-year';
  var EVENT_SELECT_MONTH = 'select-month';
  var EVENT_SELECT_RANGE_DATE = 'select-range-date';
  var EVENT_SELECT_MULTI_DATE = 'select-multi-date';
  var EVENT_CLICK_DISABLE_DATE = 'click-disable-date';
  var EVENT_SELECT_SIGN_DATE = 'select-sign-date';
  var EVENT_SELECT_SINGLE_DATE = 'select-single-date';
  var EVENT_RESET_SELECT_RANGE_DATE = 'reset-select-range-date';
  var EVENT_NEXT = 'next';
  var EVENT_PREV = 'prev';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },

      mode: {
        type: String,
        default: RANGE_MODE,
        validator: function validator(value) {
          return [MULTI_MODE, RANGE_MODE, SIGN_MODE, SINGLE_MODE].indexOf(value) > -1;
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

      limitBeginDate: {
        type: Array,
        default: function _default() {
          return [];
        }
      },

      limitEndDate: {
        type: Array,
        default: function _default() {
          return [];
        }
      },

      signedDates: {
        type: Array,
        default: function _default() {
          return [];
        }
      },

      isZeroPad: {
        type: Boolean,
        default: true
      },

      disabledDates: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      hasLine: {
        type: Boolean,
        default: true
      },

      showLunar: {
        type: Boolean,
        default: true
      },
      showDisableDate: {
        type: Boolean,
        default: true
      },

      weeks: {
        type: Array,
        default: function _default() {
          return ['日', '一', '二', '三', '四', '五', '六'];
        }
      },

      months: {
        type: Array,
        default: function _default() {
          return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        }
      },

      events: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      ctlColor: {
        type: String,
        default: '#5e7a88',
        validator: function validator(value) {
          return (0, _utils.isValidColor)(value);
        }
      }
    },
    data: function data() {
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
      };
    },

    computed: {
      prevYear: function prevYear() {
        var value = this.year;
        if (this.month - 1 < 0) {
          value--;
        }
        return value;
      },
      nextYear: function nextYear() {
        var value = this.year;
        if (this.month + 1 > 11) {
          value++;
        }
        return value;
      }
    },
    created: function created() {
      this.festival = {
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
      };
    },
    mounted: function mounted() {
      this.init();
    },

    methods: {
      init: function init() {
        var _this = this;

        var now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.day = now.getDate();
        if (this.value.length) {
          if (this.mode === RANGE_MODE || this.mode === MULTI_MODE) {
            this.year = parseInt(this.value[0][0]);
            this.month = parseInt(this.value[0][1]) - 1;
            this.day = parseInt(this.value[0][2]);
            if (this.mode === RANGE_MODE) {
              var endYear = parseInt(this.value[1][0]);
              var endMonth = parseInt(this.value[1][1]) - 1;
              var endDay = parseInt(this.value[1][2]);
              this.beginDate = [this.year, this.month, this.day];
              this.endDate = [endYear, endMonth, endDay];
            } else {
              this.multiDays = this.value;
            }
          } else {
            this.year = parseInt(this.value[0]);
            this.month = parseInt(this.value[1]) - 1;
            this.day = parseInt(this.value[2]);
          }
        }
        this.$nextTick(function () {
          _this.render();
        });
      },
      render: function render() {
        var _this2 = this;

        var year = this.year;
        var month = this.month;
        var firstDayOfMonth = new Date(year, month, 1).getDay();
        var lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        var lastDayOfLastMonth = new Date(year, month, 0).getDate();
        var now = new Date();

        var selectedDates = this.value;
        var i = void 0;
        var line = 0;
        var temp = [];
        var nextMonthPushDays = 1;
        for (i = 1; i <= lastDateOfMonth; i++) {
          var day = new Date(year, month, i).getDay();
          var k = void 0;

          if (day === 0) {
            temp[line] = [];
          } else if (i === 1) {
            temp[line] = [];
            k = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (var j = 0; j < firstDayOfMonth; j++) {
              var disabledDate = (0, _assign2.default)({
                day: k,
                year: this.year,
                month: this._getPrevMonth(true),
                disabled: true
              }, this._getLunarInfo(this.prevYear, this._getPrevMonth(true), k), this._getEvents(this.prevYear, this._getPrevMonth(true), k));
              temp[line].push(disabledDate);
              k++;
            }
          }
          var options = void 0;
          if (this.mode === RANGE_MODE) {
            options = (0, _assign2.default)({
              day: i,
              year: this.year,
              month: this.month + 1,
              disabled: false
            }, this._getLunarInfo(this.year, this.month + 1, i), this._getEvents(this.year, this.month + 1, i));
            var limitBeginDate = this.limitBeginDate;
            if (limitBeginDate.length) {
              var beginTime = Number(new Date(parseInt(limitBeginDate[0]), parseInt(limitBeginDate[1]) - 1, parseInt(limitBeginDate[2])));
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var limitEndDate = this.limitEndDate;
            if (limitEndDate.length) {
              var endTime = Number(new Date(parseInt(limitEndDate[0]), parseInt(limitEndDate[1]) - 1, parseInt(limitEndDate[2])));
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var disabledDates = this.disabledDates;
            if (disabledDates.length) {
              if (disabledDates.filter(function (v) {
                return _this2.year === v[0] && _this2.month === v[1] - 1 && i === v[2];
              }).length) {
                options.disabled = true;
              }
            }
            var beginDate = this.beginDate;
            var endDate = this.endDate;
            if (beginDate.length) {
              var _beginTime = Number(new Date(beginDate[0], beginDate[1], beginDate[2]));
              var _endTime = Number(new Date(endDate[0], endDate[1], endDate[2]));
              var stepTime = Number(new Date(this.year, this.month, i));
              if (_beginTime <= stepTime && _endTime >= stepTime && !options.disabled) {
                options.selected = true;
              }
            }
            temp[line].push(options);
          } else if (this.mode === MULTI_MODE) {
            if (this.value.filter(function (v) {
              return _this2.year === v[0] && _this2.month === v[1] - 1 && i === v[2];
            }).length) {
              options = (0, _assign2.default)({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: true,
                disabled: false
              }, this._getLunarInfo(this.year, this.month + 1, i), this._getEvents(this.year, this.month + 1, i));
            } else {
              options = (0, _assign2.default)({
                day: i,
                year: this.year,
                month: this.month + 1,
                selected: false,
                disabled: false
              }, this._getLunarInfo(this.year, this.month + 1, i), this._getEvents(this.year, this.month + 1, i));
              var _limitBeginDate = this.limitBeginDate;
              if (_limitBeginDate.length) {
                var _beginTime2 = Number(new Date(parseInt(_limitBeginDate[0]), parseInt(_limitBeginDate[1]) - 1, parseInt(_limitBeginDate[2])));
                if (_beginTime2 > Number(new Date(this.year, this.month, i))) options.disabled = true;
              }
              var _limitEndDate = this.limitEndDate;
              if (_limitEndDate.length) {
                var _endTime2 = Number(new Date(parseInt(_limitEndDate[0]), parseInt(_limitEndDate[1]) - 1, parseInt(_limitEndDate[2])));
                if (_endTime2 < Number(new Date(this.year, this.month, i))) options.disabled = true;
              }
              var _disabledDates = this.disabledDates;
              if (_disabledDates.length) {
                if (_disabledDates.filter(function (v) {
                  return _this2.year === v[0] && _this2.month === v[1] - 1 && i === v[2];
                }).length) {
                  options.disabled = true;
                }
              }
            }
            temp[line].push(options);
          } else if (this.mode === SIGN_MODE) {
            options = (0, _assign2.default)({
              day: i,
              year: this.year,
              month: this.month + 1,
              selected: false,
              disabled: false
            }, this._getLunarInfo(this.year, this.month + 1, i), this._getEvents(this.year, this.month + 1, i));
            var everyDay = +new Date(this.year + '/' + (this.month + 1) + '/' + i);
            var today = +new Date(now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate());
            if (everyDay === today) options.isToday = true;
            if (this._checkInDates(everyDay) > -1) {
              options.selected = true;
            }
            var _limitBeginDate2 = this.limitBeginDate;
            if (_limitBeginDate2.length) {
              var _beginTime3 = Number(new Date(parseInt(_limitBeginDate2[0]), parseInt(_limitBeginDate2[1]) - 1, parseInt(_limitBeginDate2[2])));
              if (_beginTime3 > Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var _limitEndDate2 = this.limitEndDate;
            if (_limitEndDate2.length) {
              var _endTime3 = Number(new Date(parseInt(_limitEndDate2[0]), parseInt(_limitEndDate2[1]) - 1, parseInt(_limitEndDate2[2])));
              if (_endTime3 < Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var _disabledDates2 = this.disabledDates;
            if (_disabledDates2.length) {
              if (_disabledDates2.filter(function (v) {
                return _this2.year === v[0] && _this2.month === v[1] - 1 && i === v[2];
              }).length) {
                options.disabled = true;
              }
            }
            temp[line].push(options);
          } else if (this.mode === SINGLE_MODE) {
            options = (0, _assign2.default)({
              day: i,
              year: this.year,
              month: this.month + 1,
              selected: false,
              disabled: false
            }, this._getLunarInfo(this.year, this.month + 1, i), this._getEvents(this.year, this.month + 1, i));
            if (!selectedDates.length && now.getFullYear() === this.year && now.getMonth() + 1 === this.month + 1) {
              options.selectd = true;
              this.defaultSingleSelectDay = [line, temp[line].length - 1];
            } else if (selectedDates.length && this.year === Number(selectedDates[0]) && this.month + 1 === Number(selectedDates[1]) && i === Number(selectedDates[2])) {
              options.selected = true;
              this.defaultSingleSelectDay = [line, temp[line].length - 1];
            }
            var _limitBeginDate3 = this.limitBeginDate;
            if (_limitBeginDate3.length) {
              var _beginTime4 = Number(new Date(parseInt(_limitBeginDate3[0]), parseInt(_limitBeginDate3[1]) - 1, parseInt(_limitBeginDate3[2])));
              if (_beginTime4 > Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var _limitEndDate3 = this.limitEndDate;
            if (_limitEndDate3.length) {
              var _endTime4 = Number(new Date(parseInt(_limitEndDate3[0]), parseInt(_limitEndDate3[1]) - 1, parseInt(_limitEndDate3[2])));
              if (_endTime4 < Number(new Date(this.year, this.month, i))) options.disabled = true;
            }
            var _disabledDates3 = this.disabledDates;
            if (_disabledDates3.length) {
              if (_disabledDates3.filter(function (v) {
                return _this2.year === v[0] && _this2.month === v[1] - 1 && i === v[2];
              }).length) {
                options.disabled = true;
              }
            }
            temp[line].push(options);
          }

          if (day === 6 && i < lastDateOfMonth) {
            line++;
          } else if (i === lastDateOfMonth) {
            var _k = 1;
            for (var d = day; d < 6; d++) {
              temp[line].push((0, _assign2.default)({
                day: _k,
                year: this.year,
                month: this._getNextMonth(true),
                disabled: true
              }, this._getLunarInfo(this.nextYear, this._getNextMonth(true), _k), this._getEvents(this.nextYear, this._getNextMonth(true), _k)));
              _k++;
            }
            nextMonthPushDays = _k;
          }
        }
        if (line <= 5 && nextMonthPushDays > 0) {
          for (var _i = line + 1; _i <= 5; _i++) {
            temp[_i] = [];
            var start = nextMonthPushDays + (_i - line - 1) * 7;
            for (var _d = start; _d <= start + 6; _d++) {
              temp[_i].push((0, _assign2.default)({
                day: _d,
                year: this.year,
                month: this._getNextMonth(true),
                disabled: true
              }, this._getLunarInfo(this.nextYear, this._getNextMonth(true), _d), this._getEvents(this.nextYear, this._getNextMonth(true), _d)));
            }
          }
        }
        this.days = temp;
        setTimeout(function () {
          if (_this2.$refs.dayItem) {
            var dayItemWidth = _this2.$refs.dayItem[0].offsetWidth;
            _this2.dayItemMinHeight = dayItemWidth || 0;
            if (!_this2.showLunar) {
              _this2.dayItemLineHeight = dayItemWidth - 20;
            }
          }
        }, 20);
      },
      selectDate: function selectDate(row, col) {
        var _this3 = this;

        var now = new Date();
        var selectedDay = this.days[row][col];
        if (selectedDay.disabled) {
          var tempMonth = this.isZeroPad ? (0, _utils.pad)(selectedDay.month) : selectedDay.month;
          var tempDay = this.isZeroPad ? (0, _utils.pad)(selectedDay.day) : selectedDay.day;
          this.$emit(EVENT_CLICK_DISABLE_DATE, [String(this.year), String(tempMonth), String(tempDay)], this.mode);
          return;
        }
        if (this.mode === RANGE_MODE) {
          if (this.beginDate.length === 0 || this.endDateTemp !== 0) {
            this.beginDate = [this.year, this.month, this.days[row][col].day];
            this.beginDateTemp = this.beginDate;
            this.endDate = [this.year, this.month, this.days[row][col].day];
            this.endDateTemp = 0;
          } else {
            this.endDate = [this.year, this.month, this.days[row][col].day];
            this.endDateTemp = 1;

            if (+new Date(this.endDate[0], this.endDate[1], this.endDate[2]) < +new Date(this.beginDate[0], this.beginDate[1], this.beginDate[2])) {
              this.beginDate = this.endDate;
              this.endDate = this.beginDateTemp;
            }

            var begin = [];
            var end = [];
            if (this.isZeroPad) {
              this.beginDate.forEach(function (item, i) {
                i === 1 && (item += 1);
                begin.push(String((0, _utils.pad)(item)));
              });
              this.endDate.forEach(function (item, i) {
                i === 1 && (item += 1);
                end.push(String((0, _utils.pad)(item)));
              });
            } else {
              begin = this.beginDate;
              end = this.endDate;
            }
            var beginStamp = +new Date(begin[0] + '/' + begin[1] + '/' + begin[2]);
            var endStamp = +new Date(end[0] + '/' + end[1] + '/' + end[2]);
            var selectedDates = [];
            this.days.forEach(function (row) {
              row.forEach(function (col) {
                var dayStamp = +new Date(col.year + '/' + col.month + '/' + col.day);
                if (!col.disabled) {
                  if (dayStamp >= beginStamp && dayStamp <= endStamp) {
                    var _tempMonth = _this3.isZeroPad ? (0, _utils.pad)(col.month) : col.month;
                    var _tempDay = _this3.isZeroPad ? (0, _utils.pad)(col.day) : col.day;
                    selectedDates.push([String(col.year), String(_tempMonth), String(_tempDay)]);
                  }
                }
              });
            });
            this.$emit(EVENT_SELECT_RANGE_DATE, selectedDates);
          }
          this.render();
        } else if (this.mode === MULTI_MODE) {
          var filterDay = this.multiDays.filter(function (v) {
            return _this3.year === v[0] && _this3.month === v[1] - 1 && _this3.days[row][col].day === v[2];
          });
          if (filterDay.length) {
            this.multiDays = this.multiDays.filter(function (v) {
              return _this3.year !== v[0] || _this3.month !== v[1] - 1 || _this3.days[row][col].day !== v[2];
            });
          } else {
            this.multiDays.push([this.year, this.month + 1, this.days[row][col].day]);
          }
          this.days[row][col].selected = !this.days[row][col].selected;
          this.multiDays = this.multiDays.sort(function (d1, d2) {
            return +new Date(d1[0], d1[1] - 1, d1[2]) > +new Date(d2[0], d2[1] - 1, d2[2]);
          });
          var selectedMultiDays = [];
          this.multiDays.forEach(function (date) {
            var tempMonth = date[1];
            var tempDay = date[2];
            if (_this3.isZeroPad) {
              tempMonth = (0, _utils.pad)(tempMonth);
              tempDay = (0, _utils.pad)(tempDay);
            }
            selectedMultiDays.push([String(date[0]), String(tempMonth), String(tempDay)]);
          });
          this.$emit(EVENT_SELECT_MULTI_DATE, selectedMultiDays);
        } else if (this.mode === SIGN_MODE) {
          var signedDates = this.signedDates.slice();
          var currentMonth = now.getMonth() + 1;
          if (this.month + 1 !== currentMonth) {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.notSignInOtherMonthsTxt,
              signedDates: signedDates
            });
            return;
          }
          var _selectedDay = +new Date(this.year + '/' + (this.month + 1) + '/' + this.days[row][col].day);
          if (_selectedDay !== +new Date(now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate())) {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.notSignInOtherDaysTxt,
              signedDates: signedDates
            });
            return;
          }
          if (this._checkInDates(_selectedDay) < 0) {
            signedDates.push(this.year + '-' + (0, _utils.pad)(this.month + 1) + '-' + (0, _utils.pad)(this.days[row][col].day));
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: true,
              msg: this.signSuccessTxt,
              signedDates: signedDates
            });
          } else {
            this.$emit(EVENT_SELECT_SIGN_DATE, {
              status: false,
              msg: this.alreadySignTxt,
              signedDates: signedDates
            });
          }
        } else if (this.mode === SINGLE_MODE) {
          if (this.defaultSingleSelectDay.length) {
            this.days.forEach(function (v) {
              v.forEach(function (vv) {
                vv.selected = false;
              });
            });
          }

          this.days[row][col].selected = true;
          this.day = this.days[row][col].day;
          this.defaultSingleSelectDay = [row, col];
          this.$emit(EVENT_SELECT_SINGLE_DATE, [String(this.year), String((0, _utils.pad)(this.month + 1)), String((0, _utils.pad)(this.days[row][col].day))]);
        }
      },
      getDateCls: function getDateCls(date) {
        var dateCls = {
          'is-today': date.isToday,
          selected: date.selected,
          disabled: date.disabled
        };
        if (date.eventName && date.eventName.className) {
          dateCls[date.eventName.className] = date.eventName.className;
        }
        return dateCls;
      },
      styleObj: function styleObj(date) {
        var style = {
          minHeight: this.dayItemMinHeight + 'px'
        };
        if (date.eventName && date.eventName.styles) {
          style = (0, _assign2.default)({}, style, date.eventName.styles);
        }
        return style;
      },
      prev: function prev() {
        if (this.month === 0) {
          this.month = 11;
          this.year = parseInt(this.year) - 1;
        } else {
          this.month = parseInt(this.month) - 1;
        }
        this._emitSelectMonthEvent(EVENT_PREV);
      },
      next: function next() {
        if (this.month === 11) {
          this.month = 0;
          this.year = parseInt(this.year) + 1;
        } else {
          this.month = parseInt(this.month) + 1;
        }
        this._emitSelectMonthEvent(EVENT_NEXT);
      },
      changeYear: function changeYear() {
        if (this.showYearPanel) {
          this.showYearPanel = false;
          return;
        }
        this.showYearPanel = true;
        this.years = [];
        for (var i = ~~this.year - 10; i < ~~this.year + 10; i++) {
          this.years.push(i);
        }
      },
      selectYear: function selectYear(year) {
        this.showYearPanel = false;
        this.year = year;
        this.render();
        this.$emit(EVENT_SELECT_YEAR, year);
      },
      setToday: function setToday() {
        var _this4 = this;

        var now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.day = now.getDate();
        this.render();

        this.days.forEach(function (item) {
          var day = item.find(function (vv) {
            return vv.day === _this4.day && !vv.disabled;
          });
          day && (day.selected = true);
        });
      },
      resetRangDate: function resetRangDate() {
        this.beginDate = [];
        this.endDate = [];
        this.$emit(EVENT_RESET_SELECT_RANGE_DATE);
        this.render();
      },
      _checkInDates: function _checkInDates(d) {
        return this.signedDates.findIndex(function (date) {
          var itemDay = date.replace(/-/g, '/');
          return +new Date(itemDay) === d;
        });
      },
      _emitSelectMonthEvent: function _emitSelectMonthEvent(eventType) {
        this.render();
        var currentMonth = this.month + 1;
        this.$emit(EVENT_SELECT_MONTH, currentMonth, this.year);
        this.$emit(eventType, currentMonth, this.year);
      },
      _getLunarInfo: function _getLunarInfo(year, month, day) {
        var lunarInfo = utils.solar2lunar(year, month, day);
        var lunarValue = lunarInfo.IDayCn;
        var isLunarFestival = false;
        var isGregorianFestival = false;
        if (this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay]) {
          lunarValue = this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay];
          isLunarFestival = true;
        } else if (this.festival.gregorian[month + '-' + day]) {
          lunarValue = this.festival.gregorian[month + '-' + day];
          isGregorianFestival = true;
        }
        return {
          lunar: lunarValue,
          isLunarFestival: isLunarFestival,
          isGregorianFestival: isGregorianFestival
        };
      },
      _getPrevMonth: function _getPrevMonth(isString) {
        var value = this.month;
        if (this.month - 1 < 0) {
          value = 11;
        } else {
          value--;
        }

        if (isString) {
          return value + 1;
        }
        return value;
      },
      _getNextMonth: function _getNextMonth(isString) {
        var value = this.month;
        if (this.month + 1 > 11) {
          value = 0;
        } else {
          value++;
        }

        if (isString) {
          return value + 1;
        }
        return value;
      },
      _getEvents: function _getEvents(year, month, day) {
        if (!(0, _keys2.default)(this.events).length) return;
        var eventName = this.events[year + '-' + month + '-' + day];
        var data = void 0;
        if (eventName) {
          data = {};
          data.eventName = eventName;
        }
        return data;
      }
    },
    watch: {
      events: function events() {
        var _this5 = this;

        this.$nextTick(function () {
          _this5.render();
        });
      },

      value: {
        handler: function handler() {
          this.init();
        },

        deep: true
      },
      mode: function mode() {
        this.init();
      },

      signedDates: {
        handler: function handler() {
          var _this6 = this;

          this.$nextTick(function () {
            _this6.render();
          });
        },

        deep: true
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(24);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(10);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(35);
var hide = __webpack_require__(37);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./vue-better-calendar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vueBetterCalendar);
    global.index = mod.exports;
  }
})(this, function (module, exports, _vueBetterCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _vueBetterCalendar2 = _interopRequireDefault(_vueBetterCalendar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _vueBetterCalendar2.default.version = "1.0.0";

  _vueBetterCalendar2.default.install = function (Vue) {
    Vue.component(_vueBetterCalendar2.default.name, _vueBetterCalendar2.default);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(_vueBetterCalendar2.default);
  }

  exports.default = _vueBetterCalendar2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43585529_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_better_calendar_vue__ = __webpack_require__(52);
function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_better_calendar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43585529_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_better_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("3c14a553", content, true, {});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".vue-better-calendar{position:relative;min-width:300px;font-family:PingFang SC,Hiragino Sans GB,STHeiti,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.vue-better-calendar .calendar-header .calendar-ctl{display:-webkit-box;display:-webkit-flex;display:flex;padding:6px 0}.vue-better-calendar .calendar-header .calendar-ctl .calendar-btn{position:relative;margin-top:6px;-webkit-box-flex:0;-webkit-flex:0 0 20px;flex:0 0 20px;width:20px;vertical-align:middle}.vue-better-calendar .calendar-header .calendar-ctl .calendar-btn:after{content:\"\";display:block;position:absolute;pointer-events:none;left:-10px;top:-10px;z-index:15;width:40px;height:40px}.vue-better-calendar .calendar-header .calendar-ctl .calendar-btn.calendar-btn-prev{text-align:left}.vue-better-calendar .calendar-header .calendar-ctl .calendar-btn.calendar-btn-next{text-align:right}.vue-better-calendar .calendar-header .calendar-ctl .calendar-ctl-month{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vue-better-calendar .calendar-header .calendar-ctl .calendar-ctl-month .month{position:relative;margin:0 auto;width:100px;height:20px;overflow:hidden;text-align:center;color:#5e7a88}.vue-better-calendar .calendar-header .calendar-ctl .calendar-ctl-month .month .select-month-panel{position:absolute;left:0;top:0;height:240px;width:100%;-webkit-transition:top .5s cubic-bezier(.075,.82,.165,1);transition:top .5s cubic-bezier(.075,.82,.165,1)}.vue-better-calendar .calendar-header .calendar-ctl .calendar-ctl-month .month .select-month-panel .item{overflow:hidden;height:20px;width:100%;text-align:center;font-size:14px}.vue-better-calendar .calendar-header .calendar-ctl .calendar-ctl-month .year{text-align:center;font-size:10px;line-height:1;color:#999}.vue-better-calendar .calendar-body .calendar-weeks ul{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;overflow:hidden}.vue-better-calendar .calendar-body .calendar-weeks ul .weekday{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit;text-align:center;font-size:14px;padding:15px}.vue-better-calendar .calendar-body .calendar-dates{position:relative}.vue-better-calendar .calendar-body .calendar-dates.has-line:after,.vue-better-calendar .calendar-body .calendar-dates.has-line:before{content:\"\";display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}.vue-better-calendar .calendar-body .calendar-dates.has-line:before{border-left:1px solid #ccc;top:0;left:0;height:100%;-webkit-transform-origin:left 0;transform-origin:left 0}.vue-better-calendar .calendar-body .calendar-dates.has-line:after{border-bottom:1px solid #ccc;left:0;bottom:0;width:100%;-webkit-transform-origin:0 bottom;transform-origin:0 bottom}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){.vue-better-calendar .calendar-body .calendar-dates.has-line:after,.vue-better-calendar .calendar-body .calendar-dates.has-line:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.vue-better-calendar .calendar-body .calendar-dates.has-line:before{height:200%}.vue-better-calendar .calendar-body .calendar-dates.has-line:after{width:200%}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:3dppx){.vue-better-calendar .calendar-body .calendar-dates.has-line:after,.vue-better-calendar .calendar-body .calendar-dates.has-line:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.vue-better-calendar .calendar-body .calendar-dates.has-line:before{height:300%}.vue-better-calendar .calendar-body .calendar-dates.has-line:after{width:300%}}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day{position:relative}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after,.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{content:\"\";display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{border-top:1px solid #ccc;left:0;top:0;width:100%;-webkit-transform-origin:0 top;transform-origin:0 top}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after{border-right:1px solid #ccc;top:0;right:0;height:100%;-webkit-transform-origin:right 0;transform-origin:right 0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after,.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{width:200%}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after{height:200%}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:3dppx){.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after,.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:before{width:300%}.vue-better-calendar .calendar-body .calendar-dates.has-line .date-row ul .calendar-day:after{height:300%}}.vue-better-calendar .calendar-body .calendar-dates .date-row ul{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;overflow:hidden}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit;text-align:center;padding:10px 5px}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.disabled,.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.disabled .text.text-day.is-special-day,.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.disabled .text.text-fest-day.is-gregorian,.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.disabled .text.text-fest-day.is-lunar{color:#ccc}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.is-today{background-color:#6098bf;color:#fff}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.selected .text.text-day{border-radius:10px;background-color:#5e7a88;color:#fff}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day.selected .text.text-day.is-special-day{background-color:red;color:#fff}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;white-space:normal!important;-webkit-line-clamp:1;-webkit-box-orient:vertical;line-height:1.25}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text.text-custom-day,.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text.text-fest-day{font-size:11px}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text.text-day.is-special-day{color:red}.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text.text-fest-day.is-gregorian,.vue-better-calendar .calendar-body .calendar-dates .date-row ul .calendar-day .text.text-fest-day.is-lunar{color:#09cd2c}.vue-better-calendar .calendar-year-panel{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;left:0;right:0;top:44px;bottom:0;background-color:#fff;-webkit-transform:translateY(0);transform:translateY(0)}.vue-better-calendar .calendar-year-panel .item-year{margin:0 5px;width:60px;line-height:30px;border-radius:20px;text-align:center;border:1px solid #fbfbfb;color:#999}.vue-better-calendar .calendar-year-panel .item-year.active{border:1px solid #5e7a88;background-color:#5e7a88;color:#fff}.vue-better-calendar .calendar-year-panel.panel-show-enter,.vue-better-calendar .calendar-year-panel.panel-show-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.vue-better-calendar .calendar-year-panel.panel-show-enter-active,.vue-better-calendar .calendar-year-panel.panel-show-leave-active{-webkit-transition:all .5s cubic-bezier(.075,.82,.165,1);transition:all .5s cubic-bezier(.075,.82,.165,1)}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(6);
var $keys = __webpack_require__(8);

__webpack_require__(34)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(27)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(28);
var toAbsoluteIndex = __webpack_require__(29);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(11);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(11);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(0);
var fails = __webpack_require__(1);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(38);
var createDesc = __webpack_require__(43);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var IE8_DOM_DEFINE = __webpack_require__(40);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(1)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(47) });


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(8);
var gOPS = __webpack_require__(48);
var pIE = __webpack_require__(49);
var toObject = __webpack_require__(6);
var IObject = __webpack_require__(10);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dateUtils = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lYearDays = lYearDays;
  exports.leapMonth = leapMonth;
  exports.leapDays = leapDays;
  exports.monthDays = monthDays;
  exports.solarDays = solarDays;
  exports.toGanZhiYear = toGanZhiYear;
  exports.toAstro = toAstro;
  exports.toGanZhi = toGanZhi;
  exports.getTerm = getTerm;
  exports.toChinaMonth = toChinaMonth;
  exports.toChinaDay = toChinaDay;
  exports.getAnimal = getAnimal;
  exports.solar2lunar = solar2lunar;
  exports.lunar2solar = lunar2solar;
  var lunarInfo = exports.lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, 0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, 0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, 0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, 0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, 0x0d520];

  var sTermInfo = exports.sTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'];

  var solarMonth = exports.solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var gan = exports.gan = ['\u7532', '\u4E59', '\u4E19', '\u4E01', '\u620A', '\u5DF1', '\u5E9A', '\u8F9B', '\u58EC', '\u7678'];

  var zhi = exports.zhi = ['\u5B50', '\u4E11', '\u5BC5', '\u536F', '\u8FB0', '\u5DF3', '\u5348', '\u672A', '\u7533', '\u9149', '\u620C', '\u4EA5'];

  var animals = exports.animals = ['\u9F20', '\u725B', '\u864E', '\u5154', '\u9F99', '\u86C7', '\u9A6C', '\u7F8A', '\u7334', '\u9E21', '\u72D7', '\u732A'];

  var solarTerm = exports.solarTerm = ['\u5C0F\u5BD2', '\u5927\u5BD2', '\u7ACB\u6625', '\u96E8\u6C34', '\u60CA\u86F0', '\u6625\u5206', '\u6E05\u660E', '\u8C37\u96E8', '\u7ACB\u590F', '\u5C0F\u6EE1', '\u8292\u79CD', '\u590F\u81F3', '\u5C0F\u6691', '\u5927\u6691', '\u7ACB\u79CB', '\u5904\u6691', '\u767D\u9732', '\u79CB\u5206', '\u5BD2\u9732', '\u971C\u964D', '\u7ACB\u51AC', '\u5C0F\u96EA', '\u5927\u96EA', '\u51AC\u81F3'];

  var nStr1 = exports.nStr1 = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D', '\u5341'];

  var nStr2 = exports.nStr2 = ['\u521D', '\u5341', '\u5EFF', '\u5345'];

  var nStr3 = exports.nStr3 = ['\u6B63', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D', '\u5341', '\u51AC', '\u814A'];

  function lYearDays(y) {
    var i = void 0;
    var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + leapDays(y);
  }

  function leapMonth(y) {
    return lunarInfo[y - 1900] & 0xf;
  }

  function leapDays(y) {
    if (leapMonth(y)) {
      return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  }

  function monthDays(y, m) {
    if (m > 12 || m < 1) return -1;
    return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  }

  function solarDays(y, m) {
    if (m > 12 || m < 1) return -1;
    var ms = m - 1;
    if (ms === 1) {
      return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0 ? 29 : 28;
    } else {
      return solarMonth[ms];
    }
  }

  function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey === 0) ganKey = 10;
    if (zhiKey === 0) zhiKey = 12;
    return gan[ganKey - 1] + zhi[zhiKey - 1];
  }

  function toAstro(cMonth, cDay) {
    var s = '\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF';
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5EA7';
  }

  function toGanZhi(offset) {
    return gan[offset % 10] + zhi[offset % 12];
  }

  function getTerm(y, n) {
    if (y < 1900 || y > 2100) return -1;
    if (n < 1 || n > 24) return -1;
    var _table = sTermInfo[y - 1900];
    var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
    var _calDay = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
    return parseInt(_calDay[n - 1]);
  }

  function toChinaMonth(m) {
    if (m > 12 || m < 1) return -1;
    var s = nStr3[m - 1];
    s += '\u6708';
    return s;
  }

  function toChinaDay(d) {
    var s = void 0;
    switch (d) {
      case 10:
        s = '\u521D\u5341';
        break;
      case 20:
        s = '\u4E8C\u5341';
        break;
      case 30:
        s = '\u4E09\u5341';
        break;
      default:
        s = nStr2[Math.floor(d / 10)];
        s += nStr1[d % 10];
    }
    return s;
  }

  function getAnimal(y) {
    return animals[(y - 4) % 12];
  }

  function solar2lunar(y, m, d) {
    if (y < 1900 || y > 2100) return -1;
    if (y === 1900 && m === 1 && d < 31) return -1;
    var i = void 0;
    var leap = 0;
    var temp = 0;
    var objDate = new Date();
    if (y) {
      objDate = new Date(y, parseInt(m) - 1, d);
    }
    y = objDate.getFullYear();
    m = objDate.getMonth() + 1;
    d = objDate.getDate();
    var offset = (Date.UTC(y, m - 1, d) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
      isToday = true;
    }

    var nWeek = objDate.getDay();
    var cWeek = nStr1[nWeek];
    if (nWeek === 0) nWeek = 7;
    var year = i;
    leap = leapMonth(i);
    var isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i === leap + 1 && isLeap === false) {
        --i;
        isLeap = true;
        temp = leapDays(year);
      } else {
        temp = monthDays(year, i);
      }

      if (isLeap === true && i === leap + 1) isLeap = false;
      offset -= temp;
    }
    if (offset === 0 && leap > 0 && i === leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }

    var month = i;

    var day = offset + 1;

    var sm = m - 1;
    var gzY = toGanZhiYear(year);

    var firstNode = getTerm(year, m * 2 - 1);
    var secondNode = getTerm(year, m * 2);
    var gzM = toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = toGanZhi((y - 1900) * 12 + m + 12);
    }

    var isTerm = false;
    var Term = null;
    if (firstNode === d) {
      isTerm = true;
      Term = solarTerm[m * 2 - 2];
    }
    if (secondNode === d) {
      isTerm = true;
      Term = solarTerm[m * 2 - 1];
    }

    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = toGanZhi(dayCyclical + d - 1);

    var astro = toAstro(m, d);
    return {
      lYear: year,
      lMonth: month,
      lDay: day,
      animal: getAnimal(year),
      IMonthCn: (isLeap ? '\u95F0' : '') + toChinaMonth(month),
      IDayCn: toChinaDay(day),
      cYear: y,
      cMonth: m,
      cDay: d,
      gzYear: gzY,
      gzMonth: gzM,
      gzDay: gzD,
      isToday: isToday,
      isLeap: isLeap,
      nWeek: nWeek,
      ncWeek: '\u661F\u671F' + cWeek,
      isTerm: isTerm,
      Term: Term,
      astro: astro
    };
  }

  function lunar2solar(y, m, d, isLeapMonth) {
    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) return -1;
    isLeapMonth = !!isLeapMonth;
    var leapMonths = leapMonth(y);

    if (isLeapMonth && leapMonths !== m) return -1;
    var day = monthDays(y, m);
    var _day = day;

    if (isLeapMonth) {
      _day = leapDays(y);
    }
    if (y < 1900 || y > 2100 || d > _day) return -1;
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var _i = 1; _i < m; _i++) {
      leap = leapMonth(y);
      if (!isAdd) {
        if (leap <= _i && leap > 0) {
          offset += leapDays(y);
          isAdd = true;
        }
      }
      offset += monthDays(y, _i);
    }

    if (isLeapMonth) offset += day;

    var stamp = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stamp);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return solar2lunar(cY, cM, cD);
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.utils = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pad = pad;
  exports.isValidColor = isValidColor;
  function pad(num) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

    var len = num.toString().length;
    while (len < n) {
      num = str + num;
      len++;
    }
    return num;
  }

  function isValidColor(value) {
    var colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    var rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    var rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;
    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-better-calendar"},[_c('div',{staticClass:"calendar-header"},[_c('div',{staticClass:"calendar-ctl"},[_c('div',{staticClass:"calendar-btn calendar-btn-prev",on:{"click":function($event){$event.stopPropagation();return _vm.prev($event)}}},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 16 16","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"transform-group"},[_c('g',{attrs:{"transform":"scale(0.015625, 0.015625)"}},[_c('path',{attrs:{"d":"M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z","fill":_vm.ctlColor}})])])])]),_vm._v(" "),_c('div',{staticClass:"calendar-ctl-month",on:{"click":function($event){$event.stopPropagation();return _vm.changeYear($event)}}},[_c('div',{staticClass:"month"},[_c('div',{staticClass:"select-month-panel",style:({top: ("-" + (_vm.month * 20) + "px")})},[_c('ul',_vm._l((_vm.months),function(m){return _c('li',{staticClass:"item"},[_vm._v(_vm._s(m))])}))])]),_vm._v(" "),_c('div',{staticClass:"year"},[_c('span',[_vm._v(_vm._s(_vm.year))])])]),_vm._v(" "),_c('div',{staticClass:"calendar-btn calendar-btn-next",on:{"click":function($event){$event.stopPropagation();return _vm.next($event)}}},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 16 16","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"transform-group"},[_c('g',{attrs:{"transform":"scale(0.015625, 0.015625)"}},[_c('path',{attrs:{"d":"M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z","fill":_vm.ctlColor}})])])])])])]),_vm._v(" "),_c('div',{staticClass:"calendar-body"},[_c('div',{staticClass:"calendar-weeks"},[_c('ul',_vm._l((_vm.weeks),function(weekday){return _c('li',{staticClass:"weekday"},[_c('span',[_vm._v(_vm._s(weekday))])])}))]),_vm._v(" "),_c('div',{staticClass:"calendar-dates",class:{'has-line': _vm.hasLine}},_vm._l((_vm.days),function(dates,k1){return _c('div',{staticClass:"date-row"},[_c('ul',_vm._l((dates),function(date,k2){return _c('li',{ref:"dayItem",refInFor:true,staticClass:"calendar-day",class:[{'is-weekend': k2 === 0 || k2 === 6}, _vm.getDateCls(date)],style:(_vm.styleObj(date)),on:{"click":function($event){$event.stopPropagation();_vm.selectDate(k1, k2)}}},[(!date.disabled)?[_c('p',{staticClass:"text text-day",class:{'is-special-day': k2 === 0 || k2 === 6|| ((date.isLunarFestival || date.isGregorianFestival) && _vm.showLunar)},style:({lineHeight: (_vm.dayItemLineHeight + "px")})},[_vm._v("\n                 "+_vm._s(date.day)+"\n               ")]),_vm._v(" "),(_vm.showLunar)?_c('p',{staticClass:"text text-fest-day",class:{'is-lunar': date.isLunarFestival, 'is-gregorian': date.isGregorianFestival}},[_vm._v("\n                 "+_vm._s(date.lunar)+"\n               ")]):_vm._e(),_vm._v(" "),(date.eventName)?_c('p',{staticClass:"text text-custom-day"},[_vm._v("\n                 "+_vm._s(date.eventName.title)+"\n               ")]):_vm._e()]:(_vm.showDisableDate)?[_c('p',{staticClass:"text text-day",class:{'is-special-day': k2 === 0 || k2 === 6|| ((date.isLunarFestival || date.isGregorianFestival) && _vm.showLunar)},style:({lineHeight: (_vm.dayItemLineHeight + "px")})},[_vm._v("\n                 "+_vm._s(date.day)+"\n               ")]),_vm._v(" "),(_vm.showLunar)?_c('p',{staticClass:"text text-fest-day",class:{'is-lunar': date.isLunarFestival, 'is-gregorian': date.isGregorianFestival}},[_vm._v("\n                 "+_vm._s(date.lunar)+"\n               ")]):_vm._e(),_vm._v(" "),(date.eventName)?_c('p',{staticClass:"text text-custom-day"},[_vm._v("\n                 "+_vm._s(date.eventName.title)+"\n               ")]):_vm._e()]:_vm._e()],2)}))])}))]),_vm._v(" "),_c('transition',{attrs:{"name":"panel-show"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showYearPanel),expression:"showYearPanel"}],staticClass:"calendar-year-panel"},_vm._l((_vm.years),function(y){return _c('div',{staticClass:"item-year",class:{active: y === _vm.year},on:{"click":function($event){$event.stopPropagation();_vm.selectYear(y)}}},[_c('span',[_vm._v(_vm._s(y))])])}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});