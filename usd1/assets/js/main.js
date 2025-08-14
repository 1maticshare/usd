$(function(){
	
	$('.menu__btn').on('click', function(){
		$('.menu').toggleClass('active')
	})
	$('.menu__link_dropdown').on('click', function(){
		$(this).toggleClass('active');
		$(this).siblings('.menu__dropdown-list').toggleClass('active');
	})
    if($(window).width()>769){
    	$('.hero__img_1').parallax({
	      mouseport: $('.hero'),
	      decay: 0.9
	    });
		$('.hero__img_2').parallax({
	      mouseport: $('.hero'),
	      decay: 0.9
	    });
	    $('.hero__name').parallax({
	      mouseport: $('.hero'),
	      decay: 0.9
	    });
    }
    $('.stake__info-select').styler();
})