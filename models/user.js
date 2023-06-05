import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email Already Exist"],
    required: [true, "Email Already required"],
  },
  username: {
    type: String,
    unique: [true, "User Name Already Exist"],
    required: [true, "User Name Already required"],
    // match()
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
