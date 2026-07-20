import { Request, Response } from "express";
import UserProject from "../models/AddProject";

export const addProject = async (
    req: Request,
    res: Response
) => {
    try {
        const project = await UserProject.create({
            ...req.body,
            featured: false,
        });

        res.status(201).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create project",
        });
    }
};

export const getUserProjects = async (
    req: Request,
    res: Response
) => {
    try {
        const userEmail = req.query.userEmail as string;
        if (!userEmail) {
            res.status(400).json({
                message: "userEmail is required.",
            });
            return;
        }

        const project = await UserProject.find({ userEmail });
        if (project.length === 0) {
            res.status(404).json({
                message: "Project not found.",
            });

            return;
        }
        res.status(200).json(project);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch project.",
        });
    }
}