'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://test.weupay.com';
// var host = 'http://library.glore/api';

var service = exports.service = {
    // 登录接口
    loginSmall: host + '/pay/loginSmall',
    // 人脸认证
    getPrepayFace: host + '/pay/facePay/getPrepayFace',
    // 支付
    faceConfirmPay: host + '/pay/facePay/faceConfirmPay',
    // 主域
    host: host
};

exports.default = {
    service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImxvZ2luU21hbGwiLCJnZXRQcmVwYXlGYWNlIiwiZmFjZUNvbmZpcm1QYXkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFJQTtBQUNBLElBQUlBLE9BQU8sd0JBQVg7QUFDQTs7QUFFTyxJQUFNQyw0QkFBVTtBQUNuQjtBQUNBQyxnQkFBZUYsSUFBZixvQkFGbUI7QUFHbkI7QUFDQUcsbUJBQWtCSCxJQUFsQiwrQkFKbUI7QUFLbkI7QUFDQUksb0JBQW1CSixJQUFuQixnQ0FObUI7QUFPbkI7QUFDQUE7QUFSbUIsQ0FBaEI7O2tCQVdRO0FBQ1hDO0FBRFcsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlsI/nqIvluo/phY3nva7mlofku7ZcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIOWfn+WQjVxyXG52YXIgaG9zdCA9ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tJztcclxuLy8gdmFyIGhvc3QgPSAnaHR0cDovL2xpYnJhcnkuZ2xvcmUvYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgLy8g55m75b2V5o6l5Y+jXHJcbiAgICBsb2dpblNtYWxsOiBgJHtob3N0fS9wYXkvbG9naW5TbWFsbGAsXHJcbiAgICAvLyDkurrohLjorqTor4FcclxuICAgIGdldFByZXBheUZhY2U6IGAke2hvc3R9L3BheS9mYWNlUGF5L2dldFByZXBheUZhY2VgLFxyXG4gICAgLy8g5pSv5LuYXHJcbiAgICBmYWNlQ29uZmlybVBheTogYCR7aG9zdH0vcGF5L2ZhY2VQYXkvZmFjZUNvbmZpcm1QYXlgLFxyXG4gICAgLy8g5Li75Z+fXHJcbiAgICBob3N0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNlcnZpY2VcclxufVxyXG4iXX0=