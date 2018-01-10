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
// 引入组件


var Order = function (_wepy$page) {
  _inherits(Order, _wepy$page);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '输入金额'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      formSubmit: function formSubmit(data) {
        if (!data.detail.value.amount) {
          _wepy2.default.showModal({
            title: '提示',
            showCancel: false,
            content: '请先输入金额',
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
          return;
        }
        _wepy2.default.showLoading({
          title: '正在下单'
        });
        _wepy2.default.navigateTo({
          url: 'camera?amount=' + data.detail.value.amount,
          success: function success() {
            _wepy2.default.hideLoading();
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImFtb3VudCIsInNob3dNb2RhbCIsInRpdGxlIiwic2hvd0NhbmNlbCIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJzaG93TG9hZGluZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoaWRlTG9hZGluZyIsImV2ZW50cyIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dILElBREgsRUFDUztBQUNmLFlBQUksQ0FBQ0EsS0FBS0ksTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxNQUF2QixFQUErQjtBQUM3Qix5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLElBRE07QUFFYkMsd0JBQVksS0FGQztBQUdiQyxxQkFBUyxRQUhJO0FBSWJDLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLFdBQWY7QUFVQTtBQUNEO0FBQ0QsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZlIsaUJBQU87QUFEUSxTQUFqQjtBQUdBLHVCQUFLUyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssbUJBQW1CbEIsS0FBS0ksTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxNQUQ1QjtBQUVkSyxpQkFGYyxxQkFFSjtBQUNSLDJCQUFLUSxXQUFMO0FBQ0Q7QUFKYSxTQUFoQjtBQU1EO0FBeEJPLEssUUEyQlZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUFFOzs7c0NBQ09SLEcsRUFBSztBQUNyQixhQUFPLEtBQUtTLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBNUNnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfovpPlhaXph5Hpop0nXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge31cclxuXHJcbiAgY29tcHV0ZWQgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZm9ybVN1Ym1pdChkYXRhKSB7XHJcbiAgICAgIGlmICghZGF0YS5kZXRhaWwudmFsdWUuYW1vdW50KSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICBjb250ZW50OiAn6K+35YWI6L6T5YWl6YeR6aKdJyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmraPlnKjkuIvljZUnXHJcbiAgICAgIH0pXHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnY2FtZXJhP2Ftb3VudD0nICsgZGF0YS5kZXRhaWwudmFsdWUuYW1vdW50LFxyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7fVxyXG5cclxuICBvbkxvYWQoKSB7fVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==