(function () { //koristimo IIFE da ne bismo imali globalne varijable

  var Osoba = function (spec) { //konstruktor Osoba
    if(spec){
      this.ime = spec.ime;
      this.prezime = spec.prezime;
    }
    //this.constructor.prototype.brojac += 1; //staticko svojstvo
  };

  Osoba.prototype.pretstaviSe = function () { //"javna" metode
    return "Ja se zovem "+this.ime+" "+this.prezime;
  };

  //Osoba.prototype.brojac = 0;//staticko svojstvo u prototype

  //da ne bismo morali da pamtimo redosle parametar u funkciji, wrapujemo ih u spec objekat
  var markoMarkovic = new Osoba({ime:"Marko", prezime:"Markovic"});
  console.log(markoMarkovic.pretstaviSe());

  var Student = function(spec){ //konsruktor Student
    // this.ime = spec.ime;
    // this.prezime = spec.prezime;
    this.constructor.apply(this,[spec]);//pozivamo konstruktor pretka
    this.smer = spec.smer;
    this.ocene = spec.ocene;
  };

  Student.prototype = new Osoba(); //Student nasledjuje "klasu" Osoba

  Student.prototype.getCV = function () {
    return "studiram na smeru "+this.smer+" i imam sledece ocene "+this.getOcene();
  };

  // Student.prototype.pretstaviSe = function () {
  //   return "zovem se " + this.ime + " " + this.prezime + " i studiram na smeru "+this.smer;
  // };

  Student.prototype.getOcene = function () {
    var i;
    var retVal = "";
    for (i in this.ocene){
      retVal += this.ocene[i].predmet+":"+this.ocene[i].ocena+" ";
    }
    return retVal;
  };

  Student.prototype.upisiOcenu = function (ocena) {
    this.ocene.push(ocena);
  };

  var peraPeric = new Student({ime:"Pera",
                              prezime:"Peric",
                              smer:"Racunarstvo i automatika",
                              ocene:[{predmet:"Web programiranje", ocena:9},
                                      {predmet:"Operativni sistemi",ocena:10}]});

  peraPeric.upisiOcenu({predmet:"Baze podataka",ocena:8});

  // peraPeric.ocene[2].ocena=10; Kako da napravimo privatni atribut?

  //peraPeric.constructor.prototype.pretstaviSe.apply(peraPeric) //poziv super metode

  console.log(peraPeric.pretstaviSe());
  console.log(peraPeric.getCV());
  //console.log(peraPeric.brojac);
}());
