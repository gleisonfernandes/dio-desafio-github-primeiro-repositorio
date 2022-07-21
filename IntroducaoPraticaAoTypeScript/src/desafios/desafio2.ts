// Como podemos melhorar o esse código usando TS? 
enum Profissoes {
    Atriz,
    Padeiro
}

type Pessoas = {
    name: string,
    idade: number,
    profissao: Profissoes
}

let pessoa1: Pessoas = {
    name : 'Maria',
    idade : 29,
    profissao: Profissoes.Atriz
};

let pessoa2: Pessoas = {
    name : 'Roberto',
    idade : 19,
    profissao: Profissoes.Padeiro
};

let pessoa3: Pessoas = {
    name : 'Laura',
    idade : 32,
    profissao: Profissoes.Atriz
};

let pessoa4: Pessoas = {
    name : 'carlos',
    idade : 19,
    profissao: Profissoes.Padeiro
};
console.log(pessoa1.name,', ', pessoa2.name,', ', pessoa3.name,', ', pessoa4.name)
