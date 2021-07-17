const pessoa = {nome: 'Marcelle', idade: 33};
document.write(pessoa.nome + '<br>');
document.write(pessoa.idade + '<br>');
const quadrado = {
  base: 10,
  altura: 20,
  calcularArea: function(){return this.base*this.altura}
};

document.write(quadrado.calcularArea());
