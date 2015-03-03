define(["jquery","slick","picturefill","analitics","zopim"],function($){
  $(document).on("ready",init);
  function init(){
    $("#slider").slick({
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:5000
    });
    $("#slick-dsp").slick({
      dots:true,
      arrows:false,
    //  arrows:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
    });
    $("#slick-pls").slick({
      arrows:false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint:1279,
          settings:{
            slidesToShow:5,
            slidesToScroll:1,
            dots:false,
          }
        } ,
        {
          breakpoint:767,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
            dots:true,
          }
        }
      ]
    });
    $("#slider").on("afterChange",function(event, slick, currentSlide, nextSlide){
      var currentSlide = $('#slider').slick('slickCurrentSlide');
      switch(currentSlide){
        case 0:
          $(".triangle").css({'border-top':'20px solid #00aeef'});
          break;
        case 1:
          $(".triangle").css({'border-top':'20px solid #662d91'});
          break;
        case 2:
          $(".triangle").css({'border-top':'20px solid #00a651'});
          break;
        default:

      }
    });
    $(".st").on('click',function(e){
      e.preventDefault();
      var target=$(this).attr('href');
      var ypos=$(target).offset().top - 100;
      $("html,body").animate({
        'scrollTop':ypos+'px'
      })
    });
    $(".close").on("click",function(){
      $(this).parent().fadeOut();
    });
    $(".more").on("click",function(e){
      e.preventDefault();
      $(".popup").fadeIn();
    });
  }
});
