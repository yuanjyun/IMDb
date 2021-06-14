$(document).ready(function() {
  const swiper = new Swiper('.swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      960: {
        slidesPerView: 4,
        slidesPerGroup: 1
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 2
      },
      1440:{
        slidesPerView: 6,
        slidesPerGroup: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },
    
  });

  $('.category-btn').click(function(event) {
    event.preventDefault();
    $(this).toggleClass(this);
    $('.category-list').slideToggle();
  });

  $('.account-btn').click(function(event) {
    event.preventDefault();
    $(this).toggleClass(this);
    $('.account-list').slideToggle();
  });
})
 
