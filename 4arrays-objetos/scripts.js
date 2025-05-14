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