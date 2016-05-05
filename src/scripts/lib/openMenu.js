/*
Get element with id = menu
 */
var menuHUGE = document.getElementById("menu");
/*
Get element with id = iconfont
 */
var iconfont = document.getElementById("iconfont");

/**
 * Permit open the menu for responsive mobile version
 * @return {[type]} [description]
 */
var openMenu = function() {

  document.body.style.background="rgba(0, 0, 0, 0.5)";

  menuHUGE.removeChild(iconfont);

  var textHUGE = document.createElement("span");
  textHUGE.setAttribute("id", "hugeWord");
  var node = document.createTextNode("HUGE");
  var classiconX = "fa fa-times botonx";
  var valuearia = "true";

  var elementI = document.createElement('i')
  elementI.setAttribute("class", classiconX);
  elementI.setAttribute("aria-hidden",valuearia);
  elementI.setAttribute("id", "botonX");

  textHUGE.appendChild(node);
  menuHUGE.appendChild(textHUGE);
  menuHUGE.appendChild(elementI);

  document.getElementById("navbar").style.left = "0px";
  document.getElementById("hugeWord").style.display = "inline";

  document.getElementById("botonX").addEventListener("click", closeMenu);
};

/**
 * Permit close the menu for responsive mobile version
 * @return {[type]} [description]
 */
 function closeMenu()
 {
   document.body.style.background="rgba(0, 0, 0, 0)";
   document.getElementById("navbar").style.left = "-500px";
   var hugeWord = document.getElementById("hugeWord");
   var iconX = document.getElementById("botonX");

   menuHUGE.removeChild(hugeWord);
   menuHUGE.removeChild(iconX);
   menuHUGE.appendChild(iconfont);
 }

module.exports = openMenu;
