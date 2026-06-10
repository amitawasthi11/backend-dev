const express = require('express');
const app = express();

app.get("/",(req,res)=>{
res.send("home");
})

app.get("/hello",(req,res)=>{   
res.send("hello");

})
app.get("/hello/mul",(req,res)=>{   
res.send("mul");

})
app.post("/",(req,res)=>{
res.send("user created");
})

app.put("/users",(req, res) => {
    res.send("User Updated");
});

app.delete("/users", (req, res) => {
    res.send("User Deleted");
});

// getting parameter
app.get("/users/:id",(req,res)=>{
    const id = req.params.id;
    res.send(`User with id ${id}`);
}); 

app.get("/products", (req, res) => {
    res.send(req.query.category);
});

app.listen(3000);