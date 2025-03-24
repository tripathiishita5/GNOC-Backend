import projectSchema from "../Models/projectSchema.js";
import userSchema from "../../users/Models/userSchema.js";

export const getAnalytics = async (req, res) => {
  try {
    // Fetch all projects & users
    const projects = await projectSchema.find();
    const users = await userSchema.find();

    // Count projects by status
    const ongoingProjects = await projectSchema.countDocuments({
      status: "ongoing",
    });
    const onHoldProjects = await projectSchema.countDocuments({
      status: "onHold",
    });
    const completedProjects = await projectSchema.countDocuments({
      status: "completed",
    });

    // Count users by role
    const managers = await userSchema.countDocuments({ role: "manager" });
    const engineers = await userSchema.countDocuments({ role: "engineer" });
    const analysts = await userSchema.countDocuments({ role: "analyst" });

    // Get recent 5 projects
    const recentProjects = await projectSchema
      .find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Get recent 5 users
    const recentUsers = await userSchema
      .find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Build response object
    const analytics = {
      totalProjects: projects.length,
      totalUsers: users.length,
      projectStatus: {
        ongoing: ongoingProjects,
        onHold: onHoldProjects,
        completed: completedProjects,
      },
      userRoles: {
        managers,
        engineers,
        analysts,
      },
      recentProjects,
      recentUsers,
    };

    res.status(200).json(analytics);
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).send(error.message);
  }
};
