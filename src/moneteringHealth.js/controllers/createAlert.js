import alertSchema from "../Models/moneteringSchema.js";

export const createAlert = async (req, res) => {
  try {
    const {
      service,
      environment,
      host,
      alertType,
      severity,
      details,
      jira,
      resolver,
    } = req.body;

    // Basic validation
    if (
      !service ||
      !environment ||
      !host ||
      !alertType ||
      !severity ||
      !details
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    const alert = new alertSchema({
      service,
      environment,
      host,
      alertType,
      severity,
      details,
      jira,
      resolver,
    });

    await alert.save();

    res.status(201).json({ success: true, alert });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
