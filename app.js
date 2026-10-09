const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./db/dbConfige');

// user route middleware file

const userRoutes = require('./Routes/userRoutes');

//JSON middleware to extract extract JSON data
app.use(express.json());

//user routes middleware
app.use('/api/user',userRoutes);

//question routes middleware

// answer route middleware


async function start(){
    try{
        const result=await dbConnection.execute("select 'text'")
        app.listen(port);
        console.log("database connection established successfully")
        console.log(`listening on port ${port}`)
    }catch(error){
        console.log(error.message)
    }
}

start();

