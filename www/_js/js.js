$(document).ready(function() {














});






























$(function() {

	// ======================================
	// toolip
	// ======================================

	var popoverContent = $('.popoverLogin').remove().html();

    $(document).on('click', '.header__loginButton', function () {
    	$(this).attr('title', popoverContent).addClass("state_on");
        $(this).tooltip({
            items: '.header__loginButton.state_on',
            tooltipClass: 'popoverLogin',
            show: null, // show immediately 
            // hide: { effect: "" }, //fadeOut
            hide: null,
            position: {
            	my: "right top",
				at: "right bottom",
				of: ".headerPanel .wrapper"
            },
            content: function () {
	            return $(this).prop('title');
	        }
        });
        $(this).trigger('mouseenter');
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
        return false;
    });

	$(window).scroll(function() {
		$(".header__loginButton.state_on").tooltip('close').removeClass("state_on").attr('title', '');
	});
	$(window).resize(function(){
		$(".header__loginButton.state_on").tooltip('close').removeClass("state_on").attr('title', '');
	});

    //hide
    $(document).on('click', '.header__loginButton.state_on', function () {
        $(this).tooltip('close').removeClass("state_on").attr('title', '');
        return false;
    });
	$(document).click(function(event) {
		if ($(event.target).closest(".popoverLogin").length) return;
        $(".header__loginButton.state_on").tooltip('close').removeClass("state_on").attr('title', '');
		event.stopPropagation();
	});

    //prevent mouseout and other related events from firing their handlers
    $(".header__loginButton").on('mouseout', function (e) {
        e.stopImmediatePropagation();
    });



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

		$(".header__loginButton.state_on").tooltip('close').removeClass("state_on").attr('title', '');
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









	// var didScroll;
	// var lastScrollTop = 0;
	// var delta = 5;
	// var navbarHeight = $('.headerPanel').outerHeight();

	// $(window).scroll(function(event){
 //        $(".menu, .mobileMenuButton, .subMenu, .menu__link.view_menuIcon").removeClass("state_open");
	//     didScroll = true;
	// });

	// setInterval(function() {
	//     if (didScroll) {
	//         hasScrolled();
	//         didScroll = false;
	//     }
	// }, 200);

	// function hasScrolled() {
	//     var st = $(this).scrollTop();
	    
	//     // Make sure they scroll more than delta
	//     if(Math.abs(lastScrollTop - st) <= delta)
	//         return;
	    
	//     // If they scrolled down and are past the navbar, add class .nav-up.
	//     // This is necessary so you never see what is "behind" the navbar.
	//     if (st > lastScrollTop && st > navbarHeight){
	//         // Scroll Down
	//         $('.headerPanel').addClass('view_hidden');
	//         $(".sticked").css( { paddingTop: 0} );
	//     } else {
	//         // Scroll Up
	//         if(st + $(window).height() < $(document).height()) {
	//             $('.headerPanel').removeClass('view_hidden');
	// 	        $(".sticky").css( { paddingTop: 60} );
	//         }
	//     }
	    
	//     lastScrollTop = st;
	// }







	document.addEventListener('touchstart', handleTouchStart, false);        
	// document.addEventListener('touchend', handleTouchEnd, false);        
	document.addEventListener('touchmove', handleTouchMove, false);
	var navbarHeight = $('.headerPanel').outerHeight();

	var yDown = null;                                                        
	var lastScrollTop = 0;
	var currentScrollTop;
	var docHeight = $(document).height();

	function handleTouchStart(evt) {                                         
	    yDown = evt.touches[0].clientY;

    	lastScrollTop = $(this).scrollTop();

		$(window).scroll(function(event){
	    	currentScrollTop = $(this).scrollTop();

	    	if (currentScrollTop >= lastScrollTop) {
	    		if (currentScrollTop > navbarHeight) {
		    		$('.headerPanel').addClass('view_hidden');
		    	}
	    	} else {
	    		$('.headerPanel').removeClass('view_hidden');
	    	}
		});
	};                                                

	function handleTouchMove(evt) {
    	currentScrollTop = $(this).scrollTop();
	    // var scrollEdge = docHeight - $(window).height();

	    if ( !yDown ) {
	        return;
	    }

	    var yUp = evt.touches[0].clientY;
	    var yDiff = yDown - yUp;

        if ( yDiff > 0 ) {
        	/* вниз */
	    	if (currentScrollTop > navbarHeight) { /* не скрываем, пока проскроллили меньше высоты меню */
		    	$('.headerPanel').addClass('view_hidden'); 
	    	}
	    } else {
	    	/* вверх */
            $('.headerPanel').removeClass('view_hidden');
        }                                                                 
	    /* reset values */
	    yDown = null;  


	    // if (currentScrollTop <= scrollEdge) {
	    // 	if (currentScrollTop > lastScrollTop) {
	    // 		$('.headerPanel').addClass('view_hidden');
	    // 	} else {
	    // 		$('.headerPanel').removeClass('view_hidden');
	    // 	}
	    // }

	};



	// function handleTouchEnd(evt) {
 //    	currentScrollTop = $(this).scrollTop();
 //    	if (currentScrollTop > lastScrollTop) {
 //    		if (currentScrollTop > navbarHeight) {
	//     		$('.headerPanel').addClass('view_hidden');
	//     	}
 //    	} else {
 //    		$('.headerPanel').removeClass('view_hidden');
 //    	}
	// };




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
	        threshold: 50,
	        breakpoints: {
	            1279: {
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
	        // resistanceRatio: 0,
	        nested: true,
	        autoplay: 3000,
	        // observeParents: true,
	        observer: true,
	        setWrapperSize: true,
	        autoplayDisableOnInteraction: false
	    });

		var doingResize = false;

		$(window).resize(function(event){
		    doingResize = true;
		});

		setInterval(function() {
		    if (doingResize) {
		        imagesSlider.updateSlidesSize();
		        doingResize = false;
		    }
		}, 100);
    })


    $('.view_opinion').each(function () {
	    var opinionSlider = new Swiper($(this), {
	        nextButton: $(this).find('.opinion-button-next'),
	        prevButton: $(this).find('.opinion-button-prev'),
	        nested: true,
	        observer: true,
	        resistanceRatio: 0,
	        setWrapperSize: true,
	        autoplayDisableOnInteraction: false,

	    });

	    /* текущиф слайд */
	    var currentPlaceholder = $(this).find('#opinion__slideCurrent')
		currentPlaceholder.html(opinionSlider.activeIndex + 1);

		opinionSlider.on('SlideChangeEnd', function () {
		    currentPlaceholder.html(opinionSlider.activeIndex + 1);
		});

		/* сколько всего */
		var slides = opinionSlider.slides.size();
		$(this).find('#opinion__slideTotal').html(slides);


		/* ресайз */
		var doingResize = false;

		$(window).resize(function(event){
		    doingResize = true;
		});

		setInterval(function() {
		    if (doingResize) {
		        opinionSlider.updateSlidesSize();
		        doingResize = false;
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

		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		$(".header__loginButton.state_on").tooltip('close').removeClass("state_on").attr('title', '');
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
  // 			$(this).removeClass("hideOn_1024se  // 			visibilityFlag += "hideOn_1024 ";
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


	var iscrollWrapper = $('.iscroll');
	// var iscroll = [];
	var el;
	for (var i = 0; i < iscrollWrapper.length; i++) {
		el = iscrollWrapper[i];

		/* подгоняем высоту */
		var headerHeight = 0;
    	var footerHeight = 0; 
    	headerHeight += $(el).parent().find(".brick__header").outerHeight();
    	footerHeight += $(el).parent().find(".brick__footer").outerHeight();
		var height = $(el).parent().innerHeight() -
					  headerHeight -
					  footerHeight;
		$(el).height(height);

		var iscrollInstance = new IScroll(el, {
		    scrollbars: true,
		    // disableMouse: false,
		    mouseWheel: true,
		    // momentum: false,
		    fadeScrollbars: true,
		    interactiveScrollbars: true,
		    bindToWrapper: true

		});
		// iscroll.push(iscrollInstance);
	};
	// console.log(iscroll)








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
	    top: 80,
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




