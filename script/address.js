$(function () {
    $('.edit a').click(function () {
        $('.info_look').hide().prev('.header').find('span').text('編輯地址').prev('a').css('href','javascript:void(0)');
        $(".info_edit").show();
    });
    $('.header').find('.icon1').click(function () {
        $('.info_edit').hide();
        $('.info_look').show().prev('.header').find('span').text('地址管理').prev('a').css('href','../index.html');
    });
});