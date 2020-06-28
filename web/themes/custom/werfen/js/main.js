(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
    //initialize swiper when document ready


          //initialize swiper when document ready

            let id;
            let swiperV;
            var settingsV = {

            direction: 'vertical',
            mousewheel: true,
            wrapperClass: 'swiper-wrapper-v',
            slideClass: 'swiper-slide-v',
            pagination: {
              el: '.swiper-pagination-v',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              },
            },
            keyboard: {
              enabled: true,
            },
            hashNavigation: true,
            on: {
               slideChange: function(){
               id = this.activeIndex - 1;
               }
            }
          }
          swiperV = new Swiper('.swiper-container-v', settingsV);
          let a;
          let swiperH;
          settingsH = {
            centeredSlides: true,
            wrapperClass: 'swiper-wrapper-h',
            slideClass: 'swiper-slide-h',
            pagination: {
              el: '.swiper-pagination-h',
              clickable: true,
            },
            hashNavigation: true,
            keyboard: {
              enabled: true,
            },
            on: {
               reachEnd: function(){
                   swiperV.allowSlideNext = false;
                   swiperV.allowSlidePrev = false;
                    $( ".swiper-pagination-v" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    $( ".swiper-pagination-h" ).addClass('animate__fadeOutDown').removeClass('animate__fadeInUp');
                    $( ".backbtntop" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight d-none');
               },
               reachBeginning: function(){

                   swiperV.allowSlideNext = true;
                   swiperV.allowSlidePrev = true;
                    $( ".swiper-pagination-v" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight');
                    $( ".swiper-pagination-h" ).addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');
                    $( ".backbtntop" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
               }
            }

          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

          document.querySelector('.backbtn').addEventListener('click', function (e) {
            e.preventDefault();
            swiperH[id].slidePrev();
          });

   }
  };
})(jQuery, Drupal);
