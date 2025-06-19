// 1 - instalando o axios
console.log(axios);

// 2 - primeiro request
const getData = async () => { // função async espera os dados chegarem
    try {
        const response = await postsFetch.get("/users",
            //   Ver request headers
            //   4 - definindo headers
            {
                headers: { // cabeçalhos
                    "content-type": "application/json", // chave tipo de conteúdo
                    custom: "header", // criando uma chave personalizada.
                },
            }
        );

        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error.response);
    }
};

getData();

// 3 - imprimir dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div);
    });
};

printData();

// 5 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts",
        {
            title: titleInput.value, body: bodyInput.value, userId: 1,
        });
});