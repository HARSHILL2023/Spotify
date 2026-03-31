require('dotenv').config();
const app  = require("./src/app")
const ConnectDB= require("./src/DB/db")



ConnectDB();

app.listen(3000,()=>{

    console.log("server started on port 3000")
})