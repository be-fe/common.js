/**
 * Created by leiquan on 15/12/1.
 */

define(function (require, exports, module) {

    var ajax = require('./ajax');

    // 注意,file对象要append到formData对象中,或者从form表单构造formdata,注意不要设置contenttype
    var ajaxFile = function (url, formData, successCallback, failCallback) {
        ajax({
            method: "file",
            url: url,
            formData: formData,
            type: 'text',
            successCallback: successCallback,
            failCallback: failCallback
        });
    }

    module.exports = ajaxFile;


});