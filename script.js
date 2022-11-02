let pseudo = document.getElementById("pseudo");
let pseudoManquant = document.getElementById("pseudo-manquant");

let mdp = document.getElementById("mdp");
let mdpManquant = document.getElementById("mdp-manquant");

let confirmationMdp = document.getElementById("confirmation-mdp");
let confirmationMdpManquant = document.getElementById(
  "confirmation-mdp-manquant"
);

let nom = document.getElementById("nom");
let nomManquant = document.getElementById("nom-manquant");

let prenom = document.getElementById("prenom");
let prenomManquant = document.getElementById("prenom-manquant");

let email = document.getElementById("email");
let emailManquant = document.getElementById("email-manquant");

let adresse = document.getElementById("adresse");
let adresseManquant = document.getElementById("adresse-manquant");

let codePostal = document.getElementById("code-postal");
let codePostalManquant = document.getElementById("code-postal-manquant");

let ville = document.getElementById("ville");
let villeManquant = document.getElementById("ville-manquant");

let tel = document.getElementById("tel");
let telManquant = document.getElementById("tel-manquant");

//* ↓↓ regex, permet de vérifier le format voulu.
let pseudoValidation =
  /^[a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï])?/;

let mdpValidation = /^[a-zA-ZéèêîïÉÈÊÎÏ#@?./+,;:=-_&$€£]/;

let confirmationMdpValidation = /^[a-zA-ZéèêîïÉÈÊÎÏ#@?./+,;:=-_&$€£]/;

let nomValidation =
  /^[a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï])?/;

let prenomValidation =
  /^[a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï])?/;

let emailValidation = /^[1-8a-zA-ZéèêîïÉÈÊÎÏ@&_-]/;

let adresseValidation =
  /^[a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï])?/;

let villeValidation =
  /^[a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÎÏ][a-zéèêçîï])?/;

let codePostalValidation = /^[0-9]/;

let telValidation = /^[0-9]/;

let validation = document.getElementById("btn-inscription");
validation.addEventListener("click", formValid);

//* ↓↓ function qui permet d'envoyer un message si un champ n'est pas rempli
function formValid(event) {
  if (pseudo.validity.valueMissing) {
    event.preventDefault();
    pseudoManquant.textContent = "Pseudo manquant";
    pseudoManquant.style.color = "red";
  } else if (pseudoValidation.test(pseudo.value) == false) {
    event.preventDefault();
    pseudoManquant.textContent = "Format incorrect";
    pseudoManquant.style.color = "orange";
  }

  if (mdp.validity.valueMissing) {
    event.preventDefault();
    mdpManquant.textContent = "Mot de passe manquant";
    mdpManquant.style.color = "red";
  } else if (mdpValidation.test(mdp.value) == false) {
    event.preventDefault();
    mdpManquant.textContent = "Format incorrect";
    mdpManquant.style.color = "orange";
  }

  if (confirmationMdp.validity.valueMissing) {
    event.preventDefault();
    confirmationMdpManquant.textContent = "Confirmation mot de passe manquant";
    confirmationMdpManquant.style.color = "red";
  } else if (mdpValidation.test(confirmationMdp.value) == false) {
    event.preventDefault();
    confirmationMdpManquant.textContent = "Format incorrect";
    confirmationMdpManquant.style.color = "orange";
  }

  if (nom.validity.valueMissing) {
    event.preventDefault();
    nomManquant.textContent = "Nom manquant";
    nomManquant.style.color = "red";
  } else if (nomValidation.test(nom.value) == false) {
    event.preventDefault();
    nomManquant.textContent = "Format incorrect";
    nomManquant.style.color = "orange";
  }

  if (prenom.validity.valueMissing) {
    event.preventDefault();
    prenomManquant.textContent = "Prénom manquant";
    prenomManquant.style.color = "red";
  } else if (prenomValidation.test(prenom.value) == false) {
    event.preventDefault();
    prenomManquant.textContent = "Format incorrect";
    prenomManquant.style.color = "orange";
  }

  if (email.validity.valueMissing) {
    event.preventDefault();
    emailManquant.textContent = "eMail manquant";
    emailManquant.style.color = "red";
  } else if (emailValidation.test(email.value) == false) {
    event.preventDefault();
    emailManquant.textContent = "Format incorrect";
    emailManquant.style.color = "orange";
  }

  if (adresse.validity.valueMissing) {
    event.preventDefault();
    adresseManquant.textContent = "Adresse manquant";
    adresseManquant.style.color = "red";
  } else if (adresseValidation.test(adresse.value) == false) {
    event.preventDefault();
    adresseManquant.textContent = "Format incorrect";
    adresseManquant.style.color = "orange";
  }

  if (codePostal.validity.valueMissing) {
    event.preventDefault();
    codePostalManquant.textContent = "Code postal manquant";
    codePostalManquant.style.color = "red";
  } else if (codePostalValidation.test(codePostal.value) == false) {
    event.preventDefault();
    codePostalManquant.textContent = "Format incorrect";
    codePostalManquant.style.color = "orange";
  }

  if (codePostal.validity.valueMissing) {
    event.preventDefault();
    codePostalManquant.textContent = "Code postal manquant";
    codePostalManquant.style.color = "red";
  } else if (codePostalValidation.test(codePostal.value) == false) {
    event.preventDefault();
    codePostalManquant.textContent = "Format incorrect";
    codePostalManquant.style.color = "orange";
  }

  if (ville.validity.valueMissing) {
    event.preventDefault();
    villeManquant.textContent = "Ville manquante";
    villeManquant.style.color = "red";
  } else if (villeValidation.test(ville.value) == false) {
    event.preventDefault();
    villeManquant.textContent = "Format incorrect";
    villeManquant.style.color = "orange";
  }

  if (tel.validity.valueMissing) {
    event.preventDefault();
    telManquant.textContent = "Téléphone manquant";
    telManquant.style.color = "red";
  } else if (telValidation.test(tel.value) == false) {
    event.preventDefault();
    telManquant.textContent = "Format incorrect";
    telManquant.style.color = "orange";
  }
}
