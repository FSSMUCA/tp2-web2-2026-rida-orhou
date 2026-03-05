let nom = "  Fatima  ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";
console.log("nom : " + JSON.stringify(nomCorrige) + " (corrigé : espaces supprimés)");

let ageN = Number(age);
let ageEtat = (Number.isNaN(ageN) || ageN <= 0) ? "invalide" : ageN + " (valide)";
console.log("age : " + ageEtat);

let indexA = email.indexOf("@");
let indexP = (indexA !== -1) ? email.indexOf(".", indexA) : -1;
let emailEtat = (indexP !== -1) ? "valide" : "invalide : pas de point après @";
console.log("email : " + JSON.stringify(email) + " (" + emailEtat + ")");

let scoreN = parseInt(scoreJeu);
if (Number.isNaN(scoreN)) scoreN = 0;
console.log("scoreJeu : " + scoreN + " (extrait depuis " + JSON.stringify(scoreJeu) + ")");

let estAdminBool = (estAdmin === "true");
console.log("estAdmin : " + estAdminBool + " (attention : Boolean(\"false\") = true)");

let derniereC = derniereConnexion ?? "Jamais connecté";
console.log("derniereConnexion : " + JSON.stringify(derniereC) + " (valeur par défaut via ??)");

let nC = Number(nombreConnexions);
let nCEtat = (nC === 0) ? "Aucune connexion" : nC;
console.log("nombreConnexions : " + JSON.stringify(nCEtat) + " (0 après conversion)");

console.log("===============================");