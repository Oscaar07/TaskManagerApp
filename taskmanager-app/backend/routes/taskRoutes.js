import express from "express";

const router = express.Router();

// Sample GET route
router.get("/", (req, res) => {
  res.json({ message: "List of tasks" });
});

// Sample POST route
router.post("/", (req, res) => {
  const newTask = req.body;
  res.status(201).json({ message: "Task created", task: newTask });
});

// Export the router
export default router;


