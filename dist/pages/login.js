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
              // order
            });
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJtZDUiLCJyZXF1aXJlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwibG9naW5TbWFsbCIsIm1ldGhvZCIsImFjY291bnQiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiaGV4TUQ1Iiwic3VjY2VzcyIsInJlcyIsIm5hdmlnYXRlVG8iLCJldmVudHMiLCIkcGFyZW50Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7SUFLcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHSCxJQURILEVBQ1M7QUFDZixZQUFJSSxNQUFNQyxRQUFRLFdBQVIsQ0FBVjtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLE1BRFE7QUFFZkMsZ0JBQU07QUFGUyxTQUFqQjtBQUlBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQkFBUUMsVUFERjtBQUVYQyxrQkFBUSxNQUZHO0FBR1haLGdCQUFNO0FBQ0phLHFCQUFTYixLQUFLYyxNQUFMLENBQVlDLEtBQVosQ0FBa0JGLE9BRHZCO0FBRUpHLHNCQUFVWixJQUFJYSxNQUFKLENBQVdqQixLQUFLYyxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLFFBQWxCLEdBQTZCaEIsS0FBS2MsTUFBTCxDQUFZQyxLQUFaLENBQWtCRixPQUExRDtBQUZOLFdBSEs7QUFPWEssbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsVUFBTCxDQUFnQjtBQUNkVixtQkFBSztBQUNMO0FBRmMsYUFBaEI7QUFJRDtBQVpVLFNBQWI7QUFjRDtBQXJCTyxLLFFBd0JWVyxNLEdBQVMsRTs7Ozs7c0NBQ1NGLEcsRUFBSztBQUNyQixhQUFPLEtBQUtHLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7NkJBQ1EsQ0FBRTs7OztFQXhDc0IsZUFBS0MsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIOW8leWFpee7hOS7tlxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xuaW1wb3J0IHtcbiAgc2VydmljZVxufSBmcm9tICcuLi9jb25maWcuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZm9vdDogRm9vdFxuICB9XG5cbiAgZGF0YSA9IHt9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgZm9ybVN1Ym1pdChkYXRhKSB7XG4gICAgICB2YXIgbWQ1ID0gcmVxdWlyZSgnLi4vbWQ1LmpzJylcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+ato+WcqOeZu+W9lScsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHNlcnZpY2UubG9naW5TbWFsbCxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhY2NvdW50OiBkYXRhLmRldGFpbC52YWx1ZS5hY2NvdW50LFxuICAgICAgICAgIHBhc3N3b3JkOiBtZDUuaGV4TUQ1KGRhdGEuZGV0YWlsLnZhbHVlLnBhc3N3b3JkICsgZGF0YS5kZXRhaWwudmFsdWUuYWNjb3VudClcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJ29yZGVyJ1xuICAgICAgICAgICAgLy8gb3JkZXJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXG4gIH1cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==