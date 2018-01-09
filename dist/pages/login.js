'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _foot = require('./../components/foot.js');

var _foot2 = _interopRequireDefault(_foot);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      formSubmit: function formSubmit(data) {
        var md5 = require('./../md5.js');
        _wepy2.default.showLoading({
          title: '正在登录',
          mask: true
        });
        _wepy2.default.request({
          url: _config.service.loginSmall,
          method: 'POST',
          data: {
            account: data.detail.value.account,
            password: md5.hexMD5(data.detail.value.password + data.detail.value.account)
          },
          success: function success(res) {
            _wepy2.default.navigateTo({
              url: 'order'
            });
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJtZDUiLCJyZXF1aXJlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwibG9naW5TbWFsbCIsIm1ldGhvZCIsImFjY291bnQiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiaGV4TUQ1Iiwic3VjY2VzcyIsInJlcyIsIm5hdmlnYXRlVG8iLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7SUFLcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHSCxJQURILEVBQ1M7QUFDZixZQUFJSSxNQUFNQyxRQUFRLFdBQVIsQ0FBVjtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLE1BRFE7QUFFZkMsZ0JBQU07QUFGUyxTQUFqQjtBQUlBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQkFBUUMsVUFERjtBQUVYQyxrQkFBUSxNQUZHO0FBR1haLGdCQUFNO0FBQ0phLHFCQUFTYixLQUFLYyxNQUFMLENBQVlDLEtBQVosQ0FBa0JGLE9BRHZCO0FBRUpHLHNCQUFVWixJQUFJYSxNQUFKLENBQVdqQixLQUFLYyxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLFFBQWxCLEdBQTZCaEIsS0FBS2MsTUFBTCxDQUFZQyxLQUFaLENBQWtCRixPQUExRDtBQUZOLFdBSEs7QUFPWEssbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsVUFBTCxDQUFnQjtBQUNkVixtQkFBSztBQURTLGFBQWhCO0FBR0Q7QUFYVSxTQUFiO0FBYUQ7QUFwQk8sSyxRQXVCVlcsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUFyQ3NCLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcbmltcG9ydCB7XG4gIHNlcnZpY2Vcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGZvb3Q6IEZvb3RcbiAgfVxuXG4gIGRhdGEgPSB7fVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGZvcm1TdWJtaXQoZGF0YSkge1xuICAgICAgdmFyIG1kNSA9IHJlcXVpcmUoJy4uL21kNS5qcycpXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfmraPlnKjnmbvlvZUnLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBzZXJ2aWNlLmxvZ2luU21hbGwsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWNjb3VudDogZGF0YS5kZXRhaWwudmFsdWUuYWNjb3VudCxcbiAgICAgICAgICBwYXNzd29yZDogbWQ1LmhleE1ENShkYXRhLmRldGFpbC52YWx1ZS5wYXNzd29yZCArIGRhdGEuZGV0YWlsLnZhbHVlLmFjY291bnQpXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICdvcmRlcidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==