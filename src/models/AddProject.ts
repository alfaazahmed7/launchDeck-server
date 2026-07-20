import { Schema, model, Document } from "mongoose";

export interface IUserProject extends Document {
    name: string;
    userId: string,
    userEmail: string,
    userName: string,
    tagline: string;
    category: string;
    technologies: string[];
    difficulty: string;
    status: string;
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

const userProjectSchema = new Schema<IUserProject>({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    tagline: { type: String, required: true },
    category: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    difficulty: { type: String, required: true },
    status: { type: String, required: true },
    publishedDate: { type: String, required: true },
    thumbnailImage: { type: String, required: true },
    overview: { type: String, required: true },
    features: [{ type: String, required: true }],
    projectGallery: [{ type: String, required: true }],
    links: {
        liveDemo: { type: String, required: true },
        githubRepo: { type: String, required: true },
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

// Third argument = collection name

const UserProject = model<IUserProject>(
    "UserProject",
    userProjectSchema,
    "user-projects"
);

export default UserProject;