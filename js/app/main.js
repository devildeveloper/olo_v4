define(["jquery","slick","picturefill","analitics","zopim"],function(s){function e(){s('body section[data-role="slider"] #slider .content.c2,body section[data-role="slider"] #slider .content.c3').css({'display':'block'}),s("#slider").slick({dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3}),s("#slick-dsp").slick({dots:!0,arrows:!1,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:2e3,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1279,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),s("#slick-pls").slick({arrows:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1279,settings:{slidesToShow:5,slidesToScroll:1,dots:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),s("#slider").on("afterChange",function(e,o,t){var t=s("#slider").slick("slickCurrentSlide");switch(t){case 0:s(".triangle").css({"border-top":"20px solid #00aeef"});break;case 1:s(".triangle").css({"border-top":"20px solid #662d91"});break;case 2:s(".triangle").css({"border-top":"20px solid #00a651"})}}),s(".st").on("click",function(e){e.preventDefault();var o=s(this).attr("href"),t=s(o).offset().top-100;s("html,body").animate({scrollTop:t+"px"})}),s(".close").on("click",function(){s(this).parent().fadeOut()}),s(".more").on("click",function(e){e.preventDefault(),s(".popup").fadeIn()}),s("form").on("submit",function(e){e.preventDefault(),s.ajax({url:s(this).attr("action"),type:s(this).attr("method"),data:s(this).serialize()}).always(function(){var e=s("#t");e.val(""),e.attr("placeholder","En breve te llamamos")})})}s(document).on("ready",e)});