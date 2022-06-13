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




