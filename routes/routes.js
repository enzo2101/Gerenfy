const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const fluxoController = require('../controllers/fluxoController.js');
const registerController = require('../controllers/registerController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// router.get('/dashboard', (req, res) => {
//     return res.render('darshboard')
// });

//router.get('/esqueciSenha', loginController.forgotPasswordPageGet);

router.get('/register', loginController.registerPageGet);

router.post('/postRegister', registerController.postRegister);

router.get('/fluxo', fluxoController.fluxoPageGet);

router.post('/authLogin', loginController.authLogin);

module.exports = router;