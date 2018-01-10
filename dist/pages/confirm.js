'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _foot = require('./../components/foot.js');

var _foot2 = _interopRequireDefault(_foot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      confirm: null
    }, _this.methods = {
      submit: function submit() {
        _wepy2.default.showLoading({
          title: '支付中'
        });
        _wepy2.default.request({
          url: _config.service.faceConfirmPay,
          header: {
            'content-type': 'application/json'
          },
          data: {
            transId: this.confirm.transId
          },
          method: 'POST',
          success: function success(res) {
            console.log(res);
            if (res.data.status === 200) {
              _wepy2.default.navigateTo({
                url: 'accomplish?status=200&message=支付成功'
              });
            }
            _wepy2.default.hideLoading();
          },
          fail: function fail(res) {
            console.log(res);
            _wepy2.default.hideLoading();
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Confirmp, [{
    key: 'onLoad',
    value: function onLoad(query) {
      this.confirm = query;
      this.$apply();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Confirmp;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Confirmp , 'pages/confirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uanMiXSwibmFtZXMiOlsiQ29uZmlybXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY29uZmlybSIsIm1ldGhvZHMiLCJzdWJtaXQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsImZhY2VDb25maXJtUGF5IiwiaGVhZGVyIiwidHJhbnNJZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwibmF2aWdhdGVUbyIsImhpZGVMb2FkaW5nIiwiZmFpbCIsImV2ZW50cyIsInF1ZXJ5IiwiJGFwcGx5IiwiJHBhcmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUdQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssZ0JBQVFDLGNBREY7QUFFWEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQUZHO0FBS1hULGdCQUFNO0FBQ0pVLHFCQUFTLEtBQUtULE9BQUwsQ0FBYVM7QUFEbEIsV0FMSztBQVFYQyxrQkFBUSxNQVJHO0FBU1hDLGlCQVRXLG1CQVNIQyxHQVRHLEVBU0U7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLGdCQUFJQSxJQUFJYixJQUFKLENBQVNnQixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLDZCQUFLQyxVQUFMLENBQWdCO0FBQ2RWLHFCQUFLO0FBRFMsZUFBaEI7QUFHRDtBQUNELDJCQUFLVyxXQUFMO0FBQ0QsV0FqQlU7QUFrQlhDLGNBbEJXLGdCQWtCTk4sR0FsQk0sRUFrQkQ7QUFDUkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDJCQUFLSyxXQUFMO0FBQ0Q7QUFyQlUsU0FBYjtBQXVCRDtBQTVCTyxLLFFBK0JWRSxNLEdBQVMsRTs7Ozs7MkJBQ0ZDLEssRUFBTztBQUNaLFdBQUtwQixPQUFMLEdBQWVvQixLQUFmO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7c0NBQ2lCVCxHLEVBQUs7QUFDckIsYUFBTyxLQUFLVSxPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQWpEbUMsZUFBS0MsSTs7a0JBQXRCOUIsUSIsImZpbGUiOiJjb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqTor4Hnu5PmnpwnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgY29uZmlybTogbnVsbFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+aUr+S7mOS4rSdcclxuICAgICAgfSlcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHNlcnZpY2UuZmFjZUNvbmZpcm1QYXksXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0cmFuc0lkOiB0aGlzLmNvbmZpcm0udHJhbnNJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJ2FjY29tcGxpc2g/c3RhdHVzPTIwMCZtZXNzYWdlPeaUr+S7mOaIkOWKnydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25Mb2FkKHF1ZXJ5KSB7XHJcbiAgICB0aGlzLmNvbmZpcm0gPSBxdWVyeVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXHJcbiAgfVxyXG59XG4iXX0=