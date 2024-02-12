document.addEventListener('DOMContentLoaded', function() {
  ToggleMenu();
});

var users = [
  { username: "admin", password: "admin" },
];

function ToggleMenu() {
  const hamburger = document.querySelector('.menu');
  const aside = document.querySelector('aside');
  
  hamburger.addEventListener('click', function() {
    aside.classList.toggle('menu-on');
  });
}

function login() {
  var username = $("#Username").val();
  var password = $("#Password").val();
  var error = $("#false-login");

  var found = false;
  users.forEach(function(user) {
      if (user.username === username && user.password === password) {
          found = true;
          window.location.href = "analyze.html";
      }
  });

  if (!found) {
    error.html("Username or password not valid");
    error.css("display","block");
  }
}

function signup() {
  var newUsername = $("#Username").val();
  var newPassword = $("#Password").val();

  var newUser = {
      "username": newUsername,
      "password": newPassword
  };

  users.push(newUser);

  window.location.href = "login.html";
}