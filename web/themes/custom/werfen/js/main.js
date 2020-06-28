(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
    //initialize swiper when document ready


          //initialize swiper when document ready

            let id;

         /*   let swiperC;
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
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                keyboard: {
                  enabled: false,
                },
            };

            swiperC = new Swiper('.swiper-container-c2', settingC);
*/
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
               }
            }

          };
          swiperH = new Swiper('.swiper-container-h', settingsH);

          document.querySelector('.backbtn').addEventListener('click', function (e) {
            e.preventDefault();
            swiperH[id].slidePrev();
          });
          //Graficos
          window.onload = function () {
            CanvasJS.addColorSet("greenShades",
                    [
                    "#C5D7DB",
                    "#00A3E0"
                    ]);
            CanvasJS.addColorSet("torta",
                    [
                    "#C5D7DB",
                    "#00A3E0"
                    ]);
          var chart = new CanvasJS.Chart("chart1", {
            animationEnabled: true,
            colorSet: "greenShades",
            title:{
              text: "↑",
              fontSize: 50,
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: " Net Profit",
              fontSize: 23,
              fontColor:"#28373C"
            }],
            axisX: {
              title: "  ",
              gridDashType: "dot",
              gridColor: "#5a9ed8",
              lineColor: "#5a9ed8",
              labelFontColor: "#5a9ed8",
              tickColor: "#5a9ed8"
            },
            axisY: {
              gridDashType: "dot",
              gridColor: "#ffffff",
              titleFontColor: "#ffffff",
              lineColor: "#ffffff",
              labelFontColor: "#ffffff",
              tickColor: "#ffffff"
            },
            axisY2: {
              gridColor: "#000",
              title: "Million €",
              titleFontColor: "#000",
              lineColor: "#000",
              labelFontColor: "#000",
              tickColor: "#000"
            },
            toolTip: {
              shared: true
            },
            legend: {
              cursor: "pointer",
              itemclick: toggleDataSeries
            },
            backgroundColor: "#ffffff",
            data: [{
              type: "column",
              showInLegend: false,
              yValueFormatString: "### Million €",
              indexLabel: "{y}",
              indexLabelPlacement: "outside",
              dataPoints: [
                { label: "2019",  y: 182 },
                { label: "2018",  y: 161  }
              ]
            }]
          });
          var chart2 = new CanvasJS.Chart("chart2", {
            animationEnabled: true,
            colorSet: "greenShades",
            title:{
              text: "→",
              fontSize: 50,
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "Net Worth",
              fontSize: 23,
              fontColor:"#28373C"
            }],
            axisX: {
              title: "  ",
              gridDashType: "dot",
              gridColor: "#5a9ed8",
              lineColor: "#5a9ed8",
              labelFontColor: "#5a9ed8",
              tickColor: "#5a9ed8"
            },
            axisY: {
              gridDashType: "dot",
              gridColor: "#ffffff",
              titleFontColor: "#ffffff",
              lineColor: "#ffffff",
              labelFontColor: "#ffffff",
              tickColor: "#ffffff"
            },
            axisY2: {
              gridColor: "#000",
              title: "Million €",
              titleFontColor: "#000",
              lineColor: "#000",
              labelFontColor: "#000",
              tickColor: "#000"
            },
            toolTip: {
              shared: true
            },
            legend: {
              cursor: "pointer",
              itemclick: toggleDataSeries
            },
            backgroundColor: "#ffffff",
            data: [{
              type: "column",
              showInLegend: false,
              yValueFormatString: "#,### Million €",
              indexLabel: "{y}",
              indexLabelPlacement: "outside",
              dataPoints: [
                { label: "2019",  y: 1371 },
                { label: "2018",  y: 1371  }
              ]
            }]
          });
          var chart3 = new CanvasJS.Chart("chart3", {
            animationEnabled: true,
            colorSet: "greenShades",
            title:{
              text: "↑",
              fontSize: 50,
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "EBITA (Before Interest, Taxes, Depreciation & Amortization)",
              fontSize: 16,
              fontColor:"#28373C"
            }],
            axisX: {
              title: "  ",
              gridDashType: "dot",
              gridColor: "#5a9ed8",
              lineColor: "#5a9ed8",
              labelFontColor: "#5a9ed8",
              tickColor: "#5a9ed8"
            },
            axisY: {
              gridDashType: "dot",
              gridColor: "#ffffff",
              titleFontColor: "#ffffff",
              lineColor: "#ffffff",
              labelFontColor: "#ffffff",
              tickColor: "#ffffff"
            },
            axisY2: {
              gridColor: "#000",
              title: "Million €",
              titleFontColor: "#000",
              lineColor: "#000",
              labelFontColor: "#000",
              tickColor: "#000"
            },
            toolTip: {
              shared: true
            },
            legend: {
              cursor: "pointer",
              itemclick: toggleDataSeries
            },
            backgroundColor: "#ffffff",
            data: [{
              type: "column",
              showInLegend: false,
              yValueFormatString: "#,### Million €",
              indexLabel: "{y}",
              indexLabelPlacement: "outside",
              dataPoints: [
                { label: "2019",  y: 345 },
                { label: "2018",  y: 311  }
              ]
            }]
          });
          var chart4 = new CanvasJS.Chart("chart4", {
            animationEnabled: true,
            colorSet: "greenShades",
            title:{
              text: "↑",
              fontSize: 50,
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "Investment in R&D",
              fontSize: 23,
              fontColor:"#28373C"
            }],
            axisX: {
              title: "  ",
              gridDashType: "dot",
              gridColor: "#5a9ed8",
              lineColor: "#5a9ed8",
              labelFontColor: "#5a9ed8",
              tickColor: "#5a9ed8"
            },
            axisY: {
              gridDashType: "dot",
              gridColor: "#ffffff",
              titleFontColor: "#ffffff",
              lineColor: "#ffffff",
              labelFontColor: "#ffffff",
              tickColor: "#ffffff"
            },
            toolTip: {
              shared: true
            },
            legend: {
              cursor: "pointer",
              itemclick: toggleDataSeries
            },
            backgroundColor: "#ffffff",
            data: [{
              type: "column",
              showInLegend: false,
              yValueFormatString: "#,### Million €",
              indexLabel: "{y}",
              indexLabelPlacement: "outside",
              dataPoints: [
                { label: "2019",  y: 103 },
                { label: "2018",  y: 93  }
              ]
            }]
          });

          var torta = new CanvasJS.Chart("torta", {
            animationEnabled: true,
            colorSet: "torta",
            title:{
              text: "Total sale",
              fontSize: 23,
              fontColor: "#757679"
            },
            data: [{
              type: "doughnut",
              startAngle: 60,
              //innerRadius: 60,
              indexLabelFontSize: 17,
              indexLabel: "{label} - #percent%",
              toolTipContent: "<b>{label}:</b> {y} (#percent%)",
              dataPoints: [
                { y: 87.6, label: "IVD" },
                { y: 12.4, label: "Medical Devices" }
              ]
            }]
          });
          function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
            } else {
              e.dataSeries.visible = true;
            }
            e.chart.render();
          }
          chart.render();
          chart2.render();
          chart3.render();
          chart4.render();
          torta.render();
          };

   }
  };
})(jQuery, Drupal);
