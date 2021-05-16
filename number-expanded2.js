// function expandedForm(num) {

//     let isUsed = true;

//     console.log('1 num', num);

//     // console.log('Array(num)', [num]);



//     if (isUsed) {
//         num = arr.join('');
//         console.log('3 num', num)
//         isUsed = false;

//     } else {

//         arr = num.toString().split('');
//         console.log('1 arr', arr);
    
//         arr.pop();
//         console.log('2 arr', arr);
//     }



//     // console.log('2 num', num);

// //     const newNum = arr;


// //     console.log('newNum', newNum);




//   if (arr.length > 0) {
//       isUsed = true;
//     expandedForm(arr)
//   }
 
// }

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            // .map(item => console.log(item))
                            .join(" + ");

// expandedForm(70304)

console.log('expandedForm(70304)', expandedForm(70304));