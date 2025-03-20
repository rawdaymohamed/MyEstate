import express from "express";
import "dotenv/config";

import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/test", (req, res) => {
    return res.send("It works");
})
app.listen(4000, () => console.log("Server running on port 4000"))