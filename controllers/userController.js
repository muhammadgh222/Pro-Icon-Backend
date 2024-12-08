import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { uid, name, email, phone_number, role, supervised_by, image } =
    req.body;

  if (!uid || !name || !email || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      {
        name,
        email,
        phone_number: phone_number || null,
        role,
        supervised_by: supervised_by || null,
        image: image || null,
        updated_at: new Date(),
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: "User saved successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save user" });
  }
};

export const getUserById = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
