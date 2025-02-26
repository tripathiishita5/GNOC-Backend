import userSchema from "../Models/userSchema.js";
export const selfData = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.password = "********";
    res.status(200).json({ message: "User data", data: user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
