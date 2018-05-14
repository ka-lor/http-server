const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(3001, () => {
    console.log('listening on port 3001...')
});