import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route imports
import projectRoutes from "./routes/project.routes";
import addProjectRoutes from "./routes/addProject.routes";
import getUserProjectsRoutes from "./routes/getUserProject.routes";
import deleteUserProjectRoutes from "./routes/deleteUserProject.routes";

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/add-project", addProjectRoutes);
app.use("/api/get-user-projects", getUserProjectsRoutes);
app.use("/api/delete-user-project", deleteUserProjectRoutes);

app.get("/", (req, res) => {
    res.send("LaunchDeck Server is Running 🚀");
});

export default app;