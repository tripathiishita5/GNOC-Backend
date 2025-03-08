import userSchema from "../Models/userSchema.js";

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    if (password) {
      return res.status(401).json({ message: "Password cannot be updated" });
    }

    const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User not found or update failed" });
    }

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default updateUser;
