// App download buttons, shared by every page. This is the ONLY place to change them.
// Leave a link empty ('') and that store shows as "Coming soon". Paste the real link to switch it live.
var EXCHANGE_STORES = {
  apple: '',   // App Store link, e.g. 'https://apps.apple.com/app/id1234567890' (from App Store Connect > App Information > Apple ID)
  google: ''   // 'https://play.google.com/store/apps/details?id=com.exchangesocialapp.app' (once the Play listing is published)
};

(function () {
  var APPLE_BADGE = 'https://tools.applemarketingtools.com/api/badges/download-on-the-app-store/black/en-us';
  var GOOGLE_BADGE = 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';
  function live(url, img, alt, cls) {
    return '<a class="sb-live ' + cls + '" href="' + url + '" target="_blank" rel="noopener"><img src="' + img + '" alt="' + alt + '"></a>';
  }
  function soon(label) {
    return '<span class="sb-soon"><b>' + label + '</b><em>Coming soon</em></span>';
  }
  var html =
    (EXCHANGE_STORES.apple ? live(EXCHANGE_STORES.apple, APPLE_BADGE, 'Download on the App Store', 'sb-apple') : soon('iPhone &amp; iPad')) +
    (EXCHANGE_STORES.google ? live(EXCHANGE_STORES.google, GOOGLE_BADGE, 'Get it on Google Play', 'sb-google') : soon('Android'));
  var nodes = document.querySelectorAll('.store-badges');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = '<span class="sb-label">Get the app</span><span class="sb-row">' + html + '</span>';
  }
})();
