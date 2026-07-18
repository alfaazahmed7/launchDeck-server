import { Router } from "express";
import { getProjects, getProjectById, getFeaturedProjects } from "../controllers/project.controller";

const router = Router();

router.get("/", getProjects);
router.get("/featured", getFeaturedProjects);
router.get("/:id", getProjectById);

export default router;