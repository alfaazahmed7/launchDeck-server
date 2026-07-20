import { Router } from "express";
import { deleteUserProject } from "../controllers/addProject.controller";

const router = Router();

router.delete('/', deleteUserProject);

export default router;