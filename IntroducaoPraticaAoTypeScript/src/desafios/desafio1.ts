// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: {code: number, name: string} = {
    code: 10,
    name: 'John'
}
console.log(employee.code,', ', employee.name)
employee.code = 11;
employee.name = "João";
console.log(employee.code,', ', employee.name)