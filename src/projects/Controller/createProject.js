import projectSchema from "../Models/projectSchema.js";

export const createProject = async (req, res) => {
  try {
    const {
      jiraTicket,
      startDate,
      MonitoringProjects,
      enviornment,
      Discussion,
      DiscussionColor,
      PreRequisites,
      PreRequisitesColor,
      implementationDeployment,
      implementationDeploymentColor,
      review,
      reviewColor,
      goLive,
      goLiveColor,
      completionDate,
      status,
      remarks,
    } = req.body;
    if (
      !jiraTicket ||
      !startDate ||
      !MonitoringProjects ||
      !enviornment ||
      !Discussion ||
      !PreRequisites ||
      !implementationDeployment ||
      !review ||
      !goLive ||
      !status ||
      !remarks ||
      !DiscussionColor ||
      !PreRequisitesColor ||
      !implementationDeploymentColor ||
      !reviewColor ||
      !goLiveColor
    ) {
      return res.status(400).json({ message: "Please enter all fields." });
    }
    const existingProject = await projectSchema.findOne({ jiraTicket });
    if (existingProject) {
      return res
        .status(400)
        .json({ message: "Project with this Jira Ticket already exists." });
    }
    const newProject = new projectSchema({
      jiraTicket,
      startDate,
      MonitoringProjects,
      enviornment,
      Discussion,
      PreRequisites,
      implementationDeployment,
      review,
      goLiveColor,
      DiscussionColor,
      PreRequisitesColor,
      reviewColor,
      implementationDeploymentColor,
      goLive,
      completionDate,
      status,
      remarks,
    });
    await newProject.save();
    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
