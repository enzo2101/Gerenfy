const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');
const footerController = require('../controllers/footerController.js');
const fluxoController = require('../controllers/fluxoController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//footer
router.get('/dashboard', footerController.getDashboard);
router.get('/fluxo', footerController.getFluxo);
router.get('/pagamentos', footerController.getPagamentos);

router.get('/getValue/:dias', fluxoController.getValue);

router.get('/register', loginController.registerPageGet);

router.post('/postValue', fluxoController.postValue);

router.post('/postRegister', registerController.postRegister);

router.post('/authLogin', loginController.authLogin);

module.exports = router;