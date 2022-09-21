console.log("JS is started");


// Compare operator
// console.log( 5 < 5 );
// console.log( 5 <= 12 );
// console.log( 12 == 12 );
// console.log( "8" == 8 );
// console.log( "salom" === "salom" );
// console.log( true === false );




// if( false === false ){
//     console.log("ha");
// }else{
//     console.log("yoq");
// }




// // !== -> teng emasmi (nagative)
// // console.log( 5 === 5 ); // true
// // console.log( 5 !== 6 ); //true
// // console.log( 10 !== 10 ); // false


// let age = 25

// // && - and (va)

// let result =age >= 18 && age <= 25

// console.log(result);



// if( result ){
//     console.log("access");
// }else{
//     console.log("can not access");
// }


// let weather = 56

// // || -> (yoki)
// let foo = weather < -5 || weather > 45

// console.log( foo );








// DATE


let sana = new Date()
const time = document.querySelector(".time")

let soat = sana.getHours()
let daqiqa = sana.getMinutes()
let soniya = sana.getSeconds()

let timeFormat = `${soat}:${daqiqa}:${soniya}`
console.log(timeFormat);







console.log( sana.getFullYear() );
console.log( sana.getMonth() );
console.log( sana.getDate() );
console.log( sana.getDay() );
console.log( sana.getHours() );
console.log( sana.getMinutes() );