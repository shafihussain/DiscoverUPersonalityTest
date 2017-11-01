//--Scrolling Progress bar--
$(window).scroll(function () {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var distanceToTop = $(window).scrollTop();
    var percentScrolled = distanceToTop / (documentHeight - windowHeight) * 100;
    $('#progress-bar').css({
        'width': percentScrolled + '%'
    });
});

//Function to set the cookie
function setCookie(cname, cvalue, cdays) {
    var expires
    if (cdays) {
        var date = new Date();
        date.setTime(date.getTime() + (cdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + date.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Function to get the cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
