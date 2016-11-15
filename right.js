function $(selector) {
  return document.querySelector(selector);
}

var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

var navigations = $$('.menu-navigation a');
console.log(navigations)
for (var index in navigations) {
  var item = navigations[index];
  item.onclick = function(evnt) {
    event.preventDefault();
    var scrollElementID = this.getAttribute('href');
    var scrollElement = $(scrollElementID);
    if (scrollElement) {
      var distanceFromTop = scrollElement.offsetTop;
      var scrollDistanceFromTop = document.documentElement.scrollTop || document.body.scrollTop
      var distance = distanceFromTop - scrollDistanceFromTop;
      var navbarHeight = $('#section').offsetHeight;
      distance = distance - navbarHeight
      var step = 20;
      scroll(distance, step);

      //var styles = window.getComputedStyle(scrollElement, null);
      //console.log(styles.width, scrollElement)
      //scrollElement.style.margin = '5em';
      //scrollElement.style.backgroundColor = '#bada55';
    }
  }
}
function scroll(distance, step) {
  window.setTimeout(function() {
    if (distance >= 0) {
      if (distance < step) {
         window.scrollBy(0, distance);
      } else {
         window.scrollBy(0, step);
         distance = distance - step;
         scroll(distance, step)
      }
    } else {
      if (distance > step) {
        window.scrollBy(0, distance);
      } else {
        window.scrollBy(0, -step);
        distance = distance + step;
        scroll(distance, step)
      }
    }
}, 10)
}
var menuElements = $$('.menu-navigation a');

for (var i in menuElements) {

  menuElements[i].onclick = makeActive
}

console.log(makeActive)

function makeActive(e) {
  var menuElements = $$('.menu-navigation a');
  for (var k in menuElements) {
    menuElements[k].classList.remove('active')
  }
  this.classList.add('active')
}

//====================================================================//
//CONTACT FORM//
function $(selector) {
  return document.querySelector(selector);
}

var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

// get form
var contactForm =  $('#contactForm');

console.log(contactForm);

// validate form
contactForm.onsubmit = function() {
  var formData = new FormData(this);
  var name = formData.get('firstname');
  var email = formData.get('e-mail');
  var msg = formData.get('textarea');
  var errorMessage = [];

  // check if name is not emnpty
  if (!name) {
     document.getElementById("firstname").style.backgroundColor="RED"
     errorMessage.push('Name should be provided');
  }

  // check if name is not emnpty
  if (!email) {
     document.getElementById("email").style.backgroundColor="RED"
     errorMessage.push('Email should be provided')
  }

    // check if name is not emnpty
  if (!msg) {
     document.getElementById("text").style.backgroundColor="RED"
     errorMessage.push('Msg should be provided');
  }

  // check for errors and submit form if no errors
  if (errorMessage.length) {
    console.log('show message')
    // get error container
    var errorContainer = $('#errorContainer');
    // clear old messges
    errorContainer.innerHTML = '';
    // create messages
    var messagesList = document.createElement('ul');
    errorContainer.appendChild(messagesList);
    messagesList.classList.add('errors')
    // for eash message add li
    for (var i = 0; i < errorMessage.length; i++) {
      var message = document.createElement('li');
      message.classList.add('error');
      message.innerHTML = errorMessage[i];
      // insert message to messages
      messagesList.appendChild(message);
    }


  } else {
    // send data to server
    return true;
  }

  return false;
}


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