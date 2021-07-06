

if ('') console.log(`OK1`); //빈 문자열 (empty string) false;
if (' ') console.log('ok2'); //공백 문자열 (space string) 값이 있다. true;

if (undefined) console.log(`ok3`); // f
if (null) console.log(`ok4`); // f
if (567) console.log(`ok5`); // t
if (0) console.log(`ok6`); // f

if (NaN) console.log(`ok7`); // f
if ([1,2,3]) console.log(`ok8`); //t
if ([]) console.log(`ok9`); // t 
if ({}) console.log(`ok10`); // t

// Un, Null, 0, NaN, '(공백X)' = f

console.log('=========================');

var orangeJuice = 10;
if (orangeJuice) {
    console.log(`오렌지`);
} else { console.log(`오렌지`);

}