document.getElementById("authLogin").addEventListener("submit", async function (event) {
    event.preventDefault();

    cpf = document.getElementById("cpf").value;
    senha = document.getElementById("senha").value;

    cpf = cpf.replace(/[.-]/g, "");

    console.log(cpf);

    const data = {
        cpf: cpf,
        senha: senha
    }
    try {
        const response = await axios.post('/authLogin', data);

        if (response.data.success) {
            window.location.href = '/dashboard';
        } else {
            window.location.href = '/';
        }
    } catch (error) {
        console.log(error);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const criarContaElement = document.getElementById('criarConta');

    if (criarContaElement) {
        criarContaElement.addEventListener('click', function () {
            window.location.href = '/register';
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const esqueciSenhaElement = document.getElementById('esqueciSenha');

    if (esqueciSenhaElement) {
        esqueciSenhaElement.addEventListener('click', function () {
            window.location.href = '/esqueciSenha';
        });
    }
});