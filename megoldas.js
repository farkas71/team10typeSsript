function Diakinfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + " [Team" + csoport + "] - Junior Frontend";
    }
    return nev + " [Team" + csoport + "] - Webfejlesztő";
}
document.write(Diakinfo("Farkas Mihály", 10, false));
document.write(Diakinfo("<br>Farkas Mihály", 10, true));
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
var osztalyzat = MagatartasSzorgalom(Math.round(Math.random() * (5 - 1) + 1));
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
    var szamTombHossz = darab;
    var i = 0;
    for (var i_1 = 0; i_1 < szamTombHossz; i_1++) {
        var Szam = Math.round(Math.random() * (max - min) + min);
        var egyezik = false;
        for (var j = 0; j < szamTomb.length; j++) {
            if (Szam == szamTomb[j]) {
                egyezik = true;
                szamTombHossz++;
            }
        }
        if (egyezik == false) {
            szamTomb.push(Szam);
        }
    }
    return szamTomb;
}
var vizsgaltTomb = nyeroSzamok(5, 1, 10);
document.write("<br>A nyerő számok:" + vizsgaltTomb);
