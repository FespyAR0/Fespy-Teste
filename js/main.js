$('.topic-btn').click(function(){
	$(this).toggleClass('active');
});


(function(){

function iniSlide(){

	var activeSlide = $('.slide_item.active'),
		nextSlide = activeSlide.next();

	if(nextSlide.length == 0){
		nextSlide = $('.slide > :first');
	}

	activeSlide.removeClass('active');
	nextSlide.addClass('active');
}

setInterval(iniSlide, 6000);

})();