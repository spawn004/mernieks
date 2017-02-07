
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
  var email = formData.get('e-mail') ;
  var msg = formData.get('textarea');
  var validEmailRegexp = /^([a-z0-9._-]+@(?:[a-z0-9-]+\.)+[a-z]{2,}$)/i;
  var result = email.match(validEmailRegexp);
  var errorMessage = [];

  // check if name is not emnpty
  if (!name) {
     $("#firstname").classList.add("incorrect");
     errorMessage.push('Name should be provided');
  }
  else {
     $("#firstname").classList.remove("incorrect");
    //  style.backgroundColor="#7f6c42"
  }
  // return true

  // check if name is not emnpty
  if (!email) {
     $("#email").classList.add("incorrect");
     errorMessage.push('Email should be provided')
  }
  else if (!result) {
      // check email format
      errorMessage.push('wrong email format')

      $("#email").classList.add("incorrect");
  }
  else
  $("#email").classList.remove("incorrect");
    // check if name is not emnpty

  if (!msg) {
     $("#text").classList.add("incorrect");
     errorMessage.push('Msg should be provided');
  }
  else {
      $("#text").classList.remove("incorrect");
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
    //   message.classList.add('error');
      message.innerHTML = errorMessage[i];
      // insert message to messages
      messagesList.appendChild(message);
    }
    return false;
  }


}


// documentgetbyId.classList.add('error')
//
// var
