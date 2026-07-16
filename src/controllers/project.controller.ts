import { Request, Response } from "express";
import Project from "../models/Project";

export const getProjects = async (
    _req: Request,
    res: Response
) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects",
        });
    }
};