module.exports = [
    login = (req, res, next) => {
        if (req.session.tipo == 1) {
            next()

        } else {
            res.redirect('/users/login')
        }
    }
]