module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ Message: 'You must be logged in' });
  }
  next();
};
