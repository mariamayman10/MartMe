function validate() {
  let checkname = document.getElementById("name").value;
  let checkEmail = document.getElementById("email").value;
  let checkPhone = document.getElementById("phone").value;
  let checkPassword = document.getElementById("password").value;
  let confirmP = document.getElementById("confirmP").value;
  let msg = document.getElementById("msg");

  if (
    checkname == "" ||
    checkEmail == "" ||
    checkPhone == "" ||
    checkPassword == "" ||
    confirmP == ""
  ) {
    return false;
  } else {
    const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
    if (!regex2.test(checkname)) {
      msg.innerHTML = "Invalid Name, Please enter your full name.";
      return false;
    }
    const regex1 = /^[A-Za-z0-9]+@gmail\.com$/;
    if (!regex1.test(checkEmail)) {
      for (let i = 0; i < Users.length; i++) {
        if (Users[i].email == checkEmail) msg.innerHTML = "Duplicated Email";
        return false;
      }
      msg.innerHTML = "Invalid Email, Please Enter Valid Email";
      return false;
    }
    if (
      checkPhone.length != 11 ||
      checkPhone[0] != 0 ||
      checkPhone[1] != 1 ||
      (checkPhone[2] != 1 &&
        checkPhone[2] != 2 &&
        checkPhone[2] != 0 &&
        checkPhone[2] != 5)
    ) {
      msg.innerHTML = "Invalid Mobile Number, Please Enter Valid Mobile Number";
      return false;
    }
    if (checkPassword != confirmP) {
      msg.innerHTML = "Psssword didn't match";
      return false;
    }
    return true;
  }
}
function submitForm(event) {
  event.preventDefault();
  let info = validate();
  if (info) {
    let checkname = document.getElementById("name").value;
    let checkEmail = document.getElementById("email").value;
    let checkPhone = document.getElementById("phone").value;
    let checkPassword = document.getElementById("password").value;

    let newUser = new User(
      checkname,
      checkEmail,
      checkPhone,
      checkPassword,
      [],
      []
    );
    Users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.location.href = "../HTML/SignIn.html";
  } else {
    let msg = document.getElementById("msg");
    msg.style.visibility = "visible";
  }
}

function SaveUser() {
  let form = document.getElementById("myForm");
  form.addEventListener("submit", submitForm);
}
