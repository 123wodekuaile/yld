$(function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 20 + 'px';

    //根据商品id点击选择是线上还是线下
    $(".goods_chance span").click(function () {
        $(".goods_offline").animate({'bottom':'0'},300);
        // $(".goods_online").animate({'bottom':'0'},300);
        $(".mask").show();
    });
    $(".mask").click(function () {
        $(".mask").hide();
        $(".goods_offline").animate({"bottom":"-100%"},300);
        // $(".goods_online").animate({"bottom":"-100%"},300)
    });
    $(".detail_spec li").click(function () {
        $(this).addClass("green").siblings().removeClass("green");
    })

    //点击加减
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
    $(".goods_offline .left").find("span").click(function () {
        $('.container').hide();
        $('.sub_container').show();
        $(".header span").html('请联络我');
    })
    $(".goods_offline .right").find("span").click(function () {
        $(".mask").style("z-index","1000");

    })
});