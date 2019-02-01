//function calls
//highlightNav();
noJSStyle(); //see notes within function declaration
dropLogo();
showSection();


//smooth scrolling
$(document).ready(function(){
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - (document.querySelector('nav').offsetHeight * 1.5)
    }, 400);
  });
});


function noJSStyle() {
  //this function is for handling some default styling in the case of
  //js being disabled in a user's browser

  //handle 'Home' in nav to be bold by default
  let homeLink = document.querySelector('.nav-link'); //gets first nav-link
  homeLink.classList.add('current');

  //move the logo out of view so that it can drop in
  let logo = document.querySelector('.logo-container');
  logo.style.top = "-100%";

  let backStory = document.querySelector('.backstory');
  let currentStory = document.querySelector('.current-story');

  backStory.style.opacity = 0;
  currentStory.style.opacity = 0;
}


//logo animation
function dropLogo() {
  let logo = document.querySelector('.logo-container');
  setTimeout(function() {
    if (logo.style.display != 'none') {
      logo.style.top = '10%';
      logo.style.transition = 'top 300ms ease-out';
    }
  }, 400);
}


function showSection() {
  let aboutSection = document.querySelector('#about');
  let homeLink = document.querySelectorAll('.nav-link')[0]; //get first nav-link
  let aboutLink = document.querySelectorAll('.nav-link')[1]; //get second nav-link
  let aboutSectionOffset = aboutSection.offsetTop;
  let navOffset = document.querySelector('nav').offsetHeight;

  let backstory = document.querySelector('.backstory'); //back story section
  let currentStory = document.querySelector('.current-story'); //current story section

  let backstoryPosition = backstory.offsetTop; //position of backstory
  let currentStoryPosition = currentStory.offsetTop; //position of current story

  let viewportHeight = window.innerHeight;

  backstory.style.transition = 'opacity 600ms linear';
  currentStory.style.transition = 'opacity 600ms linear';

  window.onscroll = function() {
    //this section handles the sections highlighting in the navigation
    if (window.scrollY >= aboutSectionOffset - (navOffset * 1.55)) {
      homeLink.classList.remove('current');
      aboutLink.classList.add('current');
    } else {
      homeLink.classList.add('current');
      aboutLink.classList.remove('current');
    }

    //handle the fade in of the sections on scroll
    if (window.scrollY >= backstoryPosition - viewportHeight * .8) {
      backstory.style.opacity = '1';
    }

    if (window.scrollY >= currentStoryPosition - viewportHeight * .8) {
      currentStory.style.opacity = '1';
    }
  }
}






















//
