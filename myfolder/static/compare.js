var spreadsheetId = "1IemZTj6Gg3E-rnTm8rqO_XUic-gaXx155JTHFNGDz5Y",
    url = "https://spreadsheets.google.com/feeds/list/1IemZTj6Gg3E-rnTm8rqO_XUic-gaXx155JTHFNGDz5Y/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-10,
      parsedData = [];

    for (i = len-10; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substring(0,data[i].title.$t.length-17),
        value: data[i].content.$t.replace('drive: drive, _cpzh4: ', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'column2d',
          renderAt: 'stored',
          width: '100%',
          height: '450px',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "Data From ESP8266",
            "yAxisName": "Random Numbers(ascending)",
            "xAxisName": "Time Frame",
            "numdisplaysets":"10",
            "baseFont": "Open Sans",
                "paletteColors": "#db2543",
                "plotFillAlpha": "70",
                "usePlotGradientColor": "0",
                "bgcolor": "#ffffff",
                "bgalpha": "95",
                "canvasbgalpha": "0",
                "basefontcolor": "#000000",
                "showAlternateHGridColor": "0",
                "divlinealpha": "50",
                "divlinedashed": "0",
                "rotateyaxisname": "1",
                "canvasbordercolor": "#FFF",
                "canvasborderthickness": ".3",
                "canvasborderalpha": "100",
                "showValues": "0",
                "plotSpacePercent": "12",
                "showPlotBorder": "1",
                "plotBorderColor": "#2AA992",
                "plotBorderThickness": "1",
                "labelFontSize": "15",
                "outCnvBaseFontSize": "15",

                // tooltip configuration
                "toolTipBgColor": "#000",
                "toolTipPadding": "12",
                "toolTipBorderRadius": "3",
                "toolTipBorderThickness": "1",
                "toolTipBorderColor": "#ccc",
                "toolTipBgAlpha": "60",
                "plotToolText": "<div class='plotToolText'>$label: $dataValue</div>",
            "numberPrefix": " "
            },

            "data": parsedData
          }
        })
        .render();
    });
  }
});

var spreadsheetId = "1IemZTj6Gg3E-rnTm8rqO_XUic-gaXx155JTHFNGDz5Y",
    url = "https://spreadsheets.google.com/feeds/list/1IemZTj6Gg3E-rnTm8rqO_XUic-gaXx155JTHFNGDz5Y/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-10,
      parsedData = [];

    for (i = len-10; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substring(0,data[i].title.$t.length-17),
        value: data[i].content.$t.replace('drive: drive, _cpzh4: ', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'column2d',
          renderAt: 'used',
          width: '100%',
          height: '450px',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "Data From ESP8266",
            "yAxisName": "Random Numbers(ascending)",
            "xAxisName": "Time Frame",
            "numdisplaysets":"10",
            "baseFont": "Open Sans",
                "paletteColors": "#db2543",
                "plotFillAlpha": "70",
                "usePlotGradientColor": "0",
                "bgcolor": "#ffffff",
                "bgalpha": "95",
                "canvasbgalpha": "0",
                "basefontcolor": "#000000",
                "showAlternateHGridColor": "0",
                "divlinealpha": "50",
                "divlinedashed": "0",
                "rotateyaxisname": "1",
                "canvasbordercolor": "#FFF",
                "canvasborderthickness": ".3",
                "canvasborderalpha": "100",
                "showValues": "0",
                "plotSpacePercent": "12",
                "showPlotBorder": "1",
                "plotBorderColor": "#2AA992",
                "plotBorderThickness": "1",
                "labelFontSize": "15",
                "outCnvBaseFontSize": "15",

                // tooltip configuration
                "toolTipBgColor": "#000",
                "toolTipPadding": "12",
                "toolTipBorderRadius": "3",
                "toolTipBorderThickness": "1",
                "toolTipBorderColor": "#ccc",
                "toolTipBgAlpha": "60",
                "plotToolText": "<div class='plotToolText'>$label: $dataValue</div>",
            "numberPrefix": " "
            },

            "data": parsedData
          }
        })
        .render();
    });
  }
});
