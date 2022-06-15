function Diakinfo(nev, csoport, tipus) {
    var info = "";
    if (tipus == true) {
        info = nev + " [Team" + csoport + "] - Junior Frontend";
    }
    else {
        info = nev + " [Team" + csoport + "] - Webprogramozó";
    }
    return info;
}
document.write(Diakinfo("Farkas Mihály", 10, false));
function MagatartasSzorgalom(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Ilyen jegy NINCS!", "Ilyen jegy NINCS!"];
    }
}
var osztalyzat = MagatartasSzorgalom(4);
document.write("<br> Magatartás: " + osztalyzat[0]);
document.write("<br> Szorgalom: " + osztalyzat[1]);
function HarommalOszthatoSzamok(vizsgaltTomb) {
    var szamok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            szamok++;
        }
    }
    return szamok;
}
document.write("<br> Hárommal osztható számok mennyisége:" + HarommalOszthatoSzamok([3, 9, 12, 4, 5]));
function nyeroSzamok(darab, min, max) {
    var szamTomb = [];
    for (var i = 0; i < darab; i++) {
        var Szam = Math.round(Math.random() * (max - min) + min);
        var egyezik = false;
        for (var j = 0; j < szamTomb.length; j++) {
            if (darab[i] == szamTomb[j]) {
                egyezik = true;
            }
        }
        if (egyezik == false) {
            szamTomb.push(Szam);
        }
    }
    return szamTomb;
}
var vizsgaltTomb = nyeroSzamok(5, 1, 90);
document.write("<br>A nyerő számok:" + vizsgaltTomb);
