var slideSpeed, slideTimeout, slider, slideContainer;

document.onclick = function (event) {
  if (event.target.hasAttribute('data-slide') && document.getElementById('slide-'+event.target.getAttribute('data-slide'))) {
    slideNav(event.target.getAttribute('data-slide'));
  } else if (event.target.classList.contains('right') | event.target.parentNode.classList.contains('right')) {
    nextSlide();
  } else if (event.target.classList.contains('left') | event.target.parentNode.classList.contains('left')) {
    previousSlide();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.slider')) {
    // Select Slider
    slider = document.querySelector('.slider');
    
    // Create Slider
    if (slider.hasAttribute('data-speed')) {
      slideSpeed = slider.getAttribute('data-speed');
    } else {
      slideSpeed = 10000;
    }
    slideContainer = document.createElement('div');
    slideContainer.classList.add('slides'); 
    var extraContainer = document.createElement('div');
    var navButtons = document.createElement('nav');
    var navList = document.createElement('nav')
    
    while (slider.firstElementChild) {
      if (slider.getAttribute('nav-list') != 'false') {
        var tempNode;;
        navList.classList.add('slider-nav-list');
        tempNode = document.createElement('span');
        tempNode.setAttribute('data-slide', slider.firstElementChild.id.replace(/slide-/, ''));
        navList.appendChild(tempNode);
        extraContainer.appendChild(navList);
      }
      slideContainer.appendChild(slider.firstElementChild.cloneNode(true));
      slider.removeChild(slider.firstElementChild);
    }
    if (slider.getAttribute('nav-buttons') != 'false') {
      navButtons.classList.add('slider-nav-buttons');
      navButtons.innerHTML = '<div class="left"><img src="assets/images/left.png" alt="<" /></div><div class="right"><img src="assets/images/right.png" alt=">" /></div>';
      extraContainer.appendChild(navButtons);
    }
    slider.appendChild(slideContainer);
    slider.appendChild(extraContainer);
    
    // Nav to default slide
    if (slider.hasAttribute('data-default-slide') && document.getElementById('slide-'+slider.getAttribute('data-default-slide'))) {
      slideNav(document.querySelector('[data-slide="'+slider.getAttribute('data-default-slide')+'"]'));
    } else {
      slideNav(document.querySelector('.slider .slides div:first-child').id.replace(/slide-/, ''));
    }
  }
});

function nextSlide() {
  if (document.querySelector('.selected') && document.querySelector('.selected').nextElementSibling) {
    slideNav(document.querySelector('.selected').nextElementSibling.id.replace(/slide-/, ''));
  } else {
    slideNav(slideContainer.firstElementChild.id.replace(/slide-/, ''));      
  }
}

function previousSlide() {
  if (document.querySelector('.selected') && document.querySelector('.selected').previousElementSibling) {
    slideNav(document.querySelector('.selected').previousElementSibling.id.replace(/slide-/, ''));
  } else {
    slideNav(slideContainer.lastElementChild.id.replace(/slide-/, ''));      
  }
}

function slideNav(slide) {
  clearTimeout(slideTimeout);
  if (document.getElementById('slide-'+slide)) {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
      if (document.querySelector('.selected')) {
        document.querySelector('.selected').classList.remove('selected');
      }
    }
    if (document.querySelector('[data-slide="'+slide+'"]')) {
      document.querySelector('[data-slide="'+slide+'"]').classList.add('selected');
    }
    document.getElementById('slide-'+slide).classList.add('selected');
  }
  slideTimeout = setTimeout(nextSlide, slideSpeed);
}