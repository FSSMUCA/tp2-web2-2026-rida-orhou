let valeurs=[0 , 1 , "" , "0" , null , undefined , NaN , false , [] , {} ];
for(i=0 ; i<valeurs.length; i++){
    let element = valeurs[i];
    let texte = String(element);
    if(element){
        console.log(texte + "-> truthy");
    }else{
        console.log(texte + "->falsy");
    }
    }
