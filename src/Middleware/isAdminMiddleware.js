export const isAdmin = (req, res, next) => {
  if (req.user == "analyst") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
