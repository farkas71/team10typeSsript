// VIZ HALMAZÁLLAPOT
var Random = Math.round(Math.random() * 300) - 100;
if (Random > 0 && Random < 100) {
    document.write("<br>" + Random + " folyékony <br>");
}
else if (Random <= 0) {
    document.write("<br>" + Random + " jég <br>");
}
else {
    document.write("<br>" + Random + " gőz <br>");
}
// KOORDINÁTA RENDSZER
var szam1 = Math.round(Math.random() * 4) - 2;
var szam2 = Math.round(Math.random() * 4) - 2;
if (szam1 > 0 && szam2 > 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " 1.negyedben van <br>"));
}
else if (szam1 < 0 && szam2 > 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " 2.negyedben van <br>"));
}
else if (szam1 < 0 && szam2 < 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " 3. negyedben van <br>"));
}
else if (szam1 > 0 && szam2 < 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " 4. negyedben van <br>"));
}
else if (szam1 == 0 && szam2 == 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " orig\u00F3n van <br>"));
}
else if (szam1 == 0 && szam2 != 0) {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " y-tengelyen van <br>"));
}
else {
    document.write(" A ".concat(szam1, ", ").concat(szam2, " x-tengelyen van <br>"));
}
// SZÁMTANI SOROZAT MINDIG VÁLTOZIK, induloszám (0-100), novekedes (1-10), sorozat hossz (2-20)
var induloszam = Math.round(Math.random() * 100);
var novekedes = Math.round(Math.random() * (10 - 1) + 1);
var sorozatHossz = Math.round(Math.random() * (20 - 2) + 2);
document.write("A generalt szamtani sorozat: ");
for (var i = 0; i <= sorozatHossz; i++) {
    document.write(induloszam + ", ");
    induloszam += novekedes;
}
//Téglalap kerületet területe (paraméteres, visszatéséri érték nélküli eljárás)
function TeglalapKeruletTerulet(aOldal, bOldal) {
    document.write("<br>Az ".concat(aOldal, ", ").concat(bOldal, " egys\u00E9gnyi oldal\u00FA t\u00E9glalap ker\u00FClete: ").concat(2 * (aOldal + bOldal), " egys\u00E9g"));
    document.write("<br>Az ".concat(aOldal, ", ").concat(bOldal, " egys\u00E9gnyi oldal\u00FA t\u00E9glalap ter\u00FClete: ").concat(aOldal * bOldal, " egys\u00E9g<sup>2</sup>"));
}
TeglalapKeruletTerulet(4, 5);
TeglalapKeruletTerulet(10, 12);
//Pozitív negatív nulla(paraméteres visszatéséri érték nélküli eljárás
function PozitivNegativNulla(vizsgaltSzam) {
    if (vizsgaltSzam < 0) {
        document.write("<br>A ".concat(vizsgaltSzam, ": negat\u00EDv"));
    }
    else if (vizsgaltSzam > 0) {
        document.write("<br>A ".concat(vizsgaltSzam, ": pozit\u00EDv"));
    }
    else {
        document.write("<br>A ".concat(vizsgaltSzam, " \u00E9rt\u00E9ke pontosan NULLA!"));
    }
}
PozitivNegativNulla(-3);
PozitivNegativNulla(5);
PozitivNegativNulla(0);
function Rn(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
function UniverzalisTombGenerator(alsoHatar, felsoHatar, tombMeret) {
    var generaltTomb = [];
    for (var i = 0; i < tombMeret; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var vizsgalandoTomb = UniverzalisTombGenerator(10, 50, 5);
document.write("<br>A generált tömb elemei:" + vizsgalandoTomb);
//Összegzés tétele (paraméteres és visszatérési értékes függvény)
function OsszegzesTetele(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg;
}
document.write("<br>A tömbben lévő elemek összege:" + OsszegzesTetele(vizsgalandoTomb));
//Páros számok megszámlása (paraméteres és visszatérési értékes függvény)
function MegszamlalasTeteleParos(vizsgalandoTomb) {
    var parosMennyiseg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            parosMennyiseg++;
        }
    }
    return parosMennyiseg;
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:" + MegszamlalasTeteleParos(vizsgalandoTomb));
//Számtani sorozatok függvény
function SzamtaniSorozatGenerator(kezdoErtek, kulonbseg, mennyiseg) {
    var generaltSzamtaniSorozat = [];
    for (var i = 0; i < mennyiseg; i++) {
        generaltSzamtaniSorozat.push(kezdoErtek);
        kezdoErtek += kulonbseg;
    }
    return generaltSzamtaniSorozat;
}
document.write("<br>A generált számtani sorozat:" + SzamtaniSorozatGenerator(5, 3, 10));
document.write("<br>A generált számtani sorozat:" + SzamtaniSorozatGenerator(Rn(1, 100), Rn(1, 20), Rn(10, 20)));
//Szorgalom jegy / Magatartás jegy / Szöveges értékelés
//5 - példás / jeles(jegy)
//4 - jó
//3 - változó / közepes(jegy)
//2 - rossz(magatarás) || hanyag(szorgalom) || elégséges(jegy)
//1 - elégtelen(csak jegy esetén van!)
function SzorgalomJegy(jegy) {
    var szovegesErtekeles = "";
    if (jegy == 5) {
        szovegesErtekeles = "példás";
    }
    else if (jegy == 4) {
        szovegesErtekeles = "jó";
    }
    else if (jegy == 3) {
        szovegesErtekeles = "változó";
    }
    else if (jegy == 2) {
        szovegesErtekeles = "hanyag";
    }
    else {
        szovegesErtekeles = "hibás érték!";
    }
    return szovegesErtekeles;
}
var generaltJegy = Rn(1, 6);
document.write("<br>A generált szorgalom jegy " + generaltJegy + " szöveges értékelése:" + SzorgalomJegy(generaltJegy));
function MagatartasJegy(jegy) {
    if (jegy == 5) {
        return "példás";
    }
    else if (jegy == 4) {
        return "jó";
    }
    else if (jegy == 3) {
        return "változó";
    }
    else if (jegy == 2) {
        return "rossz";
    }
    else {
        return "hibás érték!";
    }
}
document.write("<br>A generált magatartás jegy " + generaltJegy + " szöveges értékelése:" + MagatartasJegy(generaltJegy));
function TantargyJegy(jegy) {
    if (jegy == 5) {
        return "jeles";
    }
    else if (jegy == 4) {
        return "jó";
    }
    else if (jegy == 3) {
        return "közepes";
    }
    else if (jegy == 2) {
        return "elégséges";
    }
    else if (jegy == 1) {
        return "elégtelen";
    }
    return "hibás érték!";
}
document.write("<br>A generált tantárgyi jegy " + generaltJegy + " szöveges értékelése:" + TantargyJegy(generaltJegy));
//Testtömeg index meghatározó függvény - Szorgalmi
function TestTomegIndex(magassag, suly) {
    var tti = suly / (magassag * magassag);
    if (tti < 16) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": s\u00FAlyos sov\u00E1nys\u00E1g"));
    }
    else if (tti < 17) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": m\u00E9rs\u00E9kelt sov\u00E1nys\u00E1g"));
    }
    else if (tti < 18.5) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": enyhe sov\u00E1nys\u00E1g"));
    }
    else if (tti < 25) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": norm\u00E1lis tests\u00FAly"));
    }
    else if (tti < 30) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": t\u00FAls\u00FAlyos"));
    }
    else if (tti < 35) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": I. fok\u00FA elh\u00EDz\u00E1s"));
    }
    else if (tti < 40) {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": II. fok\u00FA elh\u00EDz\u00E1s"));
    }
    else {
        document.write("<br>A testt\u00F6meg indexed \u00E9rt\u00E9ke ".concat(tti, ": III. fok\u00FA (s\u00FAlyos) elh\u00EDz\u00E1s"));
    }
}
TestTomegIndex(1.9, 95);
TestTomegIndex(1.7, 70);
TestTomegIndex(1.6, 55);
//Átlagszámítás tétele (paraméteres és visszatérési értékes függvény)
function AtlagSzamitasTetele(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg / vizsgalandoTomb.length;
}
document.write("<br>A tömbben lévő elemek átlaga:" + AtlagSzamitasTetele(vizsgalandoTomb));
//Minimumkeresés Index és Érték alapján
function MinimumKeresesErtek(vizsgalandoTomb) {
    var minErtek = vizsgalandoTomb[0];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < minErtek) {
            minErtek = vizsgalandoTomb[i];
        }
    }
    return minErtek;
}
document.write("<br>A legkisebb elem értéke a tömbben: " + MinimumKeresesErtek(vizsgalandoTomb));
function MinimumKeresesIndex(vizsgalandoTomb) {
    var minIndex = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < vizsgalandoTomb[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
document.write("<br>A legkisebb elem értéknek az indexe a tömmbben: " + MinimumKeresesIndex(vizsgalandoTomb));
document.write("<br>A legkisebb elem \u00E9rt\u00E9knek az helye a t\u00F6mmbben: ".concat(MinimumKeresesIndex(vizsgalandoTomb) + 1));
//Maximumkeresés Index és Érték alapján
function MaximumKeresesErtek(vizsgalandoTomb) {
    var maxErtek = vizsgalandoTomb[0];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > maxErtek) {
            maxErtek = vizsgalandoTomb[i];
        }
    }
    return maxErtek;
}
document.write("<br>A legnagyobb elem értéke a tömbben: " + MaximumKeresesErtek(vizsgalandoTomb));
function MaximumKeresesIndex(vizsgalandoTomb) {
    var maxIndex = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > vizsgalandoTomb[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
document.write("<br>A legnagyobb elem értéknek az indexe a tömmbben: " + MaximumKeresesIndex(vizsgalandoTomb));
document.write("<br>A legnagyobb elem \u00E9rt\u00E9knek az helye a t\u00F6mmbben: ".concat(MaximumKeresesIndex(vizsgalandoTomb) + 1));
//Páros számok kiválogatása(paraméteres és tömbbel visszatérési értékes függvény)
function KivalogatasTeteleParosFuggveny(vizsgalandoTomb) {
    var parosElemek = [];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            parosElemek.push(vizsgalandoTomb[i]);
        }
    }
    return parosElemek;
}
document.write("<br>A tömbben lévő páros elemek listája a következő:" + KivalogatasTeteleParosFuggveny(vizsgalandoTomb));
//Páros számok kiválogatása(paraméteres és tömbbel visszatérési értékes függvény)
function KivalogatasTeteleParosEljaras(vizsgalandoTomb) {
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            document.write(vizsgalandoTomb[i] + ",");
        }
    }
}
document.write("<br>A tömbben lévő páros elemek listája a következő: ");
KivalogatasTeteleParosEljaras(vizsgalandoTomb);
