// Sticky Nav
// http://www.mattmorgante.com/technology/sticky-navigation-bar-javascript
const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);

 //Add Active Class to Nav
  //https://codepen.io/arjunamgain/pen/lGALt
 
 /*  $(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });  */ 


 