const express = require('express');
const router = express.Router();
// login route
router.get('/login',(req,res)=>{
    res.send("Welcome to the login page");
});

// register route
router.get('/register',(req,res)=>{
    res.send("Welcome to the register page");
});

module.exports=router;