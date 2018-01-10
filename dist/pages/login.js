"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_foot=require("./../components/foot.js"),_foot2=_interopRequireDefault(_foot),_config=require("./../config.js"),Login=function(e){function t(){var e,o,n,r;_classCallCheck(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return o=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"款台登录"},n.components={foot:_foot2.default},n.data={},n.computed={},n.methods={formSubmit:function(e){if(!e.detail.value.password&&!e.detail.value.account)return _wepy2.default.showModal({title:"提示",showCancel:!1,content:"请检查登录帐号或密码",success:function(e){e.confirm&&console.log("用户点击确定")}});var t=require("./../md5.js");_wepy2.default.showLoading({title:"正在登录",mask:!0}),_wepy2.default.request({url:_config.service.loginSmall,method:"POST",data:{account:e.detail.value.account,password:t.hexMD5(e.detail.value.password+e.detail.value.account)},success:function(e){200!==e.data.status?_wepy2.default.showModal({title:"提示",showCancel:!1,content:e.data.message,success:function(e){e.confirm&&console.log("用户点击确定")}}):_wepy2.default.navigateTo({url:"order"}),_wepy2.default.hideLoading()}})}},n.events={},r=o,_possibleConstructorReturn(n,r)}return _inherits(t,e),_createClass(t,[{key:"onShareAppMessage",value:function(e){return this.$parent.onShareAppMessage("您有一张会员卡待领取")}},{key:"onLoad",value:function(){}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Login,"pages/login"));