const express = require('express');
const app = express();

const t = new Map();
t.set('es', require('./languages/es.json'));
t.set('en', require('./languages/en.json'));
t.set('ca', require('./languages/ca.json'));

app.set('view engine', 'ejs');

app.disable('x-powered-by');

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

app.use(express.static('static'));

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 PAGE NOT FOUND</h1><p>Click <a href="/">here</a> to go to the home page.</p>');
});

app.listen(process.env.PORT || 3000, () => console.log('Deployed'));
