import { Router } from "express";
import { addProject } from "../controllers/addProject.controller";

const router = Router();

router.post('/', addProject);

export default router;