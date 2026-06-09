const express = require('express');
const app = express();

fetch('http://localhost:3000/hello', {
headers: {
name:"amit",
role: "backend learner",
authorization: "Bearer abc123"
},
body: JSON.stringify({
    email: "amit@gmail.com",
    password: "123455"
})
});


 