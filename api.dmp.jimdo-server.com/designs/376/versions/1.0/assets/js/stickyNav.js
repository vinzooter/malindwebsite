(function(window, document, undefined){
  !function (){
/**
 * stickyNav.js v0.0.1 - Give your page some sticky navigation.
 * From Jimdo with Love
 *
 */

function stickyNav(el, elHead) {
  return function () {
    var rectHead = elHead.getBoundingClientRect();
    var rect = el.getBoundingClientRect();
    var height = elHead.offsetHeight;

    if (rect.top <= 0) {
      el.classList.add('jtpl-navigation--fixed-top');
      var sticky = true;
    }
    if (rectHead.top > (height - (height * 2)) && sticky) {
      el.classList.remove('jtpl-navigation--fixed-top');
    }
  };
}

function callOnReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  }
  document.addEventListener("DOMContentLoaded", fn);
}

function hasEventListener () {
  return window.addEventListener;
}

hasEventListener() && callOnReady(function (){
  var el = document.querySelector(".jtpl-navigation") ;
  var elHead = document.querySelector(".jtpl-header") ;
  var adjustStickyNav = stickyNav(el, elHead);
  window.addEventListener('scroll', adjustStickyNav);
});

}();

})(window, document, undefined)
