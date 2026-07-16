import { Router } from "express";
import { getProjects, getProjectById } from "../controllers/project.controller";

const router = Router();

// Endpoint for collection matching (handles searches, sorts, filters automatically)
router.get("/", getProjects);

// Endpoint targeting single unique dynamic layout assets
router.get("/:id", getProjectById);

export default router;