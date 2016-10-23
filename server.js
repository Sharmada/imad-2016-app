var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
  'article-one' : {
    title : 'Article-one | sharmada' ,
    heading : 'Article-one',
    date : 'oct 5,2016',
    content : `
                <p> Hello everyone. This is article one and by reading this text you can do nothing but just waste time :P </p>
                <p> So,please do not take much time to read this. </p>
                <p>As i am running in short of time this article will be a complete mess.Later, it will be build in such a way that it makes atleast a little bit of sense ;)</p>`
      },
  'article-two' : {
      title : 'Article-two | sharmada' ,
    heading : 'Article-two',
    date : 'oct 18,2016',
    content : `
                <p> Hello everyone. This is article two and by reading this text you can do nothing but just waste time :P </p>
    `},
  'article-three ' : {
      title : 'Article-three | sharmada' ,
    heading : 'Article-three',
    date : 'oct 10,2016',
    content : `
                <p> Hello everyone. This is article three that you are reading. </p>
                `}
};
     function createTemplate (data) {
        var title = data.title;
        var content = data.content;
        var date = data.date;
        var heading = data.heading;
    var htmlTemplate = `
        <html>
          <head>
            <title>
             ${title}
            </title>
            <meta name="viewport" content= "width=device-width , initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
                <div>
                 <a href="/">Go to home</a>
              </div>
               <hr/>
               <h3> ${heading} </h3>
              <div> ${date} </div>
              <div>${content}</div>
            </div>
        </body>
</html>
`;
return htmlTemplate;
}
    app.get('/:articleName', function (req, res) {
        var articleName=req.params.articleName;
      res.send(createTemplate(article[articleName]));
    });
    app.get('/ui/style.css', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'style.css'));
    });
    
    app.get('/ui/madi.png', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
    });
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
