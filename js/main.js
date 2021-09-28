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

function loadingAjax(div_id, user, date1, date2) {
    $("#" + div_id).html('<br><center><img src="images/loading.gif"><br><br><font color="#006699" face="arial" size="4"><b>Loading data<br>VPlease wait ...</b></font></center>');
    $.ajax({
        type: "POST",
        url: "activities.php?USER=" + user + "&DATE1=" + date1 + "&DATE2=" + date2,
        success: function (msg) {
            $("#" + div_id).html(msg);
        }
    });
}

/* this.years = function (startYear) {
    var currentYear = new Date().getFullYear(),
        years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}

console.log(this.years(2015)); */