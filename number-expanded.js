function expandedForm(num) {

    let result = [];
    // let arr;
    let arr = num.toString().split('');
    // let number = num.toString().split('').join('');
    

    for (let i = 0; i < num.toString().length; i++) {

        // arr = num.toString().split('').join('')
        // console.log('for arr', arr)

        if (arr % 10 !== 0) {
            // arr = num.toString().split('').join('')
            console.log('for arr', arr)

            
            result.push(num % 10);
            arr = num.toString().split('');

            arr.pop(num % 10)
            arr.push(0)

            console.log(' arr', arr);

        } else {
            arr.pop()

            console.log('else arr', arr);
        }

    }

    console.log('2 arr', arr);

    // console.log('2 number', number);
    console.log('2 result', result);
 
}

expandedForm(70304)