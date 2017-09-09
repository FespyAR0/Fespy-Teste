$('.equipe-home .container > :first').addClass('active');


(function(){

function iniSlide(){

	var activeSlide = $('.slide_item.active'),
		nextSlide = activeSlide.next();

	if(nextSlide.length == 0){
		nextSlide = $('.equipe-home .container > :first');
	}

	activeSlide.removeClass('active');
	nextSlide.addClass('active');
}

setInterval(iniSlide, 6000);

})();