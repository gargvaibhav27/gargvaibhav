const express = require("express");
const app = express();
const port = 3000;

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

app.get('/read', (req, res) => {
  response.json(students);
});

app.get('/read/:id', (req,res)=>{
  const id=parseInt(req.params.id);
  const std=students.find(s=>s.id==id);
  if(!std){
    return
    res.json({message:"data is not found"})
  }
  res.json({message:"data found", std})
})


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
