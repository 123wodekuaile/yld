$(function () {


    //根据商品id点击选择是线上还是线下（后面来定）
    //把商品类别统一放在main里，并且都设置为none,
    //首先根据id来判定到底是谁显示谁隐藏，然后统一控制
    $(".goods_chance span").click(function () {
        $(".goods_offline").animate({'bottom':'0'},300);
        // $(".goods_online").animate({'bottom':'0'},300);
        $(".mask1").show().click(function () {
            $(".mask1").hide();
            $(".goods_offline").animate({"bottom":"-100%"},300);
            // $(".goods_online").animate({"bottom":"-100%"},300)
        });
    });



    //商品选择特效
    $(".detail_spec li").click(function () {
        $(this).addClass("green").siblings().removeClass("green");
    });



    //线下左侧点击事件
    $(".goods_offline .left").click(function () {
        $('.container').hide();
        $('.sub_container').show();
        $(".header span").html('请联络我');
    });
    //线下右侧点击事件
    $(".goods_offline .right").click(function () {
        $(".mask1").hide();
        $(".mask2").show();
        $(".server").show().animate({"top":"8.888889rem"},300);
        $("body,html").css({"overflow":"hidden"});

        $(".server .close").click(function () {
            $(".server").animate({"top":"1.388889rem"},10).hide();
            $(".mask2").hide();
            $(".mask1").show();
            $(".goods_offline").show();
            $("body,html").css({"overflow":"visible"});
        });
    });
    //线下联络方式返回按钮
    $(".icon1").click(function () {
        if($(this).next().text()==="请联络我"){
            $('.container').show();
            $('.sub_container').hide();
            $(".header span").html('合世血压计');
        }
    });



    //线上点击加减
    $('.detail_buy .less').click(function () {
        var num = parseInt($(this).next('input').val())-1;
        $(this).next('input').val(num);
        if(num<=1) {
            $(this).next('input').val(1);
        }
    });
    $('.detail_buy .add').click(function () {
        var num = parseInt($(this).prev('input').val())+1;
        $(this).prev('input').val(num);
        if(num>9)
        {
            $(this).prev('input').val(10);
        }
    });
    //线上右侧点击事件
    $(".goods_online .right").click(function () {

        window.location.href = "./order_confirm.html"
    })

    //返回顶部
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop();
        if(windowTop>=300){
            $('.return_top').show();
        }else {
            $('.return_top').hide();
        }
    });
    $('.return_top').on('click',function(e){
        $('html,body').animate({'scrollTop':'0px'},200);
    });


});