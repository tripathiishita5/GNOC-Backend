import DailyAlert from "../Models/moneteringSchema.js";

export const getTodayAlerts = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const dailyAlertDoc = await DailyAlert.findOne({ date: startOfDay });

    const alerts = dailyAlertDoc ? dailyAlertDoc.alerts : [];

    res.status(200).json({ success: true, alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
