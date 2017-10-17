
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




















