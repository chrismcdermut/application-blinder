// import 'jquery'
import $ from "jquery";
//content.js material
alert("Hello, does this mofo work? OUTSIDE OF JQUERY");
console.log("is this document loaded? BEFORE jquery");


// if(el.classList){
//   var clssName = "js-avatar-img";
//   el.classList.remove(className);
// }
// else {
//   el.className = el.className.replace(new RegExp('(^\\\b)' + className.split(' ').join('|') + '(\\b\$)', 'gi'), ' ');
// }

$(document).ready(function(){
  console.log("is this document loaded?");
  alert("Hello from your Chrome extension!");
  $(".js-avatar-img").remove();
})
