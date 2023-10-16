const knex = require('knex');
const knexConfig = require('../knexfile'); // Importe a configuração do Knex do seu arquivo knexfile.js

const database = knex(knexConfig);

class registerController {
    async postRegister(req, res) {
        const { cpf, nome, email, senha } = req.body;
        try {
            const response = await database('cadastros').insert({
                cpf: cpf,
                nome: nome,
                email: email,
                senha: senha
            });

            res.status(200).json({ success: true, message: "Cadastro realizado com sucesso!" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Erro no cadastro!" });
        }
    }
}

module.exports = new registerController()