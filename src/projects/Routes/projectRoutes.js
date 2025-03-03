import express from "express";
import { createProject } from "../Controller/createProject.js";

const router = express.Router();

router.post("/create", createProject);

export default router;
