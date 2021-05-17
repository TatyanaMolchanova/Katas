// Best decision
const printerError = s => s.match(/[^a-m]/gi).length + '/' + s.length;

// My decision
// function printerError(s) {
//     let alphabet = String.fromCharCode(...Array(110).keys()).slice(97);
//     let counter = 0;

//     console.log('alphabet', alphabet)
//     for (let i = 0; i < s.length; i++) {
//         if (!alphabet.includes(s[i])) {
//             counter++
//         }
//     }

//     console.log('counter', counter)
//     return `${counter}/${s.length}`
// }

console.log('aaaxbbbbyyhwawiwjjjwwm', printerError('aaaxbbbbyyhwawiwjjjwwm'))