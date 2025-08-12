



$(document).ready(function(){
$('.slider-products').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  centerMode:true,
  autoplaySpeed: 1000,
  arrows:false,
    responsive: [
    {
      breakpoint: 1024, // Applies to screens up to 1024px wide
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false 
      }
    },
    {
      breakpoint: 425, 
      settings: {
    slidesToShow: 1,      
    infinite: true,
      }
    },
    {
      breakpoint:320, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
 
        arrows: false 
      }
    }
  ]
});
$('.slider-portfolio').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Applies to screens up to 1024px wide
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false 
      }
    },
    {
      breakpoint: 425, 
      settings: {
    slidesToShow: 1,      
    infinite: true,
      }
    },
    {
      breakpoint:320, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
 
        arrows: false 
      }
    }
  ]
});
   $(".tab").click(function(){
        var tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".review-panel").removeClass("active");
        $("#tab-" + tabId).addClass("active");
    });
});