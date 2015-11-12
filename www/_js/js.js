$(document).ready(function() {


	// ======================================
	// меню 
	// ======================================


	$(".mobileMenuButton").on('click', function(){
		$(this).toggleClass("state_open");
		$(".menu").toggleClass("state_open");
		$(".subMenu, .menu__link.view_menuIcon").removeClass("state_open");
		return false;
	});

	$(".menu__link.view_menuIcon").on('click', function(){
		$(this).toggleClass("state_open");
		$(".subMenu").toggleClass("state_open");
		return false;
	});




});


































$(function() {




});



