class fluxoController {
    fluxoPageGet(req, res) {
        res.render('fluxo');
    }
}

module.exports = new fluxoController();