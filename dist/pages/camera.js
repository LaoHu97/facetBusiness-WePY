"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../config.js"),_foot=require("./../components/foot.js"),_foot2=_interopRequireDefault(_foot),Camera=function(e){function t(){var e,o,a,n;_classCallCheck(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.config={navigationBarTitleText:"拍照认证"},a.components={foot:_foot2.default},a.data={cameraView:!0,src:"",formData:""},a.methods={takePhoto:function(){var e=this;_wepy2.default.createCameraContext().takePhoto({quality:"low",success:function(t){e.cameraView=!1,e.src=t.tempImagePath,e.$apply()}})},error:function(e){console.log(e.detail)},uploadFile:function(){_wepy2.default.showLoading({title:"正在识别"}),_wepy2.default.uploadFile({url:_config.service.getPrepayFace,filePath:this.src,name:"imageUrl",formData:{amount:this.formData.amount},success:function(e){var t=JSON.parse(e.data),o=t.data,a=t.status,n=t.message;if(200!==a)return _wepy2.default.showModal({title:"提示",content:n,showCancel:!1,success:function(e){e.confirm&&console.log("用户点击确定"),_wepy2.default.hideLoading()}});_wepy2.default.navigateTo({url:"confirm?amount="+o.amount+"&disAmt="+o.disAmt+"&transId="+o.transId+"&name="+o.name+"&phone="+o.phone+"&bouns="+o.bouns+"&balans="+o.balans,success:function(){_wepy2.default.hideLoading()}})}})},reTakePhoto:function(){this.cameraView=!0,this.$apply()}},a.events={},n=o,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"onShow",value:function(){}},{key:"onLoad",value:function(e){this.formData=e,this.$apply()}},{key:"onShareAppMessage",value:function(e){return this.$parent.onShareAppMessage("您有一张会员卡待领取")}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Camera,"pages/camera"));