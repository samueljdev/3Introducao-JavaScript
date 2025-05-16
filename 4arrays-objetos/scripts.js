// 1 - arrays
console.log("Arrays ==");

const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];
console.log(itens);

// 2 - mais sobre arrays
console.log("Mais sobre arrays ==");

const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

// 3 - propriedades
console.log("Propriedades de arrays ==");

const numbers = [5, 12, 4, 22];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";
console.log(myName.length);

// 4 - métodos
console.log("Métodos ==");

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos
console.log("Objetos ==");

const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
}

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - criando e deletando propriedades
console.log("Criando e deletando propriedades ==");

const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
}

console.log(car);

car.doors = 4; /* adicionando propriedade */

console.log(car);

delete car.km; /* deletando propriedade */

console.log(car);

// 7 - mais sobre objetos
console.log("Mais sobre objetos ==");

const obj = {
  a: "teste",
  b: true,
}

console.log(obj instanceof Object);
console.log(obj);

const obj2 = {
  c: [],
}

console.log(obj2);

Object.assign(obj2, obj);
console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log("Conhecendo melhor os objetos ==");

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
console.log("Mutação ==");

const ObjetoA = {
  name: "Matheus",
}

const ObjetoB = ObjetoA;

console.log(ObjetoA);
console.log(ObjetoB);

console.log(ObjetoA === ObjetoB);

ObjetoA.age = 31;

console.log(ObjetoB);

delete ObjetoB.age;

console.log(ObjetoA);
console.log(ObjetoB);

// 10 - loop em array
console.log("Loop em array ==");

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuário: ${users[i]}`);
}

// 11 - push e pop
console.log("Push e pop ==");

const array = ["a", "b", "c"];
array.push("d"); /*adicionando elementos */

console.log(array);
console.log(array.length);

array.pop(); /*deletando elementos */
console.log(array);

const itemRemovido = array.pop(); /*retornando elementos removido */
console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários"); /*adicionando varios elementos */
console.log(array);

// 12 - shift e unshift
console.log("Shift e unshift ==");

const letters = ["a", "b", "c"];
console.log(letters);

const letter = letters.shift(); /*removendo no inicio */

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y"); /*adicionando varios elementos no inicio */
console.log(letters)

letters.unshift("p"); /*adicionando no inicio */
console.log(letters);

// 13 - indexof e lastindexof
console.log("Indexof e lastindexof ==");

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]); /*retorno do valor do índice*/
console.log(myElements[myElements.indexOf("Abacate")]); /*retorno do valor do índice*/

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice
console.log("Slice ==");

const arraySlice = ["a", "b", "c", "d", "e", "f"];

const subArray = arraySlice.slice(2, 4); /*intervalo ou faixa de array */
console.log(subArray);

const subArray2 = arraySlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = arraySlice.slice(10, 20); /* intervalo de array qe ñ existe */
console.log(subArray3);

// 15 - foreach
console.log("Foreach ==");

const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O numero atual é: ${n}`)
})

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
]

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

// 16 - includes
console.log("Includes ==");

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
console.log("Reverse ==");

const reverseTest = [1, 2, 3, 4, 5];
console.log("Array sem reverse:",reverseTest);

reverseTest.reverse(); /* investe os elementos de um array */
console.log("Array com reverse:",reverseTest);

// 18 - trim
console.log("Trim ==");

const trimTest = "  testando \n   ";
console.log(trimTest);

console.log(trimTest.trim()); /* removendo tudo o que ñ é texto na string */

console.log(trimTest.trim().length); /* contagem excluindo os caracterer invisiveis */
console.log(trimTest.length); /* contagem cm caracterer invisiveis*/

// 19 - padstart
console.log("Padstart ==");

const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0"); /* inserir um texto no começo da string*/
console.log(testePadStart);

console.log(newNumber);
const testePadEnd = newNumber.padEnd(10, "0"); /* inserir um texto no FINAL da string*/
console.log(testePadEnd);

// 20 - split
console.log("Split ==");

const frase = "O rato roeu a roupa do rei de Roma";
console.log(frase);

const arrayDaFrase = frase.split(" "); /* separando a frase por espaços em array*/
console.log(arrayDaFrase);

// 21 - join
console.log("Join ==");

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
console.log(itensParaComprar);

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`; /* uni uma lista em string com base no separador*/
console.log(fraseDeCompra);

// 22 - repeat
console.log("Repeat ==");

const palavra = "Testando, ";
console.log(palavra.repeat(5));

// 23 - rest operator
console.log("Rest operator ==");

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 24 - for...of
console.log("For...of ==");

const somaInfinita2 = (...args) => {
  let total = 0;
  let num = 0;

  for (num of args) {
    total += num;
  }
  return total;
}

console.log(somaInfinita2(1, 5, 10));
console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 25 - destructuring objetos
console.log("Destructuring objetos ==");

const userDetails = {
  firstName: "Matheus",
  lastName: "Battisti",
  job: "Programador",
}
console.log(userDetails);

const { firstName, lastName, job } = userDetails; /* desestruturando objetos ou algum dado*/
console.log(firstName, lastName, job); /* separado em varias variáveis = feito string */

// renomeando variáveis
console.log("Renomeando variáveis ==");

/* Renomeando variáveis como Destructuring de objetos */
const { firstName: primeiroNome } = userDetails; /* renomeando variavel */
console.log(primeiroNome);

// 26 - destructuring me arrays
console.log("Destructuring em arrays ==");

const myList = ["Avião", "Submarino", "Carro"];
console.log(myList);

const [veiculoA, veiculoB, veiculoC] = myList; /*Destructuring em lista usa-se [ ] */
console.log(veiculoA, veiculoB, veiculoC);

// 27 - json
console.log("Json ==");
/* JSON (JavaScript Object Notation) é dado em formato de texto */

const myJson = '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';
console.log(myJson);

// 28 - json para objeto e objeto para json
console.log("Json para objeto e objeto para json ==");

const myObject = JSON.parse(myJson); /* convertendo objeto me JSON*/
console.log(myObject);
console.log(typeof myObject);

const myString = JSON.stringify(myObject); /* convertendo Objeto JSON para string*/
console.log(myString);
console.log(typeof myString);

// json invalido
console.log("Json invalido ==");

const badJson = '{"name": Matheus, "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'; /* JSON com erro */
// const myBadJson = JSON.parse(badJson); /* impossível fazer conversão de JSON Errado*/

myObject.isOpenToWork = true; /* adicionando propriedade em objeto*/
console.log(myObject);