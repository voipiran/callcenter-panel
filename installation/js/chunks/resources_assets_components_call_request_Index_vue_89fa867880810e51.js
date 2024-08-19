"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_components_call_request_Index_vue"],{

/***/ "./node_modules/@chenfengyuan/vue-number-input/dist/vue-number-input.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@chenfengyuan/vue-number-input/dist/vue-number-input.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/*! vue-number-input v2.0.1 | (c) 2018-present Chen Fengyuan | MIT */


const isNaN$1 = Number.isNaN || window.isNaN;
const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
const normalizeDecimalNumber = (value, times = 100000000000) => (REGEXP_DECIMALS.test(String(value)) ? (Math.round(value * times) / times) : value);
var script = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'VueNumberInput',
    props: {
        attrs: {
            type: Object,
            default: undefined,
        },
        center: Boolean,
        controls: Boolean,
        disabled: Boolean,
        inputtable: {
            type: Boolean,
            default: true,
        },
        inline: Boolean,
        max: {
            type: Number,
            default: Infinity,
        },
        min: {
            type: Number,
            default: -Infinity,
        },
        name: {
            type: String,
            default: undefined,
        },
        placeholder: {
            type: String,
            default: undefined,
        },
        readonly: Boolean,
        rounded: Boolean,
        size: {
            type: String,
            default: undefined,
        },
        step: {
            type: Number,
            default: 1,
        },
        modelValue: {
            type: Number,
            default: NaN,
        },
    },
    emits: [
        'update:modelValue',
    ],
    data() {
        return {
            value: NaN,
        };
    },
    computed: {
        /**
         * Indicate if the value is increasable.
         * @returns {boolean} Return `true` if it is decreasable, else `false`.
         */
        increasable() {
            return isNaN$1(this.value) || this.value < this.max;
        },
        /**
         * Indicate if the value is decreasable.
         * @returns {boolean} Return `true` if it is decreasable, else `false`.
         */
        decreasable() {
            return isNaN$1(this.value) || this.value > this.min;
        },
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(newValue, oldValue) {
                if (
                // Avoid triggering change event when created
                !(isNaN$1(newValue) && typeof oldValue === 'undefined')
                    // Avoid infinite loop
                    && newValue !== this.value) {
                    this.setValue(newValue);
                }
            },
        },
    },
    methods: {
        isNaN: isNaN$1,
        /**
         * Change event handler.
         * @param {string} value - The new value.
         */
        change(event) {
            this.setValue(event.target.value);
        },
        /**
         * Paste event handler.
         * @param {Event} event - Event object.
         */
        paste(event) {
            const clipboardData = event.clipboardData || window.clipboardData;
            if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
                event.preventDefault();
            }
        },
        /**
         * Decrease the value.
         */
        decrease() {
            if (this.decreasable) {
                let { value } = this;
                if (isNaN$1(value)) {
                    value = 0;
                }
                this.setValue(normalizeDecimalNumber(value - this.step));
            }
        },
        /**
         * Increase the value.
         */
        increase() {
            if (this.increasable) {
                let { value } = this;
                if (isNaN$1(value)) {
                    value = 0;
                }
                this.setValue(normalizeDecimalNumber(value + this.step));
            }
        },
        /**
         * Set new value and dispatch change event.
         * @param {number} value - The new value to set.
         */
        setValue(value) {
            const oldValue = this.value;
            let newValue = typeof value !== 'number' ? parseFloat(value) : value;
            if (!isNaN$1(newValue)) {
                if (this.min <= this.max) {
                    newValue = Math.min(this.max, Math.max(this.min, newValue));
                }
                if (this.rounded) {
                    newValue = Math.round(newValue);
                }
            }
            this.value = newValue;
            if (newValue === oldValue) {
                // Force to override the number in the input box (#13).
                this.$refs.input.value = String(newValue);
            }
            this.$emit('update:modelValue', newValue, oldValue);
        },
    },
});

const _hoisted_1 = ["disabled"];
const _hoisted_2 = ["name", "value", "min", "max", "step", "readonly", "disabled", "placeholder"];
const _hoisted_3 = ["disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vue-number-input", {
      'vue-number-input--inline': _ctx.inline,
      'vue-number-input--center': _ctx.center,
      'vue-number-input--controls': _ctx.controls,
      [`vue-number-input--${_ctx.size}`]: _ctx.size,
    }])
  }, [
    (_ctx.controls)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          class: "vue-number-input__button vue-number-input__button--minus",
          type: "button",
          tabindex: "-1",
          disabled: _ctx.disabled || _ctx.readonly || !_ctx.decreasable,
          onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.decrease && _ctx.decrease(...args)))
        }, null, 8 /* PROPS */, _hoisted_1))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      ref: "input",
      class: "vue-number-input__input"
    }, _ctx.attrs, {
      type: "number",
      name: _ctx.name,
      value: isNaN(_ctx.value) ? '' : _ctx.value,
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      readonly: _ctx.readonly || !_ctx.inputtable,
      disabled: _ctx.disabled || (!_ctx.decreasable && !_ctx.increasable),
      placeholder: _ctx.placeholder,
      autocomplete: "off",
      onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.change && _ctx.change(...args))),
      onPaste: _cache[2] || (_cache[2] = (...args) => (_ctx.paste && _ctx.paste(...args)))
    }), null, 16 /* FULL_PROPS */, _hoisted_2),
    (_ctx.controls)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          class: "vue-number-input__button vue-number-input__button--plus",
          type: "button",
          tabindex: "-1",
          disabled: _ctx.disabled || _ctx.readonly || !_ctx.increasable,
          onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.increase && _ctx.increase(...args)))
        }, null, 8 /* PROPS */, _hoisted_3))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 2 /* CLASS */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".vue-number-input[data-v-188efc8c]{display:block;font-size:0;max-width:100%;overflow:hidden;position:relative}.vue-number-input__button[data-v-188efc8c]{background-color:#fff;border:0;border-radius:.25rem;bottom:1px;position:absolute;top:1px;width:2.5rem;z-index:1}.vue-number-input__button[data-v-188efc8c]:focus{outline:none}.vue-number-input__button[data-v-188efc8c]:hover:after,.vue-number-input__button[data-v-188efc8c]:hover:before{background-color:#0074d9}.vue-number-input__button[data-v-188efc8c]:disabled{opacity:.65}.vue-number-input__button[data-v-188efc8c]:disabled:after,.vue-number-input__button[data-v-188efc8c]:disabled:before{background-color:#ddd}.vue-number-input__button[data-v-188efc8c]:after,.vue-number-input__button[data-v-188efc8c]:before{background-color:#111;content:\"\";left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:background-color .15s}.vue-number-input__button[data-v-188efc8c]:before{height:1px;width:50%}.vue-number-input__button[data-v-188efc8c]:after{height:50%;width:1px}.vue-number-input__button--minus[data-v-188efc8c]{border-bottom-right-radius:0;border-right:1px solid #ddd;border-top-right-radius:0;left:1px}.vue-number-input__button--minus[data-v-188efc8c]:after{visibility:hidden}.vue-number-input__button--plus[data-v-188efc8c]{border-bottom-left-radius:0;border-left:1px solid #ddd;border-top-left-radius:0;right:1px}.vue-number-input__input[data-v-188efc8c]{-moz-appearance:textfield;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;display:block;font-size:1rem;line-height:1.5;max-width:100%;min-height:1.5rem;min-width:3rem;padding:.4375rem .875rem;transition:border-color .15s;width:100%}.vue-number-input__input[data-v-188efc8c]::-webkit-inner-spin-button,.vue-number-input__input[data-v-188efc8c]::-webkit-outer-spin-button{-webkit-appearance:none}.vue-number-input__input[data-v-188efc8c]:focus{border-color:#0074d9;outline:none}.vue-number-input__input[data-v-188efc8c]:disabled,.vue-number-input__input[readonly][data-v-188efc8c]{background-color:#f8f8f8}.vue-number-input--inline[data-v-188efc8c]{display:inline-block}.vue-number-input--inline>input[data-v-188efc8c]{display:inline-block;width:12.5rem}.vue-number-input--center>input[data-v-188efc8c]{text-align:center}.vue-number-input--controls>input[data-v-188efc8c]{padding-left:3.375rem;padding-right:3.375rem}.vue-number-input--small>input[data-v-188efc8c]{border-radius:.1875rem;font-size:.875rem;padding:.25rem .5rem}.vue-number-input--small.vue-number-input--inline>input[data-v-188efc8c]{width:10rem}.vue-number-input--small.vue-number-input--controls>button[data-v-188efc8c]{width:2rem}.vue-number-input--small.vue-number-input--controls>input[data-v-188efc8c]{padding-left:2.5rem;padding-right:2.5rem}.vue-number-input--large>input[data-v-188efc8c]{border-radius:.3125rem;font-size:1.25rem;padding:.5rem 1rem}.vue-number-input--large.vue-number-input--inline>input[data-v-188efc8c]{width:15rem}.vue-number-input--large.vue-number-input--controls>button[data-v-188efc8c]{width:3rem}.vue-number-input--large.vue-number-input--controls>input[data-v-188efc8c]{padding-left:4rem;padding-right:4rem}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-188efc8c";




/***/ }),

/***/ "./node_modules/@vueform/toggle/dist/toggle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vueform/toggle/dist/toggle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var b={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(a,d){const n=function(a,d,n){const{value:t,modelValue:u,falseValue:i,trueValue:c,disabled:r}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),o=u&&void 0!==u.value?u:t,s=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>o.value===c.value)),g=e=>{d.emit("input",e),d.emit("update:modelValue",e),d.emit("change",e)},b=()=>{g(c.value)},f=()=>{g(i.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&f(),-1!==[!0,1,"1","on"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&b(),{externalValue:o,checked:s,update:g,check:b,uncheck:f,handleInput:e=>{g(e.target.checked?c.value:i.value)},handleClick:()=>{r.value||(s.value?f():b())}}}(a,d),t=function(a,d,n){const{trueValue:t,falseValue:u,onLabel:i,offLabel:c}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),r=n.checked,o=n.update;return{label:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{let e=r.value?i.value:c.value;return e||(e="&nbsp;"),e})),toggle:()=>{o(r.value?u.value:t.value)},on:()=>{o(t.value)},off:()=>{o(u.value)}}}(a,0,{checked:n.checked,update:n.update}),u=function(a,d,n){const t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),u=t.disabled,i=n.checked,c=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...t.classes.value})));return{classList:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({container:c.value.container,toggle:[c.value.toggle,u.value?i.value?c.value.toggleOnDisabled:c.value.toggleOffDisabled:i.value?c.value.toggleOn:c.value.toggleOff],handle:[c.value.handle,u.value?i.value?c.value.handleOnDisabled:c.value.handleOffDisabled:i.value?c.value.handleOn:c.value.handleOff],label:c.value.label})))}}(a,0,{checked:n.checked}),i=function(l,a,d){const{disabled:n}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(l),t=d.check,u=d.uncheck,i=d.checked;return{handleSpace:()=>{n.value||(i.value?u():t())}}}(a,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...u,...t,...i}}};const f=["tabindex","aria-checked","aria-describedby","aria-labelledby"],h=["id","name","value","checked","disabled"],v=["innerHTML"],p=["checked"];b.render=function(e,l,b,k,y,O){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div",(0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({class:e.classList.container,tabindex:b.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":b.describedby,"aria-labelledby":b.labelledby,role:"switch"},b.aria,{onKeypress:l[1]||(l[1]=(0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(((...l)=>e.handleSpace&&e.handleSpace(...l)),["prevent"]),["space"]))}),[(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input",{type:"checkbox",id:b.id,name:b.name,value:b.trueValue,checked:e.checked,disabled:b.disabled},null,8,h),[[vue__WEBPACK_IMPORTED_MODULE_0__.vShow,!1]]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.toggle),onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.handle)},null,2),(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(e.$slots,"label",{checked:e.checked,classList:e.classList},(()=>[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.label),innerHTML:e.label},null,10,v)])),b.required?((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,p)):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if",!0)],2)],16,f)},b.__file="src/Toggle.vue";


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chenfengyuan_vue_number_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-number-input */ "./node_modules/@chenfengyuan/vue-number-input/dist/vue-number-input.esm.js");
/* harmony import */ var _vueform_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/toggle */ "./node_modules/@vueform/toggle/dist/toggle.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import input number 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "callrequest",
  data: function data() {
    var _ref;

    return _ref = {
      isLoading: false,
      isLoadingSubmit: false,
      enable: null,
      trunk_name: null,
      dial_logging: null,
      outbound_prefix: null,
      callerid_name: null
    }, _defineProperty(_ref, "dial_logging", null), _defineProperty(_ref, "callerid_number", null), _defineProperty(_ref, "modalGuide", false), _ref;
  },
  methods: {
    // submit edit and create
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(!_this.outbound_prefix || !_this.trunk_name || !_this.callerid_name || !_this.callerid_number)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _this.$notify({
                  text: _this.$t('GENERAL.FeildIsRequired'),
                  type: 'warn'
                }));

              case 3:
                if (!_this.isLoadingSubmit) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _this.isLoadingSubmit = true;
                _context.next = 8;
                return _this.$axios({
                  url: '/call-request/action',
                  data: {
                    method: 'submitUpdate',
                    enable: _this.enable,
                    outbound_prefix: _this.outbound_prefix,
                    trunk_name: _this.trunk_name,
                    callerid_name: _this.callerid_name,
                    dial_logging: _this.dial_logging,
                    callerid_number: _this.callerid_number
                  }
                });

              case 8:
                _this.$notify({
                  text: _this.$t('GENERAL.NotifySubmitSuccess'),
                  type: 'success'
                });

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
                return _context.abrupt("return", _this.isLoadingSubmit = false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },

    /** load data for edit */
    getData: function getData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var req;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.isLoading = true;
                _context2.next = 4;
                return _this2.$axios({
                  url: '/call-request/action',
                  data: {
                    method: 'getData'
                  }
                });

              case 4:
                req = _context2.sent;
                _this2.enable = req.data.data.enable;
                _this2.outbound_prefix = req.data.data.outbound_prefix;
                _this2.trunk_name = req.data.data.trunk_name;
                _this2.callerid_name = req.data.data.callerid_name;
                _this2.dial_logging = req.data.data.dial_logging;
                _this2.callerid_number = req.data.data.callerid_number;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 16:
                _this2.isLoading = false;

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    }
  },
  components: {
    VueNumberInput: _chenfengyuan_vue_number_input__WEBPACK_IMPORTED_MODULE_0__["default"],
    Toggle: _vueform_toggle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.getData();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "callrequest"
};
var _hoisted_2 = {
  key: 0,
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "my-2"
};
var _hoisted_4 = {
  "class": "table-shadow"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_6 = {
  "class": "m-0"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "guide"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "row"
};
var _hoisted_9 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_10 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_11 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_12 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_13 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_14 = {
  "class": "col-12 col-md-4 mt-2"
};
var _hoisted_15 = {
  "class": "btns row my-5"
};
var _hoisted_16 = {
  "class": "col-6 col-md-4 mt-5"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  key: 1,
  "class": "loader-ctn d-flex align-items-center justify-content-center"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "loader-wait-request",
  style: {
    "width": "20px",
    "height": "20px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_19];
var _hoisted_21 = {
  key: 0,
  "class": "col-6 col-md-4 mt-5"
};
var _hoisted_22 = {
  "class": "modal-mask"
};
var _hoisted_23 = {
  "class": "modal-wrapper"
};
var _hoisted_24 = {
  "class": "modal-container"
};
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = {
  "class": "modal-footer-content mt-3"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 80 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "40",
  cy: "40",
  r: "40",
  fill: "#9EABCD"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "25.3137",
  y: "14",
  width: "57",
  height: "16",
  rx: "3",
  transform: "rotate(45 25.3137 14)",
  fill: "#2C335E"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "65.6188",
  y: "25.3135",
  width: "57",
  height: "16",
  rx: "3",
  transform: "rotate(135 65.6188 25.3135)",
  fill: "#2C335E"
})], -1
/* HOISTED */
);

var _hoisted_28 = [_hoisted_27];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_notifications = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notifications");

  var _component_Toggle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toggle");

  var _component_VueNumberInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueNumberInput");

  var _component_loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loader");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notifications, {
    position: "bottom left",
    duration: 5000
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.title')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.subTitle')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-light",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.modalGuide = true;
    })
  }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.GUIDE')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" enable "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.enable')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toggle, {
    modelValue: $data.enable,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.enable = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" trunk_name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.trunk_name')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.trunk_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.trunk_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" outbound_prefix "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.outbound_prefix')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueNumberInput, {
    modelValue: $data.outbound_prefix,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.outbound_prefix = $event;
    }),
    controls: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" callerid_name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.callerid_name')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.callerid_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.callerid_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  callerid_number "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.callerid_number')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueNumberInput, {
    modelValue: $data.callerid_number,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.callerid_number = $event;
    }),
    controls: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  dial_logging "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CallRequest.Index.dial_logging')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toggle, {
    modelValue: $data.dial_logging,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.dial_logging = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" btn action and file pond"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-submit",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.submit();
    })
  }, [!$data.isLoadingSubmit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('GENERAL.btnSave')), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loader "), $data.isLoadingSubmit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]),  false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" guide modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["d-none", {
      'd-block': $data.modalGuide
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-body-content",
    innerHTML: _ctx.$t('CallRequest.Index.InstallGuide')
  }, null, 8
  /* PROPS */
  , _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "close-dialog",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $data.modalGuide = false;
    })
  }, _hoisted_28)])])])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loader "), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loader, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/@vueform/toggle/themes/default.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/@vueform/toggle/themes/default.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toggle-container{display:inline-block}.toggle-container:focus{box-shadow:0 0 0 var(--toggle-ring-width,3px) var(--toggle-ring-color,rgba(16,185,129,.188));outline:none}.toggle{align-items:center;border:var(--toggle-border,.125rem) solid;border-radius:999px;box-sizing:content-box;cursor:pointer;display:flex;font-size:var(--toggle-font-size,.75rem);height:var(--toggle-height,1.25rem);line-height:1;position:relative;transition:all .3s;width:var(--toggle-width,3rem)}.toggle-on{background:var(--toggle-bg-on,#10b981);border-color:var(--toggle-border-on,#10b981);color:var(--toggle-text-on,#fff);justify-content:flex-start}.toggle-off{background:var(--toggle-bg-off,#e5e7eb);border-color:var(--toggle-border-off,#e5e7eb);color:var(--toggle-text-off,#374151);justify-content:flex-end}.toggle-on-disabled{background:var(--toggle-bg-on-disabled,#d1d5db);border-color:var(--toggle-border-on-disabled,#d1d5db);color:var(--toggle-text-on-disabled,#9ca3af);cursor:not-allowed;justify-content:flex-start}.toggle-off-disabled{background:var(--toggle-bg-off-disabled,#e5e7eb);border-color:var(--toggle-border-off-disabled,#e5e7eb);color:var(--toggle-text-off-disabled,#9ca3af);cursor:not-allowed;justify-content:flex-end}.toggle-handle{background:var(--toggle-handle-enabled,#fff);border-radius:50%;display:inline-block;height:var(--toggle-height,1.25rem);position:absolute;top:0;transition-duration:var(--toggle-duration,.15s);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:var(--toggle-height,1.25rem)}.toggle-handle-on{left:100%;transform:translateX(-100%)}.toggle-handle-off{left:0}.toggle-handle-on-disabled{background:var(--toggle-handle-disabled,#f3f4f6);left:100%;transform:translateX(-100%)}.toggle-handle-off-disabled{background:var(--toggle-handle-disabled,#f3f4f6);left:0}.toggle-label{box-sizing:border-box;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;width:calc(var(--toggle-width, 3.25rem) - var(--toggle-height, 1.25rem))}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vueform_toggle_themes_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/@vueform/toggle/themes/default.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/@vueform/toggle/themes/default.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vueform_toggle_themes_default_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#callrequest .input {\n  margin: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n#callrequest .input span {\n  padding: 0 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_21d86dd6_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_21d86dd6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_21d86dd6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/assets/components/call_request/Index.vue":
/*!************************************************************!*\
  !*** ./resources/assets/components/call_request/Index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_21d86dd6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=21d86dd6 */ "./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_21d86dd6_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss */ "./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss");
/* harmony import */ var _var_www_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_21d86dd6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/components/call_request/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6":
/*!******************************************************************************************!*\
  !*** ./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_21d86dd6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_21d86dd6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=21d86dd6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=template&id=21d86dd6");


/***/ }),

/***/ "./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_21d86dd6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/components/call_request/Index.vue?vue&type=style&index=0&id=21d86dd6&lang=scss");


/***/ })

}]);