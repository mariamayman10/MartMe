let Users = [];

if (localStorage.getItem("Users")) {
  Users = JSON.parse(localStorage.getItem("Users"));
}

window.Users = Users;
