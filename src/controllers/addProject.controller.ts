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