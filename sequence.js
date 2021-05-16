// function sequence(x) {
//     return Array(x).fill(0).map((num, index) => num = index + 1).sort();
// }


// const sequence = ($) => Array.from({length: $}, (_,i)=> i+1).sort();

// const sequence = ($) => Array.from({length: $}, (num, idx) => idx + 1)
const sequence = ($) => Array.from({length: $})


console.log('sequence(16)', sequence(16))