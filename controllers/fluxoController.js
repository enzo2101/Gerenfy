const knex = require('knex');
const knexConfig = require('../knexfile'); // Importe a configuração do Knex do seu arquivo knexfile.js

const database = knex(knexConfig);

class FluxoController {
    async postValue(req, res) {
        const { valor, tipo } = req.body;

        try {
            const response = await database('fluxo').insert({
                valor: valor,
                tipo: tipo
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Erro no cadastro!" });
        }
    }
    async getValue(req, res) {
        const { dias } = req.params;

        const dataLimite = new Date();
        dataLimite.setDate(dataLimite.getDate() - dias);

        database.select("*")
            .table("fluxo")
            .where('data', '>=', dataLimite)
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new FluxoController();