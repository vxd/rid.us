$(document).ready(function() {

    var swiper = new Swiper('.slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // spaceBetween: 30,
        centeredSlides: true,
        // autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

});






























$(function() {



	// ======================================
	// меню 
	// ======================================

	/* мобильное МЕНЮ */
	$(".mobileMenuButton").on('click', function(){
		$(this).toggleClass("state_open");
		$(".menu").toggleClass("state_open");
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		return false;
	});

	/* меню ЕЩЕ */
	$(".menu__link.view_menuIcon").on('click', function(){
		$(this).toggleClass("state_open");
		$(".subMenu").toggleClass("state_open");
		return false;
	});

	/* поле поиска */
	$(".header__searchButton, .headerSearch__input").on('click', function(){
		$(".headerSearch__form").fadeIn(220);
		$(".headerSearch__input").focus();
		return false;
	});
	$("body, button:not(.headerSearch__button)").on('click', function(){
		$(".headerSearch__form").fadeOut(150);
		$(".headerSearch__input").blur();
		return true;
	});
	$(".headerSearch__button").on('click', function(){
		console.log( "search:" + $(".headerSearch__input").val() )
		return true;
	});
	$(window).resize(function(){
		$(".headerSearch__form").fadeOut(50);
		$(".headerSearch__input").blur();
	});


	// ======================================
	// датапикер 
	// ======================================

  	$( ".datepicker" ).datepicker({
      dateFormat: "dd.mm.yy",
    });



});



