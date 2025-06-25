import mongoose from "mongoose";
const docSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doc", docSchema);
