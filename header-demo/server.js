const express = require("express");
const app = express();
app.get('/hello',(req,res)=>{
    console.log('recieved headers');
    console.log(req.headers);
    console.log(req.headers.authorization)
    console.log(req.body);
    res.send("hello from server");
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});