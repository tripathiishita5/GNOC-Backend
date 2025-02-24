import User from "../Models/userSchema.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { empId, name, email, password, role } = req.body;

    const existingUser = await User.findOne({ empId });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this empId already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      empId,
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { empId, name, email, role },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
