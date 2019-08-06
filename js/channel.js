$(function () {
    $('.gene-img1').hover(function () {
        $('.gene-img1').hide()
        $('.hover-img1').show()
    },function() {
        $('.gene-img1').show()
        $('.hover-img1').hide()
    })
    $('.gene-img2').hover(function () {
        $('.gene-img2').hide()
        $('.hover-img2').show()
    },function() {
        $('.gene-img2').show()
        $('.hover-img2').hide()
    })
    $('.gene-img3').hover(function () {
        $('.gene-img3').hide()
        $('.hover-img3').show()
    },function() {
        $('.gene-img3').show()
        $('.hover-img3').hide()
    })
    $('.join').click(function () {
        window.location.href='join.html';
    })
    $('.channel').click(function () {
        window.location.href='channel.html';
    })
    $('.cooperation').click(function () {
        window.location.href = 'services.html'
    })
    $('.index-cooperation').click(function () {
        window.location.href = 'cooperation.html'
    })
    $('.index-about').click(function () {
        window.location.href = 'about.html'
    })
    $('.index-join').click(function () {
        window.location.href = 'join.html'
    })
    $('.index-mdh').click(function () {
        window.location.href = 'MDHcare.html'
    })
    $('.index-product').click(function () {
        window.location.href = 'product.html'
    })
    $('.index-channel').click(function () {
        window.location.href = 'channel.html'
    })
    $('.index-index').click(function () {
        window.location.href = 'index.html'
    })
})