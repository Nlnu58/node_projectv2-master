//This imports express
const express = require('express');
//use dotenv to expose our environment variables
require ('dotenv').config();
//we create a new instances of express as the app object
const app = express();
//port assignment
const PORT = process.env.PORT;

app.get('/home',(req, res) =>{
  res.send('Hello, World!');
});

//router handler that will define url/url that does something
app.post('/user/:id',(req,res)=>{
  const user_id = req.params.id;
  res.send(`my id: ${user_id}`);
});

//router handler
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`This is the search term entered: ${query}`);
});

//start our server 
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});