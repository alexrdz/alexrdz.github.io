//- test that DOM is loaded
document.addEventListener("DOMContentLoaded", start);
function start () {
  console.log('loaded')
}


//- jquery-style selectors
window.$ = function(selector)  {
  return document.querySelector(selector)
}




// var next = $('.next');
// next.addEventListener('click', function (e) {
//   e.preventDefault();
//   $('.Right').classList.add('animate', 'slideInLeft');
//   $('.ones').classList.toggle('hide');
//   $('.Left').classList.add('animate', 'slideUp', 'slow');
// })
