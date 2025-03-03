import projectSchema from "../Models/projectSchema.js";

export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await projectSchema.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await projectSchema.findByIdAndDelete(projectId);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
