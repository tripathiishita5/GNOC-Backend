import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  jiraTicket: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  MonitoringProjects: {
    type: String,
    required: true,
  },
  enviornment: {
    type: String,
    required: true,
  },
  Discussion: {
    type: String,
    required: true,
  },
  DiscussionColor: {
    type: String,
    enum: ["#FF0000", "#FFFF00", "#00FF00", "#808080"],
    required: true,
  },
  PreRequisites: {
    type: String,
    required: true,
  },
  PreRequisitesColor: {
    type: String,
    enum: ["#FF0000", "#FFFF00", "#00FF00", "#808080"],
    required: true,
  },
  implementationDeployment: {
    type: String,
    required: true,
  },
  implementationDeploymentColor: {
    type: String,
    enum: ["#FF0000", "#FFFF00", "#00FF00", "#808080"],
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  reviewColor: {
    type: String,
    enum: ["#FF0000", "#FFFF00", "#00FF00", "#808080"],
    required: true,
  },
  goLive: {
    type: String,
    required: true,
  },
  goLiveColor: {
    type: String,
    enum: ["#FF0000", "#FFFF00", "#00FF00", "#808080"],
    required: true,
  },
  completionDate: {
    type: Date,
    default: "not defined",
  },
  status: {
    type: String,
    required: true,
  },
  remarks: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Project", projectSchema);
