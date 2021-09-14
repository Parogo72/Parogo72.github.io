const express = require('express');
const app = express();
const favicon = require('serve-favicon');


const t = new Map();
t.set('es', require('./languages/es.json'));
t.set('en', require('./languages/en.json'));
t.set('ca', require('./languages/ca.json'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    const text = t.get('es');
    res.render('index.ejs', text);
});

app.get('/:lang', (req, res, next) => {
    if(!/en|es|ca/.test(req.params.lang)) { 
        res.redirect('/');
        return;
    }
    const text = t.get(req.params.lang);
    res.render('index.ejs', text);
});

app.get('/', (req, res) => {
    res.status(404).send('404 NOT FOUND :\'v');
});
app.use(favicon(__dirname + '/static/images/favicon-light.ico'));
app.use(express.static('static'))
app.listen(process.env.PORT || 3000, () => console.log('Deployed'));