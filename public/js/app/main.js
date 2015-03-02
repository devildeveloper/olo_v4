define(["jquery","slick","picturefill"],function($){
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
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
          }
        }
    ]
    });
    $("#slick-pls").slick({
      dots:true,
      arrows:false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint:769,
          settings:{
            slidesToShow:1,
            slidesToScroll:1
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
