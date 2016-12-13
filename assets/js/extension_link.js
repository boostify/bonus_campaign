$(document).ready(function() {
  if($(".extension_install_btn").length > 0) {

    var detectUA = function() {
      var ua = navigator.userAgent.match(/chrome|firefox|safari|opera|msie|trident|iPad|iPhone|iPod/i)[0].toLowerCase();
      if (ua == "trident") {ua = "msie";} //IE11 detection
      if (ua == "iPad" || ua == "iPhone" || ua == "iPod") {ua = "iOS";} //iOS detection
      return ua;
    };

    var extensionUAswitch = function() {
      var ua_str = detectUA(),
        install_ext_btn = $(".extension_install_btn");
      var urls = {
        chrome: "https://chrome.google.com/webstore/detail/jekojmadmgecodgmbhmpeoafmgepjfga",
        firefox: "https://addons.mozilla.org/de/firefox/addon/bonus-melder/",
        safari: "https://www.bonusspende.de/extension/bonus_melder/bonus_melder.safariextz"
      };

      install_ext_btn.addClass("ua_" + ua_str);

      // To DO: Please kill the outher one =)
      if(ua_str == "chrome" || ua_str == "firefox" || ua_str == "safari") {
        install_ext_btn.find("a").attr("href", urls[ua_str]);
        install_ext_btn.find("a").click(function() {
          _gaq.push(['_trackEvent', 'user', 'extension', ua_str]);
          if(ua_str == "safari") {
            install_ext_btn.find("a").attr("target", "_self");
          }
        });
      } else {
        install_ext_btn.addClass("disabled")
          .click(function() {
            return false;
          });
        $(".extension_supported").hide();
        $(".extension_unsupported").show();
      }
    };

    extensionUAswitch();
  }
});
