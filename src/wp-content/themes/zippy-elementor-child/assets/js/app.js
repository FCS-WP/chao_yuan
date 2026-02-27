import "../slick/slick.min";
$(document).ready(function ($) {
  
});

$("#hp-our-reviews").slick({
  autoplay: true,
  autoplaySpeed: 1200,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false
      },
    },
  ],
});