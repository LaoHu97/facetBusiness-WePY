"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../config.js"),_foot=require("./../components/foot.js"),_foot2=_interopRequireDefault(_foot),Confirmp=function(e){function t(){var e,o,n,r;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"确认支付"},n.components={foot:_foot2.default},n.data={confirm:null},n.methods={submit:function(){_wepy2.default.showLoading({title:"支付中"}),_wepy2.default.request({url:_config.service.faceConfirmPay,header:{"content-type":"application/json"},data:{transId:this.confirm.transId},method:"POST",success:function(e){200!==e.data.status?_wepy2.default.showModal({title:"提示",showCancel:!1,content:e.data.message,success:function(e){e.confirm&&console.log("用户点击确定")}}):_wepy2.default.navigateTo({url:"accomplish?status=200&message=支付成功"}),_wepy2.default.hideLoading()},fail:function(e){console.log(e),_wepy2.default.hideLoading()}})}},n.events={},r=o,_possibleConstructorReturn(n,r)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.confirm=e,this.$apply()}},{key:"onShareAppMessage",value:function(e){return this.$parent.onShareAppMessage("您有一张会员卡待领取")}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Confirmp,"pages/confirm"));