var express = require('express')
  , router = express.Router();
  
router.post('/add', function(req, res) {
    console.log("POST /article/add");

    var title = req.body.title;
    var date = req.body.date;
    var content = req.body.content;

    var responseMessage = "Adding article: " + title;

    console.log(responseMessage);

    res.send(
        {'message': 'Added article'}
    );
});
  
module.exports = router;