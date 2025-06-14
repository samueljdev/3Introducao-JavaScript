// 1 var, let e const
var x = 10; // escopo global
var y = 15;

if (y > 10) {
    var x = 5; // var faz atribuição em escopo local, e tbm modifica o escopo global
    console.log(x);
}

console.log(x); // escopo global modificado pela variavel local no if

let a = 10; // escopo global
let b = 15;

if (b > 10) {
    let a = 5; // let atribiu somente no escopo local
    console.log(a);
}

console.log(a); // let mantem o valor da variavel d escopo global

function logName() {
    const nome = "Pedro";
    console.log(nome);
}

const nome = "Matheus";

logName();

console.log(nome);

// 2 arrow function
const sum = function (a, b) {
    return a + b;
};

const arrowSum = (a, b) => a + b; // ñ preciso da palavra function, nem do escopo se for retorno simples

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if (name) {
        return "Hello " + name + "!";
    } else {
        return "Hello!";
    }
};

console.log(greeting());
console.log(greeting("Matheus"));

const user = {
    name: "Theo",
    sayUserName() {
        setTimeout(function () {
            console.log(this);
            console.log("Username: " + this.name);
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.name);
        }, 1200);
    },
};

user.sayUserName()
user.sayUserNameArrow()

// 3 filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    { name: "Matheus", available: true },
    { name: "Pedro", available: false },
    { name: "Marcos", available: true },
    { name: "Josias", available: false },
    { name: "Kleber", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// 4 map
const products = [
    { name: "Camisa", price: 10.99, category: "Roupa" },
    { name: "Chaleira elétrica", price: 150, category: "Eletro" },
    { name: "Fogão", price: 499, category: "Eletro" },
    { name: "Calça jeans", price: 49.99, category: "Roupa" },
];

products.map((product) => {
    if (product.category === "Roupa") {
        product.onSale = true;
    }
});

console.log(products);