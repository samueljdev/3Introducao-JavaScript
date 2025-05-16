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
