$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("#MM").removeClass("mm").addClass("mm2");
			$("#MN").removeClass("middle").addClass("middle2");
        }
        else {
            $("#MM").removeClass("mm2").addClass("mm");
			$("#MN").removeClass("middle2").addClass("middle");
        }
    });
});