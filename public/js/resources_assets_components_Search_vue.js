(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_components_Search_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_pinia_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pinia/home */ "./resources/assets/js/pinia/home.js");
/* harmony import */ var _js_pinia_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/pinia/search */ "./resources/assets/js/pinia/search.js");
/* harmony import */ var _js_pinia_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/pinia/general */ "./resources/assets/js/pinia/general.js");
/* harmony import */ var _js_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/helper */ "./resources/assets/js/helper.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.esm.js");
/* harmony import */ var vue3_persian_datetime_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue3-persian-datetime-picker */ "./node_modules/vue3-persian-datetime-picker/dist/vue3-persian-datetime-picker.common.js");
/* harmony import */ var vue3_persian_datetime_picker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue3_persian_datetime_picker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue3_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue3-slider */ "./node_modules/vue3-slider/dist/vue3-slider.common.js");
/* harmony import */ var vue3_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue3_slider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_good_table_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-good-table-next */ "./node_modules/vue-good-table-next/dist/vue-good-table.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** import pinia homeStore*/


 // helper



var moment = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js"); // multi select



/**talkhabi datepicker */

 // slider

 // import vue good table


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'search',
  mixins: [_js_helper__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      isLoading: false,
      isLoadingExport: false,
      isLoadingPgae: false,
      queuesAvailable: [],
      queuesSelected: null,
      agentsAvailable: [],
      agentsSelected: null,
      eventsAvailable: [],
      eventsSelected: null,
      timeFilter: null,
      labaleTimefilter: null,
      shortcutTimeFilter: null,
      optionTimeFilter: [{
        code: 'today',
        lable: this.$t("HOME.today")
      }, {
        code: 'yesterday',
        lable: this.$t("HOME.yesterday")
      }, {
        code: 'lastWeek',
        lable: this.$t("HOME.lastWeek")
      }, {
        code: 'currentWeek',
        lable: this.$t("HOME.currentWeek")
      }, {
        code: 'currentMonth',
        lable: this.$t("HOME.currentMonth")
      }, {
        code: 'last3Month',
        lable: this.$t("HOME.last3Month")
      }],
      delay: null,
      minDelay: 0,
      maxDelay: 100,
      answered: null,
      minAnswered: 0,
      maxAnswered: 100,
      callid: null,
      number: null,
      rowsExport: null,
      rows: null,
      perPage: 10,
      page: 1,
      totalRecords: 0,
      optionsTable: {
        enabled: true,
        placeholder: this.$t('GENERAL.searchFeild')
      },
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 10,
        position: 'bottom',
        perPageDropdown: [10, 25, 50, 100],
        dropdownAllowAll: false,
        firstLabel: this.$t('GENERAL.firstPage'),
        lastLabel: this.$t('GENERAL.LastPage'),
        nextLabel: this.$t('GENERAL.next'),
        prevLabel: this.$t('GENERAL.back'),
        rowsPerPageLabel: this.$t('GENERAL.rowsperpage'),
        ofLabel: this.$t('GENERAL.of'),
        pageLabel: this.$t('GENERAL.page'),
        // for 'pages' mode
        allLabel: this.$t('GENERAL.all')
      },
      columns: [{
        label: this.$t('SEARCH.search.callid'),
        field: 'callid',
        sortable: false
      }, {
        label: this.$t('SEARCH.search.number'),
        field: 'data3',
        type: 'number'
      }, {
        label: this.$t('SEARCH.search.time'),
        field: 'data2',
        type: 'number'
      }, {
        label: this.$t('SEARCH.search.wait'),
        field: 'data1',
        type: 'number'
      }, {
        label: this.$t('SEARCH.search.event'),
        field: 'event'
      }, {
        label: this.$t('SEARCH.search.agent'),
        field: 'agent'
      }, {
        label: this.$t('SEARCH.search.queue'),
        field: 'queuename',
        type: 'number'
      }, {
        label: this.$t('SEARCH.search.date'),
        field: 'time',
        sortable: false
      }],

      /** delay timer */
      timer: null
    };
  },
  methods: {
    /** show lable object */
    showLable: function showLable(items) {
      var lable = '';
      items.map(function (item) {
        lable += ', ' + item.title;
      });
      return lable.substring(1);
    },

    /** get data from api */
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var req, queue, agent, event;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this.isLoadingPgae = true;
                _context.next = 4;
                return _this.$axios({
                  url: '/searchActions',
                  data: {
                    method: 'Search_getData'
                  }
                });

              case 4:
                req = _context.sent;
                queue = [];
                req.data.queuesAvailable.map(function (item) {
                  if (item.descr != 'NONE') queue.push({
                    code: item.extension,
                    title: "".concat(item.descr, " (").concat(item.extension, ")")
                  });
                });
                console.log(queue);
                _this.queuesAvailable = queue; // // get agent data

                agent = [];
                req.data.agentsAvailable.map(function (item) {
                  if (item.name != 'NONE') agent.push({
                    code: item.name,
                    title: item.name
                  });
                });
                _this.agentsAvailable = agent;
                event = [];
                req.data.eventsAvailable.map(function (item) {
                  if (item.event != 'NONE' && item.event != 'CONFIGRELOAD' && item.event != 'DID' && item.event != 'QUEUESTART') event.push({
                    code: item.event,
                    title: _this.$t("GENERAL.".concat(item.event))
                  });
                });
                _this.eventsAvailable = event;
                _this.maxDelay = parseInt(req.data.maxDelay);
                _this.maxAnswered = parseInt(req.data.maxAnswered);
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 22:
                _this.isLoadingPgae = false;

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }))();
    },

    /** submit search
     * call this method after change any input or multi select and slider
     */
    submit: function submit() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var pagination, exportRequest, firstLoad, fromFilter, fromFilterEndTime, toFilter, data, req;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pagination = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                exportRequest = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
                firstLoad = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : false;
                _context2.prev = 3;

                if (!exportRequest) {
                  _this2.rows = null;
                  _this2.totalRecords = 0;
                  if (pagination == 'next') _this2.page++;else if (pagination == 'back') _this2.page--;else _this2.page = 1;
                  _this2.isLoading = true;
                }

                fromFilter = _this2.timeFilter ? _this2.timeFilter.length ? moment(_this2.timeFilter[0] + '00:00', 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD HH:mm') : null : null;
                fromFilterEndTime = _this2.timeFilter ? _this2.timeFilter.length ? moment(_this2.timeFilter[0] + '23:59', 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD HH:mm') : null : null;
                toFilter = _this2.timeFilter ? _this2.timeFilter[1] ? _this2.timeFilter.length ? moment(_this2.timeFilter[1] + '23:59', 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD HH:mm') : null : fromFilterEndTime : null;

                if (!firstLoad) {
                  _context2.next = 13;
                  break;
                }

                toFilter = _this2.home.toFilter ? moment(_this2.home.toFilter + ' ' + _this2.home.toTime, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD HH:mm') : null;
                fromFilter = _this2.home.fromFilter ? moment(_this2.home.fromFilter + ' ' + _this2.home.fromTime, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD HH:mm') : null;

                if (toFilter) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", _this2.isLoading = false);

              case 13:
                data = {
                  'method': 'Search_submit',
                  'queues': _this2.queuesSelected ? _this2.queuesSelected.code : null,
                  'agents': _this2.agentsSelected ? _this2.agentsSelected.code : null,
                  'events': _this2.eventsSelected ? _this2.eventsSelected.code : null,
                  'delay': _this2.delay,
                  'answered': _this2.answered,
                  'callid': _this2.callid,
                  'number': _this2.number,
                  'perPage': _this2.perPage,
                  'page': _this2.page,
                  'export': exportRequest,
                  'fromFilter': fromFilter,
                  'toFilter': toFilter,
                  'timeFilter': _this2.shortcutTimeFilter
                };
                _context2.next = 16;
                return _this2.$axios({
                  url: '/searchActions',
                  data: data
                });

              case 16:
                req = _context2.sent;
                _this2.rows = req.data.data.map(function (item) {
                  return {
                    agent: item.agent,
                    callid: item.callid,
                    data1: item.data1,
                    data2: item.data2,
                    data3: item.data3,
                    event: _this2.$t("GENERAL.".concat(item.event)),
                    queuename: item.queuename,
                    time: item.time
                  };
                });
                _this2.labaleTimefilter = req.data.time ? _this2.jdate(req.data.time[0], 'jYYYY/jMM/jDD') + ' ~ ' + _this2.jdate(req.data.time[1], 'jYYYY/jMM/jDD') : '';
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);

              case 24:
                _this2.isLoading = false;

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 21]]);
      }))();
    },

    /** request export
     * @param1 is string for detect type file (pdf,scv,...)
     */
    getDataForExport: function getDataForExport(kind) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.isLoadingExport = true;
                _context3.next = 4;
                return _this3.submit(null, true);

              case 4:
                _this3.tableExport('SEARCH_content', kind);

                _this3.isLoadingExport = false;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },

    /** delay for call loadItems after type in input search */
    delaySearch: function delaySearch() {
      var _this4 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this4.submit();

        clearTimeout(_this4.timer);
        _this4.timer = null;
      }, 800);
    }
  },
  components: {
    VueMultiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_4__["default"],
    datePicker: (vue3_persian_datetime_picker__WEBPACK_IMPORTED_MODULE_5___default()),
    slider: (vue3_slider__WEBPACK_IMPORTED_MODULE_6___default()),
    VueGoodTable: vue_good_table_next__WEBPACK_IMPORTED_MODULE_7__.VueGoodTable
  },
  mounted: function mounted() {
    this.getData();
    this.submit(null, false, 'first load');
  },
  watch: {
    timeFilter: function timeFilter() {
      this.submit();
    },
    delay: function delay() {
      this.delaySearch();
    },
    answered: function answered() {
      this.delaySearch();
    }
  },
  setup: function setup() {
    var home = (0,_js_pinia_home__WEBPACK_IMPORTED_MODULE_0__.useHome)();
    var search = (0,_js_pinia_search__WEBPACK_IMPORTED_MODULE_1__.useSearch)();
    var general = (0,_js_pinia_general__WEBPACK_IMPORTED_MODULE_2__.useGeneral)();
    return {
      home: home,
      general: general,
      search: search
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "search"
};
var _hoisted_2 = {
  key: 0,
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "my-2"
};
var _hoisted_4 = {
  "class": "table-shadow row",
  style: {
    "overflow": "unset"
  }
};
var _hoisted_5 = {
  "class": "col-12"
};
var _hoisted_6 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_7 = {
  "class": "d-flex app"
};
var _hoisted_8 = {
  key: 0,
  "class": "guide"
};
var _hoisted_9 = {
  "class": "m-0"
};
var _hoisted_10 = {
  "class": "d-flex align-items-center"
};
var _hoisted_11 = {
  key: 0,
  "class": "export"
};
var _hoisted_12 = ["title"];
var _hoisted_13 = ["title"];
var _hoisted_14 = ["title"];
var _hoisted_15 = {
  key: 1,
  "class": "loader-wait-request mx-2",
  style: {
    "width": "20px",
    "height": "20px"
  }
};
var _hoisted_16 = {
  "class": "mt-4"
};
var _hoisted_17 = {
  style: {
    "height": "20px"
  }
};
var _hoisted_18 = {
  "class": "d-flex align-items-center"
};
var _hoisted_19 = ["value"];
var _hoisted_20 = {
  dir: "rlt"
};
var _hoisted_21 = {
  "class": "d-flex align-items-center"
};
var _hoisted_22 = {
  dir: "rlt"
};
var _hoisted_23 = {
  "class": "d-flex align-items-center"
};
var _hoisted_24 = {
  dir: "rlt"
};
var _hoisted_25 = {
  "class": "d-flex align-items-center"
};
var _hoisted_26 = {
  "class": "input-slider"
};
var _hoisted_27 = {
  key: 0,
  "class": "d-flex align-items-center"
};
var _hoisted_28 = ["value"];
var _hoisted_29 = {
  "class": "input-slider"
};
var _hoisted_30 = {
  key: 0,
  "class": "d-flex align-items-center"
};
var _hoisted_31 = ["value"];
var _hoisted_32 = {
  style: {
    "width": "100px"
  }
};
var _hoisted_33 = {
  style: {
    "width": "100px"
  }
};
var _hoisted_34 = {
  key: 0,
  "class": "w-100",
  dir: "ltr"
};
var _hoisted_35 = {
  key: 0
};
var _hoisted_36 = {
  key: 0,
  dir: "rtl"
};
var _hoisted_37 = {
  key: 1,
  dir: "rtl"
};
var _hoisted_38 = {
  key: 1
};
var _hoisted_39 = {
  "class": "mt-4",
  id: "SEARCH_content"
};
var _hoisted_40 = {
  key: 1,
  "class": "loader-ctn d-flex align-items-center justify-content-center"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "loader-wait-request"
}, null, -1
/* HOISTED */
);

var _hoisted_42 = [_hoisted_41];
var _hoisted_43 = {
  key: 1,
  "class": "loader-ctn d-flex align-items-center justify-content-center",
  style: {
    "height": "75vh"
  }
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "loader-wait-request"
}, null, -1
/* HOISTED */
);

var _hoisted_45 = [_hoisted_44];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_notifications = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notifications");

  var _component_VueMultiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueMultiselect");

  var _component_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-picker");

  var _component_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("slider");

  var _component_vue_good_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-good-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notifications, {
    position: "bottom left",
    duration: 5000
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), !$data.isLoadingPgae ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" title page "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.title')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" search box and table content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_ctx.$t('SEARCH.search.GUIDE') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.GUIDE')), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.title')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [!$data.isLoadingExport ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pdf",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.getDataForExport('pdf');
    }),
    title: _ctx.$t('GENERAL.pdfExport')
  }, null, 8
  /* PROPS */
  , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "excel",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.getDataForExport('xls');
    }),
    title: _ctx.$t('GENERAL.excelExport')
  }, null, 8
  /* PROPS */
  , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "csv",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.getDataForExport('csv');
    }),
    title: _ctx.$t('GENERAL.csvExport')
  }, null, 8
  /* PROPS */
  , _hoisted_14)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isLoadingExport ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.date')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.queue')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.agent')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.event')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.wait')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.time')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.number')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.callid')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" search and filter box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.timeFilter || $data.shortcutTimeFilter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 0,
    "class": "fa fa-times remove-input",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.timeFilter = $data.shortcutTimeFilter = $data.labaleTimefilter = null;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $data.labaleTimefilter,
    "class": "date w-100 text-center"
  }, null, 8
  /* PROPS */
  , _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_picker, {
    modelValue: $data.timeFilter,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.timeFilter = $event;
    }),
    type: "date",
    "custom-input": ".date ",
    range: "",
    clearable: ""
  }, {
    "now-btn": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var vm = _ref.vm,
          color = _ref.color,
          goToday = _ref.goToday,
          lang = _ref.lang;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueMultiselect, {
        modelValue: $data.shortcutTimeFilter,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.shortcutTimeFilter = $event;
        }),
        options: $data.optionTimeFilter,
        label: "lable",
        "track-by": "code",
        placeholder: _ctx.$t('GENERAL.select'),
        showLabels: false,
        onClose: _cache[5] || (_cache[5] = function ($event) {
          return $options.submit();
        })
      }, null, 8
      /* PROPS */
      , ["modelValue", "options", "placeholder"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueMultiselect, {
    modelValue: $data.queuesSelected,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.queuesSelected = $event;
    }),
    options: $data.queuesAvailable,
    label: "title",
    "track-by": "code",
    placeholder: _ctx.$t('GENERAL.select'),
    showLabels: false,
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return $options.submit();
    })
  }, {
    noResult: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('GENERAL.noResult')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options", "placeholder"]), $data.queuesSelected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 0,
    "class": "fa fa-times remove-input m-1",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      $data.queuesSelected = null;
      $options.submit();
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueMultiselect, {
    modelValue: $data.agentsSelected,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.agentsSelected = $event;
    }),
    options: $data.agentsAvailable,
    label: "title",
    "track-by": "code",
    placeholder: _ctx.$t('GENERAL.select'),
    showLabels: false,
    onClose: _cache[11] || (_cache[11] = function ($event) {
      return $options.submit();
    })
  }, {
    noResult: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('GENERAL.noResult')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options", "placeholder"]), $data.agentsSelected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 0,
    "class": "fa fa-times remove-input m-1",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      $data.agentsSelected = null;
      $options.submit();
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueMultiselect, {
    modelValue: $data.eventsSelected,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.eventsSelected = $event;
    }),
    options: $data.eventsAvailable,
    label: "title",
    "track-by": "code",
    placeholder: _ctx.$t('GENERAL.select'),
    showLabels: false,
    onClose: _cache[14] || (_cache[14] = function ($event) {
      return $options.submit();
    })
  }, {
    noResult: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('GENERAL.noResult')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options", "placeholder"]), $data.eventsSelected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 0,
    "class": "fa fa-times remove-input m-1",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      $data.eventsSelected = null;
      $options.submit();
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_slider, {
    modelValue: $data.delay,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.delay = $event;
    }),
    height: 8,
    "track-color": "#1e90ff5e",
    color: "dodgerblue",
    max: $data.maxDelay,
    min: $data.minDelay,
    tooltip: true
  }, null, 8
  /* PROPS */
  , ["modelValue", "max", "min"]), $data.delay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-times remove-input",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $data.delay = null;
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    value: $data.delay + ' ثانیه ',
    type: "text",
    disabled: ""
  }, null, 8
  /* PROPS */
  , _hoisted_28)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_slider, {
    modelValue: $data.answered,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.answered = $event;
    }),
    height: 8,
    "track-color": "#1e90ff5e",
    color: "dodgerblue",
    max: $data.maxAnswered,
    min: $data.minAnswered,
    tooltip: true
  }, null, 8
  /* PROPS */
  , ["modelValue", "max", "min"]), $data.answered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-times remove-input",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $data.answered = null;
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    value: $data.answered + ' ثانیه ',
    type: "text",
    disabled: ""
  }, null, 8
  /* PROPS */
  , _hoisted_31)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100 text-center",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.number = $event;
    }),
    type: "text",
    onKeyup: _cache[21] || (_cache[21] = function () {
      return $options.delaySearch && $options.delaySearch.apply($options, arguments);
    }),
    onKeydown: _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function ($event) {
      return $options.submit();
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.number]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100 text-center",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.callid = $event;
    }),
    type: "text",
    onKeyup: _cache[24] || (_cache[24] = function () {
      return $options.delaySearch && $options.delaySearch.apply($options, arguments);
    }),
    onKeydown: _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function ($event) {
      return $options.submit();
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.callid]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("vue good table "), $data.rows ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_good_table, {
    columns: $data.columns,
    rows: $data.rows,
    "search-options": $data.optionsTable,
    "pagination-options": $data.paginationOptions
  }, {
    "table-row": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [props.column.field == 'time' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_35, [_ctx.$i18n.locale == 'en' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.jdate(props.row.time, 'YYYY/MM/DD')), 1
      /* TEXT */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.jdate(props.row.time, 'jYYYY/jMM/jDD')), 1
      /* TEXT */
      ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.formattedRow[props.column.field]), 1
      /* TEXT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["columns", "rows", "search-options", "pagination-options"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table for export "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.date')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.queue')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.agent')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.event')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.wait')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.time')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.number')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SEARCH.search.callid')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.rows, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.jdate(item.time)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.queuename), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.agent), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.event), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.data1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.data2), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.data3), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.callid), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, false]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loader "), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, _hoisted_42)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loader "), $data.isLoadingPgae ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_43, _hoisted_45)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/assets/js/pinia/search.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/pinia/search.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSearch": () => (/* binding */ useSearch)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");

var useSearch = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('search', {
  state: function state() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_multiselect_dist_vue_multiselect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-multiselect/dist/vue-multiselect.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_multiselect_dist_vue_multiselect_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#search .input-slider {\n  width: 100px;\n}\n#search .input-slider input {\n  padding: 0 !important;\n  background: unset !important;\n  text-align: center;\n  border: none;\n}\n#search .multiselect * {\n  font-size: 12px !important;\n}\n#search .remove-input {\n  cursor: pointer;\n  color: red;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.css ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"×\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0 5px;border-color:#999 transparent transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::-webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_6159e2e6_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_6159e2e6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_6159e2e6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-good-table-next/dist/vue-good-table.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-good-table-next/dist/vue-good-table.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VueGoodTable": () => (/* binding */ VueGoodTable),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/*!
  * vue-good-table-next v0.2.0
  * (c) 2021-present Boris Flesch <boris@singlequote.net>
  * (c) 2017-2021 xaksis <shay@crayonbits.com>
  * @license MIT
  */


const DEFAULT_SORT_TYPE = 'asc';
const SORT_TYPES = {
  Ascending: 'asc',
  Descending: 'desc',
  None: 'none',
};

const PAGINATION_MODES = {
  Pages: 'pages',
  Records: 'records',
};
const DEFAULT_ROWS_PER_PAGE_DROPDOWN = [10, 20, 30, 40, 50];

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

var lodash_isequal = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
}(lodash_isequal, lodash_isequal.exports));

var isEqual = lodash_isequal.exports;

// all diacritics
let diacritics = {
  a: [
    "a",
    "à",
    "á",
    "â",
    "ã",
    "ä",
    "å",
    "æ",
    "ā",
    "ă",
    "ą",
    "ǎ",
    "ǟ",
    "ǡ",
    "ǻ",
    "ȁ",
    "ȃ",
    "ȧ",
    "ɐ",
    "ɑ",
    "ɒ",
    "ͣ",
    "а",
    "ӑ",
    "ӓ",
    "ᵃ",
    "ᵄ",
    "ᶏ",
    "ḁ",
    "ẚ",
    "ạ",
    "ả",
    "ấ",
    "ầ",
    "ẩ",
    "ẫ",
    "ậ",
    "ắ",
    "ằ",
    "ẳ",
    "ẵ",
    "ặ",
    "ₐ",
    "ⱥ",
    "ａ",
  ],
  b: ["b", "ƀ", "ƃ", "ɓ", "ᖯ", "ᵇ", "ᵬ", "ᶀ", "ḃ", "ḅ", "ḇ", "ｂ"],
  c: ["c", "ç", "ć", "ĉ", "ċ", "č", "ƈ", "ȼ", "ɕ", "ͨ", "ᴄ", "ᶜ", "ḉ", "ↄ", "ｃ"],
  d: [
    "d",
    "ď",
    "đ",
    "Ƌ",
    "ƌ",
    "ȡ",
    "ɖ",
    "ɗ",
    "ͩ",
    "ᵈ",
    "ᵭ",
    "ᶁ",
    "ᶑ",
    "ḋ",
    "ḍ",
    "ḏ",
    "ḑ",
    "ḓ",
    "ｄ",
  ],
  e: [
    "e",
    "è",
    "é",
    "ê",
    "ë",
    "ē",
    "ĕ",
    "ė",
    "ę",
    "ě",
    "ǝ",
    "ȅ",
    "ȇ",
    "ȩ",
    "ɇ",
    "ɘ",
    "ͤ",
    "ᵉ",
    "ᶒ",
    "ḕ",
    "ḗ",
    "ḙ",
    "ḛ",
    "ḝ",
    "ẹ",
    "ẻ",
    "ẽ",
    "ế",
    "ề",
    "ể",
    "ễ",
    "ệ",
    "ₑ",
    "ｅ",
  ],
  f: ["f", "ƒ", "ᵮ", "ᶂ", "ᶠ", "ḟ", "ｆ"],
  g: ["g", "ĝ", "ğ", "ġ", "ģ", "ǥ", "ǧ", "ǵ", "ɠ", "ɡ", "ᵍ", "ᵷ", "ᵹ", "ᶃ", "ᶢ", "ḡ", "ｇ"],
  h: [
    "h",
    "ĥ",
    "ħ",
    "ƕ",
    "ȟ",
    "ɥ",
    "ɦ",
    "ʮ",
    "ʯ",
    "ʰ",
    "ʱ",
    "ͪ",
    "Һ",
    "һ",
    "ᑋ",
    "ᶣ",
    "ḣ",
    "ḥ",
    "ḧ",
    "ḩ",
    "ḫ",
    "ⱨ",
    "ｈ",
  ],
  i: [
    "i",
    "ì",
    "í",
    "î",
    "ï",
    "ĩ",
    "ī",
    "ĭ",
    "į",
    "ǐ",
    "ȉ",
    "ȋ",
    "ɨ",
    "ͥ",
    "ᴉ",
    "ᵎ",
    "ᵢ",
    "ᶖ",
    "ᶤ",
    "ḭ",
    "ḯ",
    "ỉ",
    "ị",
    "ｉ",
  ],
  j: ["j", "ĵ", "ǰ", "ɉ", "ʝ", "ʲ", "ᶡ", "ᶨ", "ｊ"],
  k: ["k", "ķ", "ƙ", "ǩ", "ʞ", "ᵏ", "ᶄ", "ḱ", "ḳ", "ḵ", "ⱪ", "ｋ"],
  l: [
    "l",
    "ĺ",
    "ļ",
    "ľ",
    "ŀ",
    "ł",
    "ƚ",
    "ȴ",
    "ɫ",
    "ɬ",
    "ɭ",
    "ˡ",
    "ᶅ",
    "ᶩ",
    "ᶪ",
    "ḷ",
    "ḹ",
    "ḻ",
    "ḽ",
    "ℓ",
    "ⱡ",
  ],
  m: ["m", "ɯ", "ɰ", "ɱ", "ͫ", "ᴟ", "ᵐ", "ᵚ", "ᵯ", "ᶆ", "ᶬ", "ᶭ", "ḿ", "ṁ", "ṃ", "㎡", "㎥", "ｍ"],
  n: [
    "n",
    "ñ",
    "ń",
    "ņ",
    "ň",
    "ŉ",
    "ƞ",
    "ǹ",
    "ȵ",
    "ɲ",
    "ɳ",
    "ᵰ",
    "ᶇ",
    "ᶮ",
    "ᶯ",
    "ṅ",
    "ṇ",
    "ṉ",
    "ṋ",
    "ⁿ",
    "ｎ",
  ],
  o: [
    "o",
    "ò",
    "ó",
    "ô",
    "õ",
    "ö",
    "ø",
    "ō",
    "ŏ",
    "ő",
    "ơ",
    "ǒ",
    "ǫ",
    "ǭ",
    "ǿ",
    "ȍ",
    "ȏ",
    "ȫ",
    "ȭ",
    "ȯ",
    "ȱ",
    "ɵ",
    "ͦ",
    "о",
    "ӧ",
    "ө",
    "ᴏ",
    "ᴑ",
    "ᴓ",
    "ᴼ",
    "ᵒ",
    "ᶱ",
    "ṍ",
    "ṏ",
    "ṑ",
    "ṓ",
    "ọ",
    "ỏ",
    "ố",
    "ồ",
    "ổ",
    "ỗ",
    "ộ",
    "ớ",
    "ờ",
    "ở",
    "ỡ",
    "ợ",
    "ₒ",
    "ｏ",
    "𐐬",
  ],
  p: ["p", "ᵖ", "ᵱ", "ᵽ", "ᶈ", "ṕ", "ṗ", "ｐ"],
  q: ["q", "ɋ", "ʠ", "ᛩ", "ｑ"],
  r: [
    "r",
    "ŕ",
    "ŗ",
    "ř",
    "ȑ",
    "ȓ",
    "ɍ",
    "ɹ",
    "ɻ",
    "ʳ",
    "ʴ",
    "ʵ",
    "ͬ",
    "ᵣ",
    "ᵲ",
    "ᶉ",
    "ṙ",
    "ṛ",
    "ṝ",
    "ṟ",
  ],
  s: ["s", "ś", "ŝ", "ş", "š", "ș", "ʂ", "ᔆ", "ᶊ", "ṡ", "ṣ", "ṥ", "ṧ", "ṩ", "ｓ"],
  t: [
    "t",
    "ţ",
    "ť",
    "ŧ",
    "ƫ",
    "ƭ",
    "ț",
    "ʇ",
    "ͭ",
    "ᵀ",
    "ᵗ",
    "ᵵ",
    "ᶵ",
    "ṫ",
    "ṭ",
    "ṯ",
    "ṱ",
    "ẗ",
    "ｔ",
  ],
  u: [
    "u",
    "ù",
    "ú",
    "û",
    "ü",
    "ũ",
    "ū",
    "ŭ",
    "ů",
    "ű",
    "ų",
    "ư",
    "ǔ",
    "ǖ",
    "ǘ",
    "ǚ",
    "ǜ",
    "ȕ",
    "ȗ",
    "ͧ",
    "ߎ",
    "ᵘ",
    "ᵤ",
    "ṳ",
    "ṵ",
    "ṷ",
    "ṹ",
    "ṻ",
    "ụ",
    "ủ",
    "ứ",
    "ừ",
    "ử",
    "ữ",
    "ự",
    "ｕ",
  ],
  v: ["v", "ʋ", "ͮ", "ᵛ", "ᵥ", "ᶹ", "ṽ", "ṿ", "ⱱ", "ｖ", "ⱴ"],
  w: ["w", "ŵ", "ʷ", "ᵂ", "ẁ", "ẃ", "ẅ", "ẇ", "ẉ", "ẘ", "ⱳ", "ｗ"],
  x: ["x", "̽", "͓", "ᶍ", "ͯ", "ẋ", "ẍ", "ₓ", "ｘ"],
  y: ["y", "ý", "ÿ", "ŷ", "ȳ", "ɏ", "ʸ", "ẏ", "ỳ", "ỵ", "ỷ", "ỹ", "ｙ"],
  z: [
    "z",
    "ź",
    "ż",
    "ž",
    "ƶ",
    "ȥ",
    "ɀ",
    "ʐ",
    "ʑ",
    "ᙆ",
    "ᙇ",
    "ᶻ",
    "ᶼ",
    "ᶽ",
    "ẑ",
    "ẓ",
    "ẕ",
    "ⱬ",
    "ｚ",
  ],
};

// Precompiled Object with { key = Diacritic, value = real-Character }
const compiledDiactitics = (function() {
  let x = {};

  for (let key in diacritics) {
    let ok = diacritics[key];

    for (let rval in ok) {
      let val = ok[rval];

      // Do not replace the char with itself
      if (val !== key) {
        x[val] = key;
      }
    }
  }

  return x;
})();

// Regex for detecting non-ASCII-Characters in String
const regexNonASCII = /[^a-z0-9\s,.-]/;

/*
 * Main function of the module which removes all diacritics from the received text
 */
const diacriticless = (text) => {
  // When there are only ascii-Characters in the string, skip processing and return text right away
  if (text.search(regexNonASCII) === -1) {
    return text;
  }

  let result = "";

  let len = text.length;
  for (var i = 0; i < len; i++) {
    let searchChar = text.charAt(i);

    // If applicable replace the diacritic character with the real one or use the original value
    result += searchChar in compiledDiactitics ? compiledDiactitics[searchChar] : searchChar;
  }

  return result;
};

const escapeRegExp = str => str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');

var defaultType = {
  format(x) {
    return x;
  },
  filterPredicate(rowval, filter, skipDiacritics = false, fromDropdown = false) {
    // take care of nulls
    if (typeof rowval === 'undefined' || rowval === null) {
      return false;
    }

    // row value
    const rowValue = skipDiacritics
      ? String(rowval).toLowerCase()
      : diacriticless(escapeRegExp(String(rowval)).toLowerCase());

    // search term
    const searchTerm = skipDiacritics
      ? filter.toLowerCase()
      : diacriticless(escapeRegExp(filter).toLowerCase());

    // comparison
    return fromDropdown ? rowValue === searchTerm : (rowValue.indexOf(searchTerm) > -1);
  },

  compare(x, y) {
    function cook(d) {
      if (typeof d === 'undefined' || d === null) return '';
      return diacriticless(String(d).toLowerCase());
    }
    x = cook(x);
    y = cook(y);
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  },
};

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$6 = {
  name: 'VgtPaginationPageInfo',
  props: {
    currentPage: {
      default: 1,
    },
    lastPage: {
      default: 1,
    },
    totalRecords: {
      default: 0,
    },
    ofText: {
      default: 'of',
      type: String,
    },
    pageText: {
      default: 'page',
      type: String,
    },
    currentPerPage: {},
    mode: {
      default: PAGINATION_MODES.Records,
    },
    infoFn: { default: null },
  },
  data() {
    return {
      id: this.getId(),
    };
  },
  computed: {
    pageInfo() {
      return `${this.ofText} ${this.lastPage}`;
    },
    firstRecordOnPage() {
      return ((this.currentPage - 1) * this.currentPerPage) + 1;
    },
    lastRecordOnPage() {
      return Math.min(this.totalRecords, this.currentPage * this.currentPerPage);
    },
    recordInfo() {
      let first = this.firstRecordOnPage;
      const last = this.lastRecordOnPage;

      if (last === 0) {
        first = 0;
      }

      return `${first} - ${last} ${this.ofText} ${this.totalRecords}`;
    },
    infoParams() {
      let first = this.firstRecordOnPage;
      const last = this.lastRecordOnPage;
      if (last === 0) {
        first = 0;
      }
      return {
        firstRecordOnPage: first,
        lastRecordOnPage: last,
        totalRecords: this.totalRecords,
        currentPage: this.currentPage,
        totalPages: this.lastPage,
      };
    },
  },
  methods: {
    getId() {
      return `vgt-page-input-${Math.floor(Math.random() * Date.now())}`;
    },
    changePage(event) {
      const value = parseInt(event.target.value, 10);

      //! invalid number
      if (Number.isNaN(value)
        || value > this.lastPage
        || value < 1) {
        event.target.value = this.currentPage;
        return false;
      }

      //* valid number
      event.target.value = value;
      this.$emit('page-changed', value);
    },
  },
  mounted() {
  },
  components: {
  },
};

const _hoisted_1$6 = { class: "footer__navigation__page-info" };
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$6 = ["for"];
const _hoisted_4$6 = ["id", "value"];
const _hoisted_5$6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "change-page-hint",
  style: {"display":"none"}
}, " Type a page number and press Enter to change the page. ", -1 /* HOISTED */);
const _hoisted_6$6 = { key: 2 };

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$6, [
    ($props.infoFn)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2$6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.infoFn($options.infoParams)), 1 /* TEXT */))
      : ($props.mode === 'pages')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
            key: 1,
            onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
              for: $data.id,
              class: "page-info__label"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pageText), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                id: $data.id,
                "aria-describedby": "change-page-hint",
                "aria-controls": "vgb-table",
                class: "footer__navigation__page-info__current-entry",
                type: "text",
                onKeyup: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.changePage && $options.changePage(...args)), ["stop"]), ["enter"])),
                value: $props.currentPage
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$6),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.pageInfo), 1 /* TEXT */)
            ], 8 /* PROPS */, _hoisted_3$6),
            _hoisted_5$6
          ], 32 /* HYDRATE_EVENTS */))
        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6$6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.recordInfo), 1 /* TEXT */))
  ]))
}
var VgtPaginationPageInfo = /*#__PURE__*/_export_sfc(_sfc_main$6, [['render',_sfc_render$6]]);

const _sfc_main$5 = {
  name: 'VgtPagination',
  props: {
    styleClass: { default: 'table table-bordered' },
    total: { default: null },
    perPage: {},
    rtl: { default: false },
    perPageDropdownEnabled: { default: true },
    customRowsPerPageDropdown: { default() { return []; } },
    paginateDropdownAllowAll: { default: true },
    mode: { default: PAGINATION_MODES.Records },

    // text options
    nextText: { default: 'Next' },
    prevText: { default: 'Prev' },
    rowsPerPageText: { default: 'Rows per page:' },
    ofText: { default: 'of' },
    pageText: { default: 'page' },
    allText: { default: 'All' },
    infoFn: { default: null },
  },

  data() {
    return {
      id: this.getId(),
      currentPage: 1,
      prevPage: 0,
      currentPerPage: 10,
      rowsPerPageOptions: [],
    };
  },
  watch: {
    perPage: {
      handler(newValue, oldValue) {
        this.handlePerPage();
        this.perPageChanged(oldValue);
      },
      immediate: true,
    },

    customRowsPerPageDropdown: {
      handler() {
        this.handlePerPage();
      },
      deep: true,
    },

    total: {
      handler(newValue, oldValue) {
        if(this.rowsPerPageOptions.indexOf(this.currentPerPage) === -1) {
          this.currentPerPage = newValue;
        }
      }
    }
  },

  computed: {
    // Number of pages
    pagesCount() {
      const quotient = Math.floor(this.total / this.currentPerPage);
      const remainder = this.total % this.currentPerPage;

      return remainder === 0 ? quotient : quotient + 1;
    },

    // Can go to next page
    nextIsPossible() {
      return this.currentPage < this.pagesCount;
    },

    // Can go to previous page
    prevIsPossible() {
      return this.currentPage > 1;
    },
  },

  methods: {
    getId() {
      return `vgt-select-rpp-${Math.floor(Math.random() * Date.now())}`;
    },
    // Change current page
    changePage(pageNumber, emit = true) {
      if (pageNumber > 0 && this.total > this.currentPerPage * (pageNumber - 1)) {
        this.prevPage = this.currentPage;
        this.currentPage = pageNumber;
        this.pageChanged(emit);
      }
    },

    // Go to next page
    nextPage() {
      if (this.nextIsPossible) {
        this.prevPage = this.currentPage;
        ++this.currentPage;
        this.pageChanged();
      }
    },

    // Go to previous page
    previousPage() {
      if (this.prevIsPossible) {
        this.prevPage = this.currentPage;
        --this.currentPage;
        this.pageChanged();
      }
    },

    // Indicate page changing
    pageChanged(emit = true) {
      const payload = {
        currentPage: this.currentPage,
        prevPage: this.prevPage,
      };
      if (!emit) payload.noEmit = true;
      this.$emit('page-changed', payload);
    },

    // Indicate per page changing
    perPageChanged(oldValue) {
      // go back to first page
      if (oldValue) {
        //* only emit if this isn't first initialization
        this.$emit('per-page-changed', { currentPerPage: this.currentPerPage });
      }
      this.changePage(1, false);
    },

    // Handle per page changing
    handlePerPage() {
      //* if there's a custom dropdown then we use that
      if (this.customRowsPerPageDropdown !== null
        && (Array.isArray(this.customRowsPerPageDropdown)
        && this.customRowsPerPageDropdown.length !== 0)) {
        this.rowsPerPageOptions = JSON.parse(JSON.stringify(this.customRowsPerPageDropdown));
      } else {
        //* otherwise we use the default rows per page dropdown
        this.rowsPerPageOptions = JSON.parse(JSON.stringify(DEFAULT_ROWS_PER_PAGE_DROPDOWN));
      }

      if (this.perPage) {
        this.currentPerPage = this.perPage;
        // if perPage doesn't already exist, we add it
        let found = false;
        for (let i = 0; i < this.rowsPerPageOptions.length; i++) {
          if (this.rowsPerPageOptions[i] === this.perPage) {
            found = true;
          }
        }
        if (!found && this.perPage !== -1) {
          this.rowsPerPageOptions.unshift(this.perPage);
        }
      } else {
        // reset to default
        this.currentPerPage = 10;
      }
    },
  },

  mounted() {
  },

  components: {
    'pagination-page-info': VgtPaginationPageInfo,
  },
};

const _hoisted_1$5 = { class: "vgt-wrap__footer vgt-clearfix" };
const _hoisted_2$5 = {
  key: 0,
  class: "footer__row-count vgt-pull-left"
};
const _hoisted_3$5 = ["for"];
const _hoisted_4$5 = ["id"];
const _hoisted_5$5 = ["value"];
const _hoisted_6$5 = ["value"];
const _hoisted_7$5 = { class: "footer__navigation vgt-pull-right" };

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pagination_page_info = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination-page-info");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$5, [
    ($props.perPageDropdownEnabled)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2$5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
              for: $data.id,
              class: "footer__row-count__label"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rowsPerPageText) + ":", 9 /* TEXT, PROPS */, _hoisted_3$5),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              id: $data.id,
              autocomplete: "off",
              name: "perPageSelect",
              class: "footer__row-count__select",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.currentPerPage) = $event)),
              onChange: _cache[1] || (_cache[1] = (...args) => ($options.perPageChanged && $options.perPageChanged(...args))),
              "aria-controls": "vgt-table"
            }, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.rowsPerPageOptions, (option, idx) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                  key: idx,
                  value: option
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_5$5))
              }), 128 /* KEYED_FRAGMENT */)),
              ($props.paginateDropdownAllowAll)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    key: 0,
                    value: $props.total
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.allText), 9 /* TEXT, PROPS */, _hoisted_6$5))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$5), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.currentPerPage]
            ])
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7$5, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination_page_info, {
        onPageChanged: $options.changePage,
        "total-records": $props.total,
        "last-page": $options.pagesCount,
        "current-page": $data.currentPage,
        "current-per-page": $data.currentPerPage,
        "of-text": $props.ofText,
        "page-text": $props.pageText,
        "info-fn": $props.infoFn,
        mode: $props.mode
      }, null, 8 /* PROPS */, ["onPageChanged", "total-records", "last-page", "current-page", "current-per-page", "of-text", "page-text", "info-fn", "mode"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "aria-controls": "vgt-table",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["footer__navigation__page-btn", { disabled: !$options.prevIsPossible }]),
        onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.previousPage && $options.previousPage(...args)), ["prevent","stop"]))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "aria-hidden": "true",
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["chevron", { 'left': !$props.rtl, 'right': $props.rtl }])
        }, null, 2 /* CLASS */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.prevText), 1 /* TEXT */)
      ], 2 /* CLASS */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "aria-controls": "vgt-table",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["footer__navigation__page-btn", { disabled: !$options.nextIsPossible }]),
        onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.nextPage && $options.nextPage(...args)), ["prevent","stop"]))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.nextText), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "aria-hidden": "true",
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["chevron", { 'right': !$props.rtl, 'left': $props.rtl }])
        }, null, 2 /* CLASS */)
      ], 2 /* CLASS */)
    ])
  ]))
}
var VgtPagination = /*#__PURE__*/_export_sfc(_sfc_main$5, [['render',_sfc_render$5]]);

const _sfc_main$4 = {
  name: 'VgtGlobalSearch',
  props: [
    'value',
    'searchEnabled',
    'globalSearchPlaceholder',
  ],
  emits: [
    'input',
    'keyup',
    'enter',
  ],
  data() {
    return {
      globalSearchTerm: null,
      id: this.getId(),
    };
  },
  computed: {
    showControlBar() {
      if (this.searchEnabled) return true;
      if (this.$slots && this.$slots['internal-table-actions']) return true;
      return false;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
      this.$emit('keyup', value);
    },
    entered(value) {
      this.$emit('enter', value);
    },
    getId() {
      return `vgt-search-${Math.floor(Math.random() * Date.now())}`;
    },
  },
};

const _hoisted_1$4 = {
  key: 0,
  class: "vgt-global-search vgt-clearfix"
};
const _hoisted_2$4 = { class: "vgt-global-search__input vgt-pull-left" };
const _hoisted_3$4 = ["for"];
const _hoisted_4$4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "input__icon"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "magnifying-glass" })
], -1 /* HOISTED */);
const _hoisted_5$4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Search", -1 /* HOISTED */);
const _hoisted_6$4 = [
  _hoisted_4$4,
  _hoisted_5$4
];
const _hoisted_7$4 = ["id", "placeholder", "value"];
const _hoisted_8$3 = { class: "vgt-global-search__actions vgt-pull-right" };

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return ($options.showControlBar)
    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$4, [
          ($props.searchEnabled)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
                key: 0,
                onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
                role: "search"
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: $data.id }, _hoisted_6$4, 8 /* PROPS */, _hoisted_3$4),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                  id: $data.id,
                  type: "text",
                  class: "vgt-input vgt-pull-left",
                  placeholder: $props.globalSearchPlaceholder,
                  value: $props.value,
                  onInput: _cache[0] || (_cache[0] = $event => ($options.updateValue($event.target.value))),
                  onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => ($options.entered($event.target.value)), ["enter"]))
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_7$4)
              ], 32 /* HYDRATE_EVENTS */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8$3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "internal-table-actions")
        ])
      ]))
    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
}
var VgtGlobalSearch = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render$4]]);

const _sfc_main$3 = {
  name: 'VgtFilterRow',
  props: [
    'lineNumbers',
    'columns',
    'expandRowsEnabled',
    'typedColumns',
    'globalSearchEnabled',
    'selectable',
    'mode',
  ],
  emits: ['filter-changed'],
  watch: {
    columns: {
      handler(newValue, oldValue) {
        this.populateInitialFilters();
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      columnFilters: {},
      timer: null,
    };
  },
  computed: {

    // to create a filter row, we need to
    // make sure that there is atleast 1 column
    // that requires filtering
    hasFilterRow() {
      // if (this.mode === 'remote' || !this.globalSearchEnabled) {
      for (let i = 0; i < this.columns.length; i++) {
        const col = this.columns[i];
        if (col.filterOptions && col.filterOptions.enabled) {
          return true;
        }
      }
      // }
      return false;
    },
  },
  methods: {

    fieldKey(field) {
      if (typeof(field) === 'function' && field.name) {
        return field.name;
      }
      return field;
    },

    reset(emitEvent = false) {
      this.columnFilters = {};

      if (emitEvent) {
        this.$emit('filter-changed', this.columnFilters);
      }
    },

    isFilterable(column) {
      return column.filterOptions
        && column.filterOptions.enabled;
    },

    isDropdown(column) {
      return this.isFilterable(column)
        && column.filterOptions.filterDropdownItems
        && column.filterOptions.filterDropdownItems.length;
    },

    isDropdownObjects(column) {
      return this.isDropdown(column)
        && typeof column.filterOptions.filterDropdownItems[0] === 'object';
    },

    isDropdownArray(column) {
      return this.isDropdown(column)
        && typeof column.filterOptions.filterDropdownItems[0] !== 'object';
    },

    getClasses(column) {
      const firstClass = 'filter-th';
      return (column.filterOptions && column.filterOptions.styleClass) ? [firstClass, ...column.filterOptions.styleClass.split(' ')].join(' ') : firstClass;
    },

    // get column's defined placeholder or default one
    getPlaceholder(column) {
      const placeholder = (this.isFilterable(column) && column.filterOptions.placeholder) || `Filter ${column.label}`;
      return placeholder;
    },

    getName(column) {
      return `vgt-${this.fieldKey(column.field)}`;
    },

    updateFiltersOnEnter(column, value) {
      if (this.timer) clearTimeout(this.timer);
      this.updateFiltersImmediately(column.field, value);
    },

    updateFiltersOnKeyup(column, value) {
      // if the trigger is enter, we don't filter on keyup
      if (column.filterOptions.trigger === 'enter') return;
      this.updateFilters(column, value);
    },

    updateSlotFilter(column, value) {
      let fieldToFilter = column.filterOptions.slotFilterField || column.field;
      if (typeof column.filterOptions.formatValue === 'function') {
        value = column.filterOptions.formatValue(value);
      }
      this.updateFiltersImmediately(fieldToFilter, value);
    },

    // since vue doesn't detect property addition and deletion, we
    // need to create helper function to set property etc
    updateFilters(column, value) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.updateFiltersImmediately(column.field, value);
      }, 400);
    },

    updateFiltersImmediately(field, value) {
      this.columnFilters[this.fieldKey(field)] = value;
      this.$emit('filter-changed', this.columnFilters);
    },

    populateInitialFilters() {
      for (let i = 0; i < this.columns.length; i++) {
        const col = this.columns[i];
        // lets see if there are initial
        // filters supplied by user
        if (this.isFilterable(col)
          && typeof col.filterOptions.filterValue !== 'undefined'
          && col.filterOptions.filterValue !== null) {
          this.columnFilters[this.fieldKey(col.field)] = col.filterOptions.filterValue;
          // this.updateFilters(col, col.filterOptions.filterValue);
          // this.$set(col.filterOptions, 'filterValue', undefined);
        }
      }
      //* lets emit event once all filters are set
      this.$emit('filter-changed', this.columnFilters);
    },
  },
};

const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$3 = { key: 1 };
const _hoisted_4$3 = { key: 2 };
const _hoisted_5$3 = { key: 0 };
const _hoisted_6$3 = ["name", "placeholder", "value", "onKeyup", "onInput"];
const _hoisted_7$3 = ["name", "value", "onChange"];
const _hoisted_8$2 = {
  value: "",
  key: "-1"
};
const _hoisted_9$2 = ["value"];
const _hoisted_10$2 = ["name", "value", "onChange"];
const _hoisted_11$1 = {
  value: "",
  key: "-1"
};
const _hoisted_12$1 = ["value"];

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return ($options.hasFilterRow)
    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_1$3, [
        ($props.expandRowsEnabled)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_2$3))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($props.lineNumbers)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_3$3))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($props.selectable)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_4$3))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index }, [
            (!column.hidden)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
                  key: 0,
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getClasses(column))
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "column-filter", {
                    column: column,
                    updateFilters: $options.updateSlotFilter
                  }, () => [
                    ($options.isFilterable(column))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5$3, [
                          (!$options.isDropdown(column))
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                                key: 0,
                                name: $options.getName(column),
                                type: "text",
                                class: "vgt-input",
                                placeholder: $options.getPlaceholder(column),
                                value: $data.columnFilters[$options.fieldKey(column.field)],
                                onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => ($options.updateFiltersOnEnter(column, $event.target.value)), ["enter"]),
                                onInput: $event => ($options.updateFiltersOnKeyup(column, $event.target.value))
                              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6$3))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" options are a list of primitives "),
                          ($options.isDropdownArray(column))
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                                key: 1,
                                name: $options.getName(column),
                                class: "vgt-select",
                                value: $data.columnFilters[$options.fieldKey(column.field)],
                                onChange: $event => ($options.updateFiltersImmediately(column.field, $event.target.value))
                              }, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_8$2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getPlaceholder(column)), 1 /* TEXT */),
                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(column.filterOptions.filterDropdownItems, (option, i) => {
                                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                                    key: i,
                                    value: option
                                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_9$2))
                                }), 128 /* KEYED_FRAGMENT */))
                              ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_7$3))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" options are a list of objects with text and value "),
                          ($options.isDropdownObjects(column))
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                                key: 2,
                                name: $options.getName(column),
                                class: "vgt-select",
                                value: $data.columnFilters[$options.fieldKey(column.field)],
                                onChange: $event => ($options.updateFiltersImmediately(column.field, $event.target.value))
                              }, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_11$1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getPlaceholder(column)), 1 /* TEXT */),
                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(column.filterOptions.filterDropdownItems, (option, i) => {
                                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                                    key: i,
                                    value: option.value
                                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.text), 9 /* TEXT, PROPS */, _hoisted_12$1))
                                }), 128 /* KEYED_FRAGMENT */))
                              ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_10$2))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                        ]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ])
                ], 2 /* CLASS */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ], 64 /* STABLE_FRAGMENT */))
        }), 128 /* KEYED_FRAGMENT */))
      ]))
    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
}
var VgtFilterRow = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3]]);

function getColumnFirstSortType(column) {
  return column.firstSortType || DEFAULT_SORT_TYPE;
}

function getCurrentPrimarySort(sortArray, column) {
  return ( sortArray.length === 1 && sortArray[0].field === column.field )
  ? sortArray[0].type
  : undefined;
}

function getNextSort(currentSort, column) {
  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
    && currentSort === SORT_TYPES.Ascending) {
    return SORT_TYPES.None
  } else if (currentSort === SORT_TYPES.Ascending) {
    return SORT_TYPES.Descending;
  }
  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
    && currentSort === SORT_TYPES.Descending) {
    return SORT_TYPES.Ascending;
  } else if (currentSort === SORT_TYPES.Descending) {
    return SORT_TYPES.None;
  }

  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
    && currentSort === SORT_TYPES.None) {
    return SORT_TYPES.Descending;
  } else {
    return SORT_TYPES.Ascending;
  }

}

function getIndex(sortArray, column) {
  for (let i = 0; i < sortArray.length; i++) {
    if (column.field === sortArray[i].field) return i;
  }
  return -1;
}

const primarySort = (sortArray, column) => {
  const currentPrimarySort = getCurrentPrimarySort(sortArray, column);
  const nextPrimarySort = getNextSort(currentPrimarySort, column);
  return [{
    field: column.field,
    type: currentPrimarySort ? nextPrimarySort : getColumnFirstSortType(column),
  }];
};

const secondarySort = (sortArray, column) => {
  const index = getIndex(sortArray, column);
  if (index === -1) {
    sortArray.push({
      field: column.field,
      type: getColumnFirstSortType(column),
    });
  } else {
    sortArray[index].type = getNextSort(sortArray[index].type, column);
  }
  return sortArray;
};

const _sfc_main$2 = {
  name: 'VgtTableHeader',
  props: {
    lineNumbers: {
      default: false,
      type: Boolean,
    },
    selectable: {
      default: false,
      type: Boolean,
    },
    allSelected: {
      default: false,
      type: Boolean,
    },
    allSelectedIndeterminate: {
      default: false,
      type: Boolean,
    },
    columns: {
      type: Array,
    },
    expandRowsEnabled: {
      default: false,
      type: Boolean,
    },
    mode: {
      type: String,
    },
    typedColumns: {},

    //* Sort related
    sortable: {
      type: Boolean,
    },
    multipleColumnSort: {
      type: Boolean,
      default: true,
    },

    getClasses: {
      type: Function,
    },

    //* search related
    searchEnabled: {
      type: Boolean,
    },

    tableRef: {},

    paginated: {},
  },
  emits: [
    'toggle-select-all',
    'toggle-expand-rows-all',
    'sort-change',
    'filter-changed',
  ],
  watch: {
    columns: {
      handler() {
        this.setColumnStyles();
      },
      immediate: true,
      deep: true
    },
    tableRef: {
      handler() {
        this.setColumnStyles();
      },
      immediate: true,
    },
    paginated: {
      handler() {
        if (this.tableRef) {
          this.setColumnStyles();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      checkBoxThStyle: {},
      lineNumberThStyle: {},
      columnStyles: [],
      sorts: [],
      ro: null
    };
  },
  computed: {

  },
  methods: {
    reset() {
      this.$refs['filter-row'].reset(true);
    },
    toggleExpandRowsAll() {
      this.$emit('toggle-expand-rows-all');
    },
    toggleSelectAll() {
      this.$emit('toggle-select-all');
    },
    isSortableColumn(column) {
      const { sortable } = column;
      const isSortable = typeof sortable === 'boolean' ? sortable : this.sortable;
      return isSortable;
    },
    sort(e, column) {
      //* if column is not sortable, return right here
      if (!this.isSortableColumn(column)) return;

      if (e.shiftKey && this.multipleColumnSort) {
        this.sorts = secondarySort(this.sorts, column);
      } else {
        this.sorts = primarySort(this.sorts, column);
      }
      this.$emit('sort-change', this.sorts);
    },

    setInitialSort(sorts) {
      this.sorts = sorts;
      this.$emit('sort-change', this.sorts);
    },

    getColumnSort(column) {
      for (let i = 0; i < this.sorts.length; i += 1) {
        if (this.sorts[i].field === column.field) {
          return this.sorts[i].type || 'asc';
        }
      }
      return null;
    },

    getColumnSortLong(column) {
      return this.getColumnSort(column) === 'asc'
        ? 'ascending'
        : 'descending'
    },

    getHeaderClasses(column, index) {
      const classes = Object.assign({}, this.getClasses(index, 'th'), {
        sortable: this.isSortableColumn(column),
        'sorting sorting-desc': this.getColumnSort(column) === 'desc',
        'sorting sorting-asc': this.getColumnSort(column) === 'asc',
      });
      return classes;
    },

    filterRows(columnFilters) {
      this.$emit('filter-changed', columnFilters);
    },

    getWidthStyle(dom) {
      if (window && window.getComputedStyle && dom) {
        const cellStyle = window.getComputedStyle(dom, null);
        return {
          width: cellStyle.width,
        };
      }
      return {
        width: 'auto',
      };
    },

    setColumnStyles() {
      const colStyles = [];
      for (let i = 0; i < this.columns.length; i++) {
        if (this.tableRef) {
          let skip = 0;
          if (this.selectable) skip++;
          if (this.lineNumbers) skip++;
          const cell = this.tableRef.rows[0].cells[i + skip];
          colStyles.push(this.getWidthStyle(cell));
        } else {
          colStyles.push({
            minWidth: this.columns[i].width ? this.columns[i].width : 'auto',
            maxWidth: this.columns[i].width ? this.columns[i].width : 'auto',
            width: this.columns[i].width ? this.columns[i].width : 'auto',
          });
        }
      }
      this.columnStyles = colStyles;
    },

    getColumnStyle(column, index) {
      const styleObject = {
        minWidth: column.width ? column.width : 'auto',
        maxWidth: column.width ? column.width : 'auto',
        width: column.width ? column.width : 'auto',
      };
      //* if fixed header we need to get width from original table
      if (this.tableRef) {
        if (this.selectable) index++;
        if (this.lineNumbers) index++;

        const cell = this.tableRef.rows[0].cells[index];
        const cellStyle = window.getComputedStyle(cell, null);
        styleObject.width = cellStyle.width;
      }
      return styleObject;
    },
  },
  mounted() {
    this.$nextTick(() => {
      // We're going to watch the parent element for resize events, and calculate column widths if it changes
      if ('ResizeObserver' in window) {
        this.ro = new ResizeObserver(() => {
            this.setColumnStyles();
        });
        this.ro.observe(this.$parent.$el);

        // If this is a fixed-header table, we want to observe each column header from the non-fixed header.
        // You can imagine two columns swapping widths, which wouldn't cause the above to trigger.
        // This gets the first tr element of the primary table header, and iterates through its children (the th elements)
        if (this.tableRef) {
          Array.from(this.$parent.$refs['table-header-primary'].$el.children[0].children).forEach((header) => {
            this.ro.observe(header);
          });
        }
      }
    });
  },
  beforeUnmount() {
    if (this.ro) {
      this.ro.disconnect();
    }
  },
  components: {
    'vgt-filter-row': VgtFilterRow,
  },
};

const _hoisted_1$2 = {
  key: 0,
  scope: "col",
  class: "line-numbers"
};
const _hoisted_2$2 = {
  key: 1,
  scope: "col",
  class: "vgt-checkbox-col"
};
const _hoisted_3$2 = ["checked", ".indeterminate"];
const _hoisted_4$2 = {
  key: 2,
  scope: "col",
  class: "vgt-checkbox-col"
};
const _hoisted_5$2 = ["title", "aria-sort", "aria-controls"];
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { class: "sr-only" };

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vgt_filter_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vgt-filter-row");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("thead", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
      ($props.lineNumbers)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_1$2))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($props.selectable)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_2$2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "checkbox",
              checked: $props.allSelected,
              ".indeterminate": $props.allSelectedIndeterminate,
              onChange: _cache[0] || (_cache[0] = (...args) => ($options.toggleSelectAll && $options.toggleSelectAll(...args)))
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$2)
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($props.expandRowsEnabled)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_4$2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              href: "",
              onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.toggleExpandRowsAll && $options.toggleExpandRowsAll(...args)), ["prevent"])),
              class: "vgt-wrap__expander"
            }, " (+) ")
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, index) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index }, [
          (!column.hidden)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
                key: 0,
                scope: "col",
                title: column.tooltip,
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getHeaderClasses(column, index)),
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.columnStyles[index]),
                "aria-sort": $options.getColumnSortLong(column),
                "aria-controls": `col-${index}`
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-column", { column: column }, () => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.label), 1 /* TEXT */)
                ]),
                ($options.isSortableColumn(column))
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                      key: 0,
                      onClick: $event => ($options.sort($event, column))
                    }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7$2, " Sort table by " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.label) + " in " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getColumnSortLong(column)) + " order ", 1 /* TEXT */)
                    ], 8 /* PROPS */, _hoisted_6$2))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ], 14 /* CLASS, STYLE, PROPS */, _hoisted_5$2))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_filter_row, {
      ref: "filter-row",
      onFilterChanged: $options.filterRows,
      "global-search-enabled": $props.searchEnabled,
      "line-numbers": $props.lineNumbers,
      "expand-rows-enabled": $props.expandRowsEnabled,
      selectable: $props.selectable,
      columns: $props.columns,
      mode: $props.mode,
      "typed-columns": $props.typedColumns
    }, {
      "column-filter": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "column-filter", {
          column: slotProps.column,
          updateFilters: slotProps.updateFilters
        })
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["onFilterChanged", "global-search-enabled", "line-numbers", "expand-rows-enabled", "selectable", "columns", "mode", "typed-columns"])
  ]))
}
var VgtTableHeader = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2]]);

const _sfc_main$1 = {
  name: 'VgtHeaderRow',
  props: {
    headerRow: {
      type: Object,
    },
    columns: {
      type: Array,
    },
    lineNumbers: {
      type: Boolean,
    },
    selectable: {
      type: Boolean,
    },
    selectAllByGroup: {
      type: Boolean
    },
    collapsable: {
      type: [Boolean, Number],
      default: false,
    },
    collectFormatted: {
      type: Function,
    },
    formattedRow: {
      type: Function,
    },
    getClasses: {
      type: Function,
    },
    fullColspan: {
      type: Number,
    },
    groupIndex: {
      type: Number
    },
  },
  emits: [
    'vgtExpand',
    'select-group-change',
  ],
  data() {
    return {
    };
  },
  computed: {
    allSelected() {
      const { headerRow } = this;
      return headerRow.children.filter((row) => row.vgtSelected).length === headerRow.children.length;
    }
  },
  methods: {
    columnCollapsable(currentIndex) {
      if (this.collapsable === true) {
        return currentIndex === 0;
      }
      return currentIndex === this.collapsable;
    },
    toggleSelectGroup(event) {
      this.$emit('select-group-change', {
        groupIndex: this.groupIndex, checked: event.target.checked
      });
    }
  },

  mounted() {
  },
  components: {
  },
};

const _hoisted_1$1 = ["colspan"];
const _hoisted_2$1 = ["checked"];
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = {
  key: 1,
  class: "vgt-row-header"
};
const _hoisted_6$1 = {
  key: 2,
  class: "vgt-row-header"
};
const _hoisted_7$1 = ["checked"];
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = { key: 0 };
const _hoisted_10$1 = ["innerHTML"];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [
    ($props.headerRow.mode === 'span')
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
          key: 0,
          class: "vgt-left-align vgt-row-header",
          colspan: $props.fullColspan
        }, [
          ($props.selectAllByGroup)
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-group-select", {
                key: 0,
                columns: $props.columns,
                row: $props.headerRow
              }, () => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                  type: "checkbox",
                  checked: $options.allSelected,
                  onChange: _cache[0] || (_cache[0] = $event => ($options.toggleSelectGroup($event)))
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$1)
              ])
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            onClick: _cache[1] || (_cache[1] = $event => ($props.collapsable ? _ctx.$emit('vgtExpand', !$props.headerRow.vgtIsExpanded) : () => {}))
          }, [
            ($props.collapsable)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                  key: 0,
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["triangle", { 'expand': $props.headerRow.vgtIsExpanded }])
                }, null, 2 /* CLASS */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-row", { row: $props.headerRow }, () => [
              ($props.headerRow.html)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                    key: 0,
                    innerHTML: $props.headerRow.label
                  }, null, 8 /* PROPS */, _hoisted_3$1))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4$1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.headerRow.label), 1 /* TEXT */))
            ])
          ])
        ], 8 /* PROPS */, _hoisted_1$1))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if the mode is not span, we display every column "),
    ($props.headerRow.mode !== 'span' && $props.lineNumbers)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_5$1))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($props.headerRow.mode !== 'span' && $props.selectable)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_6$1, [
          ($props.selectAllByGroup)
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-group-select", {
                key: 0,
                columns: $props.columns,
                row: $props.headerRow
              }, () => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                  type: "checkbox",
                  checked: $options.allSelected,
                  onChange: _cache[2] || (_cache[2] = $event => ($options.toggleSelectGroup($event)))
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_7$1)
              ])
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, i) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i }, [
        ($props.headerRow.mode !== 'span' && !column.hidden)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vgt-row-header", $props.getClasses(i, 'td')]),
              onClick: $event => ($options.columnCollapsable(i) ? _ctx.$emit('vgtExpand', !$props.headerRow.vgtIsExpanded) : () => {})
            }, [
              ($options.columnCollapsable(i))
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                    key: 0,
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["triangle", { 'expand': $props.headerRow.vgtIsExpanded }])
                  }, null, 2 /* CLASS */))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-row", {
                row: $props.headerRow,
                column: column,
                formattedRow: $props.formattedRow($props.headerRow, true)
              }, () => [
                (!column.html)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9$1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.collectFormatted($props.headerRow, column, true)), 1 /* TEXT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (column.html)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                      key: 1,
                      innerHTML: $props.collectFormatted($props.headerRow, column, true)
                    }, null, 8 /* PROPS */, _hoisted_10$1))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ])
            ], 10 /* CLASS, PROPS */, _hoisted_8$1))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ], 64 /* STABLE_FRAGMENT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
var VgtHeaderRow = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1]]);

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

var formatDistance$1 = formatDistance;

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var formatLong$1 = formatLong;

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

var formatRelative$1 = formatRelative;

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var localize$1 = localize;

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var match$1 = match;

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters$2 = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters$3.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters$3.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters$3.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters$3.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters$3.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters$3.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters$3.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters$3.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var formatters$1 = formatters;

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || defaultLocale;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  requiredArgs(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
var parsers$1 = parsers;

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || defaultLocale;

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = parsers$1[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

const date = Object.assign({}, defaultType);

date.isRight = true;

/**
 * Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.
 * @param {*} x Date 1
 * @param {*} y Date 2
 * @param {Object} column Additional parameters (e.g. dateInputFormat, dateOutputFormat)
 * @returns 
 */
date.compare = function (x, y, column) {
  function cook(d) {
    if (column && column.dateInputFormat) {
      return parse(`${d}`, `${column.dateInputFormat}`, new Date());
    } else if (typeof d === 'string') {
      try {
        return Date.parse(d);
      } catch(err) {
        return d;
      }
    }
    return d;
  }
  x = cook(x);
  y = cook(y);
  if (!isValid(x)) {
    return -1;
  }
  if (!isValid(y)) {
    return 1;
  }
  return compareAsc(x, y);
};

date.format = function (v, column) {
  if (v === undefined || v === null) return '';
  // convert to date
  const date = parse(v, column.dateInputFormat, new Date());
  if (isValid(date)) {
    return format(date, column.dateOutputFormat);
  }
  console.error(`Not a valid date: "${v}"`);
  return null;
};

var date$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': date
});

const number = Object.assign({}, defaultType);

number.isRight = true;

number.filterPredicate = function (rowval, filter) {
  return number.compare(rowval, filter) === 0;
};


number.compare = function (x, y) {
  function cook(d) {
    // if d is null or undefined we give it the smallest
    // possible value
    if (d === undefined || d === null) return -Infinity;
    return d.indexOf('.') >= 0 ? parseFloat(d) : parseInt(d, 10);
  }

  x = typeof x === 'number' ? x : cook(x);
  y = typeof y === 'number' ? y : cook(y);
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

var number$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': number
});

const decimal = Object.assign({}, number);

decimal.format = function (v) {
  if (v === undefined || v === null) return '';
  return parseFloat(Math.round(v * 100) / 100).toFixed(2);
};

var decimal$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': decimal
});

const percentage = Object.assign({}, number);

percentage.format = function (v) {
  if (v === undefined || v === null) return '';
  return `${parseFloat(v * 100).toFixed(2)}%`;
};

var percentage$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': percentage
});

const boolean = Object.assign({}, defaultType);

boolean.isRight = true;

boolean.filterPredicate = function (rowval, filter) {
  return boolean.compare(rowval, filter) === 0;
};


boolean.compare = function (x, y) {
  function cook(d) {
    if (typeof d === 'boolean') return d ? 1 : 0;
    if (typeof d === 'string') return d === 'true' ? 1 : 0;
    return -Infinity;
  }

  x = cook(x);
  y = cook(y);
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

var boolean$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': boolean
});

var index$1 = {
  date: date$1,
  decimal: decimal$1,
  number: number$1,
  percentage: percentage$1,
  boolean: boolean$1,
};

const dataTypes = {};
const coreDataTypes = index$1;
Object.keys(coreDataTypes).forEach((key) => {
	const compName = key.replace(/^\.\//, "").replace(/\.js/, "");
	dataTypes[compName] = coreDataTypes[key].default;
});

const _sfc_main = {
	name: "vue-good-table",
	props: {
		isLoading: { default: null, type: Boolean },
		maxHeight: { default: null, type: String },
		fixedHeader: Boolean,
		theme: { default: "" },
		mode: { default: "local" }, // could be remote
		totalRows: {}, // required if mode = 'remote'
		styleClass: { default: "vgt-table bordered" },
		columns: {},
		rows: {},
		lineNumbers: Boolean,
		responsive: { default: true, type: Boolean },
		rtl: Boolean,
		rowStyleClass: { default: null, type: [Function, String] },
		compactMode: Boolean,
		enableRowExpand: { default: false, type: Boolean },

		expandRowsOptions: {
			default() {
				return {
					enabled: false,
				};
			},
		},

		groupOptions: {
			default() {
				return {
					enabled: false,
					collapsable: false,
					rowKey: null,
				};
			},
		},

		selectOptions: {
			default() {
				return {
					enabled: false,
					selectionInfoClass: "",
					selectionText: "rows selected",
					clearSelectionText: "clear",
					disableSelectInfo: false,
					selectAllByGroup: false,
				};
			},
		},

		// sort
		sortOptions: {
			default() {
				return {
					enabled: true,
					multipleColumns: true,
					initialSortBy: {},
				};
			},
		},

		// pagination
		paginationOptions: {
			default() {
				return {
					enabled: false,
					position: "bottom",
					perPage: 10,
					perPageDropdown: null,
					perPageDropdownEnabled: true,
					dropdownAllowAll: true,
					mode: "records", // or pages
					infoFn: null,
				};
			},
		},

		searchOptions: {
			default() {
				return {
					enabled: false,
					trigger: null,
					externalQuery: null,
					searchFn: null,
					placeholder: "Search Table",
				};
			},
		},

		expandedRowClasses: {
			default: "",
			type: String,
		},
		expandedRowDetailClasses: {
			default: "",
			type: String,
		},
	},

	data: () => ({
		// loading state for remote mode
		tableLoading: false,

		// text options
		nextText: "Next",
		prevText: "Previous",
		rowsPerPageText: "Rows per page",
		ofText: "of",
		allText: "All",
		pageText: "page",

		// internal select options
		selectable: false,
		selectOnCheckboxOnly: false,
		selectAllByPage: true,
		disableSelectInfo: false,
		selectionInfoClass: "",
		selectionText: "rows selected",
		clearSelectionText: "clear",

		// keys for rows that are currently expanded
		maintainExpanded: true,
		expandedRowKeys: new Set(),

		// internal sort options
		sortable: true,
		defaultSortBy: null,
		multipleColumnSort: true,

		// internal search options
		searchEnabled: false,
		searchTrigger: null,
		externalSearchQuery: null,
		searchFn: null,
		searchPlaceholder: "Search Table",
		searchSkipDiacritics: false,

		// internal pagination options
		perPage: null,
		paginate: false,
		paginateOnTop: false,
		paginateOnBottom: true,
		customRowsPerPageDropdown: [],
		paginateDropdownAllowAll: true,
		paginationMode: "records",
		paginationInfoFn: null,

		currentPage: 1,
		currentPerPage: 10,
		sorts: [],
		globalSearchTerm: "",
		filteredRows: [],
		columnFilters: {},
		forceSearch: false,
		sortChanged: false,
		dataTypes: dataTypes || {},

		expandedRowIndex: null,
	}),

	emits: [
		"select-all",
		"selected-rows-change",
		"search",
		"per-page-change",
		"page-change",
		"update:isLoading",
		"sort-change",
		"row-click",
		"row-dblclick",
		"row-aux-click",
		"cell-click",
		"row-mouseenter",
		"row-mouseleave",
		"column-filter",
	],

	watch: {
		rows: {
			handler() {
				this.$emit("update:isLoading", false);
				this.filterRows(this.columnFilters, false);
			},
			deep: true,
			immediate: true,
		},

		selectOptions: {
			handler() {
				this.initializeSelect();
			},
			deep: true,
			immediate: true,
		},

		paginationOptions: {
			handler(newValue, oldValue) {
				if (!isEqual(newValue, oldValue)) {
					this.initializePagination();
				}
			},
			deep: true,
			immediate: true,
		},

		expandRowsOptions: {
			handler(newValue, oldValue) {
				this.initializeExpandRows();
			},
			deep: true,
			immediate: true,
		},

		searchOptions: {
			handler() {
				if (
					this.searchOptions.externalQuery !== undefined &&
					this.searchOptions.externalQuery !== this.searchTerm
				) {
					//* we need to set searchTerm to externalQuery first.
					this.externalSearchQuery = this.searchOptions.externalQuery;
					this.handleSearch();
				}
				this.initializeSearch();
			},
			deep: true,
			immediate: true,
		},

		sortOptions: {
			handler(newValue, oldValue) {
				if (!isEqual(newValue, oldValue)) {
					this.initializeSort();
				}
			},
			deep: true,
		},

		selectedRows(newValue, oldValue) {
			if (!isEqual(newValue, oldValue)) {
				this.$emit("selected-rows-change", {
					selectedRows: this.selectedRows,
				});
			}
		},
	},

	computed: {
		tableStyles() {
			if (this.compactMode) return this.tableStyleClasses + "vgt-compact";
			else return this.tableStyleClasses;
		},
		hasFooterSlot() {
			return !!this.$slots["table-actions-bottom"];
		},
		wrapperStyles() {
			return {
				overflow: "scroll-y",
				maxHeight: this.maxHeight ? this.maxHeight : "auto",
			};
		},

		rowKeyField() {
			return this.groupOptions.rowKey || "vgt_header_id";
		},

		hasHeaderRowTemplate() {
			return !!this.$slots["table-header-row"];
		},

		showEmptySlot() {
			if (!this.paginated.length) return true;

			if (
				this.paginated[0].label === "no groups" &&
				!this.paginated[0].children.length
			) {
				return true;
			}

			return false;
		},

		allSelected() {
			return (
				this.selectedRowCount > 0 &&
				((this.selectAllByPage &&
					this.selectedPageRowsCount === this.totalPageRowCount) ||
					(!this.selectAllByPage &&
						this.selectedRowCount === this.totalRowCount))
			);
		},

		allSelectedIndeterminate() {
			return (
				!this.allSelected &&
				((this.selectAllByPage && this.selectedPageRowsCount > 0) ||
					(!this.selectAllByPage && this.selectedRowCount > 0))
			);
		},

		selectionInfo() {
			return `${this.selectedRowCount} ${this.selectionText}`;
		},

		selectedRowCount() {
			return this.selectedRows.length;
		},

		selectedPageRowsCount() {
			return this.selectedPageRows.length;
		},

		selectedPageRows() {
			const selectedRows = [];
			this.paginated.forEach((headerRow) => {
				headerRow.children.forEach((row) => {
					if (row.vgtSelected) {
						selectedRows.push(row);
					}
				});
			});
			return selectedRows;
		},

		selectedRows() {
			const selectedRows = [];
			this.processedRows.forEach((headerRow) => {
				headerRow.children.forEach((row) => {
					if (row.vgtSelected) {
						selectedRows.push(row);
					}
				});
			});
			return selectedRows.sort((r1, r2) => r1.originalIndex - r2.originalIndex);
		},

		fullColspan() {
			let fullColspan = 0;
			for (let i = 0; i < this.columns.length; i += 1) {
				if (!this.columns[i].hidden) {
					fullColspan += 1;
				}
			}
			if (this.lineNumbers) fullColspan++;
			if (this.selectable) fullColspan++;
			if (this.expandRowsEnabled) fullColspan++;
			return fullColspan;
		},
		groupHeaderOnTop() {
			if (
				this.groupOptions &&
				this.groupOptions.enabled &&
				this.groupOptions.headerPosition &&
				this.groupOptions.headerPosition === "bottom"
			) {
				return false;
			}
			if (this.groupOptions && this.groupOptions.enabled) return true;

			// will only get here if groupOptions is false
			return false;
		},
		groupHeaderOnBottom() {
			if (
				this.groupOptions &&
				this.groupOptions.enabled &&
				this.groupOptions.headerPosition &&
				this.groupOptions.headerPosition === "bottom"
			) {
				return true;
			}
			return false;
		},
		totalRowCount() {
			const total = this.processedRows.reduce((total, headerRow) => {
				const childrenCount = headerRow.children
					? headerRow.children.length
					: 0;
				return total + childrenCount;
			}, 0);
			return total;
		},
		totalPageRowCount() {
			const total = this.paginated.reduce((total, headerRow) => {
				const childrenCount = headerRow.children
					? headerRow.children.length
					: 0;
				return total + childrenCount;
			}, 0);
			return total;
		},
		wrapStyleClasses() {
			let classes = "vgt-wrap";
			if (this.rtl) classes += " rtl";
			classes += ` ${this.theme}`;
			return classes;
		},
		tableStyleClasses() {
			let classes = this.styleClass;
			classes += ` ${this.theme}`;
			return classes;
		},

		searchTerm() {
			return this.externalSearchQuery != null
				? this.externalSearchQuery
				: this.globalSearchTerm;
		},

		//
		globalSearchAllowed() {
			if (
				this.searchEnabled &&
				!!this.globalSearchTerm &&
				this.searchTrigger !== "enter"
			) {
				return true;
			}

			if (this.externalSearchQuery != null && this.searchTrigger !== "enter") {
				return true;
			}

			if (this.forceSearch) {
				this.forceSearch = false;
				return true;
			}

			return false;
		},

		// this is done everytime sortColumn
		// or sort type changes
		//----------------------------------------
		processedRows() {
			// we only process rows when mode is local
			let computedRows = this.filteredRows;
			if (this.mode === "remote") {
				return computedRows;
			}

			// take care of the global filter here also
			if (this.globalSearchAllowed) {
				// here also we need to de-construct and then
				// re-construct the rows.
				const allRows = [];
				this.filteredRows.forEach((headerRow) => {
					allRows.push(...headerRow.children);
				});
				const filteredRows = [];
				allRows.forEach((row) => {
					for (let i = 0; i < this.columns.length; i += 1) {
						const col = this.columns[i];
						// if col does not have search disabled,
						if (!col.globalSearchDisabled) {
							// if a search function is provided,
							// use that for searching, otherwise,
							// use the default search behavior
							if (this.searchFn) {
								const foundMatch = this.searchFn(
									row,
									col,
									this.collectFormatted(row, col),
									this.searchTerm
								);
								if (foundMatch) {
									filteredRows.push(row);
									break; // break the loop
								}
							} else {
								// comparison
								const matched = defaultType.filterPredicate(
									this.collectFormatted(row, col),
									this.searchTerm,
									this.searchSkipDiacritics
								);
								if (matched) {
									filteredRows.push(row);
									break; // break loop
								}
							}
						}
					}
				});

				// this is where we emit on search
				this.$emit("search", {
					searchTerm: this.searchTerm,
					rowCount: filteredRows.length,
				});

				// here we need to reconstruct the nested structure
				// of rows
				computedRows = [];
				this.filteredRows.forEach((headerRow) => {
					const i = headerRow.vgt_header_id;
					const children = filteredRows.filter((r) => r.vgt_id === i);
					if (children.length) {
						const newHeaderRow = JSON.parse(JSON.stringify(headerRow));
						newHeaderRow.children = children;
						computedRows.push(newHeaderRow);
					}
				});
			}
			if (this.sorts.length) {
				//* we need to sort
				computedRows.forEach((cRows) => {
					cRows.children.sort((xRow, yRow) => {
						//* we need to get column for each sort
						let sortValue;
						for (let i = 0; i < this.sorts.length; i += 1) {
							const srt = this.sorts[i];

							if (srt.type === SORT_TYPES.None) {
								//* if no sort, we need to use the original index to sort.
								sortValue =
									sortValue || xRow.originalIndex - yRow.originalIndex;
							} else {
								const column = this.getColumnForField(srt.field);
								const xvalue = this.collect(xRow, srt.field);
								const yvalue = this.collect(yRow, srt.field);

								//* if a custom sort function has been provided we use that
								const { sortFn } = column;
								if (sortFn && typeof sortFn === "function") {
									sortValue =
										sortValue ||
										sortFn(xvalue, yvalue, column, xRow, yRow) *
											(srt.type === SORT_TYPES.Descending ? -1 : 1);
								} else {
									//* else we use our own sort
									sortValue =
										sortValue ||
										column.typeDef.compare(xvalue, yvalue, column) *
											(srt.type === SORT_TYPES.Descending ? -1 : 1);
								}
							}
						}
						return sortValue;
					});
				});
			}

			// if the filtering is event based, we need to maintain filter
			// rows
			if (this.searchTrigger === "enter") {
				this.filteredRows = computedRows;
			}

			return computedRows;
		},

		paginated() {
			if (!this.processedRows.length) return [];

			if (this.mode === "remote") {
				return this.processedRows;
			}

			//* flatten the rows for paging.
			let paginatedRows = [];
			this.processedRows.forEach((childRows) => {
				//* only add headers when group options are enabled.
				if (this.groupOptions.enabled) {
					paginatedRows.push(childRows);
				}
				paginatedRows.push(...childRows.children);
			});

			if (this.paginate) {
				let pageStart = (this.currentPage - 1) * this.currentPerPage;

				// in case of filtering we might be on a page that is
				// not relevant anymore
				// also, if setting to all, current page will not be valid
				if (pageStart >= paginatedRows.length || this.currentPerPage === -1) {
					this.currentPage = 1;
					pageStart = 0;
				}

				// calculate page end now
				let pageEnd = paginatedRows.length + 1;

				// if the setting is set to 'all'
				if (this.currentPerPage !== -1) {
					pageEnd = this.currentPage * this.currentPerPage;
				}

				paginatedRows = paginatedRows.slice(pageStart, pageEnd);
			}
			// reconstruct paginated rows here
			const reconstructedRows = [];
			paginatedRows.forEach((flatRow) => {
				//* header row?
				if (flatRow.vgt_header_id !== undefined) {
					this.handleExpanded(flatRow);
					const newHeaderRow = JSON.parse(JSON.stringify(flatRow));
					newHeaderRow.children = [];
					reconstructedRows.push(newHeaderRow);
				} else {
					//* child row
					let hRow = reconstructedRows.find(
						(r) => r.vgt_header_id === flatRow.vgt_id
					);
					if (!hRow) {
						hRow = this.processedRows.find(
							(r) => r.vgt_header_id === flatRow.vgt_id
						);
						if (hRow) {
							hRow = JSON.parse(JSON.stringify(hRow));
							hRow.children = [];
							reconstructedRows.push(hRow);
						}
					}
					hRow.children.push(flatRow);
				}
			});
			return reconstructedRows;
		},

		originalRows() {
			const rows = JSON.parse(JSON.stringify(this.rows));
			let nestedRows = [];
			if (!this.groupOptions.enabled) {
				nestedRows = this.handleGrouped([
					{
						label: "no groups",
						children: rows,
					},
				]);
			} else {
				nestedRows = this.handleGrouped(rows);
			}
			// we need to preserve the original index of
			// rows so lets do that
			let index = 0;
			nestedRows.forEach((headerRow) => {
				headerRow.children.forEach((row) => {
					row.originalIndex = index++;
				});
			});

			return nestedRows;
		},

		typedColumns() {
			const columns = this.columns;
			for (let i = 0; i < this.columns.length; i++) {
				const column = columns[i];
				column.typeDef = this.dataTypes[column.type] || defaultType;
			}
			return columns;
		},

		hasRowClickListener() {
			return this.$attrs && this.$attrs["row-click"];
		},
	},

	methods: {
		//* we need to check for expanded row state here
		//* to maintain it when sorting/filtering
		handleExpanded(headerRow) {
			if (
				this.maintainExpanded &&
				this.expandedRowKeys.has(headerRow[this.rowKeyField])
			) {
				headerRow["vgtIsExpanded"] = true;
			} else {
				headerRow["vgtIsExpanded"] = false;
			}
		},
		toggleExpand(id) {
			const headerRow = this.filteredRows.find(
				(r) => r[this.rowKeyField] === id
			);
			if (headerRow) {
				headerRow["vgtIsExpanded"] = !headerRow.vgtIsExpanded;
			}
			if (this.maintainExpanded && headerRow.vgtIsExpanded) {
				this.expandedRowKeys.add(headerRow[this.rowKeyField]);
			} else {
				this.expandedRowKeys.delete(headerRow[this.rowKeyField]);
			}
		},

		expandAll() {
			this.filteredRows.forEach((row) => {
				row["vgtIsExpanded"] = true;
				if (this.maintainExpanded) {
					this.expandedRowKeys.add(row[this.rowKeyField]);
				}
			});
		},

		collapseAll() {
			this.filteredRows.forEach((row) => {
				row["vgtIsExpanded"] = false;
				this.expandedRowKeys.clear();
			});
		},

		getColumnForField(field) {
			for (let i = 0; i < this.typedColumns.length; i += 1) {
				if (this.typedColumns[i].field === field) return this.typedColumns[i];
			}
		},

		handleSearch() {
			this.resetTable();
			// for remote mode, we need to emit search
			if (this.mode === "remote") {
				this.$emit("search", {
					searchTerm: this.searchTerm,
				});
			}
		},

		reset() {
			this.initializeSort();
			this.changePage(1);
			this.$refs["table-header-primary"].reset(true);
			if (this.$refs["table-header-secondary"]) {
				this.$refs["table-header-secondary"].reset(true);
			}
		},

		emitSelectedRows() {
			this.$emit("select-all", {
				selected: this.selectedRowCount === this.totalRowCount,
				selectedRows: this.selectedRows,
			});
		},

		unselectAllInternal(forceAll) {
			const rows =
				this.selectAllByPage && !forceAll ? this.paginated : this.filteredRows;
			rows.forEach((headerRow, i) => {
				headerRow.children.forEach((row, j) => {
					row["vgtSelected"] = false;
				});
			});
			this.emitSelectedRows();
		},

		toggleSelectAll() {
			if (this.allSelected) {
				this.unselectAllInternal();
				return;
			}
			const rows = this.selectAllByPage ? this.paginated : this.filteredRows;
			rows.forEach((headerRow) => {
				headerRow.children.forEach((row) => {
					row["vgtSelected"] = true;
				});
			});
			this.emitSelectedRows();
		},

		toggleExpandRowsAll() {
			for (let row of this.rows) {
				if (row["expandedRow"]) {
					row["expanded"] = !row["expanded"];
				} else {
					row["expanded"] = false;
				}
			}
			this.$emit("toggle-expand-rows-all", {});
		},

		toggleSelectGroup(event, headerRow) {
			headerRow.children.forEach((row) => {
				row["vgtSelected"] = event;
			});
		},

		changePage(value) {
			const enabled = this.paginate;
			let { paginationBottom, paginationTop } = this.$refs;
			if (enabled) {
				if (this.paginateOnTop && paginationTop) {
					paginationTop.currentPage = value;
				}
				if (this.paginateOnBottom && paginationBottom) {
					paginationBottom.currentPage = value;
				}
				// we also need to set the currentPage
				// for table.
				this.currentPage = value;
			}
		},

		pageChangedEvent() {
			return {
				currentPage: this.currentPage,
				currentPerPage: this.currentPerPage,
				total: Math.floor(this.totalRowCount / this.currentPerPage),
			};
		},

		pageChanged(pagination) {
			this.currentPage = pagination.currentPage;
			if (!pagination.noEmit) {
				const pageChangedEvent = this.pageChangedEvent();
				pageChangedEvent.prevPage = pagination.prevPage;
				this.$emit("page-change", pageChangedEvent);
				if (this.mode === "remote") {
					this.$emit("update:isLoading", true);
				}
			}
		},

		perPageChanged(pagination) {
			this.currentPerPage = pagination.currentPerPage;
			// ensure that both sides of pagination are in agreement
			// this fixes changes during position = 'both'
			let paginationPosition = this.paginationOptions.position;
			if (
				this.$refs.paginationTop &&
				(paginationPosition === "top" || paginationPosition === "both")
			) {
				this.$refs.paginationTop.currentPerPage = this.currentPerPage;
			}
			if (
				this.$refs.paginationBottom &&
				(paginationPosition === "bottom" || paginationPosition === "both")
			) {
				this.$refs.paginationBottom.currentPerPage = this.currentPerPage;
			}
			//* update perPage also
			const perPageChangedEvent = this.pageChangedEvent();
			this.$emit("per-page-change", perPageChangedEvent);
			if (this.mode === "remote") {
				this.$emit("update:isLoading", true);
			}
		},

		changeSort(sorts) {
			this.sorts = sorts;
			this.$emit("sort-change", sorts);

			// every time we change sort we need to reset to page 1
			this.changePage(1);

			// if the mode is remote, we don't need to do anything
			// after this. just set table loading to true
			if (this.mode === "remote") {
				this.$emit("update:isLoading", true);
				return;
			}
			this.sortChanged = true;
		},

		toggleRowExpand(row, index) {
			if (this.expandedRowIndex === index) {
				this.expandedRowIndex = null;
			} else {
				this.expandedRowIndex = index;
			}
		},

		// checkbox click should always do the following
		onCheckboxClicked(row, index, event) {
			if (this.enableRowExpand) {
				this.toggleRowExpand(row, index);
			}
			row["vgtSelected"] = !row.vgtSelected;
			this.$emit("row-click", {
				row,
				pageIndex: index,
				selected: !!row.vgtSelected,
				event,
			});
		},

		toggleExpandRow(row) {
			row["expanded"] = !row["expanded"];
		},

		onRowDoubleClicked(row, index, event) {
			this.$emit("row-dblclick", {
				row,
				pageIndex: index,
				selected: !!row.vgtSelected,
				event,
			});
		},

		onRowClicked(row, index, event) {
			if (this.enableRowExpand) {
				this.toggleRowExpand(row, index);
			}
			if (this.selectable && !this.selectOnCheckboxOnly) {
				row["vgtSelected"] = !row.vgtSelected;
			}
			this.$emit("row-click", {
				row,
				pageIndex: index,
				selected: !!row.vgtSelected,
				event,
			});
		},

		onRowAuxClicked(row, index, event) {
			this.$emit("row-aux-click", {
				row,
				pageIndex: index,
				selected: !!row.vgtSelected,
				event,
			});
		},

		onCellClicked(row, column, rowIndex, event) {
			this.$emit("cell-click", {
				row,
				column,
				rowIndex,
				event,
			});
		},

		onMouseenter(row, index) {
			this.$emit("row-mouseenter", {
				row,
				pageIndex: index,
			});
		},

		onMouseleave(row, index) {
			this.$emit("row-mouseleave", {
				row,
				pageIndex: index,
			});
		},

		searchTableOnEnter() {
			if (this.searchTrigger === "enter") {
				this.handleSearch();
				// we reset the filteredRows here because
				// we want to search across everything.
				this.filteredRows = JSON.parse(JSON.stringify(this.originalRows));
				this.forceSearch = true;
				this.sortChanged = true;
			}
		},

		searchTableOnKeyUp() {
			if (this.searchTrigger !== "enter") {
				this.handleSearch();
			}
		},

		resetTable() {
			this.unselectAllInternal(true);
			// every time we searchTable
			this.changePage(1);
		},

		// field can be:
		// 1. function (passed as a string using function.name. For example: 'bound myFunction')
		// 2. regular property - ex: 'prop'
		// 3. nested property path - ex: 'nested.prop'
		collect(obj, field) {
			// utility function to get nested property
			function dig(obj, selector) {
				let result = obj;
				const splitter = selector.split(".");
				for (let i = 0; i < splitter.length; i++) {
					if (typeof result === "undefined" || result === null) {
						return undefined;
					}
					result = result[splitter[i]];
				}
				return result;
			}

			if (typeof field === "function") return field(obj);
			if (typeof field === "string") return dig(obj, field);
			return undefined;
		},

		collectFormatted(obj, column, headerRow = false) {
			let value;
			if (headerRow && column.headerField) {
				value = this.collect(obj, column.headerField);
			} else {
				value = this.collect(obj, column.field);
			}
			if (value === undefined) return "";

			// if user has supplied custom formatter,
			// use that here
			if (column.formatFn && typeof column.formatFn === "function") {
				return column.formatFn(value, obj);
			}

			// lets format the resultant data
			let type = column.typeDef;
			// this will only happen if we try to collect formatted
			// before types have been initialized. for example: on
			// load when external query is specified.
			if (!type) {
				type = this.dataTypes[column.type] || defaultType;
			}

			let result = type.format(value, column);
			// we must have some values in compact mode
			if (this.compactMode && (result == "" || result == null)) return "-";
			return result;
		},

		formattedRow(row, isHeaderRow = false) {
			const formattedRow = {};
			for (let i = 0; i < this.typedColumns.length; i++) {
				const col = this.typedColumns[i];
				// what happens if field is
				if (col.field) {
					formattedRow[col.field] = this.collectFormatted(
						row,
						col,
						isHeaderRow
					);
				}
			}
			return formattedRow;
		},

		// Get classes for the given column index & element.
		getClasses(index, element, row) {
			const { typeDef, [`${element}Class`]: custom } = this.typedColumns[index];
			let { isRight } = typeDef;
			if (this.rtl) isRight = true;

			const classes = {
				"vgt-right-align": isRight,
				"vgt-left-align": !isRight,
			};

			// for td we need to check if value is
			// a function.
			if (typeof custom === "function") {
				classes[custom(row)] = true;
			} else if (typeof custom === "string") {
				classes[custom] = true;
			}
			return classes;
		},

		// method to filter rows
		filterRows(columnFilters, fromFilter = true) {
			// if (!this.rows.length) return;
			// this is invoked either as a result of changing filters
			// or as a result of modifying rows.
			this.columnFilters = columnFilters;
			let computedRows = JSON.parse(JSON.stringify(this.originalRows));
			let instancesOfFiltering = false;

			// do we have a filter to care about?
			// if not we don't need to do anything
			if (this.columnFilters && Object.keys(this.columnFilters).length) {
				// every time we filter rows, we need to set current page
				// to 1
				// if the mode is remote, we only need to reset, if this is
				// being called from filter, not when rows are changing
				if (this.mode !== "remote" || fromFilter) {
					this.changePage(1);
				}
				// we need to emit an event and that's that.
				// but this only needs to be invoked if filter is changing
				// not when row object is modified.
				if (fromFilter) {
					this.$emit("column-filter", {
						columnFilters: this.columnFilters,
					});
				}

				// if mode is remote, we don't do any filtering here.
				if (this.mode === "remote") {
					if (fromFilter) {
						this.$emit("update:isLoading", true);
					} else {
						// if remote filtering has already been taken care of.
						this.filteredRows = computedRows;
					}
					return;
				}

				const fieldKey = (field) => {
					if (typeof field === "function" && field.name) {
						return field.name;
					}
					return field;
				};

				for (let i = 0; i < this.typedColumns.length; i++) {
					const col = this.typedColumns[i];
					if (this.columnFilters[fieldKey(col.field)]) {
						instancesOfFiltering = true;
						computedRows.forEach((headerRow) => {
							const newChildren = headerRow.children.filter((row) => {
								// If column has a custom filter, use that.
								if (
									col.filterOptions &&
									typeof col.filterOptions.filterFn === "function"
								) {
									return col.filterOptions.filterFn(
										this.collect(row, col.field),
										this.columnFilters[fieldKey(col.field)]
									);
								}

								// Otherwise Use default filters
								const { typeDef } = col;
								return typeDef.filterPredicate(
									this.collect(row, col.field),
									this.columnFilters[fieldKey(col.field)],
									false,
									col.filterOptions &&
										typeof col.filterOptions.filterDropdownItems === "object"
								);
							});
							// should we remove the header?
							headerRow.children = newChildren;
						});
					}
				}
			}

			if (instancesOfFiltering) {
				this.filteredRows = computedRows.filter(
					(h) => h.children && h.children.length
				);
			} else {
				this.filteredRows = computedRows;
			}
		},

		getCurrentIndex(rowId) {
			let index = 0;
			let found = false;
			for (let i = 0; i < this.paginated.length; i += 1) {
				const headerRow = this.paginated[i];
				const { children } = headerRow;
				if (children && children.length) {
					for (let j = 0; j < children.length; j += 1) {
						const c = children[j];
						if (c.originalIndex === rowId) {
							found = true;
							break;
						}
						index += 1;
					}
				}
				if (found) break;
			}
			return (this.currentPage - 1) * this.currentPerPage + index + 1;
		},

		getRowStyleClass(row) {
			let classes = "";
			if (this.hasRowClickListener) classes += "clickable";
			let rowStyleClasses;
			if (typeof this.rowStyleClass === "function") {
				rowStyleClasses = this.rowStyleClass(row);
			} else {
				rowStyleClasses = this.rowStyleClass;
			}
			if (rowStyleClasses) {
				classes += ` ${rowStyleClasses}`;
			}

			if (this.expandedRowIndex === row.originalIndex) {
				classes += ` ${this.expandedRowClasses}`;
			}

			return classes;
		},

		handleGrouped(originalRows) {
			originalRows.forEach((headerRow, i) => {
				headerRow.vgt_header_id = i;
				if (
					this.groupOptions.maintainExpanded &&
					this.expandedRowKeys.has(headerRow[this.groupOptions.rowKey])
				) {
					headerRow["vgtIsExpanded"] = true;
				}
				headerRow.children.forEach((childRow) => {
					childRow.vgt_id = i;
				});
			});
			return originalRows;
		},

		initializePagination() {
			const {
				enabled,
				perPage,
				position,
				perPageDropdown,
				perPageDropdownEnabled,
				dropdownAllowAll,
				nextLabel,
				prevLabel,
				rowsPerPageLabel,
				ofLabel,
				pageLabel,
				allLabel,
				setCurrentPage,
				mode,
				infoFn,
			} = this.paginationOptions;

			if (typeof enabled === "boolean") {
				this.paginate = enabled;
			}

			if (typeof perPage === "number") {
				this.perPage = perPage;
			}

			if (position === "top") {
				this.paginateOnTop = true; // default is false
				this.paginateOnBottom = false; // default is true
			} else if (position === "both") {
				this.paginateOnTop = true;
				this.paginateOnBottom = true;
			}

			if (Array.isArray(perPageDropdown) && perPageDropdown.length) {
				this.customRowsPerPageDropdown = perPageDropdown;
				if (!this.perPage) {
					[this.perPage] = perPageDropdown;
				}
			}

			if (typeof perPageDropdownEnabled === "boolean") {
				this.perPageDropdownEnabled = perPageDropdownEnabled;
			}

			if (typeof dropdownAllowAll === "boolean") {
				this.paginateDropdownAllowAll = dropdownAllowAll;
			}

			if (typeof mode === "string") {
				this.paginationMode = mode;
			}

			if (typeof nextLabel === "string") {
				this.nextText = nextLabel;
			}

			if (typeof prevLabel === "string") {
				this.prevText = prevLabel;
			}

			if (typeof rowsPerPageLabel === "string") {
				this.rowsPerPageText = rowsPerPageLabel;
			}

			if (typeof ofLabel === "string") {
				this.ofText = ofLabel;
			}

			if (typeof pageLabel === "string") {
				this.pageText = pageLabel;
			}

			if (typeof allLabel === "string") {
				this.allText = allLabel;
			}

			if (typeof setCurrentPage === "number") {
				setTimeout(() => {
					this.changePage(setCurrentPage);
				}, 500);
			}

			if (typeof infoFn === "function") {
				this.paginationInfoFn = infoFn;
			}
		},

		initializeExpandRows() {
			const { enabled } = this.expandRowsOptions;

			if (typeof enabled === "boolean") {
				this.expandRowsEnabled = enabled;
			}
		},

		initializeSearch() {
			const {
				enabled,
				trigger,
				externalQuery,
				searchFn,
				placeholder,
				skipDiacritics,
			} = this.searchOptions;

			if (typeof enabled === "boolean") {
				this.searchEnabled = enabled;
			}

			if (trigger === "enter") {
				this.searchTrigger = trigger;
			}

			if (typeof externalQuery === "string") {
				this.externalSearchQuery = externalQuery;
			}

			if (typeof searchFn === "function") {
				this.searchFn = searchFn;
			}

			if (typeof placeholder === "string") {
				this.searchPlaceholder = placeholder;
			}

			if (typeof skipDiacritics === "boolean") {
				this.searchSkipDiacritics = skipDiacritics;
			}
		},

		initializeSort() {
			const { enabled, initialSortBy, multipleColumns } = this.sortOptions;
			const initSortBy = JSON.parse(JSON.stringify(initialSortBy || {}));

			if (typeof enabled === "boolean") {
				this.sortable = enabled;
			}

			if (typeof multipleColumns === "boolean") {
				this.multipleColumnSort = multipleColumns;
			}

			//* initialSortBy can be an array or an object
			if (typeof initSortBy === "object") {
				const ref = this.fixedHeader
					? this.$refs["table-header-secondary"]
					: this.$refs["table-header-primary"];
				if (Array.isArray(initSortBy)) {
					ref.setInitialSort(initSortBy);
				} else {
					const hasField = Object.prototype.hasOwnProperty.call(
						initSortBy,
						"field"
					);
					if (hasField) ref.setInitialSort([initSortBy]);
				}
			}
		},

		initializeSelect() {
			const {
				enabled,
				selectionInfoClass,
				selectionText,
				clearSelectionText,
				selectOnCheckboxOnly,
				selectAllByPage,
				disableSelectInfo,
				selectAllByGroup,
			} = this.selectOptions;

			if (typeof enabled === "boolean") {
				this.selectable = enabled;
			}

			if (typeof selectOnCheckboxOnly === "boolean") {
				this.selectOnCheckboxOnly = selectOnCheckboxOnly;
			}

			if (typeof selectAllByPage === "boolean") {
				this.selectAllByPage = selectAllByPage;
			}

			if (typeof selectAllByGroup === "boolean") {
				this.selectAllByGroup = selectAllByGroup;
			}

			if (typeof disableSelectInfo === "boolean") {
				this.disableSelectInfo = disableSelectInfo;
			}

			if (typeof selectionInfoClass === "string") {
				this.selectionInfoClass = selectionInfoClass;
			}

			if (typeof selectionText === "string") {
				this.selectionText = selectionText;
			}

			if (typeof clearSelectionText === "string") {
				this.clearSelectionText = clearSelectionText;
			}
		},
	},

	mounted() {
		if (this.perPage) {
			this.currentPerPage = this.perPage;
		}
		this.initializeSort();
	},

	components: {
		"vgt-pagination": VgtPagination,
		"vgt-global-search": VgtGlobalSearch,
		"vgt-header-row": VgtHeaderRow,
		"vgt-table-header": VgtTableHeader,
	},
};

const _hoisted_1 = {
  key: 0,
  class: "vgt-loading vgt-center-align"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "vgt-loading__content" }, " Loading... ", -1 /* HOISTED */);
const _hoisted_3 = { class: "vgt-selection-info-row__actions vgt-pull-right" };
const _hoisted_4 = { class: "vgt-fixed-header" };
const _hoisted_5 = ["id"];
const _hoisted_6 = ["id"];
const _hoisted_7 = ["onMouseenter", "onMouseleave", "onDblclick", "onClick", "onAuxclick"];
const _hoisted_8 = {
  key: 0,
  class: "line-numbers"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["disabled", "checked"];
const _hoisted_11 = ["onClick", "data-label"];
const _hoisted_12 = { key: 0 };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = ["colspan"];
const _hoisted_15 = ["colspan"];
const _hoisted_16 = { key: 0 };
const _hoisted_17 = ["colspan"];
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vgt-center-align vgt-text-disabled" }, " No data for table ", -1 /* HOISTED */);
const _hoisted_19 = {
  key: 2,
  class: "vgt-wrap__actions-footer"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vgt_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vgt-pagination");
  const _component_vgt_global_search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vgt-global-search");
  const _component_vgt_table_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vgt-table-header");
  const _component_vgt_header_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vgt-header-row");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.wrapStyleClasses)
  }, [
    ($props.isLoading)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loadingContent", {}, () => [
            _hoisted_2
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vgt-inner-wrap", { 'is-loading': $props.isLoading }])
    }, [
      (_ctx.paginate && _ctx.paginateOnTop)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "pagination-top", {
            key: 0,
            pageChanged: $options.pageChanged,
            perPageChanged: $options.perPageChanged,
            total: $props.totalRows || $options.totalRowCount
          }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_pagination, {
              ref: "paginationTop",
              onPageChanged: $options.pageChanged,
              onPerPageChanged: $options.perPageChanged,
              perPage: _ctx.perPage,
              rtl: $props.rtl,
              total: $props.totalRows || $options.totalRowCount,
              mode: _ctx.paginationMode,
              nextText: _ctx.nextText,
              prevText: _ctx.prevText,
              rowsPerPageText: _ctx.rowsPerPageText,
              perPageDropdownEnabled: $props.paginationOptions.perPageDropdownEnabled,
              customRowsPerPageDropdown: _ctx.customRowsPerPageDropdown,
              paginateDropdownAllowAll: _ctx.paginateDropdownAllowAll,
              ofText: _ctx.ofText,
              pageText: _ctx.pageText,
              allText: _ctx.allText,
              "info-fn": _ctx.paginationInfoFn
            }, null, 8 /* PROPS */, ["onPageChanged", "onPerPageChanged", "perPage", "rtl", "total", "mode", "nextText", "prevText", "rowsPerPageText", "perPageDropdownEnabled", "customRowsPerPageDropdown", "paginateDropdownAllowAll", "ofText", "pageText", "allText", "info-fn"])
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_global_search, {
        onKeyup: $options.searchTableOnKeyUp,
        onEnter: $options.searchTableOnEnter,
        value: _ctx.globalSearchTerm,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.globalSearchTerm = $event)),
        "search-enabled": _ctx.searchEnabled && _ctx.externalSearchQuery == null,
        "global-search-placeholder": _ctx.searchPlaceholder
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 /* DYNAMIC */ }, [
        (_ctx.$slots['table-actions'])
          ? {
              name: "internal-table-actions",
              fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-actions")
              ])
            }
          : undefined
      ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["onKeyup", "onEnter", "value", "search-enabled", "global-search-placeholder"]),
      ($options.selectedRowCount && !_ctx.disableSelectInfo)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 1,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vgt-selection-info-row clearfix", _ctx.selectionInfoClass])
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.selectionInfo) + " ", 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              href: "",
              onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.unselectAllInternal(true)), ["prevent"]))
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.clearSelectionText), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selected-row-actions")
            ])
          ], 2 /* CLASS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
        ($props.fixedHeader)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", {
              key: 0,
              id: "vgt-table",
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.tableStyleClasses)
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("colgroup", null, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("col", {
                    key: index,
                    id: `col-${index}`
                  }, null, 8 /* PROPS */, _hoisted_5))
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table header "),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_table_header, {
                ref: "table-header-secondary",
                onToggleSelectAll: $options.toggleSelectAll,
                onToggleExpandRowsAll: $options.toggleExpandRowsAll,
                onSortChange: $options.changeSort,
                onFilterChanged: $options.filterRows,
                columns: $props.columns,
                "line-numbers": $props.lineNumbers,
                selectable: _ctx.selectable,
                "all-selected": $options.allSelected,
                "all-selected-indeterminate": $options.allSelectedIndeterminate,
                mode: $props.mode,
                sortable: _ctx.sortable,
                "multiple-column-sort": _ctx.multipleColumnSort,
                "typed-columns": $options.typedColumns,
                getClasses: $options.getClasses,
                searchEnabled: _ctx.searchEnabled,
                paginated: $options.paginated,
                "table-ref": _ctx.$refs.table
              }, {
                "table-column": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-column", {
                    column: slotProps.column
                  }, () => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.column.label), 1 /* TEXT */)
                  ])
                ]),
                "column-filter": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "column-filter", {
                    column: slotProps.column,
                    updateFilters: slotProps.updateFilters
                  })
                ]),
                _: 3 /* FORWARDED */
              }, 8 /* PROPS */, ["onToggleSelectAll", "onToggleExpandRowsAll", "onSortChange", "onFilterChanged", "columns", "line-numbers", "selectable", "all-selected", "all-selected-indeterminate", "mode", "sortable", "multiple-column-sort", "typed-columns", "getClasses", "searchEnabled", "paginated", "table-ref"])
            ], 2 /* CLASS */))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'vgt-responsive': $props.responsive }),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.wrapperStyles)
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
          id: "vgt-table",
          ref: "table",
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.tableStyles)
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("colgroup", null, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, index) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("col", {
                key: index,
                id: `col-${index}`
              }, null, 8 /* PROPS */, _hoisted_6))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table header "),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_table_header, {
            ref: "table-header-primary",
            onToggleSelectAll: $options.toggleSelectAll,
            onToggleExpandRowsAll: $options.toggleExpandRowsAll,
            onSortChange: $options.changeSort,
            onFilterChanged: $options.filterRows,
            columns: $props.columns,
            "line-numbers": $props.lineNumbers,
            selectable: _ctx.selectable,
            "all-selected": $options.allSelected,
            "all-selected-indeterminate": $options.allSelectedIndeterminate,
            mode: $props.mode,
            sortable: _ctx.sortable,
            "multiple-column-sort": _ctx.multipleColumnSort,
            "typed-columns": $options.typedColumns,
            getClasses: $options.getClasses,
            searchEnabled: _ctx.searchEnabled
          }, {
            "table-column": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-column", {
                column: slotProps.column
              }, () => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.column.label), 1 /* TEXT */)
              ])
            ]),
            "column-filter": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "column-filter", {
                column: slotProps.column,
                updateFilters: slotProps.updateFilters
              })
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["onToggleSelectAll", "onToggleExpandRowsAll", "onSortChange", "onFilterChanged", "columns", "line-numbers", "selectable", "all-selected", "all-selected-indeterminate", "mode", "sortable", "multiple-column-sort", "typed-columns", "getClasses", "searchEnabled"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table body starts here "),
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.paginated, (headerRow, hIndex) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", { key: hIndex }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if group row header is at the top "),
              ($options.groupHeaderOnTop)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vgt_header_row, {
                    key: 0,
                    onVgtExpand: $event => ($options.toggleExpand(headerRow[$options.rowKeyField])),
                    "header-row": headerRow,
                    columns: $props.columns,
                    "line-numbers": $props.lineNumbers,
                    selectable: _ctx.selectable,
                    "select-all-by-group": _ctx.selectAllByGroup,
                    collapsable: $props.groupOptions.collapsable,
                    "collect-formatted": $options.collectFormatted,
                    "formatted-row": $options.formattedRow,
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getRowStyleClass(headerRow)),
                    "get-classes": $options.getClasses,
                    "full-colspan": $options.fullColspan,
                    groupIndex: hIndex,
                    onSelectGroupChange: $event => ($options.toggleSelectGroup($event, headerRow))
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 /* DYNAMIC */ }, [
                    ($options.hasHeaderRowTemplate)
                      ? {
                          name: "table-header-row",
                          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-row", {
                              column: slotProps.column,
                              formattedRow: slotProps.formattedRow,
                              row: slotProps.row
                            })
                          ])
                        }
                      : undefined
                  ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["onVgtExpand", "header-row", "columns", "line-numbers", "selectable", "select-all-by-group", "collapsable", "collect-formatted", "formatted-row", "class", "get-classes", "full-colspan", "groupIndex", "onSelectGroupChange"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" normal rows here. we loop over all rows "),
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(headerRow.children, (row, index) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
                  ($props.groupOptions.collapsable ? headerRow.vgtIsExpanded : true)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                        key: row.originalIndex,
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getRowStyleClass(row)),
                        onMouseenter: $event => ($options.onMouseenter(row, index)),
                        onMouseleave: $event => ($options.onMouseleave(row, index)),
                        onDblclick: $event => ($options.onRowDoubleClicked(row, index, $event)),
                        onClick: $event => ($options.onRowClicked(row, index, $event)),
                        onAuxclick: $event => ($options.onRowAuxClicked(row, index, $event))
                      }, [
                        ($props.lineNumbers)
                          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getCurrentIndex(row.originalIndex)), 1 /* TEXT */))
                          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                        (_ctx.selectable)
                          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
                              key: 1,
                              onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.onCheckboxClicked(row, index, $event)), ["stop"]),
                              class: "vgt-checkbox-col"
                            }, [
                              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                type: "checkbox",
                                disabled: row.vgtDisabled,
                                checked: row.vgtSelected
                              }, null, 8 /* PROPS */, _hoisted_10)
                            ], 8 /* PROPS */, _hoisted_9))
                          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (column, i) => {
                          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
                            (!column.hidden && column.field)
                              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
                                  key: i,
                                  onClick: $event => ($options.onCellClicked(row, column, index, $event)),
                                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getClasses(i, 'td', row)),
                                  "data-label": $props.compactMode ? column.label : undefined
                                }, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-row", {
                                    row: row,
                                    column: column,
                                    formattedRow: $options.formattedRow(row),
                                    index: index,
                                    expandedRow: _ctx.expandedRowIndex === index
                                  }, () => [
                                    (!column.html)
                                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.collectFormatted(row, column)), 1 /* TEXT */))
                                      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                                          key: 1,
                                          innerHTML: $options.collect(row, column.field)
                                        }, null, 8 /* PROPS */, _hoisted_13))
                                  ])
                                ], 10 /* CLASS, PROPS */, _hoisted_11))
                              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                          ], 64 /* STABLE_FRAGMENT */))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_7))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                  (_ctx.expandedRowIndex === index)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.expandedRowDetailClasses),
                        key: row.originalIndex
                      }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", { colspan: $options.fullColspan }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "row-details", {
                            row: row,
                            formattedRow: $options.formattedRow(row),
                            index: index
                          })
                        ], 8 /* PROPS */, _hoisted_14)
                      ], 2 /* CLASS */))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                  (row['expanded'])
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                        key: row.originalIndex
                      }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", { colspan: $options.fullColspan }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row["expandedRow"]), 9 /* TEXT, PROPS */, _hoisted_15)
                      ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if group row header is at the bottom "),
              ($options.groupHeaderOnBottom)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vgt_header_row, {
                    key: 1,
                    "header-row": headerRow,
                    columns: $props.columns,
                    "line-numbers": $props.lineNumbers,
                    selectable: _ctx.selectable,
                    "select-all-by-group": _ctx.selectAllByGroup,
                    "collect-formatted": $options.collectFormatted,
                    "formatted-row": $options.formattedRow,
                    "get-classes": $options.getClasses,
                    "full-colspan": $options.fullColspan,
                    groupIndex: _ctx.index,
                    onSelectGroupChange: $event => ($options.toggleSelectGroup($event, headerRow))
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 /* DYNAMIC */ }, [
                    ($options.hasHeaderRowTemplate)
                      ? {
                          name: "table-header-row",
                          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-header-row", {
                              column: slotProps.column,
                              formattedRow: slotProps.formattedRow,
                              row: slotProps.row
                            })
                          ])
                        }
                      : undefined
                  ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["header-row", "columns", "line-numbers", "selectable", "select-all-by-group", "collect-formatted", "formatted-row", "get-classes", "full-colspan", "groupIndex", "onSelectGroupChange"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          ($options.showEmptySlot)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_16, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", { colspan: $options.fullColspan }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "emptystate", {}, () => [
                      _hoisted_18
                    ])
                  ], 8 /* PROPS */, _hoisted_17)
                ])
              ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 2 /* CLASS */)
      ], 6 /* CLASS, STYLE */),
      ($options.hasFooterSlot)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "table-actions-bottom")
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (_ctx.paginate && _ctx.paginateOnBottom)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "pagination-bottom", {
            key: 3,
            pageChanged: $options.pageChanged,
            perPageChanged: $options.perPageChanged,
            total: $props.totalRows || $options.totalRowCount
          }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vgt_pagination, {
              ref: "paginationBottom",
              onPageChanged: $options.pageChanged,
              onPerPageChanged: $options.perPageChanged,
              perPage: _ctx.perPage,
              rtl: $props.rtl,
              total: $props.totalRows || $options.totalRowCount,
              mode: _ctx.paginationMode,
              nextText: _ctx.nextText,
              prevText: _ctx.prevText,
              rowsPerPageText: _ctx.rowsPerPageText,
              perPageDropdownEnabled: $props.paginationOptions.perPageDropdownEnabled,
              customRowsPerPageDropdown: _ctx.customRowsPerPageDropdown,
              paginateDropdownAllowAll: _ctx.paginateDropdownAllowAll,
              ofText: _ctx.ofText,
              pageText: _ctx.pageText,
              allText: _ctx.allText,
              "info-fn": _ctx.paginationInfoFn
            }, null, 8 /* PROPS */, ["onPageChanged", "onPerPageChanged", "perPage", "rtl", "total", "mode", "nextText", "prevText", "rowsPerPageText", "perPageDropdownEnabled", "customRowsPerPageDropdown", "paginateDropdownAllowAll", "ofText", "pageText", "allText", "info-fn"])
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}
var VueGoodTable = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

var index = {
  install: (app, options) => {
    app.component('VueGoodTable', VueGoodTable);
  }
};




/***/ }),

/***/ "./resources/assets/components/Search.vue":
/*!************************************************!*\
  !*** ./resources/assets/components/Search.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_6159e2e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=6159e2e6 */ "./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./resources/assets/components/Search.vue?vue&type=script&lang=js");
/* harmony import */ var _Search_vue_vue_type_style_index_0_id_6159e2e6_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss */ "./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss");
/* harmony import */ var _var_www_voipiran_stats_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_voipiran_stats_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_6159e2e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/components/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/components/Search.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/assets/components/Search.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6":
/*!******************************************************************************!*\
  !*** ./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_6159e2e6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_6159e2e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=6159e2e6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=template&id=6159e2e6");


/***/ }),

/***/ "./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_6159e2e6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/Search.vue?vue&type=style&index=0&id=6159e2e6&lang=scss");


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiselect": () => (/* binding */ script),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "multiselectMixin": () => (/* binding */ multiselectMixin),
/* harmony export */   "pointerMixin": () => (/* binding */ pointerMixin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return search ? options
    .filter((option) => includes(customLabel(option, label), search))
    .sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options
}

function stripGroups (options) {
  return options.filter((option) => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map((group) => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel);

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var multiselectMixin = {
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue () {
      return this.modelValue || this.modelValue === 0
        ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
        : []
    },
    filteredOptions () {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();

      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({isTag: true, label: search});
        } else {
          options.unshift({isTag: true, label: search});
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue () {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.$emit('update:modelValue', this.multiple ? [] : null);
      }
    },
    search () {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option;
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return
        }

        this.$emit('select', option, this.id);

        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);

        const newValue = this.internalValue.filter(
          (option) => group[this.groupValues].indexOf(option) === -1
        );

        this.$emit('update:modelValue', newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          (option) => !(this.isOptionDisabled(option) || this.isSelected(option))
        );

        this.$emit('select', optionsToAdd, this.id);
        this.$emit(
          'update:modelValue',
          this.internalValue.concat(optionsToAdd)
        );
      }

      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option);

      this.$emit('remove', option, this.id);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        this.$refs.search && this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};

var pointerMixin = {
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust();
    },
    isOpen () {
      this.pointerDirty = false;
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          {'multiselect__option--group': selectedGroup.$isLabel}
        ]
      }

      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        {'multiselect__option--highlight': index === this.pointer && this.showPointer},
        {'multiselect__option--group-selected': this.wholeGroupSelected(group)}
      ] : 'multiselect__option--disabled'
    },
    addPointerElement ({key} = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0;
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward();
      }
    },
    pointerSet (index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

var script = {
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default () {
        return []
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
          (this.multiple && this.modelValue && this.modelValue.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? {width: '100%'}
          : {width: '0', position: 'absolute', padding: '0'}
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? {display: 'inline-block'}
        : {display: 'block'}
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
          this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
          (this.hasSingleSelectedSlot &&
            (this.visibleSingleValue || this.visibleSingleValue === 0)
            ? this.isOpen
            : true)
      )
    }
  }
};

const _hoisted_1 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_2 = { class: "multiselect__tags-wrap" };
const _hoisted_3 = { class: "multiselect__spinner" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "multiselect__option" };
const _hoisted_6 = { class: "multiselect__option" };
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No elements found. Consider changing the search query.");
const _hoisted_8 = { class: "multiselect__option" };
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List is empty.");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove }, "multiselect"],
    onFocus: _cache[14] || (_cache[14] = $event => (_ctx.activate())),
    onBlur: _cache[15] || (_cache[15] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"]))
    ],
    onKeypress: _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"])),
    onKeyup: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-'+_ctx.id
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onMousedown: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* HYDRATE_EVENTS */)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "clear", { search: _ctx.search }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.visibleValues, (option, index) => {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                class: "multiselect__tag",
                key: index
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                  textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, ["textContent"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
                  tabindex: "1",
                  onKeypress: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onKeypress", "onMousedown"])
              ]))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "limit", { key: 0 }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", {
                class: "multiselect__strong",
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, ["textContent"])
            ])
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "multiselect__loading" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loading", {}, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: "false",
            placeholder: _ctx.placeholder,
            style: $options.inputStyle,
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            onInput: _cache[2] || (_cache[2] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            onKeypress: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isSingleLabelVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentOptionLabel), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isPlaceholderVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "placeholder", {}, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "multiselect" }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[12] || (_cache[12] = (...args) => (_ctx.activate && _ctx.activate(...args))),
          tabindex: "-1",
          onMousedown: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
          style: { maxHeight: _ctx.optimizedHeight + 'px' },
          ref: "list"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
            class: "multiselect__content",
            style: $options.contentStyle,
            role: "listbox",
            id: 'listbox-'+_ctx.id
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "beforeList"),
            (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_4, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_5, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "maxElements", {}, () => [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Maximum of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                    ])
                  ])
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (!_ctx.max || _ctx.internalValue.length < _ctx.max)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredOptions, (option, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
                    class: "multiselect__element",
                    key: index,
                    id: _ctx.id + '-' + index,
                    role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                  }, [
                    (!(option && (option.$isLabel || option.$isDisabled)))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                          key: 0,
                          class: [_ctx.optionHighlight(index, option), "multiselect__option"],
                          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.select(option)), ["stop"]),
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerSet(index)), ["self"]),
                          "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                          "data-selected": $options.selectedLabelText,
                          "data-deselect": $options.deselectLabelText
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (option && (option.$isLabel || option.$isDisabled))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                          key: 1,
                          "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                          "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                          class: [_ctx.groupHighlight(index, option), "multiselect__option"],
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                          onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.selectGroup(option)), ["prevent"])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["data-select", "data-deselect", "onMouseenter", "onMousedown"]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ], 8 /* PROPS */, ["id", "role"]))
                }), 128 /* KEYED_FRAGMENT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  _hoisted_7
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noOptions", {}, () => [
                  _hoisted_9
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "afterList")
          ], 12 /* STYLE, PROPS */, ["id"])
        ], 36 /* STYLE, HYDRATE_EVENTS */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex", "aria-owns"]))
}

script.render = render;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);



/***/ }),

/***/ "./node_modules/vue3-slider/dist/vue3-slider.common.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue3-slider/dist/vue3-slider.common.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2c5c":
/***/ (function(module, exports, __nested_webpack_require_6265__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_6265__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{transition:opacity .2s}.fade-enter,.fade-leave-to{opacity:0}.vue3-slider{box-sizing:border-box;width:var(--width,100%);height:var(--height,6px);position:relative;margin:3px 0;cursor:pointer;font-family:inherit}.vue3-slider[disabled]{cursor:unset}.vue3-slider.vertical{width:var(--height,6px);height:var(--width,100%)}.vue3-slider.vertical .track-filled{width:100%;bottom:0;top:auto}.vue3-slider.vertical .handle{top:unset;bottom:0;left:0}.vue3-slider.vertical .tooltip{bottom:0;top:auto}.vue3-slider.circular{height:var(--width,100%);margin:0}.vue3-slider.circular .round-end{position:absolute;margin:0 auto;width:var(--height,6px);height:var(--height,6px);transform:scale(1);left:0;right:0;top:calc(var(--height, 6px)*-0.5)}.vue3-slider.circular .handle-container{-webkit-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:100%;position:absolute;top:0;left:0;transform-origin:center;display:flex;justify-content:center;align-items:center}.vue3-slider.circular .handle-container .handle{top:calc(var(--height, 6px)*-0.5);width:var(--height,6px);height:var(--height,6px);transform:scale(1)}.vue3-slider.circular .handle-container .handle.hover{transform:scale(var(--handle-scale,1.35))}.vue3-slider.circular .handle-container .tooltip{position:absolute;bottom:auto;left:unset}.vue3-slider *{-webkit-user-drag:none;-webkit-app-region:no-drag}.vue3-slider .tooltip{position:absolute;left:0;height:25px;background-color:var(--tooltip-color);color:var(--tooltip-text-color);font-family:inherit;padding:3px 7px;border-radius:4px;font-weight:700;display:flex;align-items:center;transition:bottom .3s ease,left .3s ease,top .3s ease,right .3s ease}.vue3-slider .track,.vue3-slider .track-filled{background-color:var(--track-color,rgba(241,246,248,.156863));width:100%;height:100%;border-radius:calc(var(--height, 6px)/2)}.vue3-slider .track-filled{left:0;width:auto;opacity:1}.vue3-slider .handle,.vue3-slider .track-filled{position:absolute;top:0;background-color:var(--color,#fb2727)}.vue3-slider .handle{width:var(--height,6px);height:var(--height,6px);border-radius:calc(var(--height, 6px)/2);transform:scale(0);transition:transform .2s ease;-webkit-user-select:none;-ms-user-select:none;user-select:none}.vue3-slider .handle.hover{transform:scale(var(--handle-scale,1.35))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_8892__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_8892__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_8892__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
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

function addStylesClient (parentId, list, _isProduction, _options) {
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

/***/ "5d0f":
/***/ (function(module, exports, __nested_webpack_require_16129__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_16129__("2c5c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_16129__("499e").default
var update = add("72eb4f88", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/***/ }),

/***/ "e503":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20029__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_c1be7308_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20029__("5d0f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_c1be7308_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_20029__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_c1be7308_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21838__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_21838__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/entry.esm.ts
var entry_esm_namespaceObject = {};
__nested_webpack_require_21838__.r(entry_esm_namespaceObject);
__nested_webpack_require_21838__.d(entry_esm_namespaceObject, "default", function() { return entry_esm; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_21838__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_21838__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_21838__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/vue3-slider.vue?vue&type=template&id=c1be7308
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _hoisted_1 = ["tabindex", "disabled"];

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "track"
}, null, -1);

var _hoisted_3 = ["tabindex", "disabled"];

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "track"
}, null, -1);

var _hoisted_5 = ["tabindex", "disabled"];
var _hoisted_6 = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
  style: {
    "overflow": "visible"
  }
};

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("circle", {
  stroke: "var(--track-color)",
  "vector-effect": "non-scaling-stroke",
  fill: "none",
  "stroke-width": "var(--height)",
  r: "50%",
  cx: "50",
  cy: "50"
}, null, -1);

var _hoisted_8 = ["stroke-dasharray", "stroke-dashoffset"];

var _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "handle round-end"
}, null, -1);

var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.orientation == 'horizontal' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "horizontal",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    class: "vue3-slider",
    ref: "slider",
    tabindex: _ctx.disabled ? undefined : 0,
    onTouchstart: _cache[0] || (_cache[0] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMousedown: _cache[1] || (_cache[1] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMouseenter: _cache[2] || (_cache[2] = function ($event) {
      return !_ctx.disabled ? _ctx.hovering = true : null;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[4] || (_cache[4] = function ($event) {
      return !_ctx.disabled ? _ctx.handleKeydown($event) : null;
    }),
    disabled: _ctx.disabled ? '' : undefined
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: _ctx.flip ? "translate(".concat(-_ctx.tooltipOffset, "px)") : "translate(".concat(_ctx.tooltipOffset, "px)"),
          right: _ctx.flip ? '0px' : undefined,
          left: _ctx.flip ? 'auto' : undefined,
          '--tooltip-margin': "max(calc(var(--height, 6px) + 12px), calc(var(--height, 6px) * ".concat(_ctx.applyHandleHoverClass ? 'var(--handle-scale, 1.35)' : '1.35', "))"),
          bottom: _ctx.flipTooltip ? 'unset' : 'var(--tooltip-margin)',
          top: _ctx.flipTooltip ? 'var(--tooltip-margin)' : 'unset'
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 5), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip && !_ctx.disabled && (_ctx.hovering || _ctx.holding) || _ctx.alwaysShowTooltip]])];
    }),
    _: 1
  }), _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "track-filled",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: _ctx.filledWidth + 'px',
      right: _ctx.flip ? '0px' : undefined,
      left: _ctx.flip ? 'auto' : undefined
    })
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass && !_ctx.disabled
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_defineProperty({}, _ctx.flip ? 'right' : 'left', _ctx.filledWidth - _ctx.height * 1.35 / 2 + 'px'))
  }, null, 6)], 44, _hoisted_1)) : _ctx.orientation == 'vertical' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "vertical",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    class: "vue3-slider vertical",
    ref: "slider",
    tabindex: _ctx.disabled ? undefined : 0,
    onTouchstart: _cache[5] || (_cache[5] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMousedown: _cache[6] || (_cache[6] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMouseenter: _cache[7] || (_cache[7] = function ($event) {
      return !_ctx.disabled ? _ctx.hovering = true : null;
    }),
    onMouseleave: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[9] || (_cache[9] = function ($event) {
      return !_ctx.disabled ? _ctx.handleKeydown($event) : null;
    }),
    disabled: _ctx.disabled ? '' : undefined
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: _ctx.flip ? "translateY(".concat(_ctx.tooltipOffset, "px)") : "translateY(".concat(-_ctx.tooltipOffset, "px)"),
          top: _ctx.flip ? '0px' : undefined,
          bottom: _ctx.flip ? 'auto' : undefined,
          '--tooltip-margin': "max(calc(var(--height, 6px) + 14px), calc(var(--height, 6px) * ".concat(_ctx.applyHandleHoverClass ? 'var(--handle-scale, 1.35)' : '1.35', "))"),
          left: _ctx.flipTooltip ? 'unset' : 'var(--tooltip-margin)',
          right: _ctx.flipTooltip ? 'var(--tooltip-margin)' : 'unset'
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 5), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip && !_ctx.disabled && (_ctx.hovering || _ctx.holding) || _ctx.alwaysShowTooltip]])];
    }),
    _: 1
  }), _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "track-filled",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      height: _ctx.filledWidth + 'px',
      top: _ctx.flip ? '0px' : undefined,
      bottom: _ctx.flip ? 'auto' : undefined
    })
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass && !_ctx.disabled
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_defineProperty({}, _ctx.flip ? 'top' : 'bottom', _ctx.filledWidth - _ctx.height * 1.35 / 2 + 'px'))
  }, null, 6)], 44, _hoisted_3)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "circular",
    class: "vue3-slider circular",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    ref: "slider",
    tabindex: _ctx.disabled ? undefined : 0,
    onTouchstart: _cache[10] || (_cache[10] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMousedown: _cache[11] || (_cache[11] = function ($event) {
      return !_ctx.disabled ? _ctx.clickHandler($event) : null;
    }),
    onMouseenter: _cache[12] || (_cache[12] = function ($event) {
      return !_ctx.disabled ? _ctx.hovering = true : null;
    }),
    onMouseleave: _cache[13] || (_cache[13] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[14] || (_cache[14] = function ($event) {
      return !_ctx.disabled ? _ctx.handleKeydown($event) : null;
    }),
    disabled: _ctx.disabled ? '' : undefined
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_6, [_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("circle", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([{
      transform: "rotate(".concat(-90 + _ctx.circleOffset, "deg) ").concat(_ctx.flip ? 'scaleY(-1)' : '')
    }, {
      "transform-origin": "center"
    }]),
    stroke: "var(--color)",
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    "stroke-width": "var(--height)",
    r: "50%",
    cx: "50",
    cy: "50",
    "stroke-dasharray": _ctx.circumference,
    "stroke-dashoffset": _ctx.strokeOffset
  }, null, 12, _hoisted_8)])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "handle-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      transform: "rotate(".concat(_ctx.circleOffset, "deg)")
    })
  }, _hoisted_10, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "handle-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      transform: "rotate(".concat(_ctx.sliderValueDegrees + _ctx.circleOffset, "deg)")
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass && !_ctx.disabled
    }])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: "rotate(".concat(-_ctx.sliderValueDegrees - _ctx.circleOffset, "deg)"),
          '--tooltip-margin': "calc(max(calc(".concat(_ctx.tooltipOffset, "px + 34px), calc(").concat(_ctx.tooltipOffset, "px + var(--height) * ").concat(_ctx.applyHandleHoverClass ? 'calc(var(--handle-scale, 1.35) * 0.9)' : 1.35, ")) * -1)"),
          top: _ctx.flipTooltip ? 'calc(var(--tooltip-margin) * -0.7)' : 'var(--tooltip-margin)'
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 5), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip && !_ctx.disabled && (_ctx.hovering || _ctx.holding) || _ctx.alwaysShowTooltip]])];
    }),
    _: 1
  })], 4)], 44, _hoisted_5));
}
// CONCATENATED MODULE: ./src/vue3-slider.vue?vue&type=template&id=c1be7308

// CONCATENATED MODULE: ./src/utils/validateLength.ts
var lengthRegex = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%+)/i;
/* harmony default export */ var validateLength = (function (val) {
  var result = val.match(lengthRegex);
  return result !== null && result.length <= 3;
});
// CONCATENATED MODULE: ./src/props.ts

/* harmony default export */ var src_props = ({
  width: {
    type: String,
    default: "100%",
    validator: validateLength
  },
  height: {
    type: Number,
    default: 6
  },
  handleScale: {
    type: Number,
    default: 1.35
  },
  alwaysShowHandle: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: "#FB2727"
  },
  trackColor: {
    type: String,
    default: "#f1f6f828"
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1,
    validator: function validator(val) {
      if (val !== 0) {
        return true;
      } else {
        console.error("[Vue3Slider] Error: Step cannot be 0");
        return false;
      }
    }
  },
  limit: {
    type: Number,
    default: undefined,
    validator: function validator(val) {
      return val === undefined || typeof val === "number";
    }
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  tooltipText: {
    type: String,
    default: "%v",
    validator: function validator(val) {
      if (!val.includes("%v")) {
        console.error("[Vue3Slider] Error: tooltip text must contain %v");
        return false;
      }

      return true;
    }
  },
  tooltipColor: {
    type: String,
    default: "#FFFFFF"
  },
  tooltipTextColor: {
    type: String,
    default: "#000000"
  },
  formatTooltip: {
    validator: function validator(val) {
      if (typeof val !== "function") {
        console.error("[Vue3Slider] Error: formatTooltip must be a function");
        return false;
      } else if (typeof val(0) !== "string") {
        console.error("[Vue3Slider] Error: formatTooltip must return a string");
        return false;
      }

      return true;
    }
  },
  alwaysShowTooltip: {
    type: Boolean,
    default: false
  },
  flipTooltip: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: "horizontal",
    validator: function validator(val) {
      return val === "horizontal" || val === "vertical" || val === "circular";
    }
  },
  modelValue: {
    type: Number,
    default: 0,
    required: true
  },
  repeat: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  flip: {
    type: Boolean,
    default: false
  },
  circleOffset: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0 && val <= 360;
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
// CONCATENATED MODULE: ./src/store.ts

function useStore(props) {
  // slider dom ref
  var slider = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(document.createElement("div")); // unrounded raw slider value

  var modelValueUnrounded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
  if (props.min !== 0) modelValueUnrounded.value -= props.min;
  var formattedSliderValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var sliderWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var filledWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var pixelsPerStep = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(1);
  var sliderRange = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    var range = 0;

    if (props.min < 0) {
      range = props.max + Math.abs(props.min);
    } else {
      range = props.max - props.min;
    }

    return range;
  });
  var sliderValueDegrees = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    if (props.orientation !== "circular") return 0;
    var degrees = modelValueUnrounded.value / (sliderRange.value / 360);
    return props.flip ? -degrees : degrees;
  });
  var holding = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  var store = {
    slider: slider,
    modelValueUnrounded: modelValueUnrounded,
    formattedSliderValue: formattedSliderValue,
    filledWidth: filledWidth,
    pixelsPerStep: pixelsPerStep,
    sliderRange: sliderRange,
    sliderValueDegrees: sliderValueDegrees,
    sliderWidth: sliderWidth,
    holding: holding
  };
  return store;
}
// CONCATENATED MODULE: ./src/hooks/observers.ts
 // filled width (observers slider element)

function useFilledWidthObserver(store, props) {
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
    store.filledWidth.value = getNewFilledWidth(store, props);
  });
  var observer = new ResizeObserver(function (entries) {
    store.filledWidth.value = getNewFilledWidth(store, props);
    store.sliderWidth.value = store.slider.value ? props.orientation === "vertical" ? store.slider.value.clientHeight : store.slider.value.clientWidth : 0;

    if (store.slider.value !== entries[0].target && store.slider.value instanceof Element) {
      observer.unobserve(entries[0].target);
      observer.observe(store.slider.value);
    }
  });
  if (store.slider.value) observer.observe(store.slider.value);
}

function getNewFilledWidth(store, props) {
  var slider = store.slider;
  if (!slider.value) return 0;
  var sliderWidth = props.orientation === "vertical" ? slider.value.clientHeight : slider.value.clientWidth;
  store.pixelsPerStep.value = sliderWidth / store.sliderRange.value; // clamp value between 0 and the maximum width of the slider

  var clamped = Math.max(Math.min(store.modelValueUnrounded.value * store.pixelsPerStep.value, sliderWidth), 0);
  return clamped;
} // tooltip


function useTooltipObserver(tooltip, tooltipWidth) {
  var observer = new ResizeObserver(function (entries) {
    if (tooltip.value) {
      tooltipWidth.value = tooltip.value.clientWidth;

      if (tooltip.value !== entries[0].target) {
        observer.unobserve(entries[0].target);
        if (tooltip.value) observer.observe(tooltip.value);
      }
    }
  });
  if (tooltip.value) observer.observe(tooltip.value);
}
// CONCATENATED MODULE: ./src/hooks/useKeyboardControls.ts
/* harmony default export */ var useKeyboardControls = (function (store, props, updateModelValue) {
  var calculateValueFromDiff = function calculateValueFromDiff(diff) {
    var newVal = store.modelValueUnrounded.value + diff; // clamp between 0 and sliderRange (raw max value)

    newVal = Math.min(store.sliderRange.value, Math.max(0, newVal)); // apply limit

    if (props.limit !== undefined) newVal = Math.min(newVal, props.limit + Math.abs(props.min));
    updateModelValue(newVal);
  };

  var handleKeydown = function handleKeydown(e) {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        calculateValueFromDiff(props.step);
        break;

      case "ArrowLeft":
      case "ArrowDown":
        calculateValueFromDiff(-props.step);
        break;

      default:
        break;
    }
  };

  return {
    handleKeydown: handleKeydown
  };
});
// CONCATENATED MODULE: ./src/hooks/useModelValue.ts

/* harmony default export */ var useModelValue = (function (store, props, emit) {
  // watchers to update slider value if modelValue is changed from outside component
  var modelValueRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
    return modelValueRef.value = props.modelValue;
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(modelValueRef, function (val) {
    if (store.formattedSliderValue.value !== val) {
      // apply limit
      if (props.limit !== undefined) val = Math.min(val, props.limit);
      var newValue = 0;

      if (props.min < 0) {
        newValue = val + Math.abs(props.min);
      } else {
        newValue = val - props.min;
      }

      newValue = Math.min(newValue, store.sliderRange.value);
      updateModelValue(newValue);
    }
  }); // format model value to fit within min and max defined in props

  var formatModelValue = function formatModelValue(val) {
    var step = props.step;
    var roundedVal = 0; // round number to the nearest multiple of step (round up or down)

    if (val > 0) {
      roundedVal = Math.round(val / step) * step;
    } else {
      roundedVal = 0;
    } // get between min and max


    roundedVal = roundedVal + props.min; // apply limit

    if (props.limit !== undefined) roundedVal = Math.min(roundedVal, props.limit);
    return roundedVal;
  }; // update model value and related refs


  var updateModelValue = function updateModelValue(val) {
    store.formattedSliderValue.value = formatModelValue(val); // make slider stick to nearest multiple of step

    if (props.sticky) {
      store.modelValueUnrounded.value = store.formattedSliderValue.value - props.min;
    } else {
      store.modelValueUnrounded.value = val;
    }

    emit("update:modelValue", store.formattedSliderValue.value);
    emit("change", store.formattedSliderValue.value);
  };

  return {
    formatModelValue: formatModelValue,
    updateModelValue: updateModelValue,
    modelValueRef: modelValueRef
  };
});
// CONCATENATED MODULE: ./src/hooks/useDragHandler.ts
/* harmony default export */ var useDragHandler = (function (store, props, emit, updateModelValue) {
  var previousSliderValue = store.formattedSliderValue.value;

  var calcSliderValue = function calcSliderValue(mouseX, mouseY, dragging) {
    var rect = store.slider.value.getBoundingClientRect();
    var value = 0;

    if (props.orientation === "horizontal") {
      value = (mouseX - rect.x) / store.pixelsPerStep.value;

      if (props.flip) {
        value = store.sliderRange.value - value;
      }
    } else if (props.orientation === "vertical") {
      value = (rect.y + rect.height - mouseY) / store.pixelsPerStep.value;

      if (props.flip) {
        value = store.sliderRange.value - value;
      }
    } else {
      var sliderX = mouseX - rect.x;
      var sliderY = mouseY - rect.y;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var gradient = (sliderY - centerY) / (sliderX - centerX);
      var angle = Math.atan(gradient) * 180 / Math.PI; // correct angle in circle quadrants
      // right

      if (sliderX >= centerX) {
        // top
        if (sliderY < centerY) {
          if (Math.ceil(angle) === 180) {
            angle = 0;
          } else {
            angle = 90 - Math.abs(angle);
          }
        } else {
          // bottom
          angle += 90;
        } // left

      } else {
        // top
        if (sliderY < centerY) {
          angle = 270 + angle;
        } else {
          // bottom
          angle = 270 + angle;
        }
      }

      var valPerDeg = store.sliderRange.value / 360;
      value = angle * valPerDeg - props.circleOffset * valPerDeg;

      if (value < 0) {
        value += store.sliderRange.value;
      }

      if (props.flip) {
        value = store.sliderRange.value - value;
      } // stop value from going to 0 when at max


      if (!props.repeat && dragging) {
        var diff = Math.abs(value - previousSliderValue);

        if (diff > valPerDeg * 30) {
          value = previousSliderValue;
        }
      }
    }

    value = Math.min(store.sliderRange.value, Math.max(value, 0)); // apply limit

    if (props.limit !== undefined) value = Math.min(value, props.limit + Math.abs(props.min));
    previousSliderValue = value;
    return value;
  }; // dragging handlers
  // ------------------------------------------------------------------------


  var draggingHandler = function draggingHandler(e) {
    // check what event has been triggered
    var tap;

    if (e.type === "mousemove") {
      e = e;
      tap = e;
    } else {
      e = e;
      if (e.touches.length > 1) return;
      tap = e.touches[0];
    }

    if (store.holding.value) {
      var rect = store.slider.value.getBoundingClientRect();
      var tapPosInsideSlider = props.orientation === "vertical" ? rect.y + rect.height - tap.pageY : tap.pageX - rect.x;
      tapPosInsideSlider = Math.min(store.sliderWidth.value, Math.max(tapPosInsideSlider, 0));
      updateModelValue(calcSliderValue(tap.pageX - window.scrollX, tap.pageY - window.scrollY, true));
      emit("dragging", store.formattedSliderValue.value, tap);
    }
  };

  var releaseDragHandler = function releaseDragHandler(e) {
    if (store.holding.value) store.holding.value = false;

    if (e.type === "mouseup") {
      window.removeEventListener("mouseup", releaseDragHandler);
      window.removeEventListener("mousemove", draggingHandler);
    } else {
      window.removeEventListener("touchend", releaseDragHandler);
      window.removeEventListener("touchmove", draggingHandler);
    }

    emit("drag-end", store.formattedSliderValue.value, e);
  }; // ------------------------------------------------------------------------


  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    store.holding.value = true;
    emit("drag-start", store.formattedSliderValue.value, e);

    if (e.type === "touchstart") {
      e = e;
      if (e.touches.length > 1) return;
      var t = e.touches[0]; // do initial slider calculation

      updateModelValue(calcSliderValue(t.pageX - window.scrollX, t.pageY - window.scrollY, false)); // add event listeners

      window.addEventListener("touchend", releaseDragHandler);
      window.addEventListener("touchmove", draggingHandler);
    } else {
      e = e; // do initial slider calculation

      updateModelValue(calcSliderValue(e.pageX - window.scrollX, e.pageY - window.scrollY, false)); // add event listeners

      window.addEventListener("mouseup", releaseDragHandler);
      window.addEventListener("mousemove", draggingHandler);
    }
  };

  return {
    clickHandler: clickHandler
  };
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/vue3-slider.vue?vue&type=script&lang=ts







/* harmony default export */ var vue3_slidervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "vue3-slider",
  props: src_props,
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    // error checking
    if (props.modelValue < props.min || props.modelValue > props.max) {
      console.error("[Vue3Slider] Error: value exceeds limits of slider");
    } // validate min and max


    if (props.max <= props.min) {
      console.error("[Vue3Slider] Error: Max value cannot be less than or equal to the min value. This will cause unexpected errors to occur, please fix.");
    } // setup store values


    var store = useStore(props); // setup hooks

    var _useModelValue = useModelValue(store, props, emit),
        updateModelValue = _useModelValue.updateModelValue,
        formatModelValue = _useModelValue.formatModelValue;

    var _useKeyBoardControls = useKeyboardControls(store, props, updateModelValue),
        handleKeydown = _useKeyBoardControls.handleKeydown;

    var _useDragHandler = useDragHandler(store, props, emit, updateModelValue),
        clickHandler = _useDragHandler.clickHandler; // Apply hover styles to handle


    var hovering = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var applyHandleHoverClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (store.holding.value) {
        return true;
      } else {
        return props.alwaysShowHandle || hovering.value;
      }
    }); // tooltip setup

    var tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(); // replace %v with sliders value in tooltip text

    var tooltipText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.tooltip) return "";
      var stringValue = ""; // if format function is provided then use that
      // else just convert raw value to string

      if (props.formatTooltip !== null && typeof props.formatTooltip === "function") {
        stringValue = props.formatTooltip(store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value));
      } else {
        stringValue = (store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value)).toString();
      }

      return props.tooltipText.replace("%v", stringValue);
    }); // watch tooltip width

    var tooltipWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0); // calculate tooltip offset

    var tooltipOffset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.tooltip) return 0;
      var width = tooltipWidth.value; // estimate width if it cant be found

      if (props.orientation !== "horizontal") {
        var _tooltip$value;

        width = (_tooltip$value = tooltip.value) === null || _tooltip$value === void 0 ? void 0 : _tooltip$value.clientHeight;

        if (!width) {
          width = 20;
        }

        if (props.orientation !== "vertical") {
          return width;
        }
      } else {
        if (!width) {
          width = 14 + store.formattedSliderValue.value.toString().length * 9;
        } else {
          width += props.height / 3;
        }
      }

      return store.filledWidth.value - width / 2;
    }); // calculate stroke offset for circular slider

    var circumference = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!store.slider.value || props.orientation !== "circular") return 1;
      return 2 * Math.PI * (store.sliderWidth.value / 2);
    });
    var strokeOffset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.orientation !== "circular") return 0;
      return (store.sliderRange.value - store.modelValueUnrounded.value) / store.sliderRange.value * circumference.value;
    });
    var vars = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        "--width": props.width,
        "--height": props.height + "px",
        "--color": props.color,
        "--track-color": props.trackColor,
        "--tooltip-color": props.tooltipColor,
        "--tooltip-text-color": props.tooltipTextColor,
        "--handle-scale": props.handleScale
      };
    }); // start observers when component loads

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      useFilledWidthObserver(store, props);
      useTooltipObserver(tooltip, tooltipWidth);
    });
    return {
      filledWidth: store.filledWidth,
      slider: store.slider,
      holding: store.holding,
      flip: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.flip;
      }),
      clickHandler: clickHandler,
      handleKeydown: handleKeydown,
      applyHandleHoverClass: applyHandleHoverClass,
      hovering: hovering,
      showTooltip: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.tooltip;
      }),
      alwaysShowTooltip: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.alwaysShowTooltip;
      }),
      tooltip: tooltip,
      tooltipText: tooltipText,
      tooltipOffset: tooltipOffset,
      vars: vars,
      circumference: circumference,
      strokeOffset: strokeOffset,
      circleOffset: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.circleOffset;
      }),
      sliderValueDegrees: store.sliderValueDegrees
    };
  }
}));
// CONCATENATED MODULE: ./src/vue3-slider.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/vue3-slider.vue?vue&type=style&index=0&id=c1be7308&lang=scss
var vue3_slidervue_type_style_index_0_id_c1be7308_lang_scss = __nested_webpack_require_21838__("e503");

// CONCATENATED MODULE: ./src/vue3-slider.vue





vue3_slidervue_type_script_lang_ts.render = render

/* harmony default export */ var vue3_slider = (vue3_slidervue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/entry.esm.ts
// Import vue component
 // Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

/* harmony default export */ var entry_esm = (/*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = vue3_slider; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('Vue3Slider', installable);
  };

  return installable;
})()); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
// CONCATENATED MODULE: ./src/entry.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// iife/cjs usage extends esm default export - so import it all
 // Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(entry_esm_namespaceObject).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') entry_esm[exportName] = exported;
});
/* harmony default export */ var entry = (entry_esm);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (entry);



/***/ })

/******/ });
//# sourceMappingURL=vue3-slider.common.js.map

/***/ })

}]);