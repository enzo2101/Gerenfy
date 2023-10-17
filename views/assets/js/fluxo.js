const form = document.getElementById("formValor");

form.addEventListener("submit", async function (event) {
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

            if (response.status === 200) {
                window.location.reload();
            }

        } catch (error) {
            console.error(error);
        }
    } else {
        console.log("Por favor, preencha todos os campos.");
    }
});

const tabelaContainer = document.getElementById("tabela-container");
const tabela = document.getElementById("tabela-dados");

axios.get("/getValue")
    .then((response) => {
        if (response.status === 200) {
            const dados = response.data;
            const tbody = tabela.getElementsByTagName("tbody")[0];

            dados.forEach((item) => {
                const row = document.createElement("tr");
                
                const dataOriginal = new Date(item.data);
                const dia = dataOriginal.getDate();
                const mes = dataOriginal.getMonth() + 1;
                const ano = dataOriginal.getFullYear();
                const dataFormatada = `${dia}/${mes}/${ano}`;

                row.innerHTML = `
                    <td class="border-2">${dataFormatada}</td>
                    <td class="border-2">${item.valor}</td>
                    <td class="border-2">${item.tipo}</td>
                `;
                tbody.appendChild(row);
            });

            tabelaContainer.style.display = "block"; // Mostra a tabela quando os dados estiverem prontos
        } else {
            console.log("Erro na resposta da API");
        }
    })
    .catch((error) => {
        console.error(error);
    });
