var spreadsheetId = "1h6fzleF9TMXItiNlPDFCXpplJ-DlAj8fVmzM0oO7woo",
    url = "https://spreadsheets.google.com/feeds/list/1h6fzleF9TMXItiNlPDFCXpplJ-DlAj8fVmzM0oO7woo/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = len-1,
      parsedData = [];
      var a = data[i].title.$t;

      var spreadsheetId = "1RKBPJkauPxU2SWPkmgvFGS2JC0bs-AKXWWNAGzBdAsM",
          url = "https://spreadsheets.google.com/feeds/list/1RKBPJkauPxU2SWPkmgvFGS2JC0bs-AKXWWNAGzBdAsM/od6/public/basic?alt=json";
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
