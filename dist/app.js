'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/login', 'pages/order', 'pages/accomplish', 'pages/camera'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#1AAD19',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'WeChat'
      },
      'debug': true
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.intercept('request', {
      config: function config(p) {
        console.log(p);
        p.timestamp = +new Date();
        return p;
      },
      success: function success(p) {
        console.log(p);
        console.log('API调用成功');
        return p;
      },
      fail: function fail(p) {
        console.log('API调用失败');
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '微信会员卡';

      return {
        title: title,
        path: '/pages/index',
        // imageUrl: '',
        success: function success(res) {
          // 转发成功
          console.log(res.errMsg);
        },
        fail: function fail(res) {
          // 转发失败
          console.log(res.errMsg);
        }
      };
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImludGVyY2VwdCIsInAiLCJjb25zb2xlIiwibG9nIiwidGltZXN0YW1wIiwiRGF0ZSIsInN1Y2Nlc3MiLCJmYWlsIiwidGl0bGUiLCJwYXRoIiwicmVzIiwiZXJyTXNnIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBdUJFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFwQmRBLE1Bb0JjLEdBcEJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGtCQUhLLEVBSUwsY0FKSyxDQURBO0FBT1BDLGNBQVE7QUFDTiwrQkFBdUIsT0FEakI7QUFFTix3Q0FBZ0MsU0FGMUI7QUFHTixrQ0FBMEIsUUFIcEI7QUFJTixrQ0FBMEI7QUFKcEIsT0FQRDtBQWFQLGVBQVM7QUFiRixLQW9CSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4Qk4sWUFEd0Isa0JBQ2pCTyxDQURpQixFQUNkO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUEsVUFBRUcsU0FBRixHQUFjLENBQUMsSUFBSUMsSUFBSixFQUFmO0FBQ0EsZUFBT0osQ0FBUDtBQUNELE9BTHVCO0FBTXhCSyxhQU53QixtQkFNaEJMLENBTmdCLEVBTWI7QUFDVEMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxlQUFPRixDQUFQO0FBQ0QsT0FWdUI7QUFXeEJNLFVBWHdCLGdCQVduQk4sQ0FYbUIsRUFXaEI7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsZUFBT0YsQ0FBUDtBQUNEO0FBZHVCLEtBQTFCO0FBSFk7QUFtQmI7Ozs7d0NBQ2tDO0FBQUEsVUFBakJPLEtBQWlCLHVFQUFULE9BQVM7O0FBQ2pDLGFBQU87QUFDTEEsZUFBT0EsS0FERjtBQUVMQyxjQUFNLGNBRkQ7QUFHTDtBQUNBSCxpQkFBUyxpQkFBU0ksR0FBVCxFQUFjO0FBQ3JCO0FBQ0FSLGtCQUFRQyxHQUFSLENBQVlPLElBQUlDLE1BQWhCO0FBQ0QsU0FQSTtBQVFMSixjQUFNLGNBQVNHLEdBQVQsRUFBYztBQUNsQjtBQUNBUixrQkFBUUMsR0FBUixDQUFZTyxJQUFJQyxNQUFoQjtBQUNEO0FBWEksT0FBUDtBQWFEOzs7K0JBQ1UsQ0FBRTs7OztFQXhEYyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2xvZ2luJyxcclxuICAgICAgJ3BhZ2VzL29yZGVyJyxcclxuICAgICAgJ3BhZ2VzL2FjY29tcGxpc2gnLFxyXG4gICAgICAncGFnZXMvY2FtZXJhJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAnYmFja2dyb3VuZFRleHRTdHlsZSc6ICdsaWdodCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMxQUFEMTknLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICdXZUNoYXQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICdXZUNoYXQnXHJcbiAgICB9LFxyXG4gICAgJ2RlYnVnJzogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICBjb25maWcocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FQSeiwg+eUqOaIkOWKnycpXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfSxcclxuICAgICAgZmFpbChwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FQSeiwg+eUqOWksei0pScpXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UodGl0bGUgPSAn5b6u5L+h5Lya5ZGY5Y2hJykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcclxuICAgICAgLy8gaW1hZ2VVcmw6ICcnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTGF1bmNoKCkge31cclxufVxuIl19