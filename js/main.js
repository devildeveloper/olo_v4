/*require.config({
  "baseUrl":'js/vendor',
  "paths":{
    "app":"../app"
  },
  "shim":{
    "slick":["jquery"]
  }
});

requirejs(["app/main"])
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53745008-2', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');


//-----------------------------

window.$zopim||(function(d,s){var z=$zopim=function(c){
  z._.push(c)},$=z.s=
  d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
    _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
    $.src='//v2.zopim.com/?2XEknNQKEy8sG0rZOyTprzTINxbxIXNV';z.t=+new Date;$.
    type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');

//main
$(document).on("ready",init);
function init(){
  $('body section[data-role="slider"] #slider .content.c2,body section[data-role="slider"] #slider .content.c3').css({'display':'block'});

  $("#slider").slick({
    dots:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000
  });
  $("#slick-dsp").slick({
    dots:true,
    arrows:false,
    // arrows:false,
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
  $("#slider").on("beforeChange",function(event, slick, currentSlide, nextSlide){
    switch(nextSlide){
      case 0:
        $("[data-role='slider'] .triangle").css({'border-top':'20px solid #00AEEF'});
        break;
        case 1:
          $("[data-role='slider'] .triangle").css({'border-top':'20px solid #662D91'});
          break;
          case 2:
            $("[data-role='slider'] .triangle").css({'border-top':'20px solid #00A651'});
            break;
            default:
            }
    $("li .more").bind("click",function(e){
      e.preventDefault();
      $(".popup.m2").fadeIn();
      });
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
    $(".follow.more").bind("click",function(e){
      e.preventDefault();
      $(".popup.m1").fadeIn();
    });
    $("li .more").bind("click",function(e){
      e.preventDefault();
      $(".popup.m2").fadeIn();
    });
    $("#slider .more").bind("click",function(e){
      e.preventDefault();
      $(".popup.m3").fadeIn();
    });



    $("form").on("submit",function(e){
      e.preventDefault();
      $.ajax({
        url:$(this).attr('action'),
        type:$(this).attr('method'),
        data:$(this).serialize()
      })
      var $input=$(this).children(".t");
        $input.val('En breve te llamamos')
    });
    $("#c2c").on("submit",function(e){
      e.preventDefault();
      $.ajax({
        url:$(this).attr('action'),
        type:$(this).attr('method'),
        data:$(this).serialize()
      })
      var $input=$(this).children(".t");
      $input.val('En breve te llamamos')
      $(this).html("<img src='imagenes/movil/respuesta_movil.png'>");
    });

    $(window).resize(function(){
      $("li .more").bind("click",function(e){
        e.preventDefault();
        $(".popup.m2").fadeIn();
      });
    });
}
