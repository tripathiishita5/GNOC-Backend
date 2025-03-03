import BlacklistedToken from "../Models/blackListedTokenSchema.js";
export const logoutUser = async (req, res) => {
  try {
    const { token } = req.cookies;
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 1);

    await BlacklistedToken.create({ token, expiresAt: expiryTime });
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
