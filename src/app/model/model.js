import mongoose from "mongoose";

const User = mongoose.Schema({
  username: { 
    type: String, 
    require: true
}, 
email: { 
    type: String, 
    require: true
},
password: { 
  type: String, 
  require: true
}},
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);