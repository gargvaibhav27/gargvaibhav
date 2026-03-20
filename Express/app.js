const express = require("express");
const app = express();
const port = 8080;

//Data Base(json) json is used to store data and transfer the data. object store karne ke liye use hota hai.
const students = [
  {
    id: 1,
    name: "hani",
  },
  {
    id: 2,
    name: "hani1",
  },
];

//API for read all data(R)

app.get("/read", (req, res) => {
  response.json(students);
});

app.listen(port, () => {
  console.log(`server is run at:http://localhost:${port}`);
});
// app.get('/', (req, res) => {
//     res.send('this is my first server');
// })

// app.get('/about', (req, res) => {
//     res.send('this is about page');
// })
// node app.js for running on terminal
// npm init -y for backend
// npm create vite@latest for frontend
// npm i express for express
// CRUD
// C-Create-Get
// R-Read-Post
// U-Update-Put
// D-Delete-Delete
