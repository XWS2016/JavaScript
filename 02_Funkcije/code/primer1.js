//Metoda
var myObject={value:1};
myObject.double = function ( ) {
  var that = this; // closure.
  var helper = function ( ) {
  	that.value += that.value;
  };
  helper( ); // poziv helper funkcije.
};
// Poziv double metode.
myObject.double( );
console.log(myObject.value);
