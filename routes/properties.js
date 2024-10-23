import express from "express";
import { getProperty, createProperty } from "../controllers/property.js";

const router = express.Router();  // Initialize the router

// Define routes
router.get("/:id", getProperty);  // Get property by ID (e.g., GET /api/property/:id)
router.post("/", createProperty);  // Create a new property (e.g., POST /api/property)

export default router;  // Export the router to use in index.js
