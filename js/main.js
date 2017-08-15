// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
// 2 - Ditância entre o elemento e o topo
// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// 5 - A classe deve mostrar e animar o elemento

$(window).scroll(function() {
	var windowTop = $(this).scrollTop();
	$('.anime').each(function(){
		if(windowTop > $(this).offset().top - 3/4 * windowTop) {
			$(this).addClass('anime-init');
		}
	});
});



$('.mobile-btn').click(function(){
	$('.header_menu').toggleClass('active');
});



Visibility.onVisible(function(){
	// INDEX //
	setTimeout(function () {
		$(".banner_imagem").addClass("fade");
	}, 300);
	setTimeout(function () {
		$(".banner_texto h1").addClass("fadeT");
	}, 400);
	setTimeout(function () {
		$(".banner_texto p").addClass("fadeT");
	}, 650);
	setTimeout(function () {
		$(".banner .call").addClass("fadeT");
	}, 850);
	// </INDEX>

	// SERVICOS, SOBRE //
	setTimeout(function () {
		$(".titulo_icon h1").addClass("fadeT");
	}, 50);
	setTimeout(function () {
		$(".titulo_icon img").addClass("fadeT");
	}, 200);
	// </SERVICOS, SOBRE> //

	// PRODUTOS //
	setTimeout(function () {
		$(".mod_txt .titulo h1").addClass("fadeT");
	}, 300);
	setTimeout(function () {
		$(".mod_txt .subtitulo h2").addClass("fadeT");
	}, 450);
	setTimeout(function () {
		$(".imgmod img").addClass("fadeT");
	}, 600);
	setTimeout(function () {
		$(".infomod_txt").addClass("fade");
	}, 600);
	setTimeout(function () {
		$(".infomod_img").addClass("fade");
	}, 600);
	// </PRODUTOS> //

	// SERVICOS //
	setTimeout(function () {
		$(".autor .titulo h1").addClass("fade");
	}, 600);
	setTimeout(function () {
		$(".serv_txt").addClass("fade");
	}, 600);
	setTimeout(function () {
		$(".serv_img").addClass("fade");
	}, 600);
	// </SERVICOS> //
	

	setTimeout(function () {
		$(".sobre_txt").addClass("fade");
	}, 600);



	
});