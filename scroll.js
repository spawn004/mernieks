function $(selector){
	return document.querySelector(selector);
}
function $$(selector){
	return document.querySelectorAll(selector);
}
function scrollTopPos(){
	var supportPageOffset = window.pageXOffset !== undefined,
		isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
		y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	return y;
}
var distance = 40,
	timeout = 30;
function navScroll(curPos, sectionTop){
	if (Math.abs(curPos - sectionTop) <= distance) {
		curPos = sectionTop;
	} else {
		var dir = (curPos > sectionTop) ? -distance : distance;
		// var dir;
		// if (curPos > sectionTop) {
		//		dir = -distance;
		// } else {
		// 		dir = distance;
		// }
		curPos += dir;
		setTimeout(function(){
			navScroll(curPos, sectionTop)
		}, timeout);
	}
	window.scrollTo(0, curPos);
}
function navClick(e){
	e.preventDefault();
	var curPos = scrollTopPos(),
		href = this.getAttribute("href"),
		sectionTop = $(href).offsetTop;
	navScroll(curPos, sectionTop);
}

var navItems = $$(".js-scroll");

for(var i = 0; i < navItems.length; i++){
	navItems[i].addEventListener("click", navClick);
}







var menuElements = $$('.menu-navigation a');

for (var i in menuElements) {

  menuElements[i].onclick = makeActive
}

// console.log(makeActive);

function makeActive(e) {
  // var menuElements = document.getElementsByClassName("js-scroll");
  var menuElements = jQuery("a.js-scroll");
  for (var k = 0; k < menuElements.length;  k++)
  {
    menuElements[k].classList.remove('active')
  }
  this.classList.add('active')
}
//   console.log("menuElements[k].classList: ", menuElements[k].classList.remove('active'));
