//TechSide Express JS Server with Handlebars view engine

var express = require('express');
var app = express();  //use express js module

//add handlebars view engine
var handlebars = require('express3-handlebars')
	.create({defaultLayout: 'main'});  //default handlebars layout page

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //sets express view engine to handlebars


app.set('port', process.env.PORT || 3000);  //sets port 3000

app.use(express.static(__dirname + '/public')); 

app.get('/admin/home', function(req,res) {
    res.render('admin-new-article', {
        layout: 'admin',
        title: 'Add a new blog article'
    });
});

app.get('/admin/login', function(req,res) {
    res.render('admin-login', {
        layout: 'admin',
        title: 'Login'
    });
});

app.get('/', function(req,res){ 
    var articleTeasers = [
        {
            'articlePath': '/article/short-hair-dont-care',
            'articleHeader': "Short Hair Don't Care",
            'articleDate': '3/4/2017',
            'articleTeaserImagePath': '/images/short-hair-wide.JPG',
            'articleSnippet': 'I have always been under the impression that; long hair is amazing. I should aspire to have long hair. When scrolling through my instagram recently I have been in awe of women such as Keira Knightley, Mollie King and Lucy Hale, beautiful women with hair no longer than their shoulders...',
            'homeTeaserDate': '3rd April 2017',
            'homeTeaserImagePath': '/images/short-hair.JPG'
        },
        {
            'articlePath': '/article/my-stripe-obsession',
            'articleHeader': 'My Stripe Obsession',
            'articleDate': '20/3/2017',
            'articleTeaserImagePath': '/images/my-stripe-obsession-wide.JPG',
            'articleSnippet': 'It’s 2017 and it seems there is a new stripe trend that’s going to take over and I have taken apart in it. Looking at my recent clothing purchases I realised that this year I have already bought 4 striped items...',
            'homeTeaserDate': '20th March 2017',
            'homeTeaserImagePath': '/images/my-stripe-obsession.JPG'
        },
        {
            'articlePath': '/article/this-works',
            'articleHeader': 'This Works - Light Time Collection Review',
            'articleDate': '13/3/2017',
            'articleTeaserImagePath': '/images/this-works-wide.JPG',
            'articleSnippet': 'When I was a teenager, I was always taught by my mother to take care of my skin. Eat the right foods, use the right skin care products and take your makeup off before bed...',
            'homeTeaserDate': '13th March 2017',
            'homeTeaserImagePath': '/images/this-works.JPG'
        },
        {
            'articlePath': '/article/my-skin-story',
            'articleHeader': 'My Skin Story',
            'articleDate': '2/3/2017',
            'articleTeaserImagePath': '/images/my-skin-story.JPG',
            'articleSnippet': 'Up until 2 years ago I never thought too much about my skin. I would once in awhile go through a phase where I wanted THE perfect skin to get rid of that ONE spot that popped up. I would look into what tablets I could take, what food I should be eating and the products I should be using but once the spot naturally disappeared the phase would end.',
            'homeTeaserDate': '2nd March 2017',
            'homeTeaserImagePath': '/images/my-skin-story.JPG'
        },
        {
            'articlePath': '/article/scandalous-advertising',
            'articleHeader': 'Scandalous Advertising, Sex Scandals and Bankruptcy',
            'articleDate': '16/2/2017',
            'articleTeaserImagePath': '/images/scandalous-advertising-wide.JPG',
            'articleSnippet': 'Scandalous advertising campaigns, sex scandals and bankruptcy. Can you guess the brand I’m going to be discussing?',           
            'homeTeaserDate': '16th February 2017',
            'homeTeaserImagePath': '/images/scandalous-advertising.JPG'
        },
        {
            'articlePath': '/article/my-idol',
            'articleHeader': 'My Idol - Subverting the Modern Celebrity',
            'articleDate': '15/2/2017',
            'articleTeaserImagePath': '/images/my-idol-wide.JPG',
            'articleSnippet': 'Growing up in the 90’s as a little girl meant it was inevitable that The Olsen twins were going to be apart of my life at some point. I predominantly remember sitting with my older sister watching Mary-Kate and Ashley: Sweet Sixteen - Licensed to drive, hoping that my ‘sweet sixteen’ would involve driving to Utah for the winter olympics too. I soon realised this what a somewhat unrealistic expectation...',
            'homeTeaserDate': '15th February 2017',
            'homeTeaserImagePath': '/images/my-idol.JPG'
        },
        {
            'articlePath': '/article/next-step-marketing',
            'articleHeader': 'Next Step - Marketing!',
            'articleDate': '14/2/2017',
            'articleTeaserImagePath': '/images/laptop-wide.JPG',
            'articleSnippet': 'As a child you dreamt of a life where no one will have the right to tell you what to do, how to do it, and when to do it. Secretly, or not so secretly, that’s what we all want now right? Well, blogging can afford us such freedom and luxuries...',
            'homeTeaserDate': '14th February 2017',
            'homeTeaserImagePath': '/images/laptop.JPG'
        }
    ];


	res.render('home', {
        title: 'The Millie Effect | Home',
        header: 'The Millie Effect',
        subHeader: 'Fashion & Marketing',
        articleTeasers: articleTeasers
    });  //respond with homepage
});

app.get('/about-mill', function(req, res) {
	res.render('about', {
        title  : 'The Millie Effect | About Mill',
        header: 'About Mill',
        subHeader: 'A little bit about Mill',
        aboutContent: 'I’m Camilla, I’m from Brighton. I work in Marketing, experiment with blogging and occasionally buy too many clothes! I hope you enjoy my blog :)',
        aboutImagePath: '/images/about-mill.jpg'
    });
});

app.get('/blog/:name', function(req,res) {
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

app.get('/article/:name', function(req,res) {
    var articles = {
        'short-hair-dont-care': {
            'tags': ['beauty'],
            'title': "The Millie Effect | Article | Short Hair Don't Care",
            'header': "Short Hair Don't Care",
            'subHeader': '3/4/2017',
            'articleTopImagePath': '/images/short-hair-wide.JPG',
            'articleContent': '<p>I have always been under the impression that; long hair is amazing. I should aspire to have long hair. </p> <p>When scrolling through my instagram recently I have been in awe of women such as Keira Knightley, Mollie King and Lucy Hale, beautiful women with hair no longer than their shoulders. </p> <p>So I finally took the plunge (and yes it was scary, and yes there were a few tears). The day started well, I went to the hairdressers and told them exactly what I wanted “a long bob (LOB) no shorter than my collarbone, if you dry it wavy but not curly that would be great!”. She seemed to have a complete understanding of what I wanted and I was imagining myself walking out of the salon looking exactly like Keira Knightley. </p> <p>But, as all you girls probably know: hairdressers are not where dreams are made but where tears are made. </p> <p>My hair was shorter than I had asked for and I looked like a poodle (sorry I didn’t leave it long enough to take photos!) but after a few tears, a shower and purchasing a hair wand I am now happy! I would like it to grow a little longer but luckily for me my hair doesn’t take long to gain a few inches. </p> <p>So, here are a few reasons you might be ready to take the plunge. <ol> <li> <b> You have thick roots and top hair but your ends are thinner. </b>This is pretty common and by getting a LOB you will cut your hair at the thickest points therefore your hair will appear thicker from roots to ends! Tip: if you have really thick hair (like me) ask the hairdresser to thin it out and add a long layer so you don’t have a triangle hairstyle! </li> <li> <b> Your hair feels lifeless, flat and like it just sits on your head. </b>This was my main reason for getting the chop. When I looked in the mirror I thought ‘long hair does absolutely nothing for me’. Going shorter has given my hair more volume and I feel like I have an actual style. </li> <li> <b> You are looking for a more edgy style.</b> Long hair makes me think ‘glamourous’ when, if being realistic, my style is much more casual and slightly grungy. I prefer putting on some baggy jeans and a baggy shirt and I think the short hair reflects this look more. But, it can also look very glamourous when needed. </li> <li> <b> You have trouble style your own hair.</b> I am the first culprit of making myself look like a poodle then a wavy beach babe. Short hair is much easier to style, it’s easier to manage on a day to day basis and much easier to get to grips with the curling tongs. </li> <li> <b> You can see split and frazzled ends to your hair.</b> If this is the case, then it’s time for the chop girls! Your hair may be long but it’s not healthy and the only remedy to split ends is having a trim, so why not bite the bullet and get the LOB .. with the choppy layers you know it’s going to look good for at least the next 3 months! </li> </p>'
        },
        'my-stripe-obsession': {
            'tags': ['fashion'],
            'title': 'The Millie Effect | Article | My Stripe Obsession',
            'header': 'My Stripe Obsession',
            'subHeader': '20/3/2017',
            'articleTopImagePath': '/images/my-stripe-obsession-wide.JPG',
            'articleContent': '<p>It’s 2017 and it seems there is a new stripe trend that’s going to take over and I have taken apart in it. Looking at my recent clothing purchases I realised that this year I have already bought 4 striped items.</p> <p>Stripes never go out of fashion. They ruled the spring/summer 2016 runways and they are still evident now. They are no longer going in the traditional linear patterns but stripes are being seen in all sorts of directions now.</p> <p>Since starting my stripe fad I have realised that they are very versatile and can be worn to nearly an event! They are a staple for women’s office wear and have been for many years. A striped top paired with a good pair of jeans and some trainers are a good weekend and casual look or whack on a stripe jumpsuit and you are ready to hit the bars! </p> <p>However, it is always good to bare in mind what stripe you should choose to wear:</p> <p><b>Apple Shaped Bodies:</b> For a slimmer illusion around the torso, vertical lines are the winner if worn away from your mid-section.</p> <p><b>Hourglass Figure:</b> Stick to the basics. Your plus points are your curves which should be highlighter with single direction stripes. You can pick vertical or horizontal.</p> <p><b>Pear Shaped Bodies:</b> Stripes aren’t always the easiest to wear with this body shape but hope is not lost! Vertical lines will make the bottom appear slimmer and horizontal lines will create a fuller breast. Take your pick!</p> <p><b>Rectangle Bodies:</b> Want to look a little curvy? Try horizontal stripes to add some curves.</p> <p><b>Petite Bodies:</b> Try vertical stripes to lengthen your body.</p> <p>Remember, you can always add a little more glamour by throwing in some simple accessories.</p>'
        },
        'this-works': {
            'tags': ['beauty'],
            'title': 'The Millie Effect | Article | This Works - Light Time Collection Review',
            'header': 'This Works - Light Time Collection Review',
            'subHeader': '13/3/2017',
            'articleTopImagePath': '/images/this-works-wide.JPG',
            'articleContent': '<p>When I was a teenager, I was always taught by my mother to take care of my skin. Eat the right foods, use the right skin care products and take your makeup off before bed. It was drilled into me that you should do everything you can to keep your complexion looking fresh and healthy! However, once I started university and realised I wasn’t really going to have any money for the next 3 years I realised my skin care routine was going to have to take a more budget approach.</p> <p>I’ve never had bad skin luckily (apart from the eczema but that’s a whole different story) but now i am 25 I’m worried about the day my first big wrinkle makes an appearance. In the last couple of years I’ve really started thinking about the advice my mum gave me and made an effort to start using quality products with the most natural ingredients you can find. I’ve definitely had my fair share of products, some working better than others but I recently decided that maybe I should start using anti-wrinkle products. Surely it’s best to start fighting them sooner than later? I mean, what can you do once they have already appeared?</p> <p>First thing first, I did my research. I never go and buy a product without researching what is in it and looking at reviews. <i><b>A quick tip</b>, the best reviews to read are ones from <b>Amazon</b> as they are usually always truthful!</i></p> <p>I started looking into <a href=”http://www.thisworks.com/”>‘thisworks’</a> and found myself drawn to the company. The company was created by former Beauty Director of Vogue UK, Kathy Phillips. Kathy understands the link between lifestyle and skin health and wanted to create intelligent, targeted solutions that optimise skin performance 24 hours a day, based on the body clock. As a result of this, the products that thisworks deliver don’t have any unnecessary chemicals and replace sulphates, phalates, GMOs and parabens (all of which are massive eczema triggers!) with cleaner alternatives. Alongside this, they never test on animals and use organically grown plants whenever possible.</p> <p>Over the last 2 weeks I have been using This Works Light Time Cleanse & Glow, Light Time Skin Plumper and No Wrinkles Extreme Moisturiser.</p> <ul> <li><a href=”http://www.thisworks.com/light-time-cleanse-and-glow-75ml.html”>Light Time Cleanse & Glow.</a> This cleanser is more like a balm, very similar to Elizabeth Arden’s 8 Hour Cream. It is rich in Jojoba Oil and Vitamin C. You only need a tiny amount, apply to dry skin and massage over the face. Once massaged in, damp your fingers and gently massage the skin to activate the Vitamin C. Once I wash the cleanser off my face feels clean, moist and much brighter!</li> <li><a href=”http://www.thisworks.com/skincare/range/light-time/light-time-skin-plumper-30ml.html”>Light Time Skin Plumper.</a> This is the second step. The cream has a light texture and is packed with moisturising properties of Hyaluronic Acid and Persian Silk Tree. You just massage it into your skin and start to feel the cream lift and plump your skin ready for the day ahead! Since using the product my skin feels much smoother and brighter. I usually use this product just in the morning and use the No Wrinkles Extreme Moisturiser in the evening.</li> <li><a href=”http://www.thisworks.com/no-wrinkles-extreme-moisturiser.html#sthash.pDmUCLeA.dpbs”>No Wrinkles Extreme Moisturiser.</a> The cream is very light and full of Retinol to help minimise wrinkles. The cream gives me a beautiful dewy look and makes my skin feel moisturised instantly after massaging it into my skin. I haven’t actually noticed my lines disappearing but fortunately I am only 25 and don’t yet have any lines but my skin is a lot less dry and stays moisturised till the morning.</li> </ul> <p>Overall I have found the products brilliant. The reason why I bought these were because my skin was looking dull, dry and lacked a lot of energy. It really is starting to look a lot brighter, I can see my makeup sitting on my skin better and looking a lot more dewy (which is my preferred look!).</p> <p>Only downfall is I found the products hard to purchase in store. I did find them in boots but it was a very small selection so I would recommend buying online and getting it delivered.</p> <p>I am definitely going to be trying out the rest of the range and will keep you updated on what they are like!</p>'
        },
        'my-skin-story': {
            'tags': ['beauty'],
            'title': 'The Millie Effect | Article | My Skin Story',
            'header': 'My Skin Story',
            'subHeader': '2/3/2017',
            'articleTopImagePath': '/images/my-skin-story-wide.JPG',
            'articleContent': '<p>I think skin is something most people take for granted, if you have good skin that is…</p> <p>Up until 2 years ago I never thought too much about my skin. I would once in awhile go through a phase where I wanted THE perfect skin to get rid of that ONE spot that popped up. I would look into what tablets I could take, what food I should be eating and the products I should be using but once the spot naturally disappeared the phase would end. </p> <p>I didn’t really need to worry about my skin - I rarely got spots, I never got acne, I wasn’t allergic to anything to cause rashes of inflammation. I was naturally skin lucky!</p> <p>2 years ago I developed a small patch of eczema on my shoulder, I bought some over the counter steroid cream and it seemed to go for a bit. It didn’t end there though, the eczema came back in full force and I soon had:</p> <ul> <li>3 patches on my back</li> <li>2 patches on my shoulders</li> <li>Under my armpit on both sides</li> <li>A small patch on my stomach</li> <li>Patches on the crease of my arms</li> </ul> <p>As you can imagine, it was quite devastating (yes it seems extreme) but I was embarrassed about having my arms out, I didn’t want to wear anything showing my back or shoulders and going on hot holidays filled me with dread! </p> <p>My initial research gave me the diagnostic that it was discoid eczema. Discoid eczema causes distinctive circular or oval patches of eczema. They can affect any part of the body but don’t usually affect the face or scalp. Take a look at this link to find out more about <a href="http://www.nhs.uk/conditions/Eczema-(discoid)/Pages/Introduction.aspx">discoid eczema.</a></p> <p>I was happy that I had finally found what eczema I had and was ready to read the solution to it.. But unfortunately nobody knows why you get discoid eczema and there is no treatment. Back to step 1.</p> <p>I went to the doctors and they prescribed me with steroid cream and moisturiser for extreme dry skin, both of these helped but I wanted the solution and not a quick fix. I asked them if they would do allergy tests for me but I was told that eczema isn’t affected by allergies and would be something I came into contact with. I had very strong doubts about this!! </p> <p>So, for the last 2 years I have been testing what could have caused my eczema and I tried taking out of my diet both <b>coffee</b> and <b>dairy</b>.</p> <p>Unfortunately these didn’t really help, having no dairy in my diet did make me feel slightly more energetic and healthier but my eczema stayed :( and I didn’t really drink enough coffee in the first place to consider it being the cause. </p> <p>But here is what I did discover: </p> <ul> <li><b>Tomatoes</b>: It seems tomatoes are one of the major causes of my eczema flare ups. It turns out that tomatoes and products containing tomato including tomato ketchup and spaghetti bolognese, are a huge threat as they are very rich sources of salicylates, amines and natural MSG. The three worst chemicals for triggering eczema.</li> <li><b>Washing Powder</b>: Even now if I sleep in somebody else’s bed covers which has been washed with Fairy and smells wonderful my eczema has a tantrum! I am a lover of my clothes smelling like flowers as they come out the wash but have succumbed to using eco-friendly washing powder.</li> <li><b>Doctors</b>: Doctors are not necessarily the best people to diagnose you! They are very reluctant to give allergy or patch testing and will try you with a number of different over the counter creams way before they even consider referring you to a dermatologist.</li> <li><b>Dermatologists</b>: Dermatologists are expensive! They will charge around £200 for a consultation and a further £300 for a patch test. I personally wasn’t willing to pay these prices until I have exhausted all other options! </li> <li><b>Steroid Cream</b>: It’s not a solution but it does help! I have never been a fan of using steroid cream but it has become my life saver. When I have a big flare up I put a very small amount on my eczema ONCE and it pretty much disappears within the day. <b>Please don’t continue using it though, it’s very powerful and can weaken the skin causing the eczema to become worse! </b></li> <li><b>Go natural</b>: Natural products are my new best friends. Whenever I pick up skin care products I always check the ingredients and use the rule: <i>if can’t read the word then it’s very likely to not be natural.</i></li> </ul> <p>So, my eczema is pretty much clearing itself up now! The patches on my back are gone, the patches under my arms are gone. The creases in my arms I still suffer with but they come and go and aren’t as red as they used to be! </p> <p>I am no longer worried about going on summer holidays and what I wear, skin confidence at last! </p> <p>Keep watching this space to find out more about how I tackled my eczema! </p>'
        },
        'scandalous-advertising': {
            'tags': ['marketing', 'fashion'],
            'title': 'The Millie Effect | Article | Scandalous Advertising, Sex Scandals and Bankruptcy',
            'header': 'Scandalous Advertising, Sex Scandals and Bankruptcy',
            'subHeader': '16/2/2017',
            'articleTopImagePath': '/images/scandalous-advertising-wide.JPG',
            'articleContent': '<p>Scandalous advertising campaigns, sex scandals and bankruptcy. Can you guess the brand I’m going to be discussing?</p> <p>As a marketer and fashion enthusiast I am all for brands using guerilla marketing tactics. From YSL’s Jeanloup Sieff picking himself as the face of his perfume and posing for the photographer completely naked in 1971 (caused quite a stir back then!) to Gucci’s campaign when Tom Ford and Mario Testino creating images that were filled with references to fetishism. Model Carmen Cass showing off her pubic hair trimmed in the shape of a G was the last straw. The ad was banned everywhere.</p> <p>But one all-American company that took the marketing brand to a whole new level was American Apparel. The company has recently had to shut down it’s UK stores due to <a href="http://metro.co.uk/2016/12/23/all-but-one-of-american-apparels-uk-stores-will-close-for-good-this-christmas-6341827/">‘falling foul of tough trading’</a>.</p> <p>I find it quite surprising the company lasted so long with founder and CEO Dov Charney having oral sex with an employee in front of a female journalist, 4 female employees filing sexual harassment lawsuits against him and` his urge to walk through his factory in his underpants and conducts meetings wearing only a thong! </p> <p>Despite the constant scandals and way overpriced clothing, I have found myself not only purchasing numerous items of theirs (yes, I was obsessed with the disco pants like many young girls), but I have found myself in awe, wondering how a company with such negative connotations kept going for so long! </p> <p>The brand had a lot of damage control once Dov Charney was let go and worked overtime stop featuring women in provocative ads and instead they created a <a href="http://wwd.com/business-news/media/american-apparel-launches-pro-women-ad-campaign-10109919/">women-friendly ad</a>.</p> <p>Damage control within Marketing is something I am extremely interested in but unfortunately (or fortunately) I have never had to be involved in. The next few weeks I am going to be looking into American Apparel and their marketing tactics. </p> <p>Keep an eye out for them!!</p>'          
        },
        'my-idol': {
            'tags': ['marketing', 'fashion'],
            'title': 'The Millie Effect | Article | My Idol - Subverting the Modern Celebrity',
            'header': 'My Idol - Subverting the Modern Celebrity',
            'subHeader': '15/2/2017',
            'articleTopImagePath': '/images/my-idol-wide.JPG',
            'articleContent': '<p>Growing up in the 90’s as a little girl meant it was inevitable that The Olsen twins were going to be apart of my life at some point. I predominantly remember sitting with my older sister watching Mary-Kate and Ashley: Sweet Sixteen - Licensed to drive, hoping that my ‘sweet sixteen’ would involve driving to Utah for the winter olympics too. I soon realised this what a somewhat unrealistic expectation. </p> <p>Since their days of acting the sisters have opted for feigned anonymity, posing for the occasional red carpet snap, but otherwise choosing to keep their lives as private as possible. This hasn’t stopped them from being the most famous twins in the world. </p> <p>So, apart from the fact they have become forces to be reckoned with in the fashion industry, what makes Mary-Kate & Ashley my icons?</p> <p>The twins subvert the ‘modern day celebrity culture’. They don’t announce their personal lives over social media channels, their faces and names aren’t plastered all over their brands, and they didn’t become fashion icons to get their name into the press (let’s face it, there was no need!). </p> <p>Ashley Olsen told The New York Times in 2009 that, “I decided at 18 that I didn’t want to be in the entertainment industry anymore. I wanted to explore other things, and with that came The Row. Our lives have been king of backward. We never got the opportunity in high school to figure out what we want to do. We never had time to discover, ‘Oh, I love doing this…’ so the experience in Fashion has been amazing.” <a href="http://www.nytimes.com/2009/08/27/fashion/27olsens.html">http://www.nytimes.com/2009/08/27/fashion/27olsens.html</a></p>' 
        },
        'next-step-marketing': {
            'tags': ['marketing'],
            'title': 'The Millie Effect | Article | Next Step - Marketing!',
            'header': 'Next Step - Marketing!',
            'subHeader': '14/2/2017',
            'articleTopImagePath': '/images/laptop-wide.JPG',
            'articleContent': '<p>As a child you dreamt of a life where no one will have the right to tell you what to do, how to do it, and when to do it. Secretly, or not so secretly, that’s what we all want now right? Well, blogging can afford us such freedom and luxuries.</p> <p>Among many other things such as, furthering my writing skills & learning HTML and CSS, having the freedom to write my own opinions about anything that catches my attention is massive factor in choosing to start my own blog. </p> <p>‘First blog’ hmm, I’m going to guess starting a blog with a white lie isn’t in the best practices guidelines. My first blog was actually created when I was about 11. It was called something along the lines of ‘my visions, thoughts and ideas’ and consisted of 2 blog posts. I think I quickly realised at the age of 11 I didn’t have many visions, thoughts and ideas that needed to be written on the world wide web for everybody to see.</p> <p>After my first failed attempt of writing a blog, the idea did cross my mind again. At college I went through a phase that I would be a war journalist and help save the world, I wanted to start writing about politics and tell people the truth about what really went on during wars. Once again, my brain caught up with my thoughts and I realised you have to be one brave person with a strong heart to take on that job. Blog attempt 2 was never started.</p> <p>At University I studied Media and Communication studies. After realising my career ambition to be a war journalist probably wasn’t quite right for me, I started to look into other journalism. I took a 2 week placement at the Argus, a local newspaper, and my dreams were soon crushed once again - I learnt very quickly that the definition of ‘journalism’ didn’t always mean ‘truth’. The words ‘have you finished that story yet’ were thrown around the office a lot and this is exactly what they were, stories. I didn’t necessarily think this was wrong, but I certainly wasn’t ready to hurt people with my writing and the opinions of a newspaper. </p> <p>Next step - marketing! </p> <p>So, you may think this is an odd choice as I had already crushed my own dream of becoming a journalist due to the uncomforting reality that, <a href=”https://www.youtube.com/watch?v=uKx0xl858Dc.”>if you don’t read the news you’re uninformed. If you read the news you’re mis-informed</a>. So, why start a career where it’s a common preconception that marketing lies to manipulate potential customers? </p> <p>Well, I believe that marketers now have the ability to, not only market, but change the products they are selling. With analytics being more powerful than ever we have the power to let our company know what a product needs to do to be more satisfying for a customer. Eventually, if you’re doing the right research, putting your opinion across to the right people, your product shouldn’t need false advertising to sell.</p> <p>Third time lucky and at the young age of twenty-two I found my chosen career! And if you mix marketing with my ‘passion for fashion’ and anything e-commerce this is exactly what I will be blogging about. </p> <p>Wish me luck! </p>' 
        }
    };

	res.render('article', articles[req.params.name]);
});

app.use(function(req,res){  //express catch middleware if page doesn't exist
	res.status(404);  //respond with status code
	res.render('404'); //respond with 404 page
});

app.listen(app.get('port'), function(){ //start express server
	console.log( 'Express Server Started on http://localhost:3000');

});