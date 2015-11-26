$(document).ready(function() {

    $('.slider').each(function () {
	    var pageSwiper = new Swiper($(this), {
	        pagination: $(this).find('.swiper-pagination'),
	        paginationClickable: true,
	        autoplay: 3000,
	        autoplayDisableOnInteraction: false
	    });
    })

	$(window).resize(function(){  
		setTimeout(function(){		
			sliderWidth();
		}, 40);
	});

	function sliderWidth() {
		$('.slider').hide();
		var windowWidth = $(document).width();
		if (windowWidth <= 1023 ) {
			var sliderWidth = $('.slider').parent().width();
			$('.slider, .slider__image').width(sliderWidth);
		}
		$('.slider').show();
	}; 
	sliderWidth();






    $('.pageSwiper').each(function () {
	    var pageSwiper = new Swiper($(this), {
	        nextButton: $(this).parent().find('.swiper-button-next'),
	        prevButton: $(this).parent().find('.swiper-button-prev'),
	        hashnav: true,
	        spaceBetween: 16,
	        breakpoints: {
	            1296: {
	                spaceBetween: 22
	            },
	            1040: {
	                spaceBetween: "2%",
	                grabCursor: true
	            },
	            1023: {
	                spaceBetween: "3%",
	                grabCursor: true
	            }
	        }
	    });
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



