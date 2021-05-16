//Algorithms


// function century(year) {

//     const yearArr = year.toString().split('');

//     if (yearArr.length <= 2) {
//         return 1;
//     }

//     if (yearArr.length === 3) {
//         if (+(yearArr.slice(1).join('')) > 0) {
//             return +(yearArr.slice(0, 1).join('')) + 1
//         } else {
//             return +(yearArr.slice(0, 1).join(''))
//         }
//     }

//     if (+(yearArr.slice(2).join('')) > 0) {
//         return +(yearArr.slice(0, yearArr.length -2).join('')) + 1
//     } else {
//         return +(yearArr.slice(0, yearArr.length -2).join(''))
//     }
// }

const century = year => Math.ceil(year/100);


console.log('century(1705)', century(1705));
console.log('century(1900)', century(1900));
console.log('century(89)', century(89));
console.log('century(160))', century(160));
console.log('century(164303))', century(164303));
console.log('century(195438))', century(195438));

// century(1705)
// century(1900)
// century(89)
// century(160)





//Algorithms


// function century(year) {

//     const yearArr = year.toString().split('');

//     yearArr.slice(Math.max(yearArr.length - 2, 0))

//     // console.log(' yearArr.slice(Math.max(yearArr.length - 2, 0))',  yearArr.slice(Math.max(yearArr.length - 2, 0)));
//     // console.log(' yearArr. join',  yearArr.slice(Math.max(yearArr.length - 2, 0)).join(''));

    

//     if (yearArr.length === 4) {
//         // console.log('yearArr.length === 4')
//         if (+(yearArr.slice(2).join('')) > 0) {
//             console.log('4 yearArr.slice(0, 2)', +(yearArr.slice(0, 2).join('')) + 1)
//             return +(yearArr.slice(0, 2).join('')) + 1
//         } else {
//             console.log('4 00', yearArr.slice(0, 2).join(''))
//             return yearArr.slice(0, 2).join('')
//         }
//     }

    
//     if (yearArr.length === 3) {
//         console.log('yearArr.slice(2)', yearArr.slice(1))

//         if (+(yearArr.slice(1).join('')) > 0) {
//             console.log('3 yearArr.slice(0, 2)', +(yearArr.slice(0, 1).join('')) + 1)
//             return +(yearArr.slice(0, 1).join('')) + 1
//         } else {
//             console.log('3 00', yearArr.slice(0, 1).join(''))
//             return yearArr.slice(0, 1).join('')
//         }
//     }

//     if (yearArr.length <= 2) {
//         return 1;
//     }
// }

// century(1705)
// century(1900)
// century(89)
// century(160)

