const logRequest = (req, res, next) => {
  console.log("Log Request to PATH :=>", req?.path);
  next();
};

module.exports = logRequest;
