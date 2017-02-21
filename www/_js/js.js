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
        $(this).closest('.headerPanel').toggleClass("state_open");
        searchClose();
        $(".popover-login, .header__loginButton").removeClass("state_open");
        $(".popover-login, .header__readLater").removeClass("state_open");
        $(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
        $(".dayInfo.with_popover li").removeClass("state_open");
        return false;
    });

    /* меню ЕЩЕ */
    $(".menu__link.view_menuIcon").on(clickHandler, function(){
        $(this).toggleClass("state_open");
        $(".subMenu").toggleClass("state_open");

        $(".popover-login, .header__loginButton, .header__readLater, .dayInfo.with_popover li").removeClass("state_open");
        return false;
    });
    $(document).on(clickHandler, function(event) {
        if ($(event.target).closest(".menu__link.view_menuIcon, .subMenu .tagList, .dayInfo.with_popover li").length) return;
        $(".subMenu, .menu__link.view_menuIcon, .dayInfo.with_popover li").removeClass("state_open");
        event.stopPropagation();
    });


    /* логин */
    $(".header__loginButton, .menu__link.view_enter, .header__readLater, .menu__link.view_readLater").on(clickHandler, function(){
        $(this).toggleClass("state_open");
        $(".popover-login").toggleClass("state_open");

        searchClose();
        $(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
        return false;
    });

    $('.header__readLater-white').on(clickHandler, function() {
        $(this).parent().find('.popoverReadLater').toggleClass('state_open');
    });

    $(document).on(clickHandler, function(event) {
        var headerLoginButton = $('.header__loginButton');
        var headerReadLater = $('.header__readLater');
        var headerReadLaterWhite = $('.header__readLater-white');

        if ($(event.target).closest(".header__loginButton, .popoverLogin").length && headerLoginButton) return;
        if ($(event.target).closest(".header__readLater, .popoverReadLater").length && headerReadLater) return;
        if ($(event.target).closest(".floatingInfo, .popoverReadLater").length && headerReadLaterWhite) return;

        if(headerLoginButton){
            $(".popover-login, .header__loginButton").removeClass("state_open");
        }
        if(headerReadLater){
            $(".popover-login, .header__readLater").removeClass("state_open");
        }
          if(headerReadLaterWhite[0]){
            $(".floatingInfo .popoverReadLater").removeClass("state_open");
        }

        event.stopPropagation();
    });

    $(window).resize(function(){
        $(".popover-login, .header__loginButton, .header__readLater, .floatingInfo .popoverReadLater").removeClass("state_open");
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
        $(".popover-login, .header__loginButton, .header__readLater").removeClass("state_open");
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

    $('.dayInfo.with_popover').on(clickHandler, function(e){
        var target = $(e.target),
            parent;

        if(target.tagName === 'li') {
            parent = target;
        } else {
            parent = target.closest('li')
        }

        $(this).find('li').not(parent).removeClass('state_open');

        parent.toggleClass('state_open');
    });

    $('.popover__close').on(clickHandler, function(){
        $(this).closest('.state_open').toggleClass('.state_open');
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

        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchend', handleTouchEnd, false);
        document.addEventListener('touchmove', handleTouchMove, false);
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

                //if (currentScrollTop >= lastScrollTop) {
                //	if (currentScrollTop > floatingHeight) {
                //		floatingTarget.addClass('view_hidden');
                //	}
                //} else {
                //	floatingTarget.removeClass('view_hidden');
                //}

                if (currentScrollTop >= lastScrollTop) {
                    // вниз
                    if (currentScrollTop > floatingHeight) {
                        floatingTarget.addClass('view_hidden').addClass('view_scrolling');
                    } else {
                        floatingTarget.removeClass('view_hidden').removeClass('view_scrolling');
                    }
                } else {
                    // вверх
                    if (currentScrollTop > floatingHeight) {
                        floatingTarget.removeClass('view_hidden').addClass('view_scrolling');
                    } else {
                        floatingTarget.addClass('view_hidden').removeClass('view_scrolling');
                    }
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
                $(".popover-login, .header__loginButton, .header__readLater").removeClass("state_open");
                if (currentScrollTop > floatingHeight) {
                    // скрываем, только если проскроллили больше высоты меню
                    floatingTarget.addClass('view_hidden').addClass('view_scrolling');;
                    floatingBlockSpace = 20;
                    // $(".sticked.state_floating").css({top: 20})
                }
            } else {
                if (currentScrollTop < floatingHeight) {
                    floatingTarget.removeClass('view_scrolling');
                }
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
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);
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
                $(".popover-login, .header__loginButton, .header__readLater").removeClass("state_open");

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
        $(".blockSelector__link").removeClass('state_selected');
        $(this).addClass("state_selected");
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

     $(".comments-live > div").on('click', function(){
            $(this).closest('.comments-live').toggleClass("state_open");

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

    var flexSlidersArray = [];
    var prevWindowWidth = $(window).width();
    var prevWindowHeight = $(window).height();
    var styleTwiceWidth;

    function setTwiceWidth (flexSlider) {
        var flexSliders = flexSlider ? flexSlider.container : $('.flexSlider-onresize');
        var slides = flexSliders.find('.width_twice');
        var margin = slides.eq(0).outerWidth(true) - slides.eq(0).outerWidth();
        var swiperSlides = flexSliders.find('.swiper-slide').not(".width_twice");
        var twiceWidth = swiperSlides[swiperSlides.length - 1].getBoundingClientRect().width * 2 + margin;
        if (!styleTwiceWidth) {
            styleTwiceWidth = $('<style type="text/css">.swiper-slide.width_twice {width: '+ twiceWidth +'px !important;}</style>');
            $('head').append(styleTwiceWidth);
        } else {
            styleTwiceWidth.html('.swiper-slide.width_twice {width: '+ twiceWidth +'px !important;}');
        }
        slides.attr('style', slides.attr('style') +  'width: ' + twiceWidth + 'px !important');
    }

    function hideSlides(slider){
        var width = $(window).width();

        var container = slider.container;

        if(width > 1279) {
            container.find('.swiper-hidden-slide.hideOn_1024, .swiper-hidden-slide.hideOn_768')
                .addClass("swiper-slide").removeClass("swiper-hidden-slide");

            container.find('.hideOn_1280')
                .addClass("swiper-hidden-slide")
                .removeClass("swiper-slide swiper-slide-visible swiper-slide-active");
        } else if (width > 1023) {
            container.find('.swiper-hidden-slide.hideOn_1280, .swiper-hidden-slide.hideOn_768')
                .addClass("swiper-slide").removeClass("swiper-hidden-slide");

            container.find('.hideOn_1024')
                .addClass("swiper-hidden-slide")
                .removeClass("swiper-slide swiper-slide-visible swiper-slide-active");
        } else {
            container.find('.swiper-hidden-slide.hideOn_1280, .swiper-hidden-slide.hideOn_1024')
                .addClass("swiper-slide").removeClass("swiper-hidden-slide");

            container.find('.hideOn_768')
                .addClass("swiper-hidden-slide")
                .removeClass("swiper-slide swiper-slide-visible swiper-slide-active");
        }

        slider.update();
        //setTimeout(setTwiceWidth.bind(undefined, slider), 0);
        //setTwiceWidth(slider);
    }

    function initFlexSlider() {
        var flexSliders = $('.flexSlider-onresize');

        if(!flexSliders.length) return;

        flexSliders.each(function () {

            var flexSlider = new Swiper($(this), {
                nextButton: $(this).parent().find('.swiper-button-next'),
                prevButton: $(this).parent().find('.swiper-button-prev'),
                spaceBetween: 16,
                threshold: 50,
                breakpoints: {
                    1279: {
                        spaceBetween: 22,
                        slidesPerGroup: 3,
                        slidesPerView: 3
                    },
                    1023: {
                        grabCursor: true,
                        slidesPerGroup: 2,
                        slidesPerView: 2
                    }
                },
                slidesPerColumn: 2,
                slidesPerView: 4,
                slidesPerGroup: 4
            });


            flexSlidersArray.push(flexSlider);

            if (window.globalstorage.pageSwiperArray) {
                window.globalstorage.pageSwiperArray.push(flexSlider);
            }
        });

        $(flexSlidersArray).each(function(i, slider){
            hideSlides(slider);
        });

        setTwiceWidth();
    }

    initFlexSlider();

    $(window).on("debouncedresize", function(event) {
        var flexSlidersOnResize = $('.flexSlider-onresize');
        var slides = flexSlidersOnResize.find('.width_twice');

        if(!slides.length) return;

        var $flexSliders = $(flexSlidersArray);
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if ($flexSliders && (windowWidth !== prevWindowWidth || windowHeight !== prevWindowHeight)) {
            $(flexSlidersArray).each(function(i, slider){
                hideSlides(slider);
            });
            setTwiceWidth();

            prevWindowWidth = windowWidth;
            prevWindowHeight = windowHeight;
        }
    });

    $('.slider').each(function () {
        var imagesSlider = new Swiper($(this), {
            pagination: $(this).find('.swiper-pagination'),
            paginationClickable: true,
            loop: true,
            // resistanceRatio: 0,
            nested: true,
            autoplay: 9000, // скорость
            autoplayDisableOnInteraction: true,
            observeParents: true,
            observer: true
            //setWrapperSize: true
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

    var tabs = $( ".tabs__wrapper"),
        jquery_ui_classes = [".ui-tabs", ".ui-tabs-nav", ".ui-tabs-panel", ".ui-widget", ".ui-widget-header", ".ui-widget-content", ".ui-corner-all", ".ui-corner-top", ".ui-corner-bottom", ".ui-helper-clearfix", ".ui-helper-reset", ".ui-state-default"];

    tabs.tabs();
    var tabsNoStyles = tabs.filter('.tabs__wrapper-noStyles').find(jquery_ui_classes.join(", ")).andSelf();
    tabsNoStyles.removeClass( jquery_ui_classes.join(" ").replace(/\./g, "") );



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

        var wrapper = $(this).attr("data-wrapper");

        if (wrapper) {

            var page = $(this).attr("data-url");
            var target = $(this).attr("data-target");
            var _this = $(this);

            var bgClass = $.grep(this.className.split(" "), function (v, i) {
                return v.indexOf('contentBackground') === 0;
            }).join(); // узнаем класс фона таба, по которому кликнули

            var currentClass = $.grep(document.getElementById(wrapper).className.split(" "), function (v, i) {
                return v.indexOf('contentBackground') === 0;
            }).join(); // узнаем текущий класс фона

            var container = $("#" + target).find('.swiper-wrapper');
            var heightStill = container.height();
            var widthStill = container.parent().width();

            container.height(heightStill); // установим высоту, чтоб при удалении не схлопнулась

            // добавляем спиннер
            $.ajax({
                url: "_md-preloader.shtml"
                // cache: false
            })
                .done(function (html) {
                    container.html(html);

                    //устанавливаем ширину, чтобы видеть спиннер
                    container.width(widthStill);

                    $("#" + wrapper).removeClass(currentClass).addClass(bgClass);

                    $(".pageTabs__item.state_current").removeClass("state_current");
                    _this.addClass("state_current");
                })
                .always(function () {
                    pageSwiperArray[1].slideTo(0, 0);
                });


            // имитируем загрузку контента - при вставке реального кода УДАЛИТЬ обертку в таймаут!!!
            setTimeout(function () {
                $.ajax({
                    url: page,
                    cache: false
                })
                    .done(function (html) {
                        //добавляем новый контень
                        container.html(html);
                        container.find(".readLater").on('click', function () {
                            $(this).toggleClass("view_saved");
                            return false;
                        });
                    })
                    .fail(function () {
                        // console.log( "error" );
                    })
                    .always(function () {
                        container.height(""); // обнулим высоту
                        pageSwiperArray[1].update();
                    });
            }, 1000);

            return false;
        }
    });



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

    //var flexSlider = $('.flexSlider__container');
    //
    //if(flexSlider.length){
    //	var prev = flexSlider.find('.swiper-button-prev');
    //	var next = flexSlider.find('.swiper-button-next');
    //	var container = flexSlider.find('.bricks__wrapper');
    //
    //	prev.click(function(){
    //		container.css({'transform': 'translate(0, 0)'});
    //	});
    //	next.click(function(){
    //		container.css({'transform': 'translate(-50%, 0)'});
    //	});
    //}


    /* Translations */
    $(window).load(function() {
        var bigTranslation;
        var bigTranslationType;
        var timeForSeekYoutube = false;
        var timeForSeekUstream = false;
        var translations = {
            byType: {},
            instants: {
                jwPlayer: [],
                youTube: [],
                uStream: []
            }
        };
        var resizedPlayer;

        translations.all = $('[data-translation]');
        translations.byType.jwPlayer = translations.all.filter('[data-translation="jwPlayer"]');
        translations.byType.uStream = translations.all.filter('[data-translation="uStream"]');
        translations.byType.youTube = translations.all.filter('[data-translation="youTube"]');



        function initTranslations() {
            translations.all.each(function(i, el){
                initTranslation($(el));
            });
        }

        function initTranslation(el) {
            var type = el.data('translation'),
                index = translations.byType[type].index(el),
                translation = translations.instants[type][index];

            if (translation && el.hasClass("state_translationMinimized")) { // if playing or minimized
                switch (type) {
                    case 'jwPlayer':
                        translation.remove();
                        translations.instants.jwPlayer[index] = false;
                        break;
                    case 'uStream':
                        translations.instants.uStream[index].destroy();
                        el.find('iframe').remove();
                        translations.instants.uStream[index] = false;
                        break;
                    case 'youTube':
                        translation.destroy();
                        translations.instants.youTube[index] = false;
                        break;
                }
            } else if (!translation && !el.hasClass("state_translationMinimized")) { // if isn't playing
                switch (type) {
                    case 'jwPlayer':
                        translations.instants.jwPlayer[index] =
                            initJwPlayerTranslations(el.find(".translationPlaceholder:visible").attr("id"), 170, el);
                        if (!translations.instants.jwPlayer[index]) {
                            return;
                        }
                        translations.instants.jwPlayer[index].on('ready', function (e) {
                            el.find('.jw-group.jw-controlbar-right-group.jw-reset').append('<a class="jwPopup hideOn_768"></a>');
                            var jwPopup = el.find('.jw-group.jw-controlbar-right-group.jw-reset .jwPopup');
                            jwPopup.on('click', createBigPlayer);

                            jwPopup.hover(function () {
                                el.find('.jw-icon-fullscreen').addClass('jw-icon-fullscreen-hover');
                            }, function() {
                                el.find('.jw-icon-fullscreen').removeClass('jw-icon-fullscreen-hover');
                            });
                        });
                        break;
                    case 'uStream':
                        translations.instants.uStream[index] = initUStreamTranslations('uStream', 146, el.data('src'));
                        break;
                    case 'youTube':
                        translations.instants.youTube[index] = initYouTubeTranslations('YTplayer', el.data('videoid'), 146);
                        break;
                }
            }

            //autoplay();

            // reinit iscroll to calculate height
            if (window.globalstorage) {
                var iscroll;
                for (var i = 0; i < window.globalstorage.iscroll.length; i++) {
                    iscroll = window.globalstorage.iscroll[i];
                    iscroll.refresh()
                }
            }
        }

        function initJwPlayerTranslations(id, height, el) {
            var instant;

            var toID = el.find(".translationPlaceholder:visible").attr("id"); // look for placeholder element

            if (!id) {
                return;
            }

            instant = (jwplayer(id).setup({
                width: "100%",
                height: height,
                autostart: true,
                mute: true,
                repeat: true,
                playlist: [{
                    image: el.data('image'),
                    sources: [{
                        file: el.data('source1')
                    }, {
                        file: el.data('source2')
                    }, {
                        file: el.data('source3')
                    }]
                }],
                skin: {
                    name: "seven",
                    active: "#ffd051"
                }
            }));

            return instant;
        }

        function initYouTubeTranslations(id, videoId, height) {
            var instant;

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";

            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            instant = new YT.Player(id, {
                playerVars: {
                    'autoplay': 1,
                    'controls': 1,
                    'autohide': 1,
                    'wmode': 'opaque'
                },
                videoId: videoId,
                width: "100%",
                height: height,
                events: {
                    'onReady': configurationYoutube
                }
            });


            return instant;
        }

        function initUStreamTranslations(id, height, src) {
            var uStreamHolder = $('#'+id);

            var uStreamFrame = $('<iframe class="translation" width="100%" height="'+height+'" ' +
                'src="'+ src+'" ' +
                'allowfullscreen ' +
                'webkitallowfullscreen ' +
                'scrolling="no" ' +
                'frameborder="0" ' +
                'style="border: 0 none transparent;">' +
                '</iframe>'
            );
            uStreamHolder.append(uStreamFrame);

            var instant = UstreamEmbed(uStreamFrame[0]);

            return instant;
        }

       // var translations = [];
        var state;
        var position = 0;
        var whereId;
        var translationWrappers = $(".view_withTranslation");
        var jwTranslationWrappers = translationWrappers.filter('.jwTranslation');
        var translationControls = translationWrappers.find(".translationControls");
        var translationSize = translationWrappers.find('.translation__size');
        var firstPlay = true;

        var flipButton = document.createElement('a');
        flipButton.className = 'translation__flip';
        flipButton.setAttribute("href", "#");
        flipButton.setAttribute("title", "");


        //function placeTranslation(toID) {
        //
        //    translations.push(jwplayer(toID).setup({
        //        // file: "//www.youtube.com/watch?v=Siy69o-rKU4",
        //        // image: "http://artandyou.ru/upload/mce/image/media/BlueXmas-ND-00-web-280x190_copy.jpg",
        //        width: "100%",
        //        height: 170,
        //        autostart: true,
        //        mute: true,
        //        repeat: true,
        //        playlist: [{
        //            image: "http://img.gravlab.com/003119/sparse/v1d30/pages/928x522-nighsky-player-image.jpg",
        //            sources: [{
        //                file: "https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8"
        //            }, {
        //                file: "http://download.openbricks.org/sample/H264/big_buck_bunny_720p_H264_AAC_25fps_3400K_short.MP4"
        //            }, {
        //                file: "http://stream.gravlab.net/003119/sparse/v1d30/pages/lapse2_896x504.webm"
        //            }]
        //        }],
        //        skin: {
        //            name: "seven",
        //            active: "#ffd051"
        //        }
        //    }));
        //
        //    //
        //    // wrapper = $("#"+toID).parent().parent(".view_withTranslation:visible");
        //    //
        //    //transl.onReady(function(){
        //    //    // добавляем сворачивалку
        //    //    // $(".jw-controlbar-right-group").append(flipButton);
        //    //    // и добавляем ей событие
        //    //    // $(".translation__flip").unbind("click"); // убираем отовсюду
        //    //    //    $(".translation__flip").on('click', function() {
        //    //    //    	$(wrapper).toggleClass("state_translationMinimized");
        //    //    //    	translSizeFlip();
        //    //    //    	return false;
        //    //    //    });
        //    //});
        //    //
        //    //transl.onBuffer(function(){
        //    //});
        //    //
        //    //transl.onPlay(function(){
        //    //});
        //
        //}

        //var viewer = UstreamEmbed('id123');

        translationControls.on('click', function () {
            var parent = $(this).closest('[data-translation]');
            parent.toggleClass("state_translationMinimized");

            initTranslations();
            return false;
        });

        function createBigPlayer (e) {
            e.preventDefault();
            e.stopPropagation();

            var smallTranslation = $(this).closest('[data-translation]');
            bigTranslationType = smallTranslation.data('translation');
            var smallPlayer = translations.instants[bigTranslationType][translations.byType[bigTranslationType].index(smallTranslation)];

            if (!smallPlayer) {
                return;
            }
            resizedPlayer = smallPlayer;

            switch (bigTranslationType) {
                case 'jwPlayer':
                    $('.translation-big__wrapper__container').append('<div id="BigJwPlayer"></div>');
                    bigTranslation = initJwPlayerTranslations('BigJwPlayer', '100%', smallTranslation);
                    smallPlayer.pause();
                    bigTranslation.seek(smallPlayer.getPosition());
                    break;
                case 'uStream':
                    $('.translation-big__wrapper__container').append('<div id="BigUStream" style="height: 100%"></div>');
                    bigTranslation = initUStreamTranslations('BigUStream', '100%', smallTranslation.data('src'));
                    smallPlayer.callMethod('pause');
                    smallPlayer.getProperty('progress', function (progress) {
                        timeForSeekUstream = progress;
                    });
                    bigTranslation.addListener('share', configurationUstream);
                    break;
                case 'youTube':
                    $('.translation-big__wrapper__container').append('<div id="BigYTplayer"></div>');
                    smallPlayer.pauseVideo();
                    timeForSeekYoutube = smallPlayer.getCurrentTime();
                    bigTranslation = initYouTubeTranslations('BigYTplayer', smallTranslation.data('videoid'), '100%');
                    break;
            }

            $('.translation__overlay').show();
            $('.translation-big__container').show();
        }

        translationSize.on('click', createBigPlayer);

        function configurationUstream () {
            if (timeForSeekUstream) {
                bigTranslation.callMethod('seek', timeForSeekUstream);
            }
            timeForSeekUstream = false;
        }

        function configurationYoutube(event) {
            event.target.mute();
            if (timeForSeekYoutube) {
                event.target.seekTo(timeForSeekYoutube);
            }
            timeForSeekYoutube = false;
        }

        $(".translation-big__container__close").on('click', function () {
            $('.translation__overlay').hide();
            $('.translation-big__container').hide();

            switch (bigTranslationType) {
                case 'jwPlayer':
                    bigTranslation.remove();
                    $('.translation-big__wrapper__container').find('div').remove();
                    resizedPlayer.seek(bigTranslation.getPosition());
                    resizedPlayer.play();
                    break;
                case 'youTube':
                    $('.translation-big__wrapper__container').find('iframe').remove();
                    resizedPlayer.seekTo(bigTranslation.getCurrentTime());
                    resizedPlayer.playVideo();
                    break;
                case 'uStream':
                    bigTranslation.getProperty('progress', function (progress) {
                        resizedPlayer.callMethod('seek', progress);
                        $('.translation-big__wrapper__container').find('div').remove();
                        resizedPlayer.callMethod('play');
                    });
                    break;
            }
        });


        //function translSizeFlip(elem) {
        //    var index = translationWrappers.index(elem);
        //    var translation = translations[index];
        //    if (translation && elem.hasClass("state_translationMinimized")) { // если идёт и если свернули
        //        translation.remove();
        //        translations[index] = false;
        //    } else if (!elem.hasClass("state_translationMinimized")) { // если не идёт
        //        whereId = $(".translationPlaceholder:visible").attr("id"); // ищем видимый плейсхолдер
        //        placeTranslation(whereId);
        //    }
        //
        //    // реинициализируем искролл чтобы пересчиталась высота
        //    if (window.globalstorage) {
        //        var iscroll;
        //        for (var i = 0; i < window.globalstorage.iscroll.length; i++) {
        //            iscroll = window.globalstorage.iscroll[i];
        //            iscroll.refresh()
        //        }
        //    }
        //}

        //jwTranslationWrappers.each(function (i, el) {
        //    translSizeFlip($(el));
        //});

        function firstInitTranslations() {

            if ($(window).width() < 1025) {
                translationControls.each(function(i, el){
                    var parent = $(el).closest('[data-translation]');
                    parent.addClass("state_translationMinimized");
                });
            }
            initTranslations();
        }

        firstInitTranslations();

        //$(window).resize(function () {
        //    if (transl) { // если проигрывается
        //        if (!$("#" + transl.id).is(":visible")) { // как только исчезает
        //            transl.remove();
        //            transl = false;
        //            translSizeFlip();
        //        }
        //    }
        //});
    });

});


// ======================================
// Init google charts
// ======================================

google.charts.load('current', {packages: ['corechart', 'line'], 'language': 'ru'});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
	/**
     * Common data
     * */

    var optionsAll = {
        height: 225,
        width: 495,
        animation: {startup: true},
        pointSize: 10,
        colors: ['#c6271b'],
        fontSize: 12,
        hAxis: {
            format: 'd MMMM, EE',
            baselineColor: '#000',
            textPosition: 'none',
            gridlines: {
                color: '#f5f5f5',
                count: 4
            },
            minorGridlines: {
                color: '#f5f5f5',
                count: 15
            }
        },
        vAxis: {
            color: '#f5f5f5',
            gridlines: {
                color: '#a3a3a3',
                count: 8
            },
            textStyle: {
                fontName: 'Roboto Slab',
                fontSize: 12,
                color: '#333'
            }
        },
        legend: {
            position: 'none'
        },
        tooltip: {
            textStyle: {
                fontName: 'Roboto Slab',
                fontSize: 12,
                bold: true,
                color: '#333'
            }
        },
        chartArea: {
            left: 40,
            top: 10,
            width: 440,
            height: 205
        }
    };

    var dateFormatterAll = new google.visualization.DateFormat({pattern: 'd MMMM, EE'});

	/**
	 * Euro popover
     */

    var dataEur = new google.visualization.DataTable();
    dataEur.addColumn('date', 'date');
    dataEur.addColumn('number', '');

    dataEur.addRows([
        [new Date(2014, 6, 1), 71.3],
        [new Date(2014, 6, 2), 71],
        [new Date(2014, 6, 3), 71],
        [new Date(2014, 6, 4), 70],
        [new Date(2014, 6, 5), 71.6],
        [new Date(2014, 6, 6), 71.5],
        [new Date(2014, 6, 7), 70.9],
        [new Date(2014, 6, 8), 71.2],
        [new Date(2014, 6, 9), 71.2],
        [new Date(2014, 6, 10), 70],
        [new Date(2014, 6, 11), 71],
        [new Date(2014, 6, 12), 70.5],
        [new Date(2014, 6, 13), 70.3],
        [new Date(2014, 6, 14), 70]
    ]);

    dateFormatterAll.format(dataEur, 0);

    var chartEur = [],
        dataCharts = $('.b-rate_eur [data-chart]');

    dataCharts.each(function(i, el){
        chartEur[i] = new google.visualization.LineChart(el);
        chartEur[i].draw(dataEur, optionsAll);
    });

    /**
     * Dollar popover
     */

    var dataUsd = new google.visualization.DataTable();
    dataUsd.addColumn('date', 'date');
    dataUsd.addColumn('number', '');

    dataUsd.addRows([
        [new Date(2014, 6, 1), 64.2],
        [new Date(2014, 6, 2), 64],
        [new Date(2014, 6, 3), 64],
        [new Date(2014, 6, 4), 64],
        [new Date(2014, 6, 5), 63.6],
        [new Date(2014, 6, 6), 64.2],
        [new Date(2014, 6, 7), 64.6],
        [new Date(2014, 6, 8), 64.2],
        [new Date(2014, 6, 9), 64.2],
        [new Date(2014, 6, 10), 63.9],
        [new Date(2014, 6, 11), 63.1],
        [new Date(2014, 6, 12), 63.1],
        [new Date(2014, 6, 13), 62.9],
        [new Date(2014, 6, 14), 63.4]
    ]);

    dateFormatterAll.format(dataUsd, 0);

    var chartUsd = [],
        dataCharts = $('.b-rate_usd [data-chart]');

    dataCharts.each(function(i, el){
        chartUsd[i] = new google.visualization.LineChart(el);
        chartUsd[i].draw(dataUsd, optionsAll);
    });
}

$(function() {
    $(document).ready(function() {
        var headerLoading = $('header .header__loading');

        if(!headerLoading) return;

        var body = $('body'),
            article = $('.article__container');

        var translatePercent = Math.round(100 - (body.scrollTop() / article.height() * 100));

        if(!(translatePercent > 0)) {
            translatePercent = 100;
        }

        headerLoading.css('transform', 'translate(-' + translatePercent + '%)');

        $(window).on('scroll', $.throttle(200,function(){
            translatePercent = Math.round(100 - (body.scrollTop() / article.height() * 100));

            if(!(translatePercent > 0)) {
                translatePercent = 100;
            }

            headerLoading.css('transform', 'translate(-' + translatePercent + '%)');
        }));
    });
});

$(function() {
    $(document).ready(function() {
	//не выполняем код ниже, если нет коментов на странице    
	if($('.comments').length < 1) return false;    
        var commentsElements  = $('.comments__answer');
        var answerForms = $('.comments__list .comments__comment-wrapper');

        commentsElements.on('click', function() {
            var answerForm = $(this).closest('li').find('.comments__comment-wrapper');
            
            if (answerForm.length) {
                answerForm.toggleClass('comments-flex');
            }
        });

        answerForms.find('.comments__comment-button').on('click', function() {
            $(this).closest('.comments__comment-wrapper').toggleClass('comments-flex');
        })

        initNiceSelect();

        function initNiceSelect() {
            $('.comments__select').niceSelect();

            var liElements = $('.comments__body .nice-select li');
            
            liElements.on('click', function () {
                $(this).closest('.nice-select').css('background-color', $(this).css('background-color'));
            });
        }
    });
});

$(function() {
    $(document).ready(function() {
        var mainBlock = $('.brick-play').length > 0;
        var isKD = $('.kartina-dnua').length > 0;
        var isInteresnoe = $('.interesnoe').length > 0;
        if (!mainBlock) { return; }
        var currentPoint = document.body.clientWidth;

        var firstBlock = $('.first-main-block');
        var secondBlock = $('.second-main-block');
        var thirdBlock = $('.third-main-block');
        var specificItems = $('[data-specific-size]');

        var fn = $.debounce(100, false, function() {
            if (document.body.clientWidth >= 1280 && currentPoint < 1280) {
                doAlign();
                currentPoint = document.body.clientWidth;
            } else if ((document.body.clientWidth >= 1024 && document.body.clientWidth < 1280) && (currentPoint >= 1280 || currentPoint < 1024)) {
                doAlign('tablet');
                currentPoint = document.body.clientWidth;
            } else if (document.body.clientWidth < 1024 && currentPoint >= 1024) {
                doAlign('mobile');
                currentPoint = document.body.clientWidth;
            }
        });

        $(window).resize(fn);

         if (document.body.clientWidth < 1280 && document.body.clientWidth >= 1024) {
            doAlign('tablet')
        } else if (document.body.clientWidth < 1024) {
            doAlign('mobile');
        }

        function doAlign(size) {
            switch (size) {
                case 'mobile':
                    if (isInteresnoe) {
                        alignItemsInBlocks(3, 6);
                    } else {
                        alignItemsInBlocks(4, 6);
                    }
                    break;
                case 'tablet':
                    if (isKD) {
                        alignItemsInBlocks(3, 9);
                    } else if (isInteresnoe) {
                        alignItemsInBlocks(5, 9);
                    } else {
                        alignItemsInBlocks(6, 9);
                    }
                    break;
                default:
                    if (isKD) {
                        alignItemsInBlocks(5, 12);    
                    } else if (isInteresnoe) {
                        alignItemsInBlocks(7, 12);
                    } else {
                        alignItemsInBlocks(8, 12);
                    }
            }
            setSpecificPositions(size);
        }

        function alignItemsInBlocks(firstBlockCount, secondBlockCount) {
            var firstBlockItems = firstBlock.find('>.brick').filter(function(i, item) {
                return $(item).css('display') !== 'none';
            });
            if (firstBlockItems.length > firstBlockCount) {
                var countToRemove = firstBlockItems.length - firstBlockCount;
                secondBlock.find('>.brick').first().before(firstBlockItems.filter(':not(.not-search)').slice(-countToRemove).detach());
            } else if (firstBlockItems.length < firstBlockCount) {
                var countToAdd = firstBlockCount - firstBlockItems.length;
                firstBlock.append(secondBlock.find('>.brick').filter('.brick:not(.not-search)').slice(0, countToAdd).detach());
            }

            var secondBlockItems = secondBlock.find('>.brick');
            if (secondBlockItems.length > secondBlockCount) {
                var countToRemove = secondBlockItems.length - secondBlockCount;
                thirdBlock.find('>.brick').first().before(secondBlockItems.filter('.brick:not(.not-search)').slice(-countToRemove).detach());
            } else if (secondBlockItems.length < secondBlockCount) {
                var countToAdd = secondBlockCount - secondBlockItems.length;
                secondBlock.append(thirdBlock.find('>.brick').filter('.brick:not(.not-search)').slice(0, countToAdd));
            }
        }

        function setSpecificPositions(size) {
            specificItems.each(function (index, item) {
                var $item = $(item);
                var data = $item.data().specificSize.split(',');
                var position;
                 switch (size) {
                    case 'mobile': 
                        position = +data[0] - 1;
                        break;
                    case 'tablet': 
                        position = +data[1] - 1;
                        break;
                    default:
                        position = +data[2] - 1;
                }
                var items = $item.parent().find('>.brick');
                var currentIndex = items.index(item);
                if (currentIndex === position) {
                    return;
                }
                if (currentIndex > position) {
                    items.eq(position).before($item.detach());
                } else {
                    items.eq(position).after($item.detach());
                }
            });
        }
    });
});

