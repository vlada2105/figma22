$(function() {
	var $menu_popup = $('.menu-popup');

	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu-popup').length){
			$('body').removeClass('body_pointer');
			$menu_popup.animate(
				{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
				300, 
				function(){
					$menu_popup.hide(0);
				}
			);
		}
	});
});

// смена фона desktop
document.getElementById("bike-color").addEventListener("change", () => {
	let checkbox = document.getElementById("bike-color");
	let container = document.getElementById("bikes");
	if (checkbox.checked) {
	container.style.background = "url(../img/bike-top-black.png) no-repeat";
	} else container.style.background = "url(../img/bike-top.png) no-repeat";
	
	})

// смена фона планшет
document.getElementById("bike-color").addEventListener("change", () => {
	let checkbox = document.getElementById("bike-color");
	let container = document.getElementById("bikes");
	if (checkbox.checked) {
	container.style.background = "url(../img/bike-top-black.png) no-repeat";
	} else container.style.background = "url(../img/bike-top.png) no-repeat";
	
	})

// плавный скролл desktop
$(document).ready(function(){
	$(".header__nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
// плавный скролл mob
$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});