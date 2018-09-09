module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res
      .status(402)
      .send({ Error: 'Need atleast 1 credit to create a survey!' });
  }
  next();
};
