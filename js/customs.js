//slider start
jQuery(document).ready(function(){
        jQuery('#demo1').skdslider({
          slideSelector: '.slide',
          delay:5000,
          animationSpeed:1000,
          showNextPrev:false,
          showPlayButton:false,
          autoSlide:true,
          animationType:'fading'
        });

    });
//slider end

//slick slide start
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 800,
  slidesToScroll: 1
});
//slick slide end

//fixed menu start

//$navOffset=$('.navigation').offset().top;
//$(window).scroll(function(){
//    $scrolling=$(this).scrollTop();
//    if($scrolling >= $navOffset){
//       $('.navigation').addClass('sticky');
//    }
//    else{
//        $('.navigation').removeClass('sticky');
//    };

//fixed menu end

//scrolling start
$top_to_btm=200;
$('.top_to i').click(function(){
	$('html,body').animate({
		scrollTop: 0
	},1500);
});

$(window).scroll(function(){
	$scrolling=$(this).scrollTop();
	if($scrolling>= $top_to_btm){
		$('.top_to i').fadeIn();
	}
	else{
		$('.top_to i').fadeOut();
	}
});
//scrolling end

//slick slide for feedback part
$('.client_message').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.client_image'
    
});
$('.client_image').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.client_message',
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true,
  autoplaySpeed: 2000,
  autoplay: true
});
//feedback part


