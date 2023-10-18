const tabelaContainer = document.getElementById("tabela-container");
const tabela = document.getElementById("tabela-dados");

axios.get("/getValue")
    .then((response) => {
        if (response.status === 200) {
            const dados = response.data;
            const tbody = tabela.getElementsByTagName("tbody")[0];
            let saldo = 0;

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

                tabelaContainer.style.display = "block";

                if (item.tipo === "entrada") {
                    saldo += item.valor;
                  } else if (item.tipo === "saida") {
                    saldo -= item.valor;
                  }
            });

            const saldoFormatado = saldo.toFixed(2);
            const saldoElement = document.getElementById("saldo");

            saldoElement.textContent = `R$ ${saldoFormatado}`;

        } else {
            console.log("Erro na resposta da API");
        }
    })
    .catch((error) => {
        console.error(error);
    });