// controllers/dailyAlertController.js

import DailyAlert from "../Models/moneteringSchema.js";

export const getAllSavedAlerts = async (req, res) => {
  try {
    // Purane 7 din ke sab docs nikal lo (createdAt pe TTL hai waise bhi)
    const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const allDocs = await DailyAlert.find({ createdAt: { $gte: fromDate } });
    // Optional: total alerts ka count
    let totalAlerts = 0;
    allDocs.forEach((doc) => {
      totalAlerts += doc.alerts.length;
    });

    res.status(200).json({ success: true, docs: allDocs, totalAlerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
