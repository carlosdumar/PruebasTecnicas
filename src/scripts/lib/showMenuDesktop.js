/**
 * [showMenuDesktop description]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
var showMenuDesktop = function (event) {
  event.preventDefault();
  document.getElementById(event.currentTarget.childNodes[2]["id"]).style.display = "block";
  document.body.style.background="rgba(0, 0, 0, 0.5)";

  var upArrowI = document.createElement('i')
  upArrowI.setAttribute("class", "fa fa-chevron-up");
  upArrowI.setAttribute("aria-hidden","true");

  var upArrowIcon = document.getElementById(event.currentTarget["id"]);
  var downArrowIcon = document.getElementById("downArrowIcon");
  // Obtenemos la referencia al elemento, antes de insertarlo
  var sp2 = document.getElementById(event.currentTarget.children[1]["id"]);

  if(downArrowIcon !== null)
  {
    upArrowIcon.removeChild(downArrowIcon);
  }

  // Obtenemos la referencia al elemento padre
  var parentDiv = sp2.parentNode;

  // Insertamos el nuevo elemento en el DOM antes de sp2
  parentDiv.insertBefore(upArrowI, sp2);
}

module.exports = showMenuDesktop;
