var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one':{
        title : ' Article one | Ajay',
        heading : 'Article one',
        date : 'Dec 3',
        content : `<p>
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        
                    </p>
                    <p>
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        
                    </p>
                    <p>
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        
                    </p>
                    <p>
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.This the first article I'm writing.
                        
                    </p>`
    },
    'article-two': {
        title : ' Article two | Ajay',
        heading : 'Article two',
        date : 'Dec 4',
        content : `<p>
                        this is my second article
                    </p>
                    `
                    
    },
    'article-three': {
        title : ' Article three | Ajay',
        heading : 'Article three',
        date : 'Dec 5',
        content : `<p>
                        this is my third article
                    </p>
                    `
    }
    
    
}


function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content =data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h2>${heading}</h2>
                <div>
                    ${date} 
                </div>
                <div>
                    ${content}
                </div>
            </div>
            
        </body>
    </html>
    `;
    return htmlTemplate;
}

var counter = 0;
app.get('/counter', function( req ,res ) {
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
