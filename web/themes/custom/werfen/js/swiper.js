(function ($, Drupal) {
  Drupal.behaviors.swipercustom = {
    attach: function (context, settings) {

                 var idcontent = [];

                 $('.content-id').each(function(index, obj) {
                      idcontent.push($(this).attr("id"));
                 });

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
                   $(swiperH).each(function(obj) {
                      swiperH[obj].slidePrev();
                   });
               },

               reachEnd: function(){
                   $(swiperH).each(function(obj) {
                      swiperH[obj].allowSlideNext = false;
                      swiperH[obj].allowSlidePrev = false;
                      swiperH[obj]
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
                   swiperV.mousewheel = false;

                    $( ".swiper-pagination-v" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    $( ".swiper-scrollbar-h" ).addClass('animate__fadeOutDown').removeClass('animate__fadeInUp');
                    $( ".backbtntop" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight d-none');
                    $( ".swiper-slide-h" ).scrollTop( 0 );
                    $( ".site-title" ).addClass('animate__animated animate__fadeOutRight').removeClass('animate__animated animate__fadeInRight');
                    location.href = '#' + idcontent[id];
                    parent.location.hash = '';

                    $('.swiper-slide-h').scroll(function() {
                      if ($(this).scrollTop() > 10) {
                        $('.navbar').fadeOut();
                      } else {
                        $('.navbar').fadeIn();
                      }
                    });

               },
               reachBeginning: function(){
                   swiperV.allowSlideNext = true;
                   swiperV.allowSlidePrev = true;
                   swiperV.mousewheel = true;


                    $( ".swiper-pagination-v" ).addClass('animate__fadeInRight').removeClass('animate__fadeOutRight');
                    $( ".swiper-scrollbar-h" ).addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');
                    $( ".backbtntop" ).addClass('animate__fadeOutRight').removeClass('animate__fadeInRight');
                    $( ".site-title" ).addClass('animate__animated animate__fadeInRight').removeClass('animate__animated animate__fadeOutRight');
                    conditionMoveSnap2();
               }
            }


          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

          $('.backbtn').on('click touchend', function(e) {
            e.preventDefault();
            swiperH[id].slidePrev();
          });

          var sizeSwitch = 290;
          var switchHandle = $('.switch .handle');
          var switchArea =  $('.switch');
          let switchPosition;
          switchHandle.draggable({
            axis: 'x',
            containment: 'parent',
            stop: function() {
              conditionMove();
            },
            drag: function(e,ui) {
                swiperH[id].setTranslate( - ui.position.left);
                switchPosition = ui.position.left;

            }
          });

          switchArea.on('click touchend', function() {
            conditionMoveSnap();

          });


          function conditionMove() {
            if(switchPosition <= (sizeSwitch / 2)) {
              switchHandle.animate({
                left: 0
              }, 200);
               swiperH[id].slidePrev();
            }
            else {
              switchHandle.animate({
                left: sizeSwitch + 'px'
              }, 200);

               swiperH[id].slideNext();
            }
          }

        function conditionMoveSnap() {
          if(switchPosition == sizeSwitch) {
            switchHandle.animate({
              left: 0
            }, 200);
               swiperH[id].slidePrev();
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
