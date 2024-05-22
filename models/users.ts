import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const usersSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true
      },
      fullName: {
        type: String,
        required: true
      },
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6: String,
      question7: String

}, {
    timestamps: true
}

);


const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

export default Users;