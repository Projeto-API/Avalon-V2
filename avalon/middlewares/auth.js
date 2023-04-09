function auth(req, res, next) {
    if (req.session.userId !== "undefined") {
        next()
    } else {

        res.redirect('/users/login')
    }
}

module.exports = auth