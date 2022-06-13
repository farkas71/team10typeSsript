// "szam" = SZÁM TíPUSÚ LETT csak számot lehet megadni
var szam = 10;
szam = 6;
// "szoveg" = SZÖVEG TIPUSÚ LETT csak szöveget lehet megani, számot csak idézőjelek között
var szoveg = "alma";
szoveg = "4.1";
// "logoikai" = LOGIKAI TíPUSÚ LETT csak logikai kifejezést lehet megadni pl: true / false
var logikai = true;
logikai = false;
// "barmi" = BÁRMILYEN TíPUS LEHET (veszélyes: pl. engedi a számot hozzáadni a szöveghez!), akkor érdemes használni ha még nem tudjuk milyen tipusú értéket fog vissza adni a függvény
var barmi = true;
barmi = 5;
barmi = "korte";
document.write(szam + barmi);
// "ismeretlen" = JOBB MINT A "barmi", inkább unknown-t használjuk, mert már a műveletben hibát jelez, ha két különböző típusú értéket akarunk pl. öszeadni
var ismeretlen = false;
ismeretlen = 1;
console.log(Number(ismeretlen) + szam);
ismeretlen = "alma";
console.log(String(ismeretlen));
// "tomb" = TÖMBÖK LÉTRHOZÁSA
var szovegtomb = ["alma", "körte", "barack"];
var szamtomb = [1, 2, 3, 4, 5, 6,];
var barmitomb = ["alma", 5, true,];
// "tomb-máshogy" TÖMBÖK LÉTREHOZÁS MÁSHOGY
var szovegtomb1 = ["alma", "körte", "barack"];
var szamtomb2 = [1, 2, 3, 4, 5, 6,];
var barmitomb3 = ["alma", 5, true,];
