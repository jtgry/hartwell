function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('page').className = "load";

  window.sr = ScrollReveal({
    delay: 1,
    scale: 0.99,
    viewFactor: 0.4
  });
    
    sr.reveal('.block-image', {origin: 'bottom', delay: 1.2, duration: 800});
    sr.reveal('.block-session', {origin: 'bottom', duration: 600}, 100);
    sr.reveal('.block-content', {origin: 'bottom', duration: 600});
    sr.reveal('.block-feature', {origin: 'bottom', duration: 600});
    sr.reveal('.block-cta', {origin: 'bottom', duration: 600});
    sr.reveal('.block-section', {origin: 'bottom', duration: 600});

    //Menu
    var menuButton = document.getElementById('navButton');
    var mobileNav = document.getElementById('mobile-nav');
    var navItems = document.getElementById('navItems');
    var scrollDown = document.getElementById('scrollDown');
    menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
      
      if (hasClass(mobileNav, 'visible')) {
        removeClass(mobileNav, 'visible');
        addClass(mobileNav, 'hidden');
        addClass(navItems, 'visible');
        removeClass(navItems, 'hidden');
        removeClass(scrollDown, 'hidden');
        // Wait 1s and remove class and change menu to display none
        var myFunction = function(){
          removeClass(mobileNav, 'hidden');
        };
        setTimeout(myFunction, 2000);
        
      } else {
        removeClass(mobileNav, 'hidden');
        removeClass(mobileNav, 'hidden');
        addClass(mobileNav, 'visible');
        addClass(navItems, 'hidden');
        removeClass(navItems, 'visible');
        addClass(scrollDown, 'hidden');
      }
    });
    




  // Image Process
  var imgHires = document.getElementsByClassName('image-hires');
  for (var i=0; i<imgHires.length; i++) {
      if(imgHires[i].getAttribute('data-style')) {
         imgHires[i].setAttribute('style',imgHires[i].getAttribute('data-style'));
         imgHires[i].removeAttribute('data-style'); //use only if you need to remove data-src attribute after setting src
         addClass(imgHires[i], 'image-loaded');
      }
  }
  imagesLoaded( document.querySelector('#page'), function( instance ) {
    console.log('all images are loaded');


    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazyload",
      load_delay: 300
    });
  });
  // Image Process



});