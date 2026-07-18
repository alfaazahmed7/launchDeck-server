import { Router } from "express";
import { getProjects, getProjectById, getFeaturedProjects, getProjectsForCategory } from "../controllers/project.controller";

const router = Router();

router.get("/", getProjects);
router.get("/for=categories", getProjectsForCategory);
router.get("/featured", getFeaturedProjects);
router.get("/:id", getProjectById);

export default router;