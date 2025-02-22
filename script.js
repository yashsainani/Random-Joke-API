const jokes = require('./jokes');
const express = require('express');

const app = express();

app.get('/random-joke', (req, res) => {
    console.log(req);
    const idx = Math.floor(Math.random() * (47 + 1));
    res
    .status(200)
    .json({
        state: 'success',
        response: {...jokes[idx]}
    });
});

app.use('*', (req, res) => {
    res
    .status(404)
    .json({
        state: 'failed',
        reason: 'URL DOES NOT EXIST'
    });
});

app.listen(5000, () => console.log('SERVER IS UP AND RUNNING ON PORT 5000'));