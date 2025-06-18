// 1 - instalando o axios
console.log(axios);

// 2 - primeiro request
const getData = async () => { // função async espera os dados chegarem
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",
            //   Ver request headers
            {
                headers: {
                    "content-type": "application/json",
                    custom: "header",
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