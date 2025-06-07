// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

// 3 - propriedades
const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
};

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
    name: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);

// 13 - indexof e lastindexof

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));