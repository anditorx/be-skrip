const getAllUsers = async (req, res) => {
  res.json({
    message: "Hello Get All Users",
  });
};

const createNewUser = async (req, res) => {
  res.json({
    message: "Hello create new Users",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
