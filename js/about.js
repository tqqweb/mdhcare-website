$(function () {
    $('.postions').hide()
    $('.nav-item-about').hover(function(){
        $('.postions').show()
    },function(){
        $('.postions').hide()
    })
    $('.postions').hover(function (){
        $('.postions').show()
    },function(){
        $('.postions').hide()
    })
    $('.cooperation').click(function (){
        window.location.href='services.html'
    })
    $('.channel').click(function (){
        window.location.href='channel.html'
    })
    $('.join').click(function (){
        window.location.href='join.html'
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