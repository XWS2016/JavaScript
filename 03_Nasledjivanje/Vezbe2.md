Vežbe 2 Nasleđivanje
===

Proširiti modele Zadatka 2:
* Napraviti tipove hotela *Porodični* i *Poslovni*
* Dodati tip atributa osoba koji ima atribut ``broj_sobe``
* Napraviti tipove soba: *Apartman*, *Radni kabinet*, *Jednokrevetna*, *Dvokreventa* i *Četvorokrevetna*
* Napraviti tipove osoba *Fizičko* i *Pravno lice*
* Inicijalni tip *Osoba* proširiti atributom ``dete`` koji govori da li je osoba dete, kao i ``string: odseo`` atributom koji govori u kom hotelu i kojoj sobi je smeštena osoba.
* Proširiti metodu za rezervaciju sobe da kao parameter prima neku akciju koja će biti izvršena nakon rezervacije sobe (callback)

Osoba
====
Dodati metodu ``odseo`` koja ispisuje u kom hotelu je osoba odsela
>>Pera Peric odseo u hotelu Park u sobi 26

Porodični hotel
===
Poridični hotel ima igraonicu za decu, restoran i bioskop.
Metoda ``ručaj(osobe)`` smešta N osoba u restoran i ispisuje njihova imena.
>>Pera i Ana ručaju u hotelu Park

Metoda ``igraonica(osobe)`` prihvata kao parametar niz osoba. Metoda ispisuje imena osoba čiji je atribut ``dete: true``.
>>Nemanja je u igraonici u Hotelu Park

Metoda ``bioskop(osobe)`` prihvata kao parameter niz osoba i ispisuje njihova imena. U bioskop mogu samo odrasle osobe.

Poslovni Hotel
===
Poslovni hotel ima salu za sastanke i spa centar. U poslovni hotel su smeštene samo Pravna lica.
Dodati metodu ``zakazi_sastanak`` koja kao parametar prima osobu Pravno lice i ispisuje npr:
>> Pera Peric je na sastanku u hotelu Park

Apartman
====

Apartman ima atribute ``bolean:kuhinja``, ``string:kupatilo`` (moguce vrednosti "kabina" i "djakuzi"), **Radni kabinet** i **Jednokreventu** sobu. 
Preopteretiti metodu ``toString`` tako da ispisuje detalje o apartmanu.  

Ostale sobe
====
Imaju atribut ``broj_kreveta`` koji govori koliko soba ima. Preopteretiti metodu 

Pravno Lice
====
Pravno lice pored osnovnih podataka ima i PIB i broj računa firme na koji će biti izdat račun za boravak u hotelu.

Fizičko lice ima u sebi atribut ``porodica: []`` koji govori ko su njegovi članovi porodice. Fizičko lice ne može da rezerviše sobu u Poslovnom hotelu.

Scenario
=======
Instancirati po jedan Porodični i Poslovni hotel.
Poslovni hotel ima 2 apartmana, a poslovni hotel 1 dvokrevetnu i 1 četvorokrevetnu sobu.

Instancirati Fizičko lice otac koji ima ženu i dvoje dece i rezervisati im sobu u Porodičnom hotelu.
Pozvati metodu koja će odvesti porodicu na ručak, zatim decu smestiti u igraonicu, a roditelje u bioskop.

Instancirati Pravno lice, smestiti ga u Poslovni hotel u apartman i u istoj metodi proslediti akciju za zakazivanje sastanka. 

Za sve osobe ispisati gde su odsele. 

