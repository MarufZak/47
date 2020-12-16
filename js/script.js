$('.ask').on('click',function (param) {  
    param.preventDefault()
    $(this).next().slideToggle()
    $('.ask').next().not($(this).next()).slideUp()
    $(this).toggleClass('active')
    $('.ask').not($(this)).removeClass('active')
})

$('.js-filter').click(function (param) {  
    param.preventDefault()
    $('.js-filter-card[data-filter]').slideUp()
    let color = $(this).attr('data-filter')
    $(`.js-filter-card[data-filter=${color}]`).slideDown()
    if (color == 'all') {
        $('.js-filter-card[data-filter]').slideDown()
    }
})


function typing(element) {
    let inner = $(element).html()
    let fullText = '';
    let counter = 0
    let interval = setInterval(() => {
        fullText += inner[counter]
        $(element).html(fullText)
        counter++
        if (fullText == inner) {
            clearInterval(interval)
            setTimeout(() => {
                typing(element)
            }, 1000);
        }
    }, 150);
}

typing('h1')

$('.js-modal-show').click(function (param) {  
    param.preventDefault()
    $('.modal').fadeIn(500)
})

$('.close').click(function (param) {  
    param.preventDefault()
    $('.modal').fadeOut(500)
})

$('.modal').click(function (e) {  
    // console.log(e);
    if (e.target == this) {
        $('.modal').fadeOut()
    }
})


$('.nav').css({
    position: 'fixed',
    width: '100%',
    top: $(window).height() - $('.nav').outerHeight(),
    zIndex : '999'
})

$(window).on('scroll',function () {  
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
    if (editPosition > 0) {
        $('.nav').css('top',editPosition)
    } else {
        $('.nav').css('top',0)
    }
})



// ========================================== дз ===================================================



$('.read-more').click(function (param) {  
    param.preventDefault()
    $('.text-hidden').toggleClass('hidden')
    if ($('.text-hidden').hasClass('hidden')) {
        $('.read-more').html('Read More')
    } else {
        $('.read-more').html('hide')
    }
})

$(window).on('scroll',function (param) {  
    param.preventDefault()
    if ($(window).scrollTop() > 100) {
        $('.js-btn-top').removeClass('hidden').css('bottom', 30)
        $('.js-btn-top').click(function (param) {  
            // param.preventDefault()
            $('html').stop().animate({
                scrollTop: 0
            })
        })
    } else {
        $('.js-btn-top').addClass('hidden')
        $('.js-btn-top').addClass('hidden').css('bottom', '-100%')
    }
    // console.log(1);
})

/* Задание 1
При нажатии на ссылку “Read More” у текста с классом “text-hidden” должен удалиться класс “hidden”, чтобы отобразился текст. А у ссылки должен поменяться текст на “Hidden”. При повторном нажатии на эту же ссылку текст должен опять скрыться и у ссылки должен вернуться текст по умолчанию.

Задание 2
Вашим домашним заданием будет сделать появление кнопки вверх с классом “js-btn-top”, если проскролили на 100px и чтобы при нажатии на нее пользователя плавно поднимало наверх. */