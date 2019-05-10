var spreadsheetId = "1txut410mszOZp_2TD4Cch8vtBeTY_4ymF1LNY3BARSo",
    url = "https://spreadsheets.google.com/feeds/list/1txut410mszOZp_2TD4Cch8vtBeTY_4ymF1LNY3BARSo/od6/public/basic?alt=json";
$.get({
    url: url,
    success: function(response) {
    var data = response.feed.entry,
    len = data.length,
    i = len-1,
    parsedData = [];
    var a = data[i].title.$t;
    if(a == '0'){document.getElementById("led").innerHTML = 'OFF';}
    else{document.getElementById("led").innerHTML = 'ON';}

  }
});
var spreadsheetId = "15hqzIqdbUESbm-NrdfKGKwcuCJC_qJslffOs570ttZM",
    url = "https://spreadsheets.google.com/feeds/list/15hqzIqdbUESbm-NrdfKGKwcuCJC_qJslffOs570ttZM/od6/public/basic?alt=json";
$.get({
    url: url,
    success: function(response) {
    var data = response.feed.entry,
    len = data.length,
    i = len-1,
    parsedData = [];
    document.getElementById("currentA").innerHTML =data[i].title.$t;
  }
});
var spreadsheetId = "1KSG6IBgAHO23M8HXaXzTILl5hxC1LfczRvGgzrmpheQ",
    url = "https://spreadsheets.google.com/feeds/list/1KSG6IBgAHO23M8HXaXzTILl5hxC1LfczRvGgzrmpheQ/od6/public/basic?alt=json";
$.get({
    url: url,
    success: function(response) {
    var data = response.feed.entry,
    len = data.length,
    i = len-1,
    parsedData = [];
    document.getElementById("Voltage").innerHTML =data[i].content.$t.replace('_cokwr:', '');
  }
});
var spreadsheetId = "1kWAr_NW3eGoeW8V_NhR8nff5Xjh1sF60vfiakAjaccs",
    url = "https://spreadsheets.google.com/feeds/list/1kWAr_NW3eGoeW8V_NhR8nff5Xjh1sF60vfiakAjaccs/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-10,
      parsedData = [];

    for (i = len-7; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substr(-7),
        value: data[i].content.$t.replace('_cokwr:', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'line',
          renderAt: 'chart-container',
          width: '675',
          height: '400',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "LED LAMPS POWER CONSUMPTION MONITORING",
            "yAxisName": "Power Consumed(W)",
            "xAxisName": "Time Frame",
            "numdisplaysets":"10",
            "baseFont": "Open Sans",
                "paletteColors": "#2AA992",
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

var spreadsheetId = "1dFxT33qzCXmwXh8vjGruCAhlaGVJsYWb3bJFB8L6o1M",
    url = "https://spreadsheets.google.com/feeds/list/1dFxT33qzCXmwXh8vjGruCAhlaGVJsYWb3bJFB8L6o1M/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-1,
      parsedData = [];
      var a = data[i].title.$t;

      var spreadsheetId = "1rCz3NZH5gMf-T8BP7udnpUXWJMqBGqPn_gzuNcH057A",
          url = "https://spreadsheets.google.com/feeds/list/1rCz3NZH5gMf-T8BP7udnpUXWJMqBGqPn_gzuNcH057A/od6/public/basic?alt=json";
      $.get({
        url: url,
        success: function(response) {
          var data = response.feed.entry,
            len = data.length,
            i = len-1,
            parsedData = [];
            var b = data[i].title.$t;
            var c = parseInt(a)+parseInt(b)
            document.getElementById("broken").innerHTML=c;

        }
      });

}

});

//Dashboard ends there

////////////////////////////////////////////////////////////////////

//Energy Monitoring of StreetLight -daily

var spreadsheetId = "1kWAr_NW3eGoeW8V_NhR8nff5Xjh1sF60vfiakAjaccs",
    url = "https://spreadsheets.google.com/feeds/list/1kWAr_NW3eGoeW8V_NhR8nff5Xjh1sF60vfiakAjaccs/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-10,
      parsedData = [];

    for (i = len-7; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t.substr(-7),
        value: data[i].content.$t.replace('_cokwr:', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'line',
          renderAt: 'streetlight-energychart-daily',
          width: '675',
          height: '400',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "LED LAMPS POWER CONSUMPTION MONITORING",
            "yAxisName": "Power Consumed(W)",
            "xAxisName": "Time Frame",
            "numdisplaysets":"10",
            "baseFont": "Open Sans",
                "paletteColors": "#2AA992",
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
//Energy Monitoring of StreetLight -weekly

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
          renderAt: 'streetlight-energychart-weekly',
          width: '100%',
          height: '100%',
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


//Broken Lamp Detection LED one

var spreadsheetId = "1dFxT33qzCXmwXh8vjGruCAhlaGVJsYWb3bJFB8L6o1M",
    url = "https://spreadsheets.google.com/feeds/list/1dFxT33qzCXmwXh8vjGruCAhlaGVJsYWb3bJFB8L6o1M/od6/public/basic?alt=json";
$.get({
    url: url,
    success: function(response) {
    var data = response.feed.entry,
    len = data.length,
    i = len-1,
    parsedData = [];
    var a = data[i].title.$t;
    if (a == 1) {
      var txt="Broken!!!";
      document.getElementById("Ledonestatus").innerHTML=txt;
      document.getElementById("Ledonestatus").style.color = "#ff0000";
    }
    if (a == 0) {
      var txt="Working";
      document.getElementById("Ledonestatus").innerHTML=txt;
      document.getElementById("Ledonestatus").style.color = "#00ff41";
    }
  }
});
var spreadsheetId = "1rCz3NZH5gMf-T8BP7udnpUXWJMqBGqPn_gzuNcH057A",
    url = "https://spreadsheets.google.com/feeds/list/1rCz3NZH5gMf-T8BP7udnpUXWJMqBGqPn_gzuNcH057A/od6/public/basic?alt=json";
$.get({
    url: url,
    success: function(response) {
    var data = response.feed.entry,
    len = data.length,
    i = len-1,
    parsedData = [];
    var a = data[i].title.$t;
    if (a == 1) {
      var txt="Broken!!!";
      document.getElementById("Ledtwostatus").innerHTML=txt;
      document.getElementById("Ledtwostatus").style.color = "#ff0000";
    }
    if (a == 0) {
      var txt="Working";
      document.getElementById("Ledtwostatus").innerHTML=txt;
      document.getElementById("Ledtwostatus").style.color = "#00ff41";
    }
  }
});

//Here ends broken lamp
