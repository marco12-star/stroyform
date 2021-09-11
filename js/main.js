var TopBtn = $('#TopBtn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        TopBtn.addClass('show');
    } else {
        TopBtn.removeClass('show');
    }
});

TopBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

let bar = $('#bar')
let html = $('html')
let overlayMenu = $('.overlay__menu')

bar.on('click', function() {
    html.toggleClass('show__menu')
})
