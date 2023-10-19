class footerController {
    getDashboard(req, res) {
        return res.render('dashboard.ejs');
    }
    getFluxo(req, res) {
        return res.render('fluxo.ejs');
    }
    getPagamentos(req, res) {
        return res.render('payments.ejs');
    }
}

module.exports = new footerController();