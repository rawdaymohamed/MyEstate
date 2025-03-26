import express from 'express';
import dotenv from "dotenv";
import postRoutes from "../routes/post.route.js";
import userRoutes from "../routes/user.route.js";
import authRoutes from "../routes/auth.route.js";
import cookieParser from 'cookie-parser';
import cors from "cors";

const port = process.env.PORT || 4000;
dotenv.config()

const app = express();
app.set('trust proxy', 1);
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    return res.send("It works");
})
app.use((_err, _req, res, _next) => {
    res.status(500).json({
        status: 'Failed',
        message: 'Something went wrong',
    });
});

app.listen(port, () => console.log(`server running at ${port}`));

export default app;