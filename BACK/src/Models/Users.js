import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  user: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;