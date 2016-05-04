(function () {
  var loadCSS = require('./lib/loadCSS');
  var openMenu = require('./lib/openMenu');
  var showMenuDesktop = require('./lib/showMenuDesktop');

  document.getElementById("iconfont").addEventListener("click", openMenu);

  document.getElementById("About").addEventListener("click", showMenuDesktop, false);
  document.getElementById("Careers").addEventListener("click", showMenuDesktop, false);
  document.getElementById("Ideas").addEventListener("click", showMenuDesktop, false);
  document.getElementById("Contact").addEventListener("click", showMenuDesktop, false);

  var menuHUGE = document.getElementById("menu");
  var iconfont = document.getElementById("iconfont");

  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.1/css/font-awesome.min.css');

})();
/**
 * [ajax_get description]
 * @param  {[type]}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function ajax_get(url, callback) {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
/**
 * [ajax_get description]
 * @param  {[type]} './data/nav.json' [description]
 * @param  {[type]} function(data     [description]
 * @return {[type]}                   [description]
 */
ajax_get('./data/nav.json', function(data) {
  var s = data["items"];

  for (var i = 0; i < data["items"].length; i++) {
    if (data["items"][i]["items"].length > 0) {
      var label = data["items"][i]["label"];

      var g = "fa fa-chevron-down downArrow";
      var t ="true";
      var html = '<i id="downArrowIcon" class="' + g + '" aria-hidden="' + t + '">' + '</i>';
      html += label + '<li id="list' + label + '" class="header-menu-list-item-subitem">';
      for (var l = 0; l < data["items"][i]["items"].length; l++) {
        html += "<a href=" + ">" + data["items"][i]["items"][l]["label"] + "</a>";
      }
      html += "</li>";

      document.getElementById(label).innerHTML = html;
    }
  }
});
