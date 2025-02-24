import express from "express";
import { registerUser } from "../Controller/userRegister";
import { authenticateUser } from "../Middleware/authMiddleware";
import { isAdmin } from "../Middleware/isAdminMiddleware";
const router = express.Router();

router.post("/register", authenticateUser, isAdmin, registerUser);

export default router;
