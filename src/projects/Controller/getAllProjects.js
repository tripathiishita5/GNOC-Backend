import projectSchema from "../Models/projectSchema.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectSchema.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
