var spreadsheetId = "1SWXda42zckgut4txnxGP-jFBtzD3eH2CizDGYjj3HGQ",
    url = "https://spreadsheets.google.com/feeds/list/1SWXda42zckgut4txnxGP-jFBtzD3eH2CizDGYjj3HGQ/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-10,
      parsedData = [];

    for (i = len-5; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substring(0,data[i].title.$t.length-17),
        value: data[i].content.$t.replace('_cokwr: ', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'column2d',
          renderAt: 'stored',
          width: '100%',
          height: '80%',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "Battery Charged",
            "yAxisName": "Power Generated",
            "xAxisName": "Date",
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
var spreadsheetId = "1KSG6IBgAHO23M8HXaXzTILl5hxC1LfczRvGgzrmpheQ",
    url = "https://spreadsheets.google.com/feeds/list/1KSG6IBgAHO23M8HXaXzTILl5hxC1LfczRvGgzrmpheQ/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-5,
      parsedData = [];

    for (i = len-5; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substring(0,data[i].title.$t.length-17),
        value: data[i].content.$t.replace('_cokwr:', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'column2d',
          renderAt: 'used',
          width: '100%',
          height: '500%',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "Power Consumed by LED LAMPS",
            "yAxisName": "Power consumption(kWh)",
            "xAxisName": "Day",
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
