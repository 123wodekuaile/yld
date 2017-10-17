$(function () {
    toggle();
    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 'auto',
        paginationClickable: true,
        freeMode: true,
        loop: false,//是否可循环
        onTab: function(swiper) {
            var n = swiper1.clickedIndex;
        }
    });

    var swiper2 = new Swiper('.swiper2', {

        direction: 'horizontal',
        loop: false,

        autoHeight: true,
        onSlideChangeEnd: function(swiper) {  //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
            var n = swiper.activeIndex;
            setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
            swiper1.slideTo(n, 500, false);
        }
    });
    swiper1.slides.each(function(index, val) {
        var ele = $(this);
        ele.on("click", function() {
            setCurrentSlide(ele, index);
            swiper2.slideTo(index, 500, false);
        });
    });
    $(".swiper-wrapper li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

});

function toggle() {
    $(".swiper-wrapper li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
}
function setCurrentSlide(ele, index) {
    $(".swiper1 .swiper-slide").removeClass("selected");
    ele.addClass("selected");
    //swiper1.initialSlide=index;
}