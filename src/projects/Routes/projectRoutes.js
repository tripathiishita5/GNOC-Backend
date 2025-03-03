import express from "express";
import { createProject } from "../Controller/createProject.js";
import { getAllProjects } from "../Controller/getAllProjects.js";
import { deleteProject } from "../Controller/deleteProject.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/", getAllProjects);
router.delete("/:projectId", deleteProject);

export default router;
