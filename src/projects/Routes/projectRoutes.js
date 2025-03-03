import express from "express";
import { createProject } from "../Controller/createProject.js";
import { getAllProjects } from "../Controller/getAllProjects.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/", getAllProjects);

export default router;
