const knex = require('knex');
const bcrypt = require('bcrypt');
const knexConfig = require('../knexfile'); // Importe a configuração do Knex do seu arquivo knexfile.js

const database = knex(knexConfig);

class registerController {
    async postRegister(req, res) {
        const { cpf, nome, email, senha } = req.body;
        const hashedSenha = await bcrypt.hash(senha, 10);
        try {
            const response = await database('cadastros').insert({
                cpf: cpf,
                nome: nome,
                email: email,
                senha: hashedSenha
            });

            res.status(200).json({ success: true });

        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Erro no cadastro!" });
        }
    }
}

module.exports = new registerController()