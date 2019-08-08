       $(function () {
        $('.postions').css('opacity',0)
        $('.nav-item-about').hover(function(){
            $('.postions').css('opacity',1)
        },function(){
            $('.postions').css('opacity',0)
        })
        $('.postions').hover(function (){
            $('.postions').css('opacity',1)
        },function(){
            $('.postions').css('opacity',0)
        })
        $('.opportunity').click(function () {
            window.location.href = 'join.html'
        })
        $('.join').click(function () {
            window.location.href='cooperation.html';
        })
        $('.introduce').click(function () {
            window.location.href='about.html';
        })
        $('.channel').click(function () {
            window.location.href='channel.html';
        })
        $('.cooperation').click(function () {
            window.location.href = 'services.html'
        })
        $('.swiper-button-prev').hover(function () {
            $(this).css({'background-image':'url(img/imgs/icon_arrow_left.png)'})
        },function () {
            $(this).css({'background-image':'url(img/imgs/icon_left.png)'})
        })
        $('.swiper-button-next').hover(function () {
            $(this).css({'background-image':'url(img/imgs/icon_arrow_left.png)','transform':'rotate(180deg)'})
        },function () {
            $(this).css({'background-image':'url(img/imgs/icon_left.png)'})
        })
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: true,
            loop : true,
            // 可选选项，自动滑动
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        })
        $('.swiper-slide').mouseover(function () {
            mySwiper.autoplay.stop()
        })
        $('.swiper-slide').mouseout(function () {
            mySwiper.autoplay.start();
        })
    })