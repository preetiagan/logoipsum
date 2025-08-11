



$(document).ready(function(){
$('.slider-products').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows:false,
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
      breakpoint: 768, // Applies to screens up to 768px wide
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // Applies to screens up to 480px wide
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false // Example: Disable arrows on small screens
      }
    },
    {
      breakpoint: 425, // Applies to screens up to 480px wide
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
 
        arrows: false // Example: Disable arrows on small screens
      }
    },
    {
      breakpoint:320, // Applies to screens up to 480px wide
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
 
        arrows: false // Example: Disable arrows on small screens
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