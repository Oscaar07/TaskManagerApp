import express from 'express';

const router = express.Router();

// Sample GET route
router.get("/", (req, res) => {
  res.json({ message: "List of users" });
});

// Sample POST route
router.post("/", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

// Export the router
export default router;

