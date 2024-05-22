
import mongoose from "mongoose";

const   connectMongoDb = async () => {
   try {
      await  mongoose.connect(process.env.MONGODB_URL!);
      console.log({test : process.env.MONGODB_URL});
      
       console.log("connected to mongo");
   } catch (error) {
       console.log(error);
   }
}


export default connectMongoDb