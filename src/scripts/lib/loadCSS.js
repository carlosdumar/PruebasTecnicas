/**
 * Create a tag link with the url specified
 * @param  {[type]} url url of resource css
 * @return {[type]}     tag link
 */
var loadCSS = function (url)
{
  var elem = document.createElement('link');
  elem.rel = 'stylesheet';
  elem.href = url;
  document.head.appendChild(elem);
}

module.exports = loadCSS;
