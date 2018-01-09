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
      formSubmit: function formSubmit() {
        _wepy2.default.showLoading({
          title: '正在下单'
        });
        _wepy2.default.navigateTo({
          url: 'camera',
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
  }]);

  return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibmF2aWdhdGVUbyIsInVybCIsInN1Y2Nlc3MiLCJoaWRlTG9hZGluZyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTztBQURRLFNBQWpCO0FBR0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxRQURTO0FBRWRDLGlCQUZjLHFCQUVKO0FBQ1IsMkJBQUtDLFdBQUw7QUFDRDtBQUphLFNBQWhCO0FBTUQ7QUFYTyxLLFFBY1ZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUFFOzs7O0VBNUJzQixlQUFLQyxJOztrQkFBbkJoQixLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfovpPlhaXph5Hpop0nXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge31cclxuXHJcbiAgY29tcHV0ZWQgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZm9ybVN1Ym1pdCgpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmraPlnKjkuIvljZUnXHJcbiAgICAgIH0pXHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnY2FtZXJhJyxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuXHJcbiAgb25Mb2FkKCkge31cclxufVxuIl19