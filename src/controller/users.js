const getAllUsers = async (req, res) => {
  const dataDummy = [
    {
      id: 1,
      name: "Rizky",
      email: "rizki@mail.com",
      password: "Password1!",
    },
    {
      id: 2,
      name: "Doni",
      email: "doni@mail.com",
      password: "Password1!",
    },
  ];

  res.json({
    message: "Get All Users Success",
    data: dataDummy,
  });
};

const createNewUser = async (req, res) => {
  res.json({
    message: "Create User Success",
    data: req.body,
  });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Update User Success",
    data: req.body,
  });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete User with ID : " + id + " Success",
    data: req.body,
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
