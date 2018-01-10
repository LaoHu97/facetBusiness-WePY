'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _foot = require('./../components/foot.js');

var _foot2 = _interopRequireDefault(_foot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {
//   service
// } from '../config.js'


var Confirmp = function (_wepy$page) {
  _inherits(Confirmp, _wepy$page);

  function Confirmp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Confirmp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirmp.__proto__ || Object.getPrototypeOf(Confirmp)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '认证结果'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {
      message: '',
      icon: 'success'
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Confirmp, [{
    key: 'onLoad',
    value: function onLoad(query) {
      console.log(query);
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Confirmp;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Confirmp , 'pages/confirmpay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1wYXkuanMiXSwibmFtZXMiOlsiQ29uZmlybXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwibWVzc2FnZSIsImljb24iLCJtZXRob2RzIiwiZXZlbnRzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiJHBhcmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7QUFIQTtBQUNBO0FBQ0E7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFlBQU07QUFGRCxLLFFBSVBDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFDRkMsSyxFQUFPO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEOzs7c0NBQ2lCRyxHLEVBQUs7QUFDckIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQXRCbUMsZUFBS0MsSTs7a0JBQXRCaEIsUSIsImZpbGUiOiJjb25maXJtcGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIHNlcnZpY2VcclxuLy8gfSBmcm9tICcuLi9jb25maWcuanMnXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqTor4Hnu5PmnpwnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbWVzc2FnZTogJycsXHJcbiAgICBpY29uOiAnc3VjY2VzcydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuXHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7fVxyXG4gIG9uTG9hZChxdWVyeSkge1xyXG4gICAgY29uc29sZS5sb2cocXVlcnkpXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==