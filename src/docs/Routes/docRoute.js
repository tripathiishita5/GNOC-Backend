import express from "express";
import { authenticateUser } from "../../Middleware/authMiddleware.js";
import { getAllDocs } from "../Controller/getDocs.js";
import { isAdmin } from "../../Middleware/isAdminMiddleware.js";
import { createDoc } from "../Controller/createDoc.js";
import { deleteDocs } from "../Controller/deleteDocs.js";
import { updateDocs } from "../Controller/updateDocs.js";

const router = express.Router();

router.get("/", authenticateUser, getAllDocs);
router.post("/", authenticateUser, isAdmin, createDoc);
router.delete("/:id", authenticateUser, isAdmin, deleteDocs);
router.patch("/:id", authenticateUser, isAdmin, updateDocs);

export default router;
