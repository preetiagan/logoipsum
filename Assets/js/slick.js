



$(document).ready(function(){
$('.slider-products').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
});
$('.slider-portfolio').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll:1,
  dots:true,
  arrows:false,
});
   $(".tab").click(function(){
        var tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".review-panel").removeClass("active");
        $("#tab-" + tabId).addClass("active");
    });
});