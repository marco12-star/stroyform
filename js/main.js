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

bar.on('click', function () {
    html.toggleClass('show__menu')
})

/* this.years = function (startYear) {
    var currentYear = new Date().getFullYear(),
        years = [];
    startYear = startYear || 1980;
    const yearSelect = document.getElementById('yearSelect')
    while (startYear <= currentYear) {
        years.push(startYear++);
        var option = document.createElement("option")
        option.value = years
        option.text = years
        yearSelect.add(option, null);
    }
    return years;
}

console.log(this.years(2015)); */

var today = new Date();
var yyyy = today.getFullYear();
var startYear = 2016
var yearDif = yyyy - startYear
var content = '<option value="2015">2015</option>';

for (var x = 0; x <= yearDif; x++, startYear++) {
    content += '<option value="' + x + '">' + startYear + '</option>';
}
$('#yearSelect').append(content);

$(document).ready(function () {
    $('#addForm').submit(function () {
        $.ajax({
            data: $(this).serialize(),
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            success: function (response) {
                this.reset();
                console.log('cool')
            },
            fail: function (response) {
                this.reset();
                console.log('not cool')
            }
        });
        return false;
    });
});