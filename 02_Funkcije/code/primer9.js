//callback
function mySandwich(param1, param2, callback) {
    //alert je blokirajuca funkcija
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    //pozivamo callback funkciju
    callback();
}
//callback je neimenovana funkcija
mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});
