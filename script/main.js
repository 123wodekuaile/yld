$(function () {
    var _index = {
        init: function () {
            this.lunbo();
            this.banner();
            this.toggle();
            this.search();
            this.onload();
            this.bindEvent();
        },
        lunbo: function () {
            var _this = this;
            var url = "./api/lunbo.php";
            var data = "";
            _this.commonAjax(url,data,function (data) {
                _this.lunbo_display(data);
            });
        },
        banner: function () {
            var _this = this;
            var url = './api/banner.php';
            var data = "";
            _this.commonAjax(url,data,function (data) {
                _this.banner_display(data);
            })
        },
        banner_display: function (json) {
            var s = "";
            for(var i=0;i<json.data.length;i++){
                s+= "<a class='banner' href='"+json.data[i].url+"'>"+
                    "<img src='"+json.data[i].img+"' alt=''>"+
                    "</a>"
            }
            $('#banner_box').html(s);
        },
        toggle: function () {
            $('.swiper-slide a').click(function () {
                $(this).addClass('active').parent().siblings('.swiper-slide').find('a').removeClass('active');
            });
        },
        search: function () {
            var _this = this;
            var url = './api/search.php';
            var data = "";
            _this.commonAjax(url, data,function (data) {
                _this.search_data(data);
            });
        },
        search_data: function (json) {
            var h = "";
            for (var i = 0; i  < json.data.length; i++) {
                h+='<a href='+json.data[i].url+'>'+
                    '<div class="product">'+
                    '<img src='+json.data[i].img+' class="product_img" alt="" >'+
                    '<p><span class="name">'+json.data[i].title+'</span></p>'+
                    '<span class="title">'+json.data[i].banner+'</span>'+
                    '<div class="price">'+
                    '<img src="./public/images/ntd.png" alt="" class="ntd">'+
                    '<span class="jiage">'+json.data[i].price+'</span>'+
                    '</div>'+
                    '</div>'+
                    '</a>'
            }
            $('.pro').append(h);
        },
        lunbo_display: function (json) {
            var _this = this;
            var str = "";
            for(var i=0;i<json.data.length; i++){
                str += "<div class='swiper-slide'><img src='"+json.data[i].img+"' alt=''></div>"
            }
            $(".lunbo .swiper-wrapper").html(str);
             _this.cousole();
        },
        cousole: function () {
            var mySwiper = new Swiper(".lunbo",{
                direction: 'horizontal',
                loop: 'true',
                pagination: '.swiper-pagination1',
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });
            // 如果需要前进后退按
            var swiper = new Swiper(".items",{
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 0
            })
        },
        commonAjax: function (url,data,callback) {
            $.ajax({
                url:url,
                type: 'POST',
                data:data,
                dataType:'json',
                success: function (data) {
                    callback(data);
                },
                error: function (data) {
                    console.log(data);
                }
            });
        },
        onload: function () {
            var keyword = this.getUrlParam('keyword');
            if(keyword){
                $('#keyword').val(keyword);
            }
        },
        bindEvent: function () {
            $(".icon2").click(function () {
                $(".container").hide().prev(".header").find("span").text("医立达之售后服务政策及流程");
                $(".shouye").show();
            });
            $(".icon1").click(function () {
                if($(this).next().text()==="医立达之售后服务政策及流程"){
                    window.location.href = "index.html";
                    $(".shouye").hide();
                }
            });
        },
        getUrlParam: function (name) {
            var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var result  = window.location.search.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : null;
        }
    };
    _index.init();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(); //捲曲的高度
        var windowHeight = $(window).height(); //頁面當前的高度，一般是定值
        var documentHeight = $(document).height(); //文檔的高度
        if (documentHeight - scrollTop - windowHeight == 0) {
            _index.search();
        }
    });
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
    $(".search_glass").click(function () {

    });
    console.log($('.toggle a:even').text());
});


