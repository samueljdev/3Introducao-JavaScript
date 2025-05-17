// 1 - métodos
console.log("Métodos ==");

const animal = {
  nome: "Bob",

  latir: function () {
    console.log("Au au");
  },
}

animal.latir();

// 2 - aprofundando em métodos
console.log("Aprofundando em métodos ==");

const pessoa = {
  nome: "Matheus",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Samuel Lisboa");
console.log(pessoa.getNome());

// 3 - prototype
console.log("Prototype ==");

const text = "AAAA";
console.log(Object.getPrototypeOf(text)); /*O Ancestral do text é String */

const bool = true;
console.log(Object.getPrototypeOf(bool)); /*O Ancestral do bool é Boolean */

const arr = [];
console.log(arr.length);

console.log(Object.getPrototypeOf(arr) === Array.prototype); /*O Ancestral do arr é console.log(Object.getPrototypeOf(arr) === Array.prototype); /*O Ancestral do arr é Boolean */
/* prototype ñ é um recurso tão utilizado hj em dia */

// 4 - mais sobre prototype
console.log("Mais sobre prototype ==");

const myObject = {
  a: "b",
}

console.log(Object.getPrototypeOf(myObject)); /* criando prototype */
console.log(Object.getPrototypeOf(myObject) === Object.prototype); /* valiando prototype */

const mySecondObject = Object.create(myObject); /* criando objeto apartir de outro objeto*/
console.log(mySecondObject);

console.log(Object.getPrototypeOf(mySecondObject) === myObject); /* valiando prototype */
console.log(mySecondObject.a); /*Acessando propriedade de objeto pai no filho*/

// 5 - classes básicas
console.log("Classes básicas ==");

const cachorro = {
  raca: null,
  patas: 4,
}

const pastorAlemao = Object.create(cachorro); /*Criando outro objeto apartir do cachorro, que herda suas propriedades*/
console.log(pastorAlemao);

pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);

const bulldog = Object.create(cachorro); /*Criando outro objeto */
console.log(bulldog);

bulldog.raca = "Bulldog";
console.log(bulldog);
console.log(bulldog.patas);

// 6 - funcoes como classes
console.log("Funcoes como classes ==");

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.nome = nome;
  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack));