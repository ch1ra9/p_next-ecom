import { Mongoose } from "mongoose";

function initDB(){

    // if(Mongoose.connection[0].readyState){
    //     console.log("already connected");
    //     return
    // }
    Mongoose.connect(process.env.MONGO_URL,{
        userNewUrlPArser:true
    })

    Mongoose.connection.on('connected',()=>{
        console.log("connected to mongo");
    })
    Mongoose.connection.on('err',(err)=>{
        console.log("err",err);
    })
}

export default initDB