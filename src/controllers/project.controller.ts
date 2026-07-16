import { Request, Response } from "express";
import Project from "../models/Project";

export const getProjects = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const {
            search,
            category,
            difficulty,
            status,
            tech,
            sort,
            page,
            limit,
        } = req.query;

        // Query object
        const query: Record<string, unknown> = {};

        // Search 
        if (search) {
            query.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    category: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    technologies: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        // Filters

        if (category && category !== "all") {
            query.category = category;
        }

        if (difficulty && difficulty !== "all") {
            query.difficulty = difficulty;
        }

        if (status && status !== "all") {
            query.status = status;
        }

        if (tech && tech !== "all") {
            query.technologies = tech;
        }

        // Sorting

        let sortOption = {};

        switch (sort) {
            case "oldest":
                sortOption = {
                    publishedDate: 1,
                };
                break;

            case "az":
                sortOption = {
                    name: 1,
                };
                break;

            case "za":
                sortOption = {
                    name: -1,
                };
                break;

            default:
                sortOption = {
                    publishedDate: -1,
                };
        }

        // Pagination 

        const currentPage = Number(page) || 1;
        const pageLimit = Number(limit) || 8;
        const skip = (currentPage - 1) * pageLimit;

        // Database

        const totalProjects = await Project.countDocuments(query);

        const projects = await Project.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(pageLimit);

        // Response

        res.status(200).json(projects);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch projects.",
        });
    }
};

export const getProjectById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;

        const project = await Project.findOne({ _id: new Object(id) });

        if (!project) {
            res.status(404).json({
                message: "Project not found.",
            });

            return;
        }

        res.status(200).json(project);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch project.",
        });
    }
};