import express from "express";
import { registerUser } from "../Controller/userRegister";
const router = express.Router();

router.post("/register", registerUser);

export default router;
