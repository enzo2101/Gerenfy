const knex = require('knex');
const bcrypt = require('bcrypt');
const knexConfig = require('../knexfile'); // Importe a configuração do Knex do seu arquivo knexfile.js

const database = knex(knexConfig);

class loginController {
    registerPageGet(req, res) {
        return res.render('register.ejs');
    }
    forgotPasswordPageGet(req, res) {
        return res.render('forgotPassword.ejs');
    }
    async authLogin(req, res) {
        const { cpf, senha } = req.body;

        try {
            const user = await database('cadastros').where({ cpf: cpf }).first();
    
            if (user) {
                const senhaCorresp = await bcrypt.compare(senha, user.senha);
    
                if (senhaCorresp) {
                    res.json({ success: true });
                } else {
                    res.json({ message: 'Senha incorreta!' });
                }
            } else {
                res.json({ message: 'CPF não encontrado!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

module.exports = new loginController();