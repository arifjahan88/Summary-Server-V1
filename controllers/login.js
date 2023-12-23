exports.getuser = async (req, res) => {
  try {
    const user = {
      username: "Admin",
      password: "Pass@123",
    };

    res.status(200).json({ status: "success", message: "Login Credential Send", data: user });
  } catch (error) {
    res
      .status(400)
      .json({ status: "Failed", message: "Login Credential Send Failed", data: error });
  }
};
