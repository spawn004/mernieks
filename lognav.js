function $(selector) {
  return document.querySelector(selector);
}

var pageList = $$(".logotype");
for (i = 0; i < pageList.length; i += 10) {
    pageList.push(pageList.slice(i, i+10));
}
console.log('pageList',pageList)

























// var logNav = $$(".logotype");
//
// console.log(logNav.length);
//
// if (logNav.length >= 9) {
//     var cutLog = logNav.slice(10, 15)
// }
//
// console.log(cutLog)
