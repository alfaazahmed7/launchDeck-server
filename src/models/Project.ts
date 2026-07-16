
import { Schema, model, Document } from "mongoose";

export interface IProject extends Document {
    id: string;
    name: string;
    tagline: string;
    category: string;
    technologies: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    status: "Idea" | "Development" | "Production";
    publishedDate: string;
    thumbnailImage: string;
    overview: string;
    features: string[];
    projectGallery: string[];
    links: {
        liveDemo: string;
        githubRepo: string;
    };
    featured: boolean;
}

const projectSchema = new Schema<IProject>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true,
    },
    status: {
        type: String,
        enum: ["Idea", "Development", "Production"],
        required: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    thumbnailImage: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    projectGallery: {
        type: [String],
        required: true,
    },
    links: {
        liveDemo: {
            type: String,
            required: true,
        },
        githubRepo: {
            type: String,
            required: true,
        },
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

const Project = model<IProject>("Project", projectSchema);

export default Project;