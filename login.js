function loginvalidate(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let genToken=document.getElementById("gentoken")
  let user = reguser.find(()=> {user.email === email && user.password === password});
  let returnval=true;
  if (!user) {
    document.querySelector("#lerror").innerHTML = "Invalid email or password";
    returnval=false
    }

  }
    
  