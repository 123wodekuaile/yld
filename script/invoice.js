//点击切换发票类型
$(function () {
    $(".top li").find("span").click(function () {
        if($(this).attr("class")==="no"){
            $(this).attr("class","yes");
            $(this).parent("li").siblings().find("span").attr("class","no");
        }
        if($(".top span").eq(0).hasClass("yes")){
            $(".top .two").show();
            $(".top .three").hide();
        }
        if($(".top span").eq(1).hasClass("yes")){
            $(".top .two").hide();
            $(".top .three").show();
        }
    });




});

//点击转到城市选择

