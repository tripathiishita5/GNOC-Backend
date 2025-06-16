import express from "express";
import { authenticateUser } from "../../Middleware/authMiddleware.js";
import { getAllDocs } from "../Controller/getDocs.js";
import { isAdmin } from "../../Middleware/isAdminMiddleware.js";
import { createDoc } from "../Controller/createDoc.js";

const router = express.Router();

router.get("/", authenticateUser, getAllDocs);
router.post("/", authenticateUser, isAdmin, createDoc);

export default router;
