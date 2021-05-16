// function range(startNum, endNum)   {  

//     const res = Array(endNum - startNum - 1);

//     console.log('res', res)

//     res.map((num, index, arr) => {
//         console.log('index', index)
//         console.log('arr', arr)
//     })


//     return res

// };  

function range(startNum, endNum)   {  
    const res = [];

    if (startNum === endNum) {
        return [];
    }

    for (i = startNum + 1; i < endNum; i++) {
        res.push(i)
    }
    return res;
};  
  
console.log('range(2,9)', range(2,9));









// function range(startNum, endNum)   {  
//     const res = [];

//     if (startNum === endNum) {
//         return [];
//     }

//     for (i = startNum; i < endNum; i++) {
//         res.push(i)
//     }
//     return res;
// };  