var express = require('express');
var router = express.Router();
var Article = require('../../models/article');
  
router.post('/add', function(req, res) {
    console.log("POST /article/add");

    var promise = Article.create(req.body);

    promise.then(value => {
        res.send(
            {'message': 'Added article'}
        );
    }).catch(reason => {
        res.status("403").send({"message" : "Failed to add create article"});
    })
    
});
  
module.exports = router;