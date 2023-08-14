$(function(){
	// DESLIZA MENU DE NAVEGAÇÃO
	
	$('.menu_navegacao').click(function(){
		
		$('.main_menu').slideToggle('slow');
		return false;
	});
	
	//DESLIZA O MENU PARALAX!
	$('.main_menu a').click(function(){
		var goto = $('.'+$(this).attr('href').replace('#','')).position().top;
		$('html,body').animate({scrollTop:goto - $('.main_header').outerHeight()},1000);
		console.clear();
		console.log(goto);
		return false;
	});
		
	// SUSPENDE MENU
	
	$(window).scroll(function(){
		
		if($(this).scrollTop() > $('.main_header').outerHeight()+150){
			$('body').css('padding-top',$('.main_header').outerHeight());
			$('.main_header').addClass('main_header_fixed');
			$('.j_back').fadeIn(500);
			
		}else{
			$('body').css('padding-top','0');
			$('.main_header').removeClass('main_header_fixed');	
			$('.j_back').fadeOut(500);
		}
		
	});
		
	//BACK TOPO
	$('.j_back').click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});
		
	//FORM SUBMIT
	$('.j_formsubmit').submit(function()
		{
			var dados = $(this).serialize();
			$.ajax(
			{
				url:'js/ajax.php',
				data:dados,
				type:'POST',
				dataType:'json',
				beforeSend: function()
				{
					$('.form_load').fadeIn();
				},
				success: function(data)
				{
					console.clear();
					console.log(data);
					$('.form_load').fadeOut();
						alert("Olá " + data.nome + ". Obrigado por enviar sua mensagem!");
				}
			});
			return false;
		});
		
			//FORM SUBMIT TRABALHE CONOSCO
	$('.j_formsubmit2').submit(function()
		{
			var dados = $(this).serialize();
			$.ajax(
			{
				url:'js/ajax2.php',
				data:dados,
				type:'POST',
				dataType:'json',
				beforeSend: function()
				{
					$('.form_load2').fadeIn();
				},
				success: function(data)
				{
					console.clear();
					console.log(data);
					$('.form_load2').fadeOut();
					alert("Olá " + data.nome + ". Obrigado por enviar sua mensagem! Entraremos em contato assim que uma vaga com o seu perfil surgir.");
				}
			});
			return false;
		});
		
});