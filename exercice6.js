let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = [nom, age, ville, score, actif];
let nomsVariables = ["nom", "age", "ville", "score", "actif"];

for (let i = 0; i < variables.length; i++) {
    let v = variables[i];
    let nomV = nomsVariables[i];

    let resNullish = v ?? "valeur par défaut";
    let resLogical = v || "valeur par défaut";

    let etat = (resNullish === resLogical) ? "même résultat" : "résultat différent";

    console.log(nomV + " : ?? et || -> " + etat);
}