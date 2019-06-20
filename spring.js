function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  
    if(!sEmail.match(reEmail)) {
      alert("Invalid email address");
      return false;
    }
  
    return true;
  
  }
function valid() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    if(name==""||email==""){
        document.getElementById('success').innerHTML=`  <div class="alert alert-danger">  
        <strong>Danger!</strong> Please Fill the Following. 
      </div>`
    }
    var formData = {
        name : name,
        email : email
    }

    $.ajax( {
        url:'http://localhost:8083/save',
        method:'POST',
        contentType:'application/json',
        data : JSON.stringify(formData),
        success:function(data) {
            document.getElementById('success').innerHTML=`<div class="alert alert-success" id="success">  
		<strong>Success!</strong> Used to indicate successful or positive action.
            </div>`
            console.log(data);
        }
        });
    
    return true;
}
function fetch() {

window.open("./get.html");

}