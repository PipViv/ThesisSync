const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/user.routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(userRouter);

//Puerto
app.listen(4000);

//Express Middleware de Error
app.use((err, req,res, next)=>{
    return res.json({
        message: 'Error!!'
    })
});

console.log("serve on port 4000")

