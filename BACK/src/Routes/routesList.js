import { Router } from "express";
import { getList } from "../Controllers/index.js";
import UserModel from "../Models/Users.js";

// Resto de tu código

// Resto de tu código

const router = Router();



router.get("/users", async (req, res) => {

  const users = await UserModel.find()
  res.json(users)
})

router.post("/signup", async (req, res) => {
  try {
    const { user, email, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Sino, crear un nuevo usuario
    const newUser = new UserModel({
      user,
      email,
      password,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Si hay un usuario con ese mail. Verificar la contraseña
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
  
});










/*
router.get("/signup", (req, res, next) => {
  res.json({ msg: "signup" });
});

router.post("/signup", (req, res, next) => {
  res.json({ msg: "signup" });
});

router.get("/login", (req, res, next) => {
  res.json({ msg: "login" });
});


router.get("/", getList);
*/
export default router;
