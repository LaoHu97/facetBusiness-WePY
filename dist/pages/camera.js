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

var Camera = function (_wepy$page) {
  _inherits(Camera, _wepy$page);

  function Camera() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Camera);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Camera.__proto__ || Object.getPrototypeOf(Camera)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '拍照认证'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      cameraView: true,
      src: '',
      formData: ''
    }, _this2.methods = {
      takePhoto: function takePhoto() {
        var _this = this;
        var ctx = _wepy2.default.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {
            _this.cameraView = false;
            _this.src = res.tempImagePath;
            _this.$apply();
          }
        });
      },
      error: function error(e) {
        console.log(e.detail);
      },
      uploadFile: function uploadFile() {
        _wepy2.default.showLoading({
          title: '正在识别'
        });
        _wepy2.default.uploadFile({
          url: _config.service.getPrepayFace,
          filePath: this.src,
          name: 'imageUrl',
          formData: {
            'amount': this.formData.amount
          },
          success: function success(res) {
            var _JSON$parse = JSON.parse(res.data),
                data = _JSON$parse.data,
                status = _JSON$parse.status,
                message = _JSON$parse.message;

            console.log(status);
            if (status !== 200) {
              _wepy2.default.showModal({
                title: '提示',
                content: message,
                showCancel: false,
                success: function success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定');
                  }
                  _wepy2.default.hideLoading();
                }
              });
              return;
            }
            _wepy2.default.navigateTo({
              url: 'confirm?amount=' + data.amount + '&disAmt=' + data.disAmt + '&transId=' + data.transId + '&name=' + data.name + '&phone=' + data.phone + '&bouns=' + data.bouns + '&balans=' + data.balans,
              success: function success() {
                _wepy2.default.hideLoading();
              }
            });
          }
        });
      },
      reTakePhoto: function reTakePhoto() {
        this.cameraView = true;
        this.$apply();
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Camera, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onLoad',
    value: function onLoad(query) {
      this.formData = query;
      this.$apply();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY2FtZXJhVmlldyIsInNyYyIsImZvcm1EYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIl90aGlzIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidGVtcEltYWdlUGF0aCIsIiRhcHBseSIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ1cGxvYWRGaWxlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInVybCIsImdldFByZXBheUZhY2UiLCJmaWxlUGF0aCIsIm5hbWUiLCJhbW91bnQiLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiaGlkZUxvYWRpbmciLCJuYXZpZ2F0ZVRvIiwiZGlzQW10IiwidHJhbnNJZCIsInBob25lIiwiYm91bnMiLCJiYWxhbnMiLCJyZVRha2VQaG90byIsImV2ZW50cyIsInF1ZXJ5IiwiJHBhcmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7Ozt5TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBR2JDLEksR0FBTztBQUNMQyxrQkFBWSxJQURQO0FBRUxDLFdBQUssRUFGQTtBQUdMQyxnQkFBVTtBQUhMLEssU0FLUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFNQyxNQUFNLGVBQUtDLG1CQUFMLEVBQVo7QUFDQUQsWUFBSUYsU0FBSixDQUFjO0FBQ1pJLG1CQUFTLEtBREc7QUFFWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkwsa0JBQU1MLFVBQU4sR0FBbUIsS0FBbkI7QUFDQUssa0JBQU1KLEdBQU4sR0FBWVMsSUFBSUMsYUFBaEI7QUFDQU4sa0JBQU1PLE1BQU47QUFDRDtBQU5XLFNBQWQ7QUFRRCxPQVpPO0FBYVJDLFdBYlEsaUJBYUZDLENBYkUsRUFhQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0QsT0FmTztBQWdCUkMsZ0JBaEJRLHdCQWdCSztBQUNYLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkRyxlQUFLLGdCQUFRQyxhQURDO0FBRWRDLG9CQUFVLEtBQUt0QixHQUZEO0FBR2R1QixnQkFBTSxVQUhRO0FBSWR0QixvQkFBVTtBQUNSLHNCQUFVLEtBQUtBLFFBQUwsQ0FBY3VCO0FBRGhCLFdBSkk7QUFPZGhCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFBQSw4QkFLakJnQixLQUFLQyxLQUFMLENBQVdqQixJQUFJWCxJQUFmLENBTGlCO0FBQUEsZ0JBRW5CQSxJQUZtQixlQUVuQkEsSUFGbUI7QUFBQSxnQkFHbkI2QixNQUhtQixlQUduQkEsTUFIbUI7QUFBQSxnQkFJbkJDLE9BSm1CLGVBSW5CQSxPQUptQjs7QUFNckJkLG9CQUFRQyxHQUFSLENBQVlZLE1BQVo7QUFDQSxnQkFBSUEsV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLDZCQUFLRSxTQUFMLENBQWU7QUFDYlYsdUJBQU8sSUFETTtBQUViVyx5QkFBU0YsT0FGSTtBQUdiRyw0QkFBWSxLQUhDO0FBSWJ2Qix5QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLHNCQUFJQSxJQUFJdUIsT0FBUixFQUFpQjtBQUNmbEIsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRCxpQ0FBS2tCLFdBQUw7QUFDRDtBQVRZLGVBQWY7QUFXQTtBQUNEO0FBQ0QsMkJBQUtDLFVBQUwsQ0FBZ0I7QUFDZGQsbUJBQUssb0JBQW9CdEIsS0FBSzBCLE1BQXpCLEdBQWtDLFVBQWxDLEdBQStDMUIsS0FBS3FDLE1BQXBELEdBQTZELFdBQTdELEdBQTJFckMsS0FBS3NDLE9BQWhGLEdBQTBGLFFBQTFGLEdBQXFHdEMsS0FBS3lCLElBQTFHLEdBQWlILFNBQWpILEdBQTZIekIsS0FBS3VDLEtBQWxJLEdBQTBJLFNBQTFJLEdBQXNKdkMsS0FBS3dDLEtBQTNKLEdBQ0gsVUFERyxHQUNVeEMsS0FBS3lDLE1BRk47QUFHZC9CLHFCQUhjLHFCQUdKO0FBQ1IsK0JBQUt5QixXQUFMO0FBQ0Q7QUFMYSxhQUFoQjtBQU9EO0FBbkNhLFNBQWhCO0FBcUNELE9BekRPO0FBMERSTyxpQkExRFEseUJBMERNO0FBQ1osYUFBS3pDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLWSxNQUFMO0FBQ0Q7QUE3RE8sSyxTQStEVjhCLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUFFOzs7MkJBQ0pDLEssRUFBTztBQUNaLFdBQUt6QyxRQUFMLEdBQWdCeUMsS0FBaEI7QUFDQSxXQUFLL0IsTUFBTDtBQUNEOzs7c0NBQ2lCRixHLEVBQUs7QUFDckIsYUFBTyxLQUFLa0MsT0FBTCxDQUFhQyxpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUFuRmlDLGVBQUtDLEk7O2tCQUFwQnBELE0iLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ouN54Wn6K6k6K+BJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgY2FtZXJhVmlldzogdHJ1ZSxcclxuICAgIHNyYzogJycsXHJcbiAgICBmb3JtRGF0YTogJydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRha2VQaG90bygpIHtcclxuICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoKVxyXG4gICAgICBjdHgudGFrZVBob3RvKHtcclxuICAgICAgICBxdWFsaXR5OiAnbG93JyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBfdGhpcy5jYW1lcmFWaWV3ID0gZmFsc2VcclxuICAgICAgICAgIF90aGlzLnNyYyA9IHJlcy50ZW1wSW1hZ2VQYXRoXHJcbiAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlcnJvcihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxyXG4gICAgfSxcclxuICAgIHVwbG9hZEZpbGUoKSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo6K+G5YirJ1xyXG4gICAgICB9KVxyXG4gICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgIHVybDogc2VydmljZS5nZXRQcmVwYXlGYWNlLFxyXG4gICAgICAgIGZpbGVQYXRoOiB0aGlzLnNyYyxcclxuICAgICAgICBuYW1lOiAnaW1hZ2VVcmwnLFxyXG4gICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAnYW1vdW50JzogdGhpcy5mb3JtRGF0YS5hbW91bnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICB9ID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cylcclxuICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnY29uZmlybT9hbW91bnQ9JyArIGRhdGEuYW1vdW50ICsgJyZkaXNBbXQ9JyArIGRhdGEuZGlzQW10ICsgJyZ0cmFuc0lkPScgKyBkYXRhLnRyYW5zSWQgKyAnJm5hbWU9JyArIGRhdGEubmFtZSArICcmcGhvbmU9JyArIGRhdGEucGhvbmUgKyAnJmJvdW5zPScgKyBkYXRhLmJvdW5zICtcclxuICAgICAgICAgICAgICAnJmJhbGFucz0nICsgZGF0YS5iYWxhbnMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlVGFrZVBob3RvKCkge1xyXG4gICAgICB0aGlzLmNhbWVyYVZpZXcgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uTG9hZChxdWVyeSkge1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IHF1ZXJ5XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==