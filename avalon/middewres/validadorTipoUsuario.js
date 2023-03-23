module.exports = [


    login = (req, res) => {

        if (req.session.tipo == 1) {
           res.render('/admin')
        } else {
            res.redirect('/login')
        }
    }

]