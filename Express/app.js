const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('this is my first server');
})

app.get('/about', (req, res) => {
    res.send('this is about page');
})
app.listen(port, () => {  
    console.log(`server is run at:http://localhost:${port}`);
})
// node app.js for running on terminal
// npm init -y for backend
// npm create vite@latest for frontend
// npm i express for express