import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    author: String,
    deletedAt: { type: Date },
    isComplete: Boolean,
    todo: String
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
