"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_foot=require("./../components/foot.js"),_foot2=_interopRequireDefault(_foot),Accomplish=function(e){function t(){var e,o,r,n;_classCallCheck(this,t);for(var s=arguments.length,a=Array(s),i=0;i<s;i++)a[i]=arguments[i];return o=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.config={navigationBarTitleText:"认证结果"},r.components={foot:_foot2.default},r.data={message:"",icon:"success"},r.methods={},r.events={},n=o,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.message=e.message,"200"!==e.status?this.icon="warn":this.icon="success"}},{key:"onShareAppMessage",value:function(e){return this.$parent.onShareAppMessage("您有一张会员卡待领取")}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Accomplish,"pages/accomplish"));