let stored_user="Ashik Ansari";
let stored_pass="ashik@123";

let input_user="Ashik Ansari";
let input_pass="ashik@123";

if(stored_user==input_user){
  if(stored_pass==input_pass){
    console.log("Thanks for login");
  }else {
    console.log("Wrong Password");
  }
}else{
  console.log("Incorrect Username");
}
// This is the required code to login into facebook.