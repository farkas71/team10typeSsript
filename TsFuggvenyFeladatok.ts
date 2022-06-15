// VIZ HALMAZÁLLAPOT
var Random: number = Math.round(Math.random() * 300) - 100;
if (Random > 0 && Random < 100) {
    document.write( "<br>" + Random + " folyékony <br>");
} else if (Random <= 0) {
    document.write( "<br>" + Random + " jég <br>");
} else {
    document.write( "<br>" + Random + " gőz <br>");
}

// KOORDINÁTA RENDSZER
var szam1:number = Math.round(Math.random()*4)-2;
var szam2:number = Math.round(Math.random()*4)-2;
 if(szam1>0 && szam2>0){
  document.write(` A ${szam1}, ${szam2} 1.negyedben van <br>`);  }
 else if(szam1<0 && szam2>0){
  document.write(` A ${szam1}, ${szam2} 2.negyedben van <br>`);  }
 else if(szam1<0 && szam2<0){
  document.write(` A ${szam1}, ${szam2} 3. negyedben van <br>`);  }
 else if(szam1>0 && szam2<0){
  document.write(` A ${szam1}, ${szam2} 4. negyedben van <br>`);  }
 else if(szam1==0 && szam2==0){
  document.write(` A ${szam1}, ${szam2} origón van <br>`);  }
 else if(szam1==0 && szam2 !=0){
  document.write(` A ${szam1}, ${szam2} y-tengelyen van <br>`);  }
 else{
  document.write(` A ${szam1}, ${szam2} x-tengelyen van <br>`);  }

 // SZÁMTANI SOROZAT MINDIG VÁLTOZIK, induloszám (0-100), novekedes (1-10), sorozat hossz (2-20)
 var induloszam: number = Math.round(Math.random()*100);
 var novekedes: number = Math.round(Math.random()*(10-1)+1);
 var sorozatHossz: number = Math.round(Math.random()*(20-2)+2);
 document.write(`A generalt szamtani sorozat: `);
 for(let i=0; i<=sorozatHossz; i++){
    document.write(induloszam + ", ");
    induloszam += novekedes;
 }

 //Téglalap kerületet területe (paraméteres, visszatéséri érték nélküli eljárás)
function TeglalapKeruletTerulet(aOldal: number, bOldal: number): void {
    document.write(`<br>Az ${aOldal}, ${bOldal} egységnyi oldalú téglalap kerülete: ${2 * (aOldal + bOldal)} egység`);
    document.write(`<br>Az ${aOldal}, ${bOldal} egységnyi oldalú téglalap területe: ${aOldal * bOldal} egység<sup>2</sup>`);
}

TeglalapKeruletTerulet(4, 5);
TeglalapKeruletTerulet(10, 12);

//Pozitív negatív nulla(paraméteres visszatéséri érték nélküli eljárás
function PozitivNegativNulla(vizsgaltSzam: number): void {
    if (vizsgaltSzam < 0) {
        document.write(`<br>A ${vizsgaltSzam}: negatív`);
    }
    else if (vizsgaltSzam > 0) {
        document.write(`<br>A ${vizsgaltSzam}: pozitív`);
    }
    else {
        document.write(`<br>A ${vizsgaltSzam} értéke pontosan NULLA!`);
    }
}
PozitivNegativNulla(-3);
PozitivNegativNulla(5);
PozitivNegativNulla(0);

function Rn(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}

function UniverzalisTombGenerator(alsoHatar: number, felsoHatar: number, tombMeret: number): number[] {
    let generaltTomb: number[] = [];
    for (let i = 0; i < tombMeret; i++) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var vizsgalandoTomb = UniverzalisTombGenerator(10, 50, 5);
document.write("<br>A generált tömb elemei:" + vizsgalandoTomb);


//Összegzés tétele (paraméteres és visszatérési értékes függvény)
function OsszegzesTetele(vizsgalandoTomb: number[]): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg;
}
document.write("<br>A tömbben lévő elemek összege:" + OsszegzesTetele(vizsgalandoTomb));


//Páros számok megszámlása (paraméteres és visszatérési értékes függvény)
function MegszamlalasTeteleParos(vizsgalandoTomb: number[]): number {
    let parosMennyiseg: number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            parosMennyiseg++;
        }
    }
    return parosMennyiseg;
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:" + MegszamlalasTeteleParos(vizsgalandoTomb));


//Számtani sorozatok függvény
function SzamtaniSorozatGenerator(kezdoErtek: number, kulonbseg: number, mennyiseg: number): number[] {
    let generaltSzamtaniSorozat: number[] = [];
    for (let i = 0; i < mennyiseg; i++) {
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

function SzorgalomJegy(jegy: number): string {
    let szovegesErtekeles = "";
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
let generaltJegy = Rn(1, 6);
document.write("<br>A generált szorgalom jegy " + generaltJegy + " szöveges értékelése:" + SzorgalomJegy(generaltJegy));


function MagatartasJegy(jegy: number): string {
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


function TantargyJegy(jegy: number): string {
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
    else if (jegy==1){
        return "elégtelen";
    }
    return "hibás érték!";
}
document.write("<br>A generált tantárgyi jegy " + generaltJegy + " szöveges értékelése:" + TantargyJegy(generaltJegy));


//Testtömeg index meghatározó függvény - Szorgalmi
function TestTomegIndex(magassag:number, suly:number):void{
    let tti:number=suly/(magassag*magassag);
    if(tti<16){
        document.write(`<br>A testtömeg indexed értéke ${tti}: súlyos soványság`)
    }
    else if(tti<17){
        document.write(`<br>A testtömeg indexed értéke ${tti}: mérsékelt soványság`)
    }
    else if(tti<18.5){
        document.write(`<br>A testtömeg indexed értéke ${tti}: enyhe soványság`)
    }
    else if(tti<25){
        document.write(`<br>A testtömeg indexed értéke ${tti}: normális testsúly`)
    }
    else if(tti<30){
        document.write(`<br>A testtömeg indexed értéke ${tti}: túlsúlyos`)
    }
    else if(tti<35){
        document.write(`<br>A testtömeg indexed értéke ${tti}: I. fokú elhízás`)
    }
    else if(tti<40){
        document.write(`<br>A testtömeg indexed értéke ${tti}: II. fokú elhízás`)
    }
    else
    {
        document.write(`<br>A testtömeg indexed értéke ${tti}: III. fokú (súlyos) elhízás`)
    }
}
TestTomegIndex(1.9,95);
TestTomegIndex(1.7,70);
TestTomegIndex(1.6,55);



//Átlagszámítás tétele (paraméteres és visszatérési értékes függvény)
function AtlagSzamitasTetele(vizsgalandoTomb: number[]): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg / vizsgalandoTomb.length;
}
document.write("<br>A tömbben lévő elemek átlaga:" + AtlagSzamitasTetele(vizsgalandoTomb));

//Minimumkeresés Index és Érték alapján
function MinimumKeresesErtek(vizsgalandoTomb: number[]): number {
    let minErtek: number = vizsgalandoTomb[0];
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < minErtek) {
            minErtek = vizsgalandoTomb[i];
        }
    }
    return minErtek;
}
document.write("<br>A legkisebb elem értéke a tömbben: " + MinimumKeresesErtek(vizsgalandoTomb));

function MinimumKeresesIndex(vizsgalandoTomb: number[]): number {
    let minIndex:number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < vizsgalandoTomb[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
document.write("<br>A legkisebb elem értéknek az indexe a tömmbben: "+MinimumKeresesIndex(vizsgalandoTomb));
document.write(`<br>A legkisebb elem értéknek az helye a tömmbben: ${MinimumKeresesIndex(vizsgalandoTomb)+1}`);


//Maximumkeresés Index és Érték alapján
function MaximumKeresesErtek(vizsgalandoTomb: number[]): number {
    let maxErtek: number = vizsgalandoTomb[0];
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > maxErtek) {
            maxErtek = vizsgalandoTomb[i];
        }
    }
    return maxErtek;
}
document.write("<br>A legnagyobb elem értéke a tömbben: " + MaximumKeresesErtek(vizsgalandoTomb));

function MaximumKeresesIndex(vizsgalandoTomb: number[]): number {
    let maxIndex:number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > vizsgalandoTomb[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
document.write("<br>A legnagyobb elem értéknek az indexe a tömmbben: "+MaximumKeresesIndex(vizsgalandoTomb));
document.write(`<br>A legnagyobb elem értéknek az helye a tömmbben: ${MaximumKeresesIndex(vizsgalandoTomb)+1}`);





//Páros számok kiválogatása(paraméteres és tömbbel visszatérési értékes függvény)
function KivalogatasTeteleParosFuggveny(vizsgalandoTomb: number[]):number[]{
    let parosElemek: number[]=[];
    for(let i=0;i<vizsgalandoTomb.length; i++){
        if(vizsgalandoTomb[i]%2==0)
        {
            parosElemek.push(vizsgalandoTomb[i]);
        }
    }
    return parosElemek;
}
document.write("<br>A tömbben lévő páros elemek listája a következő:"+KivalogatasTeteleParosFuggveny(vizsgalandoTomb));

//Páros számok kiválogatása(paraméteres és tömbbel visszatérési értékes függvény)
function KivalogatasTeteleParosEljaras(vizsgalandoTomb: number[]):void{
    for(let i=0;i<vizsgalandoTomb.length; i++){
        if(vizsgalandoTomb[i]%2==0)
        {
            document.write(vizsgalandoTomb[i]+",");
        }
    }
}
document.write("<br>A tömbben lévő páros elemek listája a következő: ");
KivalogatasTeteleParosEljaras(vizsgalandoTomb);




