import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/constant.js";
import BlacklistedToken from "../Models/blackListedTokenSchema.js";
export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  const blacklisted = await BlacklistedToken.findOne({ token });
  if (blacklisted) {
    return res.status(401).json({ message: "Unauthorized: Token is invalid" });
  }
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized! Token is required." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
