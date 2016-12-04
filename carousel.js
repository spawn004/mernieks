//CAROUSEL
function $(selector) {
  return document.querySelector(selector);
}

var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

pageSlider('#slider');

function pageSlider(selector) {
  // get data
  var slider = $(selector);

  if (!slider) {
    return false;
  }

  var oLoop = false;

  var slides = slider.querySelectorAll('.slider-item');
  slides = [].slice.call(slides); // to create array from slides list
  var prev = slider.querySelector('.slider-left-arrow-container');
  var next = slider.querySelector('.slider-right-arrow-container');

  //generate pages
  var paginator = slider.querySelector('.picture-slider');
  var pages = [];
  for (var i in slides) {
    var page = document.createElement('button');
    page.setAttribute('type', 'button');
    page.classList.add('slider-page');
    paginator.appendChild(page);
    pages.push(page);
  }

  // create slide functions
  var activePage = 0;

  // check active arrows
  var checkArrows = function() {
    // last page hide next arrow
    if (activePage === slides.length - 1) {
      next.classList.add('is-hidden');
    } else {
      next.classList.remove('is-hidden');
    }
    if (activePage === 0) {
      prev.classList.add('is-hidden');
    } else {
      prev.classList.remove('is-hidden');
    }
  }

  var setActivePage = function(index) {
    if (index >= 0 && index < pages.length) {
      activePage = index;
      for (var i in pages) {
        pages[i].classList.remove('active');
      }
      pages[activePage].classList.add('active')
      if (!oLoop) {
        checkArrows();
      }
    }
  }

  var slideTo = function(index) {
    if (index >= 0 && index < slides.length) {
      setActivePage(index);
      slides.forEach(function(slide) {
        var slideValue = -100 * activePage;
        slide.style.transform = 'translateX(' + slideValue + '%)';
      })
    }
  }

  var slideToNext = function() {
    if (activePage === slides.length - 1) {
      slideTo(0);
    } else {
      slideTo(activePage + 1)
    }
  }

  var slideToPrev = function() {
    if (activePage === 0) {
      slideTo(slides.length - 1);
    } else {
      slideTo(activePage - 1)
    }
  }

  // add events to paginator
  for (var i in pages) {
    pages[i].onclick = function(i, e) {
      e && e.preventDefault();
      slideTo(parseInt(i))
    }.bind(null, i)
  }
  slideTo(0);
  // add events to prev and next
  prev.onclick = function(e) {
    e && e.preventDefault();
    slideToPrev();
  }
  next.onclick = function(e) {
    e && e.preventDefault();
    slideToNext();
  }

}
