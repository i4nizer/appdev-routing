const User = {

    home: (req, res) => {
        res.render('index.ejs')
    },
    
    shop: (req, res) => {
        res.render('shop.ejs')
    },

    about: (req, res) => {
        res.render('about.ejs')
    },
    
    services: (req, res) => {
        res.render('services.ejs')
    },

    blog: (req, res) => {
        res.render('blog.ejs')
    },
    
    contact: (req, res) => {
        res.render('contact.ejs')
    },

}



module.exports = User