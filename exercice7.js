let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 300;

let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal);

let reduction = (codePromo !== null && estMembre === true) ? (sousTotal * (reductionPourcentage / 100)) : 0;
console.log("Réduction : " + reduction);

let totalFinal = sousTotal - reduction;
console.log("Total final : " + totalFinal);

if (soldeCompte >= totalFinal) {
    console.log("Paiement accepté");
    let nouveauSolde = soldeCompte - totalFinal;
    
    console.log("===== RÉCAPITULATIF =====");
    console.log("Produit : " + nomProduit);
    console.log("Quantité : " + quantite);
    console.log("Prix unit.: " + prix + " MAD");
    console.log("Sous-total: " + sousTotal + " MAD");
    console.log("Réduction : " + reduction + " MAD");
    console.log("Total : " + totalFinal + " MAD");
    console.log("Statut : Paiement accepté");
    console.log("Solde : " + nouveauSolde + " MAD");
    console.log("=========================");
} else {
    console.log("Solde insuffisant");
}