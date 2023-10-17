const form = document.getElementById("formValor");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const valor = document.getElementById("valor").value;
    const tipo = document.querySelector("input[name='tipo']:checked");

    const valorFormatado = valor.replace(",", ".");
    
    if (valorFormatado && tipo) {
        const data = {
            valor: valorFormatado,
            tipo: tipo.value
        };
        console.log(data);

        try {
            const response = await axios.post("/postValue", data);
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log("Por favor, preencha todos os campos.");
    }
});
