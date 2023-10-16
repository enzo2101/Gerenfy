const knex = require('knex');
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
                const senhaCorresp = await bcry;

                if (senhaCorresp) {
                    console.log("Usuário encontrado");
                    res.redirect("/dashboard");
                } else {
                    res.json({ message: 'Senha incorreta!' });
                }
            } else {
                res.json({ message: 'CPF não encontrado!' });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new loginController();