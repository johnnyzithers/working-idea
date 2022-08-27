const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('html/index.html', { root: __dirname+"/../" });
});

app.get('/about', (req, res) => {
    res.sendFile('html/about.html', { root: __dirname+"/../" });
});

app.get('/contact', (req, res) => {
    res.sendFile('html/contact.html', { root: __dirname+"/../" });
});

app.listen(port, () => console.log(`listening on port ${port}!`));