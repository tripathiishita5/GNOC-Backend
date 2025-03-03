import userSchema from "../Models/userSchema.js";
export const getAllUser = async (req, res) => {
  try {
    const users = await userSchema.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
