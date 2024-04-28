var xbox = document.getElementsByClassName("xbox");
  var form = document.getElementById("form");
  var details = document.getElementById("details");
  var editButton = document.getElementById("editBtn");
  var sendButton = document.getElementById("sendBtn");
  var editButton = document.getElementById("okBtn");
  var text;


function validation(){
  // Retrieving form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var errMessage = document.getElementsByClassName("error");
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  // Validation for the 'name' field
  var isNameValid;
  
    if (name == '' || name.length < 3){
        text = "*Type Your Full Name here";
        errordisplay(0,errMessage,text);
    isNameValid = false;
    }else{
        errorOut(0,errMessage);
    isNameValid = true;
    }
  
  
  // Validation for the 'email' field
  var isEmailValid;
  
    if (!email.match(mailformat)){
        text = "*Type your email address in";
        errordisplay(1,errMessage,text);
    isEmailValid = false;
    }else{
        errorOut(1,errMessage);
    isEmailValid = true;
    }

  // Validation for the 'subject' field
  var isSubjectValid;
  
    if (subject == 'default'){
        text = "*Choose your problem type from the list below";
        errordisplay(2,errMessage,text);
    isubjectValid = false;
    }else{
        errorOut(2,errMessage);
    isSubjectValid = true;
    }

  // Validation for the 'message' field
  var isMessageValid;
  
    if (message == '' || message.length < 5){
        text = "*Message required.";
        errordisplay(3,errMessage,text);
    isMessageValid = false;
    }else{
        errorOut(3,errMessage);
    isMessageValid = true;
    }
  
  
  // Check if all fields are valid
  if(isNameValid == true && isEmailValid == true && isSubjectValid == true && isMessageValid == true){
    // If all fields are valid, show the modal with the form data
    form.classList.add("form-hide");
    xbox[0].classList.add("xbox-show", "popup");
    
    // Displaying form data in the 'details' element
    details.innerHTML = "Name &nbsp;&emsp;&emsp; &emsp; &emsp; : &nbsp;&nbsp;&nbsp;" + name + "<br><br>Email Address &emsp;&nbsp; : &nbsp;" + email + "<br><br>Problem Type &emsp; &nbsp; : &nbsp;&nbsp;" + subject + "<br><br>Your Problem &nbsp;&nbsp;&nbsp; &nbsp; : &emsp;&nbsp;" + message;
    
      return false;  // Prevent form submission (assuming this is within a form element)
    
    
  }

  return false;

  }


function errordisplay(i, errMessage, text) {
      // Display an error message in the corresponding error element
      errMessage[i].style.paddingBottom = "2px";
      errMessage[i].innerHTML = text;
      document.getElementsByClassName("field")[i].style.marginBottom = "5px";
    alert(text); // Show an alert with the error message 
      
  }

function errorOut(i, errMessage) {
      // Remove the error message and reset the styling for the corresponding error element
      errMessage[i].style.paddingBottom = "0px";
      errMessage[i].innerHTML = '';
      document.getElementsByClassName("field")[i].style.marginBottom = "15px";
  }

function editIt() {
    // Function to show the form again and hide the popup/modal
    form.classList.remove("form-hide");
    xbox[0].classList.remove("xbox-show", "popup");
  }

  function sendIt(){
  // Function to handle sending the form data via email (using the 'mailto' protocol)
  // This opens the default email client with the form data pre-filled in the email body
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var errMessage = document.getElementsByClassName("error");
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
  window.location="mailto:"+email+"?subject=Query_Details&body="+encodeURIComponent('Name='+name+'\n'+'Email='+email+'\n'+'Subject='+subject+'\n'+'Message='+message);
  
    xbox[0].classList.remove("xbox-show", "popup");
    xbox[1].classList.add("xbox-show", "popup");
  }

function okButton() {
    // Function to handle the 'OK' button in the popup/modal
    xbox[1].classList.remove("xbox-show", "popup");
    form.classList.remove("form-hide");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "default";
    document.getElementById("message").value = ""; 
  }