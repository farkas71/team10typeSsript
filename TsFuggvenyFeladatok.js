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
