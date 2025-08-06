// analytics.js

(function() {
  // Load the Google Analytics library
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NCG18CFWGD';
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag when library loads
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = gtag; // Make gtag globally accessible

  gtag('js', new Date());
  gtag('config', 'G-NCG18CFWGD');
})();
