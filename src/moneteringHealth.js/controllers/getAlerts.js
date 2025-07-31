import alertSchema from "../Models/moneteringSchema.js";

export const getAlerts = async (req, res) => {
  try {
    const alerts = await alertSchema.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
