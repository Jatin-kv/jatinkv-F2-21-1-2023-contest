let reguser = [];
let id = 1;

function validation(){
  let returnval=true;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  if (name.length < 2) {
    document.getElementById("nerror").innerHTML = "Name should at least be 2 letter word";
    returnval=false
  }
 if(password.length<4){
  document.getElementById("perror").innerHTML = "Password should be of 6 letters";
  returnval=false
 }

  if (password !== cpassword) {
    document.getElementById("cperror").innerHTML = "Password do not match";
    returnval=false
  }  
  
    let newUser = { id: id, name: name, email: email, password: password };
    reguser.push(newUser);
    id++;

    return returnval
  }