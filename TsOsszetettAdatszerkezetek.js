document.write("<br><br> <b>Összetett adatszerkezetek kódja:</b> <br>");
//Tuple  - Rendezett N-es (Hasonló mint a javascriptben a tömbök)
//CSak megfelelő típusú és értékű változókkal módosíthatjuk az értékét
var tupleMinta;
tupleMinta = ["Kis József", 22];
//tupleMinta=["Kovács Géza", "mosógépszerelő"]; //NEM ENGEDI A SZÁM HELYÉRE STRING BEILLESZTÉSÉT!ú
//TupletupleMinta=[13,21];//ELSŐ ÉRTÉKNEK SZÖVEGET VÁR, NEM ENGED SZÁMOT MEGADNI AZ ADOTT HELYRE!
document.write("<br>A tuple elem első értéke: " + tupleMinta[0]); //Így jelenik meg az első érték, ami a string(név)
document.write("<br>A tuple elem második értéke: " + tupleMinta[1]); //Így jelenik meg az második érték, ami a szám(év);
//Enum -Adathalmaz(típus)
var FizetesTipusok;
(function (FizetesTipusok) {
    FizetesTipusok[FizetesTipusok["juniorFrontEnd"] = 450000] = "juniorFrontEnd";
    FizetesTipusok[FizetesTipusok["juniorBackEnd"] = 50000] = "juniorBackEnd";
    FizetesTipusok[FizetesTipusok["juniorFullStack"] = 60000] = "juniorFullStack";
})(FizetesTipusok || (FizetesTipusok = {}));
var jozsiFizetes = FizetesTipusok.juniorFullStack;
var szilviFizetes = FizetesTipusok.juniorFrontEnd;
var interFaceObjektum = { nev: "Kis József", eletkora: 22, aktiv: true };
document.write("<br>Interface érték: " + interFaceObjektum.nev);
document.write("<br>Interface érték: " + interFaceObjektum.eletkora);
document.write("<br>Interface érték: " + interFaceObjektum.aktiv);
//TupleMintaFeladat
function NegyzetKeruletTerulet(aOldal) {
    var kerulet = aOldal * 4;
    var terulet = aOldal * aOldal;
    return [kerulet, terulet]; //Így kötelező 2 szám típusú paramétert visszaadni!
}
var Eredmeny = NegyzetKeruletTerulet(5);
document.write("<br>A négyzet kerülete: " + Eredmeny[0]);
document.write("<br>A négyzet területe: " + Eredmeny[1]);
//Szorgalom, Magatartás, Jegy szöveges értékelése 1 tupleval visszaadni, az eredményt
//var SzovegesErtekeles:[string, string, string];
