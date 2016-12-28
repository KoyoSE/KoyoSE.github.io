$(document).ready(function () {
	var css = {
		transition: 'all 2s ease-in-out',
		transform: 'translate(0px, 50px)'
	};
	$('.slidePanel').css(css);
});

// Smooth scroll
$('a[href^="#"]').click(function () {
	var speed = 800;
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({ scrollTop: position }, speed, "swing");
	return false;
});