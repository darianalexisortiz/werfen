(function ($, Drupal) {
  Drupal.behaviors.swipercustom = {
    attach: function (context, settings) {


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
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
              },
            },
            keyboard: {
              enabled: true,
            },

            on: {
               slideChange: function(){
                 id = this.activeIndex -1;
               },

               reachEnd: function(){
                   $(swiperH).each(function(obj) {
                      swiperH[obj].allowSlideNext = false;
                      swiperH[obj].allowSlidePrev = false;
                   });
               },
               reachBeginning: function(){


                   $(swiperH).each(function(obj) {
                      swiperH[obj].allowSlideNext = false;
                      swiperH[obj].allowSlidePrev = false;

                   });

               },
               fromEdge: function(){


                   $(swiperH).each(function(obj) {
                      swiperH[obj].allowSlideNext = true;
                      swiperH[obj].allowSlidePrev = true;

                   });

               }
            }
          }
          swiperV = new Swiper('.swiper-container-v', settingsV);

          let swiperH;
          settingsH = {
            direction: 'horizontal',
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 1,
            wrapperClass: 'swiper-wrapper-h',
            slideClass: 'swiper-slide-h',
            keyboard: {
              enabled: true,
            },
            on: {

               reachEnd: function(){
                   swiperV.allowSlideNext = false;
                   swiperV.allowSlidePrev = false;

                    $( ".swiper-pagination-v" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    $( ".swiper-scrollbar-h" ).addClass('animate__fadeOutDown').removeClass('animate__fadeInUp');
                    $( ".backbtntop" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight d-none');
                    $( ".swiper-slide-h" ).scrollTop( 0 );

               },
               reachBeginning: function(){

                   swiperV.allowSlideNext = true;
                   swiperV.allowSlidePrev = true;
                    $( ".swiper-pagination-v" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight');
                    $( ".swiper-scrollbar-h" ).addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');
                    $( ".backbtntop" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    conditionMoveSnap2();
               }
            }

          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

          $('.backbtn').click(function(e) {
            e.preventDefault();
            swiperH[id].slidePrev();
          });

          var sizeSwitch = 290;
          var switchHandle = $('.switch .handle');
          var switchArea =  $('.switch');

          switchHandle.draggable({
            axis: 'x',
            containment: 'parent',
            stop: function() {
              conditionMove();
            }
          });

          switchArea.click(function() {
            conditionMoveSnap();
          });


          function conditionMove() {
            if(parseInt(switchHandle.css('left')) <= (sizeSwitch / 2)) {
              switchHandle.animate({
                left: 0
              }, 200);
            }
            else {
              switchHandle.animate({
                left: sizeSwitch + 'px'
              }, 200);

               swiperH[id].slideNext();
            }
          }

        function conditionMoveSnap() {
          if(parseInt(switchHandle.css('left')) == sizeSwitch) {
            switchHandle.animate({
              left: 0
            }, 200);
          }
          else {
            switchHandle.animate({
              left: sizeSwitch + 'px'
            }, 200, function() {
            swiperH[id].slideNext();
            });
  }
}

function conditionMoveSnap2() {
    switchHandle.animate({
      left: 0
    }, 200);
}

   }
  };
})(jQuery, Drupal);
