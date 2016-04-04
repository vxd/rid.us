$(document).ready(function() {

});


$(function() {
	// для десктопов - клик, для тачскринов - тачстарт
	var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");



	// ======================================
	// Попапы http://dinbror.dk/blog/bPopup
	// ======================================



	// ======================================
	// IScroll
	// ======================================

	$(window).load(function(){
	/* обертка - чтобы просчитал высоту только после полного рендеринга элементов */

		var iscrollWrapper = $('.iscroll');
		window.globalstorage = {
			iscroll: []
		};
		var el;
		for (var i = 0; i < iscrollWrapper.length; i++) {
			el = iscrollWrapper[i];

			var iscrollInstance = new IScroll(el, {
			    scrollbars: true,
			    // disableMouse: false,
			    mouseWheel: true,
			    // momentum: false,
			    fadeScrollbars: true,
			    interactiveScrollbars: true,
			    bindToWrapper: true
			});
			window.globalstorage.iscroll.push(iscrollInstance);
		}
		// console.log(window.globalstorage.iscroll)

	});



	// ======================================
	// ios switch - http://abpetkov.github.io/switchery/
	// ======================================

	if ($('.js-switch').length) {

		var jsSwitchElems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

		jsSwitchElems.forEach(function(html) {
		  var switchery = new Switchery(html);
		});

	}

	if ($('.js-switch-socials').length) {
		var jsSwitchSocialsElems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-socials'));

		jsSwitchSocialsElems.forEach(function(html) {
		  var switchery = new Switchery(html, {
		  	size: 'small'
		  });
		});

		/* изменяющиеся лэйблы по клику */ 
		function checkLabel() {

			var changeCheckboxWrapper = $(".myprofileSocials__switchWrapper");

			changeCheckboxWrapper.each(function(){
				var checkbox = $(this).find(".js-switch-socials");
				var label = $(this).find(".myLabel");
				if ($(checkbox).is(":checked")) {
					label.addClass("view_online");
				} else {
					label.removeClass("view_online");
				}
			})
		}

		checkLabel();

		$('.js-switch-socials').change(function() {
			checkLabel();
		});
	}

	if ($('.js-switch-gender').length) {
		var genderSwitch = document.querySelector('.js-switch-gender');
		var genderSwitchery = new Switchery(genderSwitch, {
			color: '#fC73d0',
			secondaryColor: '#69A1E2'
			// jackColor: '#fff'
		});
	}



	// ======================================
	// меню 
	// ======================================

	/* мобильное МЕНЮ */
	$(".mobileMenuButton").on(clickHandler, function(){
		$(this).toggleClass("state_open");
		$(".menu").toggleClass("state_open");
		searchClose();
		$(".popover__wrapper, .header__loginButton").removeClass("state_open");
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		return false;
	});

	/* меню ЕЩЕ */
	$(".menu__link.view_menuIcon").on(clickHandler, function(){
		$(this).toggleClass("state_open");
		$(".subMenu").toggleClass("state_open");

		$(".popover__wrapper, .header__loginButton").removeClass("state_open");
		return false;
	});
	$(document).on(clickHandler, function(event) {
		if ($(event.target).closest(".menu__link.view_menuIcon, .subMenu .tagList").length) return;
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		event.stopPropagation();
	});


	/* логин */
	$(".header__loginButton, .menu__link.view_enter").on(clickHandler, function(){
		$(this).toggleClass("state_open");
		$(".popover__wrapper").toggleClass("state_open");

		searchClose();
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		return false;
	});

	$(document).on(clickHandler, function(event) {
		if ($(event.target).closest(".header__loginButton, .popoverLogin").length) return;
		$(".popover__wrapper, .header__loginButton").removeClass("state_open");
		event.stopPropagation();
	});

	$(window).resize(function(){
		$(".popover__wrapper, .header__loginButton").removeClass("state_open");
	});



	// ======================================
	// search field 
	// ======================================

	$(".header__searchButton, .menu__link.view_search").on(clickHandler, function(event){
		$(".headerSearch__form").show().animate({
			width: "100%",
			opacity: 1
		}, 300, function(){
		});
			$(".headerSearch__form .search__input").focus();	

		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		$(".popover__wrapper, .header__loginButton").removeClass("state_open");
		return false;
	});

	function searchClose () {
		$(".headerSearch__form .search__input").blur();
		$(".headerSearch__form").stop().animate({
			width: "0%",
			opacity: 0
		}, 200 );
	}

	$(".headerSearch .closeButton").on(clickHandler, function(){
		searchClose();
		return false;
	});	

	$(document).on(clickHandler, function(event) {
		if ($(event.target).closest(".headerPanel").length ) {
			return;
		} else {
			if (!window.chrome) {
				searchClose();

			}
		}
		event.stopPropagation();
	});



	// ======================================
	// скролл 
	// ======================================

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



	// var didScroll;
	// var lastScrollTop = 0;
	// var delta = 5;
	// var floatingHeight = $('.headerPanel').outerHeight();

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
	//     if (st > lastScrollTop && st > floatingHeight){
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

	var floatingBlockSpace;


	if ($('.floatingPanel').length) {

		handleFloatingPanel();

	}

	function handleFloatingPanel(){
		var floatingTarget = $(".floatingPanel");

		//document.addEventListener('touchstart', handleTouchStart, false);
		//document.addEventListener('touchend', handleTouchEnd, false);
		//document.addEventListener('touchmove', handleTouchMove, false);
		var floatingHeight = floatingTarget.outerHeight();

		var yDown = null;
		var lastScrollTop = 0;
		var currentScrollTop;
		// var docHeight = $(document).height();
		floatingBlockSpace = 80;

		// для десктопов
		if (clickHandler == "click") {
			$(window).scroll(function(event){
				currentScrollTop = $(this).scrollTop();
				if (currentScrollTop > floatingHeight) {
					floatingTarget.addClass('view_scrolling');
				} else {
					floatingTarget.removeClass('view_scrolling');
				}
			});
		}

		function handleTouchStart(evt) {
			yDown = evt.touches[0].clientY;

			lastScrollTop = $(this).scrollTop();

			// дублируем детектом скролла - он посчитается после завершения скролла
			$(window).scroll(function(event){
				currentScrollTop = $(this).scrollTop();

				if (currentScrollTop >= lastScrollTop) {
					if (currentScrollTop > floatingHeight) {
						floatingTarget.addClass('view_hidden');
					}
				} else {
					floatingTarget.removeClass('view_hidden');
				}
			});
		}

		function handleTouchMove(evt) {
			currentScrollTop = $(this).scrollTop();
			// var scrollEdge = docHeight - $(window).height();

			// floatingTarget.html(currentScrollTop)

			if ( !yDown ) {
				return;
			}

			var yUp = evt.touches[0].clientY;
			var yDiff = yDown - yUp;

			if ( yDiff > 0 ) {
				// вниз
				$(".popover__wrapper, .header__loginButton").removeClass("state_open");
				if (currentScrollTop > floatingHeight) {
					// скрываем, только если проскроллили больше высоты меню
					floatingTarget.addClass('view_hidden');
					floatingBlockSpace = 20;
					// $(".sticked.state_floating").css({top: 20})
				}
			} else {
				// вверх
				floatingTarget.removeClass('view_hidden');
				floatingBlockSpace = 80;
			}
			// reset
			yDown = null;


			// if (currentScrollTop <= scrollEdge) {
			// 	if (currentScrollTop > lastScrollTop) {
			// 		floatingTarget.addClass('view_hidden');
			// 	} else {
			// 		floatingTarget.removeClass('view_hidden');
			// 	}
			// }

		}

		function handleTouchEnd(evt) {
			//    	currentScrollTop = $(this).scrollTop();
			//    	if (currentScrollTop > lastScrollTop) {
			//    		if (currentScrollTop > floatingHeight) {
			//     		floatingTarget.addClass('view_hidden');
			//     	}
			//    	} else {
			//    		floatingTarget.removeClass('view_hidden');
			//    	}
		}
	}



	// ======================================
	// плавающие социалки
	// ======================================


	if ($('.floatingInfo').length) {

		handleFloatingInfo();

	}

	function handleFloatingInfo(){
		//document.addEventListener('touchstart', handleTouchStart, false);
		//document.addEventListener('touchmove', handleTouchMove, false);
		var floatingHeight = $('.headerPanel').outerHeight() + $('.banner_top:visible').outerHeight(true);
		$(window).resize(function(){
			floatingHeight = $('.headerPanel').outerHeight() + $('.banner_top:visible').outerHeight(true);
		});

		var yDown = null;
		var lastScrollTop = 0;
		var currentScrollTop;
		floatingBlockSpace = 100;

		// для десктопов
		if (clickHandler == "click") {
			$(window).scroll(function(event){
				currentScrollTop = $(this).scrollTop();
				if (currentScrollTop > floatingHeight) {
					$('.floatingInfo').addClass('view_scrolling').addClass('view_opacity');
				} else {
					$('.floatingInfo').removeClass('view_scrolling').removeClass('view_opacity');
				}
			});
		}

		function handleTouchStart(evt) {
			yDown = evt.touches[0].clientY;

			lastScrollTop = $(this).scrollTop();

			// дублируем детектом скролла - он посчитается после завершения скролла
			$(window).scroll(function(event){
				currentScrollTop = $(this).scrollTop();

				if (currentScrollTop >= lastScrollTop) {
					// вниз
					if (currentScrollTop > floatingHeight) {
						$('.floatingInfo').addClass('view_hidden').addClass('view_scrolling');
					} else {
						$('.floatingInfo').removeClass('view_hidden').removeClass('view_scrolling');
					}
				} else {
					// вверх
					if (currentScrollTop > floatingHeight) {
						$('.floatingInfo').removeClass('view_hidden').addClass('view_scrolling');
					} else {
						$('.floatingInfo').addClass('view_hidden').removeClass('view_scrolling');
					}
				}
			});
		};

		function handleTouchMove(evt) {
			currentScrollTop = $(this).scrollTop();

			if ( !yDown ) {
				return;
			}

			var yUp = evt.touches[0].clientY;
			var yDiff = yDown - yUp;

			if ( yDiff > 0 ) {
				// вниз
				$(".popover__wrapper, .header__loginButton").removeClass("state_open");

				if (currentScrollTop > floatingHeight) {
					// скрываем, только если проскроллили больше высоты меню
					$('.floatingInfo').addClass('view_hidden').addClass('view_scrolling');
					floatingBlockSpace = 20;
				}
			} else {
				if (currentScrollTop < floatingHeight) {
					$('.floatingInfo').removeClass('view_scrolling');
				}
				$('.floatingInfo').removeClass('view_hidden');
				floatingBlockSpace = 100;
			}
			// reset
			yDown = null;


		};
	}



	// ======================================
	// плавающий блок
	// ======================================

	/* устанавливаем высоту плавательного контейнера */
	function updateStickySize() {
		$(".hcSticky__sticky").height(0).hide();
		var height = $(".hcSticky__scrollable").parent().parent().height() - $(".hcSticky__scrollable").height();
		$(".hcSticky__sticky").height(height).show();
	}

	$(window).load(function(){ // надо, чтобы окно полность загрузилось
		updateStickySize();

		window.globalstorage.updateStickySize = updateStickySize();

		var doingStickyResize = false;

		$(window).resize(function(event){
		    doingStickyResize = true;
		});

		setInterval(function() {
		    if (doingStickyResize) {
		        updateStickySize();
		        doingStickyResize = false;
		    }
		}, 500);	

		$('.sticked').hcSticky({
			stickTo: ".hcSticky__sticky",
			// onStart: stickyHeight(),
		    top: floatingBlockSpace
		    // bottomEnd: 10,
		    // wrapperClassName: 'sidebar-sticky'
		});

	});


	// сменяем слайды в зависимости от позиции скролла
	var slides = $(".stickedSlide");

	if (slides.length) {

		var anchors = $(".stickedSlideHere"); /* якоря расставить в контенте! */
		var showHeightsArray = [];
		showHeightsArray[0] = 0; // просто, чтоб забить неиспользуемую ячейку
		var position = 0;
		var slideToShow = 0;

		anchors.each(function(){
			var slideNum = $(this).attr("data-stickedSlideHere"); /* присвоить номер слайда */
			showHeightsArray[slideNum] = $(this).offset().top;
		});
		var heightsNum = showHeightsArray.length;

	    $(window).scroll(function() {

	    	position = $(window).scrollTop();

			for (var i = 0; i < heightsNum; i++) {
				if (position > showHeightsArray[i]) {
					slideToShow = i

				}					
			}
			
			slides.hide();
			// на случай глюков - более тяжелый селектор, но более точный
			// $(".stickedSlide:gt(" +slideToShow+ ")").hide();
			// $(".stickedSlide:lt(" +slideToShow+ ")").hide();
			$(slides[slideToShow]).show();

	    });

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
	// слайдер - http://www.idangero.us/swiper/api/#.VqVEzPmLSHv
	// ======================================
	window.globalstorage = {
		pageSwiperArray: []
	};

    $('.pageSwiper').each(function () {
	    var pageSwiper = new Swiper($(this), {
	        nextButton: $(this).parent().find('.swiper-button-next'),
	        prevButton: $(this).parent().find('.swiper-button-prev'),
	        spaceBetween: 16,
	        threshold: 50,
	        observer: true,
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
		window.globalstorage.pageSwiperArray.push(pageSwiper);
    });


    $('.slider').each(function () {
	    var imagesSlider = new Swiper($(this), {
	        pagination: $(this).find('.swiper-pagination'),
	        paginationClickable: true,
	        loop: true,
	        // resistanceRatio: 0,
	        nested: true,
	        autoplay: 9000, // скорость
	        autoplayDisableOnInteraction: true
	        // observeParents: true,
	        // observer: true,
	        // setWrapperSize: true,
	    });

	    // по наведению - остановим
	    $(this).mouseover(function(){
	    	imagesSlider.stopAutoplay();
	    });
	    $(this).mouseout(function(){
	    	imagesSlider.startAutoplay();
	    });



		// var doingResize = false;

		// $(window).resize(function(event){
		//     doingResize = true;
		// });

		// setInterval(function() {
		//     if (doingResize) {
		//         imagesSlider.updateSlidesSize();
		//         doingResize = false;
		//     }
		// }, 100);
    });


    $('.videoPlaylist__wrapper').each(function () {
	    var videoSlider = new Swiper($(this), {
	        // pagination: $(this).find('.swiper-pagination'),
	        // paginationClickable: true,
	        // loop: true,
	        nested: true,
	        // observeParents: true,
	        // observer: true,
	        // setWrapperSize: true,
	        direction: 'vertical',
	        slidesPerView: 2,
	        mousewheelControl: true,
	        nextButton: '.videoPlaylist__nav.view_next',
	        prevButton: '.videoPlaylist__nav.view_prev',
	        spaceBetween: 6
	    });

    });


    $('.view_opinion').each(function () {
	    var opinionSlider = new Swiper($(this), {
	        nextButton: $(this).find('.opinion-button-next'),
	        prevButton: $(this).find('.opinion-button-prev'),
	        autoplay: 4000,
	        nested: true,
	        // observer: true,
	        resistanceRatio: 0,
	        // setWrapperSize: true,
	        autoplayDisableOnInteraction: false

	    });

	    /* текущий слайд */
	    var currentPlaceholder = $(this).find('#opinion__slideCurrent');
		currentPlaceholder.html(opinionSlider.activeIndex + 1);

		opinionSlider.on('SlideChangeEnd', function () {
		    currentPlaceholder.html(opinionSlider.activeIndex + 1);
		});

		/* сколько всего */
		var slides = opinionSlider.slides.size();
		$(this).find('#opinion__slideTotal').html(slides);

    });


    $('.photoSection').each(function () {
	    var opinionSlider = new Swiper($(this), {
	        nextButton: $(this).find('.photoSection__nav.view_next'),
	        prevButton: $(this).find('.photoSection__nav.view_prew'),
	        nested: true,
	        // observer: true,
	        resistanceRatio: 0,
	        slidesPerView: 2,
	        spaceBetween: "2%",
	        // setWrapperSize: true,
	        autoplayDisableOnInteraction: false

	    });
    });


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
		var categoryFilterWidthAdjuster = $(".categoryFilter__widthAdjuster");
		var width = categoryFilterWidthAdjuster.parent().width() -
					categoryFilterWidthAdjuster.innerWidth() - 60;
		$(".filtersList__wrapper").width(width);
		$(this).toggleClass("state_open");
		filterListWrapper.toggleClass("state_open");
		categoryFilterInfo.toggleClass("state_open");
		// if ($(this).hasClass("state_open")) {
		// 	categoryFilterWidth();
		// }
		return false;
	});

	$(".categoryFilter__wrapper .closeButton").on('click', function(){
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
	// датапикер - http://digitalbush.com/projects/masked-input-plugin/
	// ======================================

	$(function($){
		$(".datepicker").mask("99/99/9999",{placeholder:"__/__/____"});
	});



	// ======================================
	// подключаем табы - jqueryui
	// ======================================


    $( ".tabs__wrapper" ).tabs();



	// ======================================
	// разворачиваюзиеся блоки (tags page)
	// ======================================


	$(".hider").on('click', function () {

		var what = $(this).attr("data-id");

		$("#"+what).slideToggle(150).toggleClass("state_hidderHidden");
		$(this).find("span").toggleClass("state_hidderHidden");

		return false;
	});



	// ======================================
	// цветные табы-секции на всю страницу
	// ======================================

	var pageSwiperArray = window.globalstorage.pageSwiperArray; // все слайдеры

	$(".pageTabs__item").on('click', function () {

		var page = $(this).attr("data-url");
		var target = $(this).attr("data-target");
		var wrapper =  $(this).attr("data-wrapper");
		var _this = $(this);

		var bgClass = $.grep(this.className.split(" "), function(v, i){
		   return v.indexOf('contentBackground') === 0;
		}).join(); // узнаем класс фона таба, по которому кликнули

		var currentClass = $.grep(document.getElementById(wrapper).className.split(" "), function(v, i){
		   return v.indexOf('contentBackground') === 0;
		}).join(); // узнаем текущий класс фона

		var container = $("#" + target);
		var heightStill = container.height();
		container.height(heightStill); // установим высоту, чтоб при удалении не схлопнулась

		$.ajax({
			url: "_md-preloader.shtml"
			// cache: false
		})
		.done(function( html ) {
			container.html(html);
			$("#" + wrapper).removeClass(currentClass).addClass(bgClass);

			$(".pageTabs__item.state_current").removeClass("state_current");
			_this.addClass("state_current");
		})
		.always(function() {
			// console.log( "complete" );
		});


		// имитируем загрузку контента - при вставке реального кода УДАЛИТЬ обертку в таймаут!!!
		setTimeout(function(){
			$.ajax({
				url: page,
				cache: false
			})
			.done(function( html ) {
				container.html( html );

				container.find(".readLater").on('click', function(){
					$(this).toggleClass("view_saved");
					return false;
				});
			})
			.fail(function() {
				// console.log( "error" );
			})
			.always(function() {
				container.height(""); // обнулим высоту
				pageSwiperArray[1].slideTo(0); // сдайлим на 0й слайд

			});
		}, 1000);

		return false;
	});



	// DUPLICATED CODE

	// ======================================
	// цветные табы-секции на всю страницу
	// ======================================
    //
	//pageSwiperArray = window.globalstorage.pageSwiperArray; // все слайдеры
    //
	//$(".pageTabs__item").on('click', function () {
    //
	//	var page = $(this).attr("data-url");
	//	var target = $(this).attr("data-target");
	//	var wrapper =  $(this).attr("data-wrapper");
    //
	//	var bgClass = $.grep(this.className.split(" "), function(v, i){
	//	   return v.indexOf('contentBackground') === 0;
	//	}).join(); // узнаем класс фона таба, по которому кликнули
    //
	//	var currentClass = $.grep(document.getElementById(wrapper).className.split(" "), function(v, i){
	//	   return v.indexOf('contentBackground') === 0;
	//	}).join(); // узнаем текущий класс фона
    //
	//	var container = $("#" + target);
	//	var heightStill = container.height();
	//	container.height(heightStill); // установим высоту, чтоб при удалении не схлопнулась
    //
	//	$.ajax({
	//		url: "_md-preloader.shtml",
	//		// cache: false
	//	})
	//	.done(function( html ) {
	//		container.html(html);
	//		$("#" + wrapper).removeClass(currentClass).addClass(bgClass);
	//	})
	//	.always(function() {
	//		// console.log( "complete" );
	//	});
    //
    //
	//	// имитируем загрузку контента - при вставке реального кода УДАЛИТЬ обертку в таймаут!!!
	//	setTimeout(function(){
	//		$.ajax({
	//			url: page,
	//			cache: false
	//		})
	//		.done(function( html ) {
	//			container.html( html );
    //
	//			container.find(".readLater").on('click', function(){
	//				$(this).toggleClass("view_saved");
	//				return false;
	//			});
	//		})
	//		.fail(function() {
	//			// console.log( "error" );
	//		})
	//		.always(function() {
	//			container.height(""); // обнулим высоту
	//			pageSwiperArray[1].slideTo(0); // сдайлим на 0й слайд
    //
	//		});
	//	}, 1000);
    //
	//	return false;
	//});



	// ======================================
	// кнопка смотреть больше новостей
	// ======================================


	$(".moreButton").on('click', function () {

		var page = $(this).attr("data-url");
		var target = $(this).attr("data-target");
		var button = $(this);

		var container = $("." + target);

		button.addClass("state_loading");

		 

		// имитируем загрузку контента - при вставке реального кода УДАЛИТЬ обертку в таймаут!!!
		setTimeout(function(){
			$.ajax({
				url: page,
				cache: false
			})
			.done(function( html ) {
				container.append( html );
			})
			.always(function() {
				button.removeClass("state_loading");
				updateStickySize(); // обновляем высоту правой колонки!

			});
		}, 1000);

		return false;
	});



	// ======================================
	// читать позже
	// ======================================

	$(".readLater, .saveButton").on('click', function(){
		$(this).toggleClass("view_saved");
		$(this).find("span").toggleClass("state_hidderHidden");
		return false;
	});


});




