const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/dashboard', (req, res) => {
    return res.render('dashboard.ejs')
});

//router.get('/esqueciSenha', loginController.forgotPasswordPageGet);

router.get('/register', loginController.registerPageGet);

router.post('/postRegister', registerController.postRegister);

router.post('/authLogin', loginController.authLogin);

module.exports = router;