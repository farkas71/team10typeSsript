document.write("<br><br> <b>Összetett adatszerkezetek kódja:</b> <br>");
//Tuple  - Rendezett N-es (Hasonló mint a javascriptben a tömbök)
//CSak megfelelő típusú és értékű változókkal módosíthatjuk az értékét
var tupleMinta: [string, number];
tupleMinta = ["Kis József", 22];
//tupleMinta=["Kovács Géza", "mosógépszerelő"]; //NEM ENGEDI A SZÁM HELYÉRE STRING BEILLESZTÉSÉT!ú
//TupletupleMinta=[13,21];//ELSŐ ÉRTÉKNEK SZÖVEGET VÁR, NEM ENGED SZÁMOT MEGADNI AZ ADOTT HELYRE!
document.write("<br>A tuple elem első értéke: " + tupleMinta[0]);//Így jelenik meg az első érték, ami a string(név)
document.write("<br>A tuple elem második értéke: " + tupleMinta[1]);//Így jelenik meg az második érték, ami a szám(év);



//Enum -Adathalmaz(típus)
enum FizetesTipusok {
    juniorFrontEnd = 450000,
    juniorBackEnd = 50000,
    juniorFullStack = 60000
}
var jozsiFizetes: FizetesTipusok = FizetesTipusok.juniorFullStack;
var szilviFizetes: FizetesTipusok = FizetesTipusok.juniorFrontEnd;
//Szokták használni alapszínek letárolásásra
//oldalAlapszine=456123,   ==>"#"+Szinek.oldalAlapszine



//Interface - Objektumok vázát határozhatjuk meg vele...
interface Dolgozo {
    nev: string;
    eletkora: number;
    aktiv: boolean;
}
var interFaceObjektum: Dolgozo = { nev: "Kis József", eletkora: 22, aktiv: true };
document.write("<br>Interface érték: " + interFaceObjektum.nev);
document.write("<br>Interface érték: " + interFaceObjektum.eletkora);
document.write("<br>Interface érték: " + interFaceObjektum.aktiv);

//TupleMintaFeladat
function NegyzetKeruletTerulet(aOldal: number): [number, number] {
    let kerulet = aOldal * 4;
    let terulet = aOldal * aOldal;
    return [kerulet, terulet];//Így kötelező 2 szám típusú paramétert visszaadni!
}
var Eredmeny: [number, number] = NegyzetKeruletTerulet(5);
document.write("<br>A négyzet kerülete: " + Eredmeny[0]);
document.write("<br>A négyzet területe: " + Eredmeny[1]);

//Szorgalom, Magatartás, Jegy szöveges értékelése 1 tupleval visszaadni, az eredményt
//var SzovegesErtekeles:[string, string, string];