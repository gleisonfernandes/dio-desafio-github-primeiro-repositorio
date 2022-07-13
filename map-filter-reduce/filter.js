function filtraPares(arr){
    return arr.filter((item)=>{
        return item % 2 ==0;
    });
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('1 - Filtra Pares -> ',filtraPares(meuArray));

// outraforma

function filtraImpares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !==0;
}

console.log('2 - Filtra Impares -> ', filtraImpares(meuArray));

console.log('<------------------------------------------> ');

const limguagens = ['C#', 'JAVA', 'JAVASCRIPT', 'C#', 'PHP', 'NET', 'C#'];

function filtraLimguagens(arr){
    return arr.filter((item)=>{
        return item == 'PHP';
    });
}

console.log('1 - Filtra Limguagens -> ',filtraLimguagens(limguagens));