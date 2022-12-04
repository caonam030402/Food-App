const authController = {
   
    // Render Login
    login: async (req, res) => {
        try {
            res.render('auth/login')
        } catch (err) {
            res.render('error')
        }
    },

    // Render Register
    register: async (req, res) => {
        try {
            res.render('auth/register')
        } catch (err) {
            res.render('error')
        }
    }
}

module.exports = authController