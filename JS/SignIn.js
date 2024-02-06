function submitForm(event) {
  event.preventDefault();
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("Users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == e && users[i].password == p) {
      localStorage.setItem("LoggedInUser", JSON.stringify(users[i]));
      window.location.href = "../HTML/index.html";
    }
  }
  let msg = document.getElementById("msg");
  msg.innerHTML = "Invalid Email or Password";
  msg.style.visibility = "visible";
}
function SignInUser() {
  let form = document.getElementById("myForm");
  form.addEventListener("submit", submitForm);
}
