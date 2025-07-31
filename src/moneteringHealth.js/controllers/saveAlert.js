import DailyAlertSchema from "../Models/moneteringSchema.js";
export const saveDailyAlerts = async (req, res) => {
  try {
    const { alerts } = req.body;
    if (!Array.isArray(alerts) || alerts.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No alerts to save" });
    }
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    // Overwrite/replace alerts for today's doc (not append!)
    const dailyAlertDoc = await DailyAlertSchema.findOneAndUpdate(
      { date: startOfDay },
      { alerts: alerts, createdAt: new Date() }, // update createdAt to update TTL!
      { upsert: true, new: true }
    );
    res.status(201).json({ success: true, dailyAlert: dailyAlertDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
