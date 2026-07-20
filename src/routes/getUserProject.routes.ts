import { Router } from "express";
import { getUserProjects } from "../controllers/addProject.controller";

const router = Router();

router.get('/', getUserProjects);

export default router; 