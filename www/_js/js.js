$(document).ready(function() {

















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
	$(document).click(function(event) {
		if ($(event.target).closest(".menu__link.view_menuIcon, .subMenu .tagList").length) return;
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		event.stopPropagation();
	});


	/* скролл */
    // var $centerHeadBar = $('.headerPanel');
    // var headerHeight = $centerHeadBar.height();
    // var headerPosition = $centerHeadBar.offset().top;
    // var headerInitialPosition = headerPosition;
    // var lastPosition = 0;
    // var scrollUp = false;
    // var compensation;


    // $(window).scroll(function() {
    //     $(".menu, .mobileMenuButton, .subMenu, .menu__link.view_menuIcon").removeClass("state_open");
    //     var position = $(window).scrollTop();
    //     if (lastPosition > position) {
    //     	// скролл вверх
    //         // if (position <= headerInitialPosition) {
    //             // $centerHeadBar.css( { position: 'static', top: '0px' } );
    //         // } else {
    //             if (!scrollUp) {
    //                 headerPosition = position - headerHeight;
    //                 // $centerHeadBar.css( { position: 'fixed', top: headerPosition + 'px' } );
    //                 $centerHeadBar.css( { position: 'absolute', top: headerPosition + 'px' } );
    //             } else {
    //                 if (position <= headerPosition) {
    //                     $centerHeadBar.css( { position: 'fixed', top: '0px' } );
    //                     // $centerHeadBar.css( { position: 'absolute', top: position } );
    //                 }
    //             }

		  //       compensation = headerHeight - position + headerPosition;
		  //       compensation = compensation < 60 ? compensation : 60;
		  //       $(".sticked ").css( { paddingTop: compensation} );
    //         // }
    //         scrollUp = true;
    //     } else {
    //     	// скролл вниз
    //         scrollUp = false;
    //         headerPosition = $centerHeadBar.offset().top;
    //         $centerHeadBar.css( { position: 'absolute', top: headerPosition + 'px' } );
			       
	   //      compensation = headerHeight - position + headerPosition;
	   //      compensation = compensation < 0 ? 0 : compensation;
	   //      $(".sticked ").css( { paddingTop: compensation} );
    //     }


    //     lastPosition = position;
    // });

	// var shown = true;
 //    $(window).scroll(function() {
 //        $(".menu, .mobileMenuButton, .subMenu, .menu__link.view_menuIcon").removeClass("state_open");
 //        var position = $(window).scrollTop();
 //        if (lastPosition > position) {

 //            headerPosition = position - headerHeight;
 //            $centerHeadBar.css( { position: 'fixed', top: 0 } );
 //            if (!shown) {
	//             $centerHeadBar.stop().slideDown(100);
	//             shown = true;
 //            }
 //            scrollUp = true;
 //        } else {
 //            scrollUp = false;
 //            headerPosition = $centerHeadBar.offset().top;
 //            // $centerHeadBar.css( { position: 'absolute', top: headerPosition + 'px' } );
 //            if (shown) {
	//             $centerHeadBar.stop().slideUp(100);
	//             shown = false;
 //            }
 //        }
 //        lastPosition = position;
 //    });



	// $('.headerPanel').hcSticky({
	// 	stickTo: document,
	// 	followScroll: false,
	// });


	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.headerPanel').outerHeight();

	$(window).scroll(function(event){
        $(".menu, .mobileMenuButton, .subMenu, .menu__link.view_menuIcon").removeClass("state_open");
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 400);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.headerPanel').removeClass('nav-down').addClass('nav-up');
	        $(".sticked").css( { paddingTop: 0} );
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.headerPanel').removeClass('nav-up').addClass('nav-down');
		        $(".sticky").css( { paddingTop: 60} );
	        }
	    }
	    
	    lastScrollTop = st;
	}



	// ======================================
	// тэги на _block-selector
	// ======================================
	$(".blockSelector__link").on('click', function(){
		$(this).parent().toggleClass("state_selected");
		return false;
	});




	// ======================================
	// раскрывающиеся комменты
	// ======================================
	$(".comments__expandButton").on('click', function(){
		$(this).toggleClass("state_open");
		$(this).parentsUntil(".article").find(".commentsContent").toggleClass("state_open"); // здесь прописать класс раскрывающегося блока коммента
		return false;
	});
	




	// ======================================
	// слайдер
	// ======================================


    $('.pageSwiper').each(function () {
	    var pageSwiper = new Swiper($(this), {
	        nextButton: $(this).parent().find('.swiper-button-next'),
	        prevButton: $(this).parent().find('.swiper-button-prev'),
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




    $('.slider').each(function () {
	    var imagesSlider = new Swiper($(this), {
	        pagination: $(this).find('.swiper-pagination'),
	        paginationClickable: true,
	        loop: true,
	        nested: true,
	        // width: 616,
	        // autoplay: 3000,
	        // observeParents: true,
	        observer: true,
	        setWrapperSize: true,
	        autoplayDisableOnInteraction: false
	    });

		var doingScroll = false;

		$(window).scroll(function(event){
		    doingScroll = true;
		});

		setInterval(function() {
		    if (doingScroll) {
		        imagesSlider.updateSlidesSize();
		        doingScroll = false;
		    }
		}, 100);

    })


	// фикс для бага с шириной слайдера внутри таблицы
	// var doingScroll = false;

	// $(window).scroll(function(event){
	//     doingScroll = true;
	// });

	// setInterval(function() {
	//     if (doingScroll) {
	//         sliderWidth();
	//         doingScroll = false;
	//     }
	// }, 100);

	// function sliderWidth() {
	// 	$('.table__mainColumn .slider').hide();
	// 	var windowWidth = $(document).width();
	// 	if (windowWidth >= 1024  && windowWidth <= 1040) {
	// 		var sliderWidth = $('.table__mainColumn .slider').parent().width();
	// 		$('.table__mainColumn .slider').width(sliderWidth);
	// 	}
	// 	if (windowWidth < 1024 || windowWidth > 1040) {
	// 		$('.table__mainColumn .slider').width("");
	// 	}
	// 	$('.table__mainColumn .slider').show();
	// }; 
	// sliderWidth();





	// ======================================
	// ФИЛЬТР СТАТЕЙ 
	// ======================================

	var filtersListCounterElement = $(".categoryFilter__counter"),
		filterListWrapper = $(".filtersList__wrapper"),
		filtersListItems = $(".filtersList__item"),
		filtersListCounter = filtersListItems.filter('.state_selected').length,
		articlesWords = [' рубрика', ' рубрики', ' рубрик'],
		categoryFilterInfo = $(".categoryFilter__info");

	$(".categoryFilter__filter").on('click', function(){
		var width = $(".categoryFilter__widthAdjuster").parent().width() -
					$(".categoryFilter__widthAdjuster").innerWidth() - 60;
		$(".filtersList__wrapper").width(width);
		$(this).toggleClass("state_open");
		filterListWrapper.toggleClass("state_open");
		categoryFilterInfo.toggleClass("state_open");
		// if ($(this).hasClass("state_open")) {
		// 	categoryFilterWidth();
		// }
		return false;
	});

	$(".categoryFilter__wrapper .closeButtom").on('click', function(){
		filterListWrapper.toggleClass("state_open");
		categoryFilterInfo.toggleClass("state_open");
		return false;
	});

	$(window).resize(function(){
		$(".categoryFilter__filter").removeClass("state_open");
		filterListWrapper.removeClass("state_open");
		categoryFilterInfo.removeClass("state_open");
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



	function declOfNum(number, titles) {
		var cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}





	// ======================================
	// search field 
	// ======================================


	$(".header__searchButton").click(function(){
		var width;
		if ($(".menu:visible").length != 0) {
			width = $(".menu").outerWidth(true) +
						$(".header__loginButton").outerWidth(true) +
						$(".header__searchButton").outerWidth(true);
		} else {
			width = $(".headerPanel .wrapper").width() - 
				$(".mobileMenuButton").outerWidth(true) -
				$(".mainLogo").outerWidth(true) - 40;
		}
		// console.log($(".headerPanel .wrapper").width())
		// console.log($(".mobileMenuButton").outerWidth(true))
		// console.log($(".mainLogo").outerWidth(true))
		$(".headerSearch").width(width);
		$(".headerSearch__form").show().animate({
			width: "100%",
			opacity: 1
		}, 300 );
		$(".headerSearch__form .search__input").focus();
		return false;
	});

	function searchClose () {
		$(".headerSearch__form").stop().animate({
			width: "0%",
			opacity: 0
		}, 200 );
		$(".headerSearch__form .search__input").blur();
	}

	$(".headerSearch .closeButtom").on('click', function(){
		searchClose();
		return false;
	});	

	$(document).click(function(event) {
		if ($(event.target).closest(".headerSearch__form").length) return;
		searchClose();
		event.stopPropagation();
	});

	$(window).resize(function(){
		searchClose();
	});






	// ======================================
	// датапикер 
	// ======================================

  	$( ".datepicker" ).datepicker({
      dateFormat: "dd.mm.yy",
    });





	// ======================================
	// новости в желтой плитке по высоте 
	// ======================================

  // 	$( ".view_yellow" ).each(function(){
		// var visibilityFlag = "";
  // 		if ( $(this).hasClass("hideOn_1280")) {
  // 			$(this).removeClass("hideOn_1280");
  // 			visibilityFlag += "hideOn_1280 ";
  // 		}
  // 		if ( $(this).hasClass("hideOn_1024")) {
  // 			$(this).removeClass("hideOn_1024");
  // 			visibilityFlag += "hideOn_1024 ";
  // 		}
  // 		if ( $(this).hasClass("hideOn_768")) {
  // 			$(this).removeClass("hideOn_768");
  // 			visibilityFlag += "hideOn_768 ";
  // 		}
  //   	if ( $(this).has(".newsList").length) {

  //   		var brickHeight = $(this).innerHeight();

	 //    	var headerHeight = 0;
	 //    	var footerHeight = 0;
	 //    	headerHeight += $(this).find(".brick__header").outerHeight();
	 //    	footerHeight += $(this).find(".brick__footer").outerHeight();

	 //    	var newslistHeight = $(this).find(".newsList").height();

	 //    	var sumHeight = headerHeight + footerHeight + newslistHeight;

	 //    	var lastDetached;
		// 	while (sumHeight > brickHeight) {
		// 		lastDetached = $(this).find(".newsList li").last().detach();
		// 		newslistHeight = $(this).find(".newsList").height();
		// 		sumHeight = headerHeight + footerHeight + newslistHeight;
		// 	}
		// 	lastDetached.appendTo( $(this).find(".newsList") ); // возвращаем последний удаленный

  //  		}
  //  		if (visibilityFlag != "") {
  //  			$(this).addClass(visibilityFlag);
  //  		}
  //   });




	// ======================================
	// подключаем табы
	// ======================================


    $( ".tabs__wrapper" ).tabs();





	// ======================================
	// плавающий блок
	// ======================================

	// function stickyHeight() {
	// 	// console.log(1)
	// }
	// setTimeout(function(){		
	// 	stickyHeight();
	// }, 1000);
	$(window).load(function(){
		var height = $(".hcSticky__scrollable").parent().height() -
					$(".hcSticky__scrollable").height()
		$(".hcSticky__sticky").height(height)	
	})

	$('.sticked').hcSticky({
		stickTo: ".hcSticky__sticky",
		// onStart: stickyHeight(),
	    top: 20,
	    // bottomEnd: 100,
	    // wrapperClassName: 'sidebar-sticky'
	});


	/* показываем в зависимости от позиции */
	var slides = $(".stickedSlide");

	if (slides.length) {


		var anchors = $(".stickedSlideHere");
		var showHeightsArray = [];
		showHeightsArray[0] = 0; // просто, чтоб забить неиспользуемую ячейку

		anchors.each(function(){
			var slideNum = $(this).attr("data-stickedSlideHere")
			showHeightsArray[slideNum] = $(this).offset().top;
		})
		var heightsNum = showHeightsArray.length;

	    $(window).scroll(function() {

	    	var position = $(window).scrollTop();

			var i;
			for (i = 0; i < heightsNum; i++) {
					if (position > showHeightsArray[i]) {
						slides.hide();
						$(slides[i]).show();
					}					
			}




	    });

	}






	// ======================================
	// разворачиваюзиеся блоки (tags page)
	// ======================================


	$(".hider").on('click', function () {

		var what = $(this).attr("data-id");

		$("#"+what).slideToggle(150).toggleClass("state_hidderHidden");
		$(this).find("span").toggleClass("state_hidderHidden");

		return false;
	})

});




