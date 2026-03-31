const mongoose= require("mongoose")


async function ConnectDB() {
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("database connected 😁😁");
        
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports= ConnectDB