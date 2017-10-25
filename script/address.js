$(function () {
    $('.edit a').click(function () {
        $('.info_look').hide().prev('.header').find('span').text('編輯收货讯息').prev('a').attr("href","#");
        $(".container").show();
    });
    $('.header').find('.icon1').click(function () {
        $('.container').hide();
        $('.info_look').show().prev('.header').find('span').text('地址管理').prev('a').attr("href","javascript:history.back(-1);");
    });
    $(".box").click(function () {
        $(this).toggleClass("one");
        $(".ball").toggleClass("two");
    })
});