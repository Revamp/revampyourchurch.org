var slideTimeout;

document.onclick = function (event) {
  if (event.target.hasAttribute('data-slide') && document.getElementById('slide-'+event.target.getAttribute('data-slide'))) {
    slider(event.target.getAttribute('data-slide'));
  } else if (event.target.classList.contains('right') | event.target.parentNode.classList.contains('right')) {
    nextSlide();
  } else if (event.target.classList.contains('left') | event.target.parentNode.classList.contains('left')) {
    previousSlide();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.slider') && document.querySelector('.slider').hasAttribute('data-default-slide') && document.getElementById('slide-'+document.querySelector('.slider').getAttribute('data-default-slide'))) {
    slider(document.querySelector('[data-slide="'+document.querySelector('.slider').getAttribute('data-default-slide')+'"]'));
  } else {
    slider(document.querySelector('.slider .slides div:first-child').id.replace(/slide-/, ''));
  }
});

function nextSlide() {
  if (document.querySelector('.selected') && document.querySelector('.selected').nextElementSibling) {
    slider(document.querySelector('.selected').nextElementSibling.id.replace(/slide-/, ''));
  } else {
    slider(document.querySelector('.slider .slides').firstElementChild.id.replace(/slide-/, ''));      
  }
}

function previousSlide() {
  if (document.querySelector('.selected') && document.querySelector('.selected').previousElementSibling) {
    slider(document.querySelector('.selected').previousElementSibling.id.replace(/slide-/, ''));
  } else {
    slider(document.querySelector('.slider .slides').lastElementChild.id.replace(/slide-/, ''));      
  }
}

function slider(slide) {
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
  slideTimeout = setTimeout(nextSlide, 5000);
}