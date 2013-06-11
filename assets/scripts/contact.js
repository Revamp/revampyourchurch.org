// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('lxcWvfgttKnK3OcHeqNySQ');

function contactUs(org, email, subject, message) {
  alert('foo');
  if (!org | !email | !subject | !message) {
    org = document.getElementById('org').value;
    email = document.getElementById('email').value;
    subject = document.getElementById('sub').value;
    message = document.getElementById('msg').value;
  }

  // create a variable for the API call parameters
  var params = {
      "message": {
          "from_email": email,
          "to": [{"email":"joshua-smith@verizon.net"}],
          "subject": subject,
          "text": (message + '\n\n\n From:' + org)
      }
  };
  
  sendTheMail(params);
}

function sendTheMail(params) {
  // Send the email!
  m(params, function(res) {
    log(res);
    document.getElementById('msg-success').classList.add('shown');
  }, function(err) {
    log(err);
  });
}

// Create a function to log the response from the Mandrill API
function log(obj) {
  console.log(obj);
}