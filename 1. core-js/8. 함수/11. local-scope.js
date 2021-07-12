
var x = 'global x';
var y = 'outer local y';
function outer (x) {
    console.log(x);
    console.log(y);
};

function inner () {
    var x = 'inner local x';
    var z = 'inner local z';
    console.log(x);
    console.log(y);
    console.log(z);
}
inner();

outer('outer local x');