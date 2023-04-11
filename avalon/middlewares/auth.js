function auth(req, res, next) {
    if (typeof req.session.userId !== "undefined") {
        next()
    } else {

        res.redirect('/users/login')
    }
}

module.exports = auth