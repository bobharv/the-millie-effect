var fs = require('fs');
var stringHelper = require('../helpers/stringHelper');

var articlesDir = "./files/articles/";

// Create new comment in your database and return its id
exports.create = function(articleData) {

  var article = {
    id: generateId(articleData.title),
    articleHeader: articleData.title,
    articleDate: articleData.date,
    articleTeaserDate: "",
    articleBody: articleData.body,
    articleSnippet: "",
    articleMainImage: articleData.mainImage,
    articleTeaserImage: articleData.teaserImage
  }

  var fileName = article.id + ".js";

  fs.writeFile(articlesDir + fileName, article, 'utf8', (err) => {
    if (err) throw err;

    console.log(fileName + ' has been saved', article);
  });
}

// Get a particular comment
exports.get = function(article, cb) {

  var fileName = article.id + ".js";

  fs.readFile(articlesDir + fileName, 'utf8', (err, article) => {
    if (err) throw err;

    console.log(fileName + ' has been read', article);
    cb(article);
  });
}

// Get all comments
exports.all = function(cb) {

  var articles = [];

  // Loop through all the files in the articles directory
  fs.readdir(articlesDir, function( err, files ) {
    if( err ) {
      console.error( "Could not list the directory: " + articlesDir, err );
    } 

    files.forEach( function( fileName, index ) {

      var jsonFile = require('.' + articlesDir + fileName);
      articles.push(jsonFile);
      
    });

    cb(articles);
    
  });
  
}

// Get article path
exports.getPath = function(article) {
    return "/article" + article.id;
}

// Get article path by id 
exports.getPathById = function(articleId) {
    return "/article" + articleId;
}

var generateId = function(articleTitle) {
  var hyphenatedTitle = stringHelper.toHyphenated(articleTitle);

  fs.readdir( articlesDir, function( err, files ) {
    if( err ) {
      console.error( "Could not list the directory: " + articlesDir, err );
    } 

    files.forEach( function( file, index ) {
      // check if any of the names match the hyphenatedTitle
    });
  });

  return hyphenatedTitle;
};