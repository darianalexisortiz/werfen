(function ($, Drupal) {
  Drupal.behaviors.swipercustom = {
    attach: function (context, settings) {

   /*         let swiperC;
            var settingC = {
                wrapperClass: 'swiper-wrapper-c',
                slideClass: 'swiper-slide-c',
                direction: 'vertical',
                slidesPerView: 'auto',
                nested: true,
                freeMode: true,
                mousewheel: true,
                autoHeight: true,
                draggable: true,
                freeModeSticky: true,
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                keyboard: {
                  enabled: false,
                },
            };

            swiperC = new Swiper('.swiper-container-c', settingC);
*/

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

            on: {
               slideChange: function(){
               id = this.activeIndex - 1;
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
            draggable: false,
            dragSize: 100,
            slidesPerView: 1,
            wrapperClass: 'swiper-wrapper-h',
            slideClass: 'swiper-slide-h',
            scrollbar: {
              el: '.swiper-scrollbar',

            },

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
               },
               reachBeginning: function(){

                   swiperV.allowSlideNext = true;
                   swiperV.allowSlidePrev = true;
                    $( ".swiper-pagination-v" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight');
                    $( ".swiper-scrollbar-h" ).addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');
                    $( ".backbtntop" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    conditionMoveSnap2()
               },
               sliderMove: function(){
                console.log(swiperH[id].getTranslate());
               }
            }

          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

          $('.backbtn').click(function(e) {
            e.preventDefault();
            swiperH[id].slidePrev();
          });
         /* settingsb = {
            direction: 'horizontal',
            wrapperClass: 'swiper-wrapperb',
          slideClass: 'swiper-slideb',
          }
          var swiper1 = new Swiper('.swiper-containerb', settingsb);
*/
var sizeSwitch = 135;
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
