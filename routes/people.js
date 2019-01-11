const express = require('express');
const route = express.Router();

route.use((req,res,next)=>{
  console.log('middleware being used');
  next();
})

route.get('/example', (req,res)=>{
  res.send('/example being hit')
});
// route.get('/', (req,res)=>{
//   res.send('/people being hit')
// });

route.get('/', (req,res)=>{
  res.send('/being hit')
});

//so that app.js can access this route
module.exports = route;
