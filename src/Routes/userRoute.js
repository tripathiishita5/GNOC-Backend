import express from "express";
import { registerUser } from "../Controller/userRegister.js";
import { authenticateUser } from "../Middleware/authMiddleware.js";
import { isAdmin } from "../Middleware/isAdminMiddleware.js";
import { loginUser } from "../Controller/userLogin.js";
const router = express.Router();

router.post("/register", authenticateUser, isAdmin, registerUser);
router.post("/login", loginUser);

export default router;
