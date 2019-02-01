noJSStyle(); //see notes within function
galleryFadeIn();

function noJSStyle() {
  let galleryContainer = document.querySelector('.gallery-previews');
  //apply 0 opacity to container, so it's hidden by default
  galleryContainer.style.opacity = 0;
  galleryContainer.style.transform = 'translateY(20px)';
}


function galleryFadeIn() {
  let galleryContainer = document.querySelector('.gallery-previews');

  //set transitions
  galleryContainer.style.transition = 'opacity 300ms linear, transform 300ms linear';

  setTimeout(function() {
    galleryContainer.style.opacity = '1';
    galleryContainer.style.transform = 'translateY(0px)';
  }, 300);
}


//change images within gallery
function nextSlide(n) {
  viewGallery(galleryIndex += n)
}

//open gallery from images
function openGallery(n) {
  viewGallery(galleryIndex = n);
  fullscreenStyling();

  setTimeout(function() {
    openLightbox();
  }, 100);
}


function viewGallery(n) {
  let images = document.getElementsByClassName('lightbox-image-container');
  let imagesLength = images.length;

  if (n > images.length) {
    galleryIndex = 1;
  }
  if (n < 1) {
    galleryIndex = images.length;
  }

  for (let i = 0; i < imagesLength; i++) {
    images[i].style.display = 'none';
  }

  images[galleryIndex - 1].style.display = 'block';
}


function fullscreenStyling() {
  let nav = document.querySelector('nav');
  let h1 = document.querySelector('h1');
  let galleryContainer = document.querySelector('.gallery-previews');
  let sections = [nav, h1, galleryContainer];
  let sectionsLength = sections.length;
  let footer = document.querySelector('footer');

  for (let i = 0; i < sectionsLength; i++) {
    sections[i].style.opacity = 0;
    sections[i].style.transition = 'opacity 150ms linear';
  }

  footer.style.display = 'none';

  setTimeout(function() {
    nav.style.display = 'none';
  }, 150);
}

function openLightbox() {
  let lightbox = document.querySelector('.lightbox');
  let close = document.querySelector('.close-lightbox');
  let progressButtons = document.querySelectorAll('.prev, .next');

  close.style.display = 'block';

  setTimeout(function() {
    lightbox.style.display = 'block';
    lightbox.style.height = '100%';
    lightbox.style.width = '100%';

    for (let i = 0; i < progressButtons.length; i++) {
      progressButtons[i].style.display = 'block';
    }
  }, 150);

  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  let lightbox = document.querySelector('.lightbox');
  let close = document.querySelector('.close-lightbox');
  let progressButtons = document.querySelectorAll('.prev, .next');
  let galleryContainer = document.querySelector('.gallery-previews');
  let nav = document.querySelector('nav');
  let h1 = document.querySelector('h1');
  let footer = document.querySelector('footer');

  close.style.display = 'none';
  for (let i = 0; i < progressButtons.length; i++) {
    progressButtons[i].style.display = 'none';
  }

  lightbox.style.height = '80%';
  lightbox.style.width = '80%';

  nav.style.display = 'block';
  footer.style.display = 'block';

  setTimeout(function() {
    lightbox.style.display = 'none';
  }, 100);

  setTimeout(function() {
    h1.style.opacity = 1;
    nav.style.opacity = 1;
    galleryContainer.style.opacity = 1;
    galleryContainer.style.transition = 'opacity 150ms linear';
  }, 150);

  document.body.style.overflow = 'scroll';
}

















//
