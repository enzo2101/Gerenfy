const bcrypt = require('bcrypt');

document.getElementById("registerForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const nome = document.getElementById("nome").value;
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        
        cpf = cpf.replace(/[.-]/g, '');
        
        function validaCPF(cpf) {
        console.log(cpf);

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigito = (soma * 10) % 11;
        if (primeiroDigito === 10) {
            primeiroDigito = 0;
        }

        if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
            return false;
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigito = (soma * 10) % 11;
        if (segundoDigito === 10) {
            segundoDigito = 0;
        }

        return parseInt(cpf.charAt(10)) === segundoDigito;
    }

    if (validaCPF(cpf) && senha === confirmarSenha) {
        console.log("CPF e Senha validos");
        const data = {
            cpf: cpf,
            nome: nome,
            email: email,
            senha: bcrypt.hash(senha, 10)
        };

        try {
        const response = await axios.post('/postRegister', data);

        if (response.status === 200) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = "/";
        } else {
            alert('Erro ao cadastrar, Tente Novamente mais tarde!');
            window.location.href = "/register";
        }

        } catch (error) {
            console.error('Error:', error);
        }
    } else if (!validaCPF(cpf)) {
        alert('CPF inválido!');
    } else if (senha !== confirmarSenha) {
        alert('As senhas não conferem!');
    } else {
        alert('Verifique os dados e tente novamente!');
    }
});
