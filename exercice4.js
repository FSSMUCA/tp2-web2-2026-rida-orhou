const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];

    let resSimple = (a == b);
    let resStricte = (a === b);

    if (resSimple === true && resStricte === false) {
        compteur++;
    }

    let label1 = (JSON.stringify(a) + " == " + JSON.stringify(b)).padEnd(20);
    let label2 = (JSON.stringify(a) + " === " + JSON.stringify(b)).padEnd(20);

    console.log(label1 + " -> " + resSimple + "  |  " + label2 + " -> " + resStricte);
}

console.log("---");
console.log(compteur + " paire(s) où == et === donnent des résultats différents");