import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String },
  role: { type: String, enum: ["manager", "admin", "trainer"], required: true },
  supervised_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  }, // References another user
  image: { type: String, default: null }, // Profile picture URL
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
