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


	/* тэги на _block-selector */
	$(".blockSelector__link").on('click', function(){
		$(this).parent().toggleClass("state_selected");
		return false;
	});

	/* раскрывающиеся комменты */
	$(".comments__expandButton").on('click', function(){
		$(this).toggleClass("state_open");
		$(this).parentsUntil(".article").find(".commentsContent").toggleClass("state_open"); // здесь прописать класс раскрывающегося блока коммента
		return false;
	});
	


	/* ФИЛЬТР СТАТЕЙ*/
	var filtersListCounterElement = $(".categoryFilter__counter"),
		filterListWrapper = $(".filtersList__wrapper"),
		filtersListItems = $(".filtersList__item"),
		filtersListCounter = filtersListItems.filter('.state_selected').length,
		articlesWords = [' рубрика', ' рубрики', ' рубрик'],
		categoryFilterInfo = $(".categoryFilter__info");

	$(".categoryFilter__filter").on('click', function(){
		$(this).toggleClass("state_open");
		filterListWrapper.toggleClass("state_open");
		categoryFilterInfo.toggleClass("state_open");
		// if ($(this).hasClass("state_open")) {
		// 	categoryFilterWidth();
		// }
		return false;
	});

	$(".categoryFilter__closeFilter").on('click', function(){
		filterListWrapper.toggleClass("state_open");
		categoryFilterInfo.toggleClass("state_open");
		return false;
	});

	filterListWrapper.on('click', '.filtersList__item', function(e){
		var $this = $(e.currentTarget);
		$this.toggleClass("state_selected");
		filtersListCounterElement.text(($this.hasClass("state_selected") ? ++filtersListCounter : --filtersListCounter) + declOfNum(filtersListCounter, articlesWords));

		e.preventDefault();
	});

	filterListWrapper.on('click', '.view_allFilters', function(e){

		var $this = $(e.currentTarget),
			selectedAll = $this.data('selectedAll'),
			action = 'addClass',
			totalSelected = filtersListItems.length,
			state = 1;

		if (selectedAll) {
			action = 'removeClass';
			state = 0;
			totalSelected = 0;
			filtersListCounter = 0;
		}
		filtersListItems[action]("state_selected");
		$this.data('selectedAll', state);
		filtersListCounterElement.text(totalSelected + declOfNum(totalSelected, articlesWords));

		e.preventDefault();
	});

	// $(window).resize(function(){  
	// 	$(".categoryFilter__filter").removeClass("state_open");
	// 	$(".filtersList__wrapper").removeClass("state_open");
	// 	$(".categoryFilter__info").removeClass("state_open");
	// });

	// function categoryFilterWidth() {
	// 	var windowWidth = $(document).width();
	// 	var buttonLeft = $(".categoryFilter__filter").offset().left;
	// 	var buttonTop = $(".categoryFilter__filter").offset().top;
	// 	var contentWidth = $(".wrapper").width();
	// 	var calc = windowWidth - buttonLeft - (windowWidth - contentWidth)/2
	// 	$(".filtersList__wrapper").width(calc-60).offset({top:buttonTop+35, left:buttonLeft});
	// }






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





















	function declOfNum(number, titles) {
		var cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}

});




