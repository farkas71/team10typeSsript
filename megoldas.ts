    function Diakinfo(nev: string, csoport: number, tipus: boolean) {
        let info: string = "";
        if (tipus == true) {
            info = nev + " [Team" + csoport + "] - Junior Frontend";
        } else {
            info = nev + " [Team" + csoport + "] - Webprogramozó";
        }
        return info;
    }
    document.write(Diakinfo("Farkas Mihály", 10, false));


    function MagatartasSzorgalom(jegy: number): [string, string] {
        if (jegy == 5) {
            return ["Példás", "Példás"];
        } else if (jegy == 4) {
            return ["Jó", "Jó"];
        } else if (jegy == 3) {
            return ["Változó", "Változó"];
        } else if (jegy == 2) {
            return ["Hanyag", "Rossz"];
        } else {
            return ["Ilyen jegy NINCS!", "Ilyen jegy NINCS!"];
        }
    }
    var osztalyzat: [string, string] = MagatartasSzorgalom(4);
    document.write("<br> Magatartás: " + osztalyzat[0]);
    document.write("<br> Szorgalom: " + osztalyzat[1]);
    

    function HarommalOszthatoSzamok(vizsgaltTomb: number[]): number {
        let szamok: number = 0;
        for (let i = 0; i < vizsgaltTomb.length; i++) {
            if (vizsgaltTomb[i] % 3 == 0) {
                szamok++;
            }
        }
        return szamok;
    }
    document.write("<br> Hárommal osztható számok mennyisége:" + HarommalOszthatoSzamok([3, 9, 12, 4, 5]));

    function nyeroSzamok(darab: number, min: number, max: number): number[] {
        let szamTomb: number[] = [];
        for (let i = 0; i < darab; i++) {
            let Szam: number = Math.round(Math.random() * (max - min) + min);
            let egyezik: boolean = false;
            for (let j = 0; j < szamTomb.length; j++) {
                if (darab[i] == szamTomb[j]) {
                    egyezik = true;
                }
            }
            if (egyezik == false) {
                szamTomb.push(Szam);
            }
        }
        return szamTomb;
    }
    var vizsgaltTomb = nyeroSzamok(5, 1, 10);
    document.write("<br>A nyerő számok:" + vizsgaltTomb);
