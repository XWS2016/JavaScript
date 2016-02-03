//JavaScript objekti - prototipovi

//literal
var peraPeric = {
  "ime": "Pera",
  "prezime": "Peric",
  "lk":"00123321"
};

//kreiranje objekta za zadati prototip
var studentPeraPeric = Object.create(peraPeric);
studentPeraPeric["godina studija"] = 3;
studentPeraPeric["polozeni ispiti"] = [{
  "naziv": "Web programiranje",
  "ocena": 9
}, {
  "naziv": "Arhitektura racunara",
  "ocena": 10
}];

console.log("vrednost iz prototipa: "+studentPeraPeric.ime);
console.log("vrednost iz objekta: "+studentPeraPeric["godina studija"]);
studentPeraPeric.lk = "00321123";
console.log("izmenjena vrednost iz prototipa: "+studentPeraPeric.lk);
//vrednost u prototipu je ostala neizmenjena
console.log("vrednost u prototipu: "+Object.getPrototypeOf(studentPeraPeric).lk);
//caveat! iz "naslednika" mogu da izmenim vrednost svojstva u prototipu!
Object.getPrototypeOf(studentPeraPeric).lk="nova vrednost";
console.log("vrednost u prototipu: "+peraPeric.lk);

//enumeracija svojstava
console.log("enumeracija svojstava");
var naziv;
for (naziv in studentPeraPeric) {
  console.log("studentPeraPeric[\"" + naziv + "\"]:" + studentPeraPeric[naziv]);
}

//brisanje svojstva
delete studentPeraPeric["godina studija"];
console.log("obrisano svojstvo: "+studentPeraPeric["godina studija"]);

//brisanje svojstva koje postoji u prototipu
delete studentPeraPeric.lk;
console.log("obrisano svojstvo, iz prototipa: "+studentPeraPeric.lk);
