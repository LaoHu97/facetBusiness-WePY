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
      pages: ['pages/login', 'pages/order', 'pages/accomplish', 'pages/camera', 'pages/confirm'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImludGVyY2VwdCIsInAiLCJjb25zb2xlIiwibG9nIiwidGltZXN0YW1wIiwiRGF0ZSIsInN1Y2Nlc3MiLCJmYWlsIiwidGl0bGUiLCJwYXRoIiwicmVzIiwiZXJyTXNnIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBd0JFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFyQmRBLE1BcUJjLEdBckJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGtCQUhLLEVBSUwsY0FKSyxFQUtMLGVBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BUkQ7QUFjUCxlQUFTO0FBZEYsS0FxQks7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEI7QUFDeEJOLFlBRHdCLGtCQUNqQk8sQ0FEaUIsRUFDZDtBQUNSQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0FBLFVBQUVHLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBLGVBQU9KLENBQVA7QUFDRCxPQUx1QjtBQU14QkssYUFOd0IsbUJBTWhCTCxDQU5nQixFQU1iO0FBQ1RDLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGVBQU9GLENBQVA7QUFDRCxPQVR1QjtBQVV4Qk0sVUFWd0IsZ0JBVW5CTixDQVZtQixFQVVoQjtBQUNOQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxlQUFPRixDQUFQO0FBQ0Q7QUFidUIsS0FBMUI7QUFIWTtBQWtCYjs7Ozt3Q0FDa0M7QUFBQSxVQUFqQk8sS0FBaUIsdUVBQVQsT0FBUzs7QUFDakMsYUFBTztBQUNMQSxlQUFPQSxLQURGO0FBRUxDLGNBQU0sY0FGRDtBQUdMO0FBQ0FILGlCQUFTLGlCQUFTSSxHQUFULEVBQWM7QUFDckI7QUFDQVIsa0JBQVFDLEdBQVIsQ0FBWU8sSUFBSUMsTUFBaEI7QUFDRCxTQVBJO0FBUUxKLGNBQU0sY0FBU0csR0FBVCxFQUFjO0FBQ2xCO0FBQ0FSLGtCQUFRQyxHQUFSLENBQVlPLElBQUlDLE1BQWhCO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7OzsrQkFDVSxDQUFFOzs7O0VBeERjLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbG9naW4nLFxyXG4gICAgICAncGFnZXMvb3JkZXInLFxyXG4gICAgICAncGFnZXMvYWNjb21wbGlzaCcsXHJcbiAgICAgICdwYWdlcy9jYW1lcmEnLFxyXG4gICAgICAncGFnZXMvY29uZmlybSdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMUFBRDE5JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnV2VDaGF0J1xyXG4gICAgfSxcclxuICAgICdkZWJ1Zyc6IHRydWVcclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgY29uZmlnKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwKVxyXG4gICAgICAgIHAudGltZXN0YW1wID0gK25ldyBEYXRlKClcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5oiQ5YqfJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSh0aXRsZSA9ICflvq7kv6HkvJrlkZjljaEnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAvLyBpbWFnZVVybDogJycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25MYXVuY2goKSB7fVxyXG59XG4iXX0=