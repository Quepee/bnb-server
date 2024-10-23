import Property from "../models/Property.js";
import { createError } from "../error.js";

// Controller to get a property by ID
export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return next(createError(404, "Property not found"));
    }
    res.status(200).json(property);
  } catch (err) {
    next(err);  // Pass errors to centralized error handler
  }
};

// Controller to create a new property
export const createProperty = async (req, res, next) => {
  try {
    const { title, price, location } = req.body;

    // Validate required fields
    if (!title || !price || !location) {
      return next(createError(400, "Missing required fields"));
    }

    const newProperty = new Property(req.body);
    await newProperty.save();  // Save new property to database
    res.status(201).json(newProperty);  // Respond with created property
  } catch (err) {
    next(err);  // Pass errors to centralized error handler
  }
};
