//============== fixed manu js =============//

$(window).scroll(function(){
    var scrollAmount = $(window).scrollTop()
    console.log(scrollAmount)
    
    if(scrollAmount > 510){
        $(".manubar").addClass("fixed")
    }else{
        $(".manubar").removeClass("fixed")
    }
    
    if(scrollAmount > 540){
      $(".b-t").fadeIn();
    }else{
      $(".b-t").fadeOut();
    }
})

//============== wow js =============//

new WOW().init();


//============== banner slider js =============//

$('#banner-part').slick({
    dots:true,
    fade:true,
    infinite: true,
    speed:1000,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows:false,    
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:576,
        settings: {
          arrows:false,    
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//============== venobox js =============//

$('.venobox').venobox(); 

//============== feedback slider js =============//

$('.feedback-slider').slick({
    dots:true,
    infinite: true,
    speed:1000,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//============== counter up js =============//

$('.counter').counterUp({
                delay: 10,
                time: 1000
            });

//============== color tab js =============//

$("#colorful").colorfulTab(); 

//============== sponsor slider js =============//

$('.sponsor-slider').slick({
    dots:false,
    infinite: true,
    speed:1000,
    centerMode: true,
    centerPadding: 0,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

//============== back to top js =============//

$(".b-t").click(function(){
    $("html,body").animate({
        scrollTop:0
    },100)
})
