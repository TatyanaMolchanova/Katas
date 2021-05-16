
const scramble = (str1, str2) =>
[...str2].every(val => {
    console.log('val', val)
    
    console.log('str2.split(val)', str2.split(val))
    console.log('str2.split(val).length', str2.split(val).length)

    console.log('str1.split(val)', str1.split(val))
    console.log('str1.split(val).length', str1.split(val).length)

    str2.split(val).length <= str1.split(val).length

});


// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { 

//         console.log('arr', arr)
//         console.log('cur', cur)
//         console.log('0arr[cur]', arr[cur])
        
//         arr[cur] ? arr[cur]++ : arr[cur] = 1; 
//         console.log('1 arr[cur]', arr[cur])
//         return arr; 
//     }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
// }



// function scramble(str1, str2) {
//     const arr1 = str1.split('')
//     const arr2 = str2.split('')
//     let isAvalaible = true;

//     if (arr1.length < arr2.length) return false;

//     arr2.map((letter, index) => {if (!arr1.includes(letter)) isAvalaible = false; })
//     return isAvalaible ? true : false;
// }
   
console.log('scramble(rkqodlw,world)', scramble('rkqodlw','world'));
// console.log('scramble(jscripts,javascript)', scramble('jscripts','javascript'));
// console.log('scramble(suce, success) ', scramble('suce', 'success') );
// console.log('scramble("", o)', scramble('', 'o'));




// function scramble(str1, str2) {
//     let isAvalaible = true;
//     str2.split('').map((letter, index) => {if (!str1.split('').includes(letter)) isAvalaible = false; })
//     return isAvalaible ? true : false;
// }
   
// console.log('scramble(rkqodlw,world)', scramble('rkqodlw','world'));
// console.log('scramble(jscripts,javascript)', scramble('jscripts','javascript'));
// console.log('scramble(suce, success) ', scramble('suce', 'success') );









// str2.split('').map((letter, index) => {
//     if (!str1.split('').includes(letter)) {
//         isAvalaible = false;
//     }

// })





// function scramble(str1, str2) {

//     const arr1 = str1.split('')
//     const arr2 = str2.split('')
//     let isAvalaible = true;



//     arr2.map((letter, index) => {
//         if (arr1.includes(letter)) {
//             console.log('letter true', letter);
//         } else {
//             console.log('letter false', letter);
//             isAvalaible = false;
//             // return false
//         }
       
//     })

//     return isAvalaible ? true : false;

    

// }