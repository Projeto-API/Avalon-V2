const LoginModel = require('../../models/LoginModel')

module.exports = {
    listaLogin: (req, res) => {
        const Login = LoginModel.index();
       
        res.render('Login', { title: 'Express', css: 'Login', Login });
    }
}