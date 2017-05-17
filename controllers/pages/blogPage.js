var express = require('express')
  , router = express.Router();
  
router.get('/blog/:name', function(req, res) {
    console.log("GET /blog/:name");

    var blogs = {
        'fashion': {
            'title': 'The Millie Effect | Blog | Fashion',
            'header': 'Fashion',
            'articleTeasers': [
                {
                    'articlePath': '/article/my-stripe-obsession',
                    'articleHeader': 'My Stripe Obsession',
                    'articleDate': '20/3/2017',
                    'articleTeaserImagePath': '/images/my-stripe-obsession-wide.JPG',
                    'articleSnippet': 'It’s 2017 and it seems there is a new stripe trend that’s going to take over and I have taken apart in it. Looking at my recent clothing purchases I realised that this year I have already bought 4 striped items...'
                },
                {
                    'articlePath': '/article/my-idol',
                    'articleHeader': 'My Idol - Subverting the Modern Celebrity',
                    'articleDate': '15/2/2017',
                    'articleTeaserImagePath': '/images/my-idol-wide.JPG',
                    'articleSnippet': 'Growing up in the 90’s as a little girl meant it was inevitable that The Olsen twins were going to be apart of my life at some point. I predominantly remember sitting with my older sister watching Mary-Kate and Ashley: Sweet Sixteen - Licensed to drive, hoping that my ‘sweet sixteen’ would involve driving to Utah for the winter olympics too. I soon realised this what a somewhat unrealistic expectation...'
                }
            ]
        },
        'marketing': {
            'title': 'The Millie Effect | Blog | Marketing',
            'header': 'Marketing',
            'articleTeasers': [
                {
                    'articlePath': '/article/scandalous-advertising',
                    'articleHeader': 'Scandalous Advertising, Sex Scandals and Bankruptcy',
                    'articleDate': '16/2/2017',
                    'articleTeaserImagePath': '/images/scandalous-advertising-wide.JPG',
                    'articleSnippet': 'Scandalous advertising campaigns, sex scandals and bankruptcy. Can you guess the brand I’m going to be discussing?'                
                },
                {
                    'articlePath': '/article/next-step-marketing',
                    'articleHeader': 'Next Step - Marketing!',
                    'articleDate': '14/2/2017',
                    'articleTeaserImagePath': '/images/laptop-wide.JPG',
                    'articleSnippet': 'As a child you dreamt of a life where no one will have the right to tell you what to do, how to do it, and when to do it. Secretly, or not so secretly, that’s what we all want now right? Well, blogging can afford us such freedom and luxuries...'
                }
            ]
        },
        'beauty': {
            'title': 'The Millie Effect | Blog | Beauty',
            'header': 'Beauty',
            'articleTeasers': [
                {
                    'articlePath': '/article/short-hair-dont-care',
                    'articleHeader': "Short Hair Don't Care",
                    'articleDate': '3/4/2017',
                    'articleTeaserImagePath': '/images/short-hair-wide.JPG',
                    'articleSnippet': 'I have always been under the impression that; long hair is amazing. I should aspire to have long hair. When scrolling through my instagram recently I have been in awe of women such as Keira Knightley, Mollie King and Lucy Hale, beautiful women with hair no longer than their shoulders...'
                },
                {
                    'articlePath': '/article/this-works',
                    'articleHeader': 'This Works - Light Time Collection Review',
                    'articleDate': '13/3/2017',
                    'articleTeaserImagePath': '/images/this-works-wide.JPG',
                    'articleSnippet': 'When I was a teenager, I was always taught by my mother to take care of my skin. Eat the right foods, use the right skin care products and take your makeup off before bed...'
                },
                {
                    'articlePath': '/article/my-skin-story',
                    'articleHeader': 'My Skin Story',
                    'articleDate': '2/3/2017',
                    'articleTeaserImagePath': '/images/my-skin-story-wide.JPG',
                    'articleSnippet': 'Up until 2 years ago I never thought too much about my skin. I would once in awhile go through a phase where I wanted THE perfect skin to get rid of that ONE spot that popped up. I would look into what tablets I could take, what food I should be eating and the products I should be using but once the spot naturally disappeared the phase would end.'
                }
            ]
        }
    };

    res.render('blog', blogs[req.params.name]);
});
  
module.exports = router;