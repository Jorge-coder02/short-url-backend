import { Schema, model } from "mongoose";
// Schema
const urlSchema = new Schema(
  {
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true },
  },
  { timestamps: true }
);
// Model
const Url = model("Url", urlSchema);
export default Url;
