import express from "express";
import { getUser, createUser } from "../controllers/user.js";

const router = express.Router();  // Initialize the router

router.get("/:id", getUser);  // Get user by ID (e.g., GET /api/user/:id)
router.post("/", createUser);  // Create a new user (e.g., POST /api/user)

export default router;
