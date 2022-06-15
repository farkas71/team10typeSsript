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
var diak = Diakinfo("Farkas Mihály", 10, false);
document.write(diak);
function MagatartasSzorgalom(jegy) {
    if (jegy == 5) {
        return "Példás, Példás";
    }
    else if (jegy == 4) {
        return "Jó, Jó";
    }
    else if (jegy == 3) {
        return "Változó, Változó";
    }
    else if (jegy == 2) {
        return "Hanyag, Rossz";
    }
    else {
        return "Ilyen jegy NINCS!";
    }
}
document.write("<br> Magatartás-Szorgalom: " + MagatartasSzorgalom(5));
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
