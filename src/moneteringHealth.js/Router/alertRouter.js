import express from "express";
import { isAdmin } from "../../Middleware/isAdminMiddleware.js";
import { authenticateUser } from "../../Middleware/authMiddleware.js";
import { creatAlert } from "../controllers/createAlert.js";
import { getAlerts } from "../controllers/getAlerts.js";

const router = express.Router();

router.post("/", authenticateUser, isAdmin, creatAlert);
router.get("/", authenticateUser, getAlerts);

export default router;
