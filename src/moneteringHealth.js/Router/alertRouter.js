import express from "express";
import { isAdmin } from "../../Middleware/isAdminMiddleware.js";
import { authenticateUser } from "../../Middleware/authMiddleware.js";
import { saveDailyAlerts } from "../controllers/saveAlert.js";
import { getTodayAlerts } from "../controllers/getAlerts.js";
import { getAllSavedAlerts } from "../controllers/getAllAlerts.js";

const router = express.Router();

router.post("/", authenticateUser, isAdmin, saveDailyAlerts);
router.get("/", authenticateUser, getTodayAlerts);
router.get("/all", getAllSavedAlerts);

export default router;
