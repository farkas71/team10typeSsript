var oldal: number = Math.round(Math.random() * (10 - 1) + 1);
document.write(
    `A négyzet kerülete ${oldal} oldallal: ${
        4 * oldal
    } <br>A négyzet területe ${oldal} oldallal: ${oldal * oldal}  `
);

var szam: number = Math.round(Math.random() * 10);
if (szam % 2 == 0) {
    document.write("<br>" + szam + " Páros <br>");
} else {
    document.write("<br>" + szam + " Páratlan <br>");
}

var osztok: number = 0;
for (let i = 1; i <= szam; i++) {
    if(szam%i==0){
        osztok++;
    }
}
if(osztok ==2){
    document.write(szam + " prím");
}
else{
    document.write(szam + " Nem prím");
}
