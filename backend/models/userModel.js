import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema
(
  {
    user: { type: String, required: true },
    fname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)


export const User = mongoose.model("Users", userSchema);
