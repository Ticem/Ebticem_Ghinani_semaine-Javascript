class Guerrier {
    constructor(attaque , defense, pointsdevie, précision) {
            this.attaque = attaque;
            this.defense = defense;
            this.pointsdevie = pointsdevie;
            this.précision = précision
    }

    getattaque(){
        console.log(this.attaque);
    }

}



let alexis = new Guerrier(15, 5, 100, 5);


let florian = new Guerrier(11, 4, 50, 5);


console.log("les stats d'alexis :")
console.log (alexis)
console.log("les stats de florian :")
console.log(florian)


function tour1(pointsdevie, attaque) {
    alexis.pointsdevie -= florian.attaque;
    console.log("alexis possède " + alexis.pointsdevie + " Pv, Florian lui infligue " + florian.attaque + " points de dégâts.");
}
tour1();
console.log("les stats d'alexis' :");
console.log(alexis);

if (alexis.pointsdevie <= 0) {
    console.log("alexis est K.O !");
} else {
    console.log("alexis a " + alexis.pointsdevie + " PV .");
}


function tour2(pointsdevie, attaque) {
    florian.pointsdevie -= alexis.attaque;
    console.log("florian possède" + florian.pointsdevie + " PV, Alexis lui infligue " + alexis.attaque + " points de dégâts.");
}
tour2(20, 5);
console.log("les stats de florian :");
console.log(florian);

if (florian.pointsdevie <= 0) {
    console.log("florian est K.O !");
} else {
    console.log("florian a " + florian.pointsdevie + " PV !");




}

function tour3(pointsdevie, attaque) {
    florian.pointsdevie -= alexis.attaque;
    console.log("florian possède" + florian.pointsdevie + " PV, Alexis lui infligue " + alexis.attaque + " points de dégâts.");
}
tour2(20, 5);
console.log("les stats de florian :");
console.log(florian);

if (florian.pointsdevie <= 0) {
    console.log("florian est K.O !");
} else {
    console.log("florian a " + florian.pointsdevie + " PV !");
}






