import mongoose from "mongoose";

const AlertSubSchema = new mongoose.Schema({
  service: { type: String, required: true },
  environment: { type: String, required: true },
  host: { type: String, required: true },
  alertType: { type: String, required: true },
  severity: { type: String, required: true },
  details: { type: String, required: true },
  jira: { type: String },
  resolver: { type: String },
});

const DailyAlertSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true }, // date of alerts (day precision)
  alerts: { type: [AlertSubSchema], default: [] }, // array of alerts for that day
  createdAt: { type: Date, default: Date.now },
});

// TTL index on createdAt to expire document after 7 days
DailyAlertSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 7 * 24 * 60 * 60 }
);

export default mongoose.model("DailyAlert", DailyAlertSchema);
