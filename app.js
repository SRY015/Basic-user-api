const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const app = express();

require('./config/db'); // This line is for connecting the mongodb atlas database.


app.use(cors()); // It will support the request from other ports also.
app.use(express.urlencoded({extended : true})); // We have used this to accept form data.
app.use(express.json()); // It will support to accept json data.

// We have to use  one middleWare to use the userRouter ->
app.use("/api/users",userRouter);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

// Route not found error -->
app.use((req,res,next)=>{
    res.status(404).json({
        message : "route not found"
    })
})

// Handling server error -->
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "Something broke"
    })
})


module.exports = app;