(function() { //IIFE
    var osoba = { //napravimo objekat koji cemo koristiti kao prototip
      pretstaviSe: function() { //"javna" metode
        return "Ja se zovem " + this.ime + " " + this.prezime;
      }
    };
    //Object.create(p) kreira novi objekat ciji je prototip p
    var markoMarkovic = Object.create(osoba);
    //za novokreirani objekat postavimo vrednosti
    markoMarkovic.ime = "Marko";
    markoMarkovic.prezime = "Markovic";
    console.log(markoMarkovic.pretstaviSe());

    //kreiramo objekat student koji kao prototip ima objekat osoba
    var student = Object.create(osoba);
    //dodajemo javne metode u objekat student
    student.getCV = function () {
      return "studiram na smeru "+this.smer+" i imam sledece ocene "+this.getOcene();
    };

    student.getOcene = function () {
      var i;
      var retVal = "";
      for (i in this.ocene){
        retVal += this.ocene[i].predmet+":"+this.ocene[i].ocena+" ";
      }
      return retVal;
    };

    student.upisiOcenu = function (ocena) {
      this.ocene.push(ocena);
    };
    //kreiramo novi objekat koji kao prototip ima objekat student
    var peraPeric = Object.create(student);
    peraPeric.ime = "Pera";
    peraPeric.prezime = "Peric";
    peraPeric.smer = "Racunarstvo i automatika";
    peraPeric.ocene = [{predmet:"Web programiranje", ocena:9},
            {predmet:"Operativni sistemi",ocena:10}];
    peraPeric.upisiOcenu({predmet:"Baze podataka",ocena:8});

    //peraPeric.ocene[2].ocena=10;// Kako da napravimo privatni atribut?

    console.log(peraPeric.pretstaviSe());
    console.log(peraPeric.getCV());

}());
