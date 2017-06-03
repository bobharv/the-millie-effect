var fs = require('fs');
var sanitizer = require('../helpers/sanitizer');
var stringHelper = require('../helpers/stringHelper');

var articlesDir = "./files/articles/";

// Create new comment in your database and return its id
exports.create = function(articleData) {
  return new Promise((resolve, reject) => {

    articleData = sanitizer.sanitizeObject(articleData);

    var dataManipulationPromises = [
      generateId(articleData.title),
      generatePageTitle(articleData.title),
      generateArticleDatePretty(articleData.date),
      generateArticleTeaserContent(articleData.content)
    ];

    Promise.all(dataManipulationPromises)
      .then(data => {
        console.log("models/article.js -- Data manipulation success: ", data);

        var article = {
          "id": data[0],
          "pageTitle": data[1],
          "title": articleData.title,
          "articleDate": articleData.date,
          "articleDatePretty": data[2],
          "articleContent": articleData.content,
          "articleTeaserContent": data[3],
          "articleMainImage": articleData.mainImage,
          "articleTeaserImage": articleData.teaserImage,
          "tags": articleData.tags
        }

        var fileName = article.id + ".json";

        console.log("models/article.js -- Writing article to disk: ", articleData.title);
        console.log("models/article.js -- Writing article to disk: ", article);
      
        fs.writeFile(articlesDir + fileName, article, 'utf8', (err) => {
          if (err) throw err;
          console.log("models/article.js -- Completing writing article to disk: ", articleData.title);
          resolve(article);
        });

      })
      .catch(reason => {
        console.log("models/article.js -- Failed to create article because reasons: ", reason);
        reject(reason);
    });
  
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
  fs.readdir(articlesDir, function(err, files) {
    if( err ) {
      console.error( "Could not list the directory: " + articlesDir, err );
    } 

    files.forEach( function(fileName, index) {

      var jsonFile = require('.' + articlesDir + fileName);
      articles.push(jsonFile);
      
    });

    cb(articles);
    
  });
  
}

// Get article path
exports.getPath = function(article) {
    return "/article" + article.id;
};

// Get article path by id 
exports.getPathById = function(articleId) {
    return "/article" + articleId;
};

var generateId = function(articleTitle) {
  return new Promise((resolve, reject) => {

    var hyphenatedTitle = stringHelper.toHyphenated(articleTitle);

    fs.readdir(articlesDir, function(err, files) {
      if(err) {
        console.error("Could not list the directory: " + articlesDir, err);
        reject(err);
      } 

      var fileExists = false;

      files.forEach(function(fileName, index) {

        if ((hyphenatedTitle + ".json") == fileName) {
          fileExists = true;
        }

      });

      if (!fileExists) {
        resolve(hyphenatedTitle);
      } else {
        reject(hyphenatedTitle + ".json already exists");
      }

    });
  });
};

var generatePageTitle = function(articleTitle) {
  return  new Promise((resolve, reject) => {
    if (articleTitle) {
      resolve("The Millie Effect | Article | " + articleTitle);
    } else {
      reject("articleTitle was not specified");
    }
  });
};

var generateArticleDatePretty = function(articleDate) {
  return new Promise((resolve, reject) => {
    if (articleDate) {
      var date = new Date(articleDate).toISOString();
      console.log("Date:", date);
      resolve(articleDate);
    } else {
      reject(articleDate);
    }
  });
};

var generateArticleTeaserContent = function(articleContent) {
  return new Promise((resolve, reject) => {
    if (articleContent) {
      resolve(articleContent);
    } else {
      reject(articleContent);
    }
  });
};