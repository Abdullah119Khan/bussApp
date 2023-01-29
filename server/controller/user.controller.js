const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword)
      return res.status(403).json({ message: "Password Incorrect" });
    const hashPassword = bcrypt.hashSync(password, 12);
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const matchPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!matchPassword)
      return res.status(404).json({ message: "Incorrect Password" });

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ token, others });
  } catch (err) {
    return res.status(500).json(err);
  }
};
