import docSchema from "../Model/docSchema.js";

export const createDoc = async (req, res) => {
  try {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ message: "Title and link are required" });
    }

    const newDoc = new docSchema({
      title,
      link,
    });

    await newDoc.save();
    res
      .status(201)
      .json({ message: "Document created successfully", success: true });
  } catch (error) {
    console.error("Error creating document:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
