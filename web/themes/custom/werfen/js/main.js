(function ($, Drupal) {
  Drupal.behaviors.chartcustom = {
    attach: function (context, settings) {

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
              fontFamily: "Noto Sans",
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: " Net Profit",
              fontSize: 23,
              fontFamily: "Noto Sans",
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
              fontFamily: "Noto Sans",
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "Net Worth",
              fontSize: 23,
              fontFamily: "Noto Sans",
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
              fontFamily: "Noto Sans",
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "EBITA (Before Interest, Taxes, Depreciation & Amortization)",
              fontSize: 16,
              fontFamily: "Noto Sans",
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
              fontFamily: "Noto Sans",
              fontColor: "#3b67ad"
            },
            subtitles: [{
              text: "Investment in R&D",
              fontSize: 23,
              fontFamily: "Noto Sans",
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
              fontFamily: "Noto Sans",
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
