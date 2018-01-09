/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://test.weupay.com';
// var host = 'http://library.glore/api';

export const service = {
    // 登录接口
    loginSmall: `${host}/pay/wxSmaPro/loginSmall`,
    // 人脸认证
    faceIdentifyByImageUrl: `${host}/pay/api/face/faceIdentifyByImageUrl`,
    // 主域
    host
}

export default {
    service
}
