import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

import projectRoutes from "./routes/project.routes";

app.use("/api/get-projects", projectRoutes);

app.get("/", (req, res) => {
    res.send("LaunchDeck Server is Running 🚀");
});

export default app;