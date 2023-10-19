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
            console.log(alert('usuário ou senha incorretos!'));
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
