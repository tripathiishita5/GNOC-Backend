import projectSchema from "../Models/projectSchema.js";
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await projectSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
