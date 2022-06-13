
var oldal = Math.round(Math.random() * (10 - 1) + 1);
document.write("A n\u00E9gyzet ker\u00FClete ".concat(oldal, " oldallal: ").concat(4 * oldal, " <br>A n\u00E9gyzet ter\u00FClete ").concat(oldal, " oldallal: ").concat(oldal * oldal, "  "));


var szam = Math.round(Math.random() * 10);
if (szam % 2 == 0) {
    document.write("<br>" + szam + " Páros <br>");
} else {
    document.write("<br>" + szam + " Páratlan <br>");
}


var osztok = 0;
for (var i = 1; i <= szam; i++) {
    if (szam % i == 0) {
        osztok++;
    }
}
if (osztok == 2) {
    document.write(szam + " prím");
} else {
    document.write(szam + " Nem prím");
}