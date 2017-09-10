// $('.equipe-home .container > :first').addClass('active');


// (function(){

// function iniSlide(){

// 	var activeSlide = $('.slide_item.active'),
// 		nextSlide = activeSlide.next();

// 	if(nextSlide.length == 0){
// 		nextSlide = $('.equipe-home .container > :first');
// 	}

// 	activeSlide.removeClass('active');
// 	nextSlide.addClass('active');
// }

// setInterval(iniSlide, 6000);

// })();


Visibility.onVisible(function(){

	setInterval(function () {
		$(".intro-home .titulo-2").addClass("active");
	}, 800);

	setTimeout(function () {
		$(".intro-home .align-3").addClass("active");
	}, 1800);

	setTimeout(function () {
		$(".intro-home .align-2").addClass("active");
	}, 1400);

	setInterval(function () {
		$(".intro-home img").addClass("active");
	}, 3300);

	setInterval(function () {
		$(".intro-home img").attr("data-anime", "flutuar");
	}, 3000);
});


// MENU MOBILE //
$('.mobile-btn').click(function(){
	$(this).toggleClass('active'),
	$('.nav').toggleClass('active');
});




// MENU DESKTOP //
$('.pdes-btn').click(function(){
	$(this).toggleClass('active'),
	$('.menu-pdes').toggleClass('active'),
	$('.des-1').toggleClass('active'),
	$('.des-2').toggleClass('active'),
	$('.des-3').toggleClass('active'),
	$('.des-4').toggleClass('active');
});