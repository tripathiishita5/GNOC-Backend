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
  PreRequisites: {
    type: String,
    required: true,
  },
  implementationDeployment: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  goLive: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
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
