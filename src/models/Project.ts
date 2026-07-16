import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    id: String,
    name: String,
    tagline: String,
    category: String,
    technologies: [String],
    difficulty: String,
    status: String,
    publishedDate: String,
    thumbnailImage: String,
    overview: String,
    features: [String],
    projectGallery: [String],
    links: {
        liveDemo: String,
        githubRepo: String,
    },
    featured: Boolean,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;