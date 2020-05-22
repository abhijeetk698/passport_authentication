const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const app=express();

//EJS
app.use(expressLayouts);
app.set("view engine","ejs");

// Routes
app.use('/',require('./routes/main'));
app.use('/users',require('./routes/user'));


const PORT=2023;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})

