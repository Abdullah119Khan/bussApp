const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json("Invalid/Expired Token");
      req.user = user;
      next();
    });
  } else {
    return res.status(403).json("Authorization is required");
  }
};

const verifyAdminToken = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("Only Admin can access this page");
    }
  });
};

module.exports = { verifyAdminToken, verifyToken };
