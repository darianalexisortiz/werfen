(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
    //initialize swiper when document ready

      $(document).ready(function () {
          //initialize swiper when document ready
          let id;
          let swiperS;
          var settingS = {
              wrapperClass: 'swiper-wrapper-c',
              slideClass: 'swiper-slide-c',
              direction: 'vertical',
              slidesPerView: 'auto',
              nested: true,
              freeMode: true,
              mousewheel: true,
              scrollbar: {
                el: '.swiper-scrollbar',
              },
              keyboard: {
                enabled: false,
              },
            };

          swiperS = new Swiper('.swiper-container-c', settingS);

            let swiperV;
            var settingsV = {
            direction: 'vertical',
            mousewheel: true,
            wrapperClass: 'swiper-wrapper-v',
            slideClass: 'swiper-slide-v',
            lazy: true,
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
               console.log(this.activeIndex - 1);
               id = this.activeIndex - 1;
               }
            }
          }
          swiperV = new Swiper('.swiper-container-v', settingsV);
          let a;
          let swiperH;
          settingsH = {
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
                    $( ".swiper-pagination-v" ).animate({ opacity: 0, right: "-2", }, 500 );
                    $( ".swiper-pagination-h" ).animate({ opacity: 0, bottom: "-2", }, 500 );
                /*   swiperS.forEach(function(obj) {
                    obj.keyboard.enable();
                   });*/
               },
               reachBeginning: function(){

                   swiperV.allowSlideNext = true;
                   swiperV.allowSlidePrev = true;
                   $( ".swiper-pagination-v" ).animate({ opacity: 1, right:10, }, 500 );
                   $( ".swiper-pagination-h" ).animate({ opacity: 1, bottom:10, }, 500 );
                  /* swiperS.forEach(function(obj) {
                    obj.keyboard.disable();
                   });*/
               }
            }

          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

        });

   }
  };
})(jQuery, Drupal);
