import express from "express";
import { createProject } from "../Controller/createProject.js";
import { getAllProjects } from "../Controller/getAllProjects.js";
import { deleteProject } from "../Controller/deleteProject.js";
import { updateProject } from "../Controller/updateProject.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/", getAllProjects);
router.delete("/:projectId", deleteProject);
router.patch("/:id", updateProject);
export default router;
