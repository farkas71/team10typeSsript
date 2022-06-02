// "szam" = SZÁM TíPUSÚ LETT csak számot lehet megadni
var szam: number = 10;
szam = 6;


// "szoveg" = SZÖVEG TIPUSÚ LETT csak szöveget lehet megani, számot csak idézőjelek között
var szoveg:string = "alma";
szoveg = "4.1";


// "logoikai" = LOGIKAI TíPUSÚ LETT csak logikai kifejezést lehet megadni pl: true / false
var logikai: boolean = true;
logikai = false;


// "barmi" = BÁRMILYEN TíPUS LEHET (veszélyes: pl. engedi a számot hozzáadni a szöveghez!), akkor érdemes használni ha még nem tudjuk milyen tipusú értéket fog vissza adni a függvény
var barmi:any = true;
barmi = 5;
barmi = "korte";
document.write(szam+barmi);


// "ismeretlen" = JOBB MINT A "barmi", inkább unknown-t használjuk, mert már a műveletben hibát jelez, ha két különböző típusú értéket akarunk pl. öszeadni
var ismeretlen: unknown = false;
ismeretlen = 1;
console.log(Number(ismeretlen) +szam);
ismeretlen = "alma";
console.log(String(ismeretlen));


// "tomb" = TÖMBÖK LÉTRHOZÁSA
var szovegtomb:string[] = ["alma", "körte","barack"];
var szamtomb:number[] = [1,2,3,4,5,6,];
var barmitomb:any[] = ["alma", 5, true,];


// "tomb-máshogy" TÖMBÖK LÉTREHOZÁS MÁSHOGY
var szovegtomb1:Array<string> = ["alma", "körte","barack"];
var szamtomb2:Array<number> = [1,2,3,4,5,6,];
var barmitomb3:Array<any> = ["alma", 5, true,];








