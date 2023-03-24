module.exports  = [
    
    user = (req, res, next) => {

        if (user.tipo == 1) {
           next()
        } else {
            res.redirect('admin')
        }
    }
]
    