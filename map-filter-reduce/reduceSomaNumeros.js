function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log('Aterior: ',{prev},' Atual: ', {current});
        return prev + current;
    }, 0);
}

const arr = [1, 2, 3 ,4, 5];

console.log(somaNumeros(arr));