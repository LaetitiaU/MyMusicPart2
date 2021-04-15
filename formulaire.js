function change() {
	var x = Math.floor(Math.random() * 256); 
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	console.log(thergb,document.body.style.background);
	document.body.style.background=thergb;
};

const alreadyRegisteredUsernames = ["laetitia", "romain", "nicolas"];

document.querySelector("form").addEventListener("submit", () => {
  document.querySelector("main").innerHTML = "Compte créé :)";
});

// Pour que les deux mots de passe soient identiques,quand l'utilisateur tape le MDP dans 
// confirmation de MDP, la valeur de ce champ doit être la même que celle du MDP.

const elementConfirmMotDePasse = document.getElementById("confirm-password")
const elementmotdepasse = document.getElementById("password")
elementConfirmMotDePasse.addEventListener("input", function(event) {
  if (elementConfirmMotDePasse.value !== elementmotdepasse.value) {   
    elementConfirmMotDePasse.setCustomValidity("les deux mots de passes ne sont pas identiques")
  } else {
    elementConfirmMotDePasse.setCustomValidity("")
  }
})

let checkBox = document.getElementById("toggle-password-visibility");
let password = document.getElementById("password");

checkBox.addEventListener('change', function() {
  if (this.checked) {
    password.setAttribute("type", "text")
  } else {
    password.setAttribute("type", "password")
  }
});