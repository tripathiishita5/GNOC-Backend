import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
  service: { type: String, required: true },
  environment: { type: String, required: true }, // DC/DR
  host: { type: String, required: true },
  alertType: { type: String, required: true },
  severity: { type: String, required: true },
  details: { type: String, required: true },
  jira: { type: String },
  resolver: { type: String },
  createdAt: { type: Date, default: Date.now },
});

AlertSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800 }); // 7 days = 7*24*60*60 seconds

export default mongoose.model("Alert", AlertSchema);
