import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes will go here later
// app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("LaunchDeck Server is Running 🚀");
});

export default app;