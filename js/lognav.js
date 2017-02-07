function $(selector) {
    return document.querySelector(selector);
}

var pageList = $$(".logotype");
var elementsGroup;
var myVar = [];
for (i = 0; i < pageList.length; i += 10) {
    myVar.push(pageList.slice(i, i+10));
}
// console.log(myVar);


var container = document.getElementById('carousel-slide');

myVar.forEach(function(page){
    // console.log(page);
    var pageElement = document.createElement('div');
    pageElement.className = "carousel-block";
    container.appendChild(pageElement);
    // pageElement.style = 'border: 1px solid red;';
    page.forEach(function(element){
        var elementElement = document.createElement('span');
        elementElement.appendChild(element);
        pageElement.appendChild(elementElement)
    })
});

// var elements = [myVar];
// elements.forEach((elementsGroup){
//     var ul = document.createElement('ul');
//     posEl.appendChild(ul);
//     elementsGroup.forEach((element){
//     posEl.appendChild(document.createElement('li'));
//     })
// })










// var pageList = document.querySelectorAll(".logotype");
// for (i = 0; i < pageList.length; i += 10) {
//     var currentDivElements = pageList.slice(i, i+10);
//     for (y = 0; y < currentDivElements.length; y++) {
//         document.getElementById('div'+[i]).innerHtml = currentDivElements[y];
//     }
// }

















// var logNav = $$(".logotype");
//
// console.log(logNav.length);
//
// if (logNav.length >= 9) {
//     var cutLog = logNav.slice(10, 15)
// }
//
// console.log(cutLog)
