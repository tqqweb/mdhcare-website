$(function () {
    $('.train-img1').hover(function () {
        $('.train-shadow1').show()
    },function () {
        $('.train-shadow1').hide()
    })
    $('.train-img2').hover(function () {
        $('.train-shadow2').show()
    },function () {
        $('.train-shadow2').hide()
    })
    $('.train-img3').hover(function () {
        $('.train-shadow3').show()
    },function () {
        $('.train-shadow3').hide()
    })
    $('.train-img4').hover(function () {
        $('.train-shadow4').show()
    },function () {
        $('.train-shadow4').hide()
    })
    $('.train-img5').hover(function () {
        $('.train-shadow5').show()
    },function () {
        $('.train-shadow5').hide()
    })
    $('.many').click(function () {
        $('.position-boss').show();
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