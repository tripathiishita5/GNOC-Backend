import express from "express";
import { registerUser } from "../Controller/userRegister";
import { authenticateUser } from "../Middleware/authMiddleware";
import { isAdmin } from "../Middleware/isAdminMiddleware";
import { loginUser } from "../Controller/userLogin";
const router = express.Router();

router.post("/register", authenticateUser, isAdmin, registerUser);
router.post("/login", loginUser);

export default router;
