import docSchema from "../Model/docSchema.js";

export const updateDocs = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link, tags } = req.body;

    if (!id || !title || !link || !tags) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedDoc = await docSchema.findByIdAndUpdate(
      id,
      { title, link, tags },
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({
      message: "Document updated successfully",
    });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
