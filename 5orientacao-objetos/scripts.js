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

// 7 - funcoes construtoras
console.log("Funcoes construtoras ==");

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// 8 - métodos na função construtora
console.log("Métodos na função construtora ==");

Cachorro.prototype.uivar = function () {
  console.log("Auuu");
}

husky.uivar();

// 9 - classes es6
console.log("Classes es6 ==");

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
console.log("Mais sobre classes ==");

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`);
  }
}

const scania = new Caminhao(6, "Vermelha");
scania.descreverCaminhao();

Caminhao.motor = 4.0; /* ñ irar funcionar, só funciona se adicionar propriedades na classe */
const c2 = new Caminhao(4, "Preta");

// Motor é undefined
console.log(c2.motor);

/* Adicionando propriedades via prototype*/
Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Azul");
console.log(c3);
console.log(c3.motor);

// 11 - override por prototype
console.log("Override por prototype ==");

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const matheus = new Humano("Matheus", 31);
console.log(matheus);

Humano.prototype.idade = "Não definida";
console.log(matheus.idade);
console.log(Humano.prototype.idade);

// 12 - symbol
console.log("Symbol ==");

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

console.log(Aviao.prototype[asas]);

// 13 - getter e setter
console.log("Getter & Setter ==");

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, javascript, js, Java";
console.log(myPost);

// 14 - Herança
console.log("Herança ==");

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");
console.log(shark);

// 15 - instanceof
console.log("Instanceof ==");

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Cachorro);