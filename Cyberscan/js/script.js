document.addEventListener('DOMContentLoaded', function() {
  ToggleMenu();
});

function ToggleMenu() {
  const hamburger = document.querySelector('.menu');
  const aside = document.querySelector('aside');
  const hidden = document.querySelector('.hidden');
  
  hamburger.addEventListener('click', function() {
    aside.classList.toggle('menu-on');
  });
}

function login() {
  var username = $("#Username").val();
  var password = $("#Password").val();

  $.getJSON("json/users.json", function(data) {
      var found = false;
      $.each(data.utilisateurs, function(index, utilisateur) {
          if (utilisateur.username === username && utilisateur.password === password) {
              found = true;
              window.location.href = "analyze.html";
              return false;
          }
      });
      if (!found) {
          alert("Nom d'utilisateur ou mot de passe incorrect !");
      }
  });
}

function signup() {
  var newUsername = $("#Username").val();
  var newPassword = $("#Password").val();

  // Créer un nouvel objet utilisateur avec les informations du formulaire
  var newUser = {
      "username": newUsername,
      "password": newPassword
  };

  $.getJSON("json/users.json", function(data) {
      data.utilisateurs.push(newUser);

      $.ajax({
          type: "POST",
          url: "json/users.json",
          contentType: "application/json",
          data: JSON.stringify(data),
          success: function() {
              alert("Compte créé avec succès !");
              window.location.href = "login.html";
          },
          error: function() {
              alert("Une erreur s'est produite lors de la création du compte.");
          }
      });
  });
}