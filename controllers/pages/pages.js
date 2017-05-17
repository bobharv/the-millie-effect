var express = require('express')
  , router = express.Router()
  , Article = require('../../models/article');
  
router.get('/', function(req, res) {
    console.log("GET /");

    Article.all(function(data) {
        res.render('home', {
            title: 'The Millie Effect | Home',
            header: 'The Millie Effect',
            subHeader: 'Fashion & Marketing',
            articleTeasers: data
        });  //respond with homepage
    });
});

router.get('/about-mill', function(req, res) {
    console.log("GET /about-mill");

    res.render('about', {
        title  : 'The Millie Effect | About Mill',
        header: 'About Mill',
        subHeader: 'A little bit about Mill',
        aboutContent: 'I’m Camilla, I’m from Brighton. I work in Marketing, experiment with blogging and occasionally buy too many clothes! I hope you enjoy my blog :)',
        aboutImagePath: '/images/about-mill.jpg'
    });
});

router.get('/admin/home', function(req, res) {
    console.log("GET /admin/home");

    res.render('admin-new-article', {
        layout: 'admin',
        title: 'Add a new blog article'
    });
});
  
module.exports = router;