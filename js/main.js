
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


$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 5000);

    setTimeout(function(){
        $('#loading-screen img').addClass('anima');
    }, 200);

    setTimeout(function(){
    	$('#loading-screen img').removeClass('anima');
        $('#loading-screen img').addClass('anima-f');
    }, 3700);

    setTimeout(function(){
        $('.web').addClass('anima');
    }, 400);

    setTimeout(function(){
        $('.web').removeClass('anima');
    }, 3200);


    setTimeout(function(){
        $('.loader div').addClass('anima');
    }, 400);

    setTimeout(function(){
        $('.loader div').removeClass('anima');
    }, 3200);

    setTimeout(function(){
        $('.loader span').addClass('anima');
    }, 1000);

    setTimeout(function(){
        $('.loader span').removeClass('anima');
    }, 3200);



    
 
});