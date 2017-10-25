
//通用的url请求
function commonAjax(url, data, callback) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: data,
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            console.log(data)
        }
    });
}
//获取url中的参数
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return unescape(r[2]);
        return null;
    };

//对本地存储进行的一些操作
    utils = {
        setParam: function (name, value) {
                localStorage.setItem(name,value);
        },
        getParam: function (name) {
                localStorage.getItem(name);
        },
        delParam: function (name) {
                localStorage.removeItem(name);
        },
//对cookie的一些操作
        getCookie: function (name) {
                var name = getCookie(name);
                return name;
        }
    }
})(jQuery);


//得到cookie的值
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(';');
    for(var i=0;i<arrCookie.length;i++){
        var arr  = arrCookie.split('=');
        if(cookieName===arr[0]){
            return arr[1];
        }
    }
}

//字段的验证
function formValidate(formData){
    var result = {
        status  : false,
        msg     : ''
    };
    if(validate(formData.username, 'require')){
        result.msg = '用户名不能为空';
        return result;
    }
    if(validate(formData.password, 'require')){
        result.msg = '密码不能为空';
        return result;
    }
    // 通过验证，返回正确提示
    result.status   = true;
    result.msg      = '验证通过';
    return result;
}
function validate(value, type){
    var value = $.trim(value);
    // 非空验证
    if('require' === type){
        return !!value;
    }
    // 手机号验证
    if('phone' === type){
        return /^1\d{10}$/.test(value);
    }
    // 邮箱格式验证
    if('email' === type){
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }
}




















