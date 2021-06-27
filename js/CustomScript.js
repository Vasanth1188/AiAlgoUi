function tradingviewwidget(documentid) {
   //alert("sa");
   var sa = documentid

   const script = document.createElement('script');
   script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
   script.async = false;
   script.innerHTML = JSON.stringify({
      "symbol": "FX:EURUSD",
      "width": 450,
      "height": 170,
      "locale": "in",
      "dateRange": "12M",
      "colorTheme": "light",
      "trendLineColor": "rgba(41, 98, 255, 1)",
      "underLineColor": "rgba(41, 98, 255, 0.3)",
      "underLineBottomColor": "rgba(41, 98, 255, 0)",
      "isTransparent": false,
      "autosize": false,
      "largeChartUrl": ""
   })
   //"\"symbol\": \"FX: EURUSD\",\"width\": 350,\"height\": 220,\"locale\": " in ",\"dateRange\": \"12M\",\"colorTheme\": \"light\",\"trendLineColor\": \"rgba(41, 98, 255, 1)\",\"underLineColor\": \"rgba(41, 98, 255, 0.3)\",\"underLineBottomColor\": \"rgba(41, 98, 255, 0)\",\"isTransparent\": false,\"autosize\": false,\"largeChartUrl\": \"\"";
   document.getElementById(sa).append(script);

   //tradingviewchart.appendChild(script);
}