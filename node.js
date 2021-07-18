class Pessoa{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}
const cidadao = new Cidadao('teste', 20, '00099977788', '123456');
console.log(cidadao);    
const cidadao2 = new Cidadao('teste2', 23, '00099977788', '123456');
console.log(cidadao2);
const cidadao3 = new Cidadao('teste3', 19, '00099977788', '123456');
console.log(cidadao3);