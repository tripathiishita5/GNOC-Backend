import docSchema from "../Model/docSchema.js";

export const getAllDocs = async (req, res) => {
  try {
    const docs = await docSchema.find().sort({ createdAt: -1 });

    if (docs.length === 0) {
      return res
        .status(404)
        .json({ message: "No documents found", success: false });
    }

    res
      .status(200)
      .json({
        message: "Documents retrieved successfully",
        success: true,
        data: docs,
      });
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
