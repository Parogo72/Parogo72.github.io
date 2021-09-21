const express = require('express');
const app = express();

let values1 = {
    'm_s1': '',
    'm_d1': '',
    'm_D1': '',
    'v_s1': '',
    'v_d1': '',
    'v_D1': '',
    'd_s1': '',
    'd_d1': '',
    'd_D1': '',
    'p_m1': '',
    'p_v1': '',
    'c1': '',
    'molaridad1': '',
    'molalidad1': '',
    'm_mol_s1': '',
    'm_mol_d1': '',
    'm_mol_D1': '',
    'f_m1': '',
    'n_s1': '',
    'n_d1': '',
    'n_D1': '',
    'v_a1': false
}

const t = new Map();
t.set('es', require('./languages/es.json'));
t.set('en', require('./languages/en.json'));
t.set('ca', require('./languages/ca.json'));

app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.get('/', (req, res) => {
    const text = t.get('es');
    let data_obj = decode(req.query.data);
    res.render('index.ejs', {
        ...text,
        ...data_obj
    });
});

app.get('/:lang', (req, res, next) => {
    if(!/en|es|ca/.test(req.params.lang)) { 
        res.redirect('/');
        return;
    }
    const text = t.get(req.params.lang);
    let data_obj = decode(req.query.data);
    res.render('index.ejs', {
        ...text,
        ...data_obj
    });
});

app.use(express.static('static'));

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 PAGE NOT FOUND</h1><p>Click <a href="/">here</a> to go to the home page.</p>');
});

app.listen(process.env.PORT || 3000, () => console.log('Deployed'));

function decode(data) {
    if(!data) {
        return values1
    }
    
    const str = atob(data);
    const [keys, values] = str.split('$');
    let arr = [keys.split('&'), values.split('&')]
    let iterator = 0
    for(const i of arr[0]) {
        if(Array.isArray(i)) values1[i[iterator]] = arr[1][iterator];
        if(typeof i === 'string') values1[i] = arr[1][iterator]
        iterator++;
    }
    return values1
}