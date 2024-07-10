let users = [];

export const signUpUser = (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    users.push({ email, password, fullName });
    return res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsers = (_, res) => {
  try {
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
