// content.js
// alert("Hello from your Chrome extension!");


// if (el.classList){
//   var className = ".js-avatar-img";
//   el.classList.remove(className);
//   }
// else {
//   el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
// }

$(document).ready(function(){
  console.log("is this document loaded?");
  alert("Hello from your Chrome extension!");
  $( ".js-avatar-img").remove();
})
