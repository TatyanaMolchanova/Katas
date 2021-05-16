function reverseWords(str){

    Array(str.split(' ')).reverse();

    console.log('Array',str.split(' ').reverse().join(' '));
   

}

reverseWords("yoda doesn't speak like this");