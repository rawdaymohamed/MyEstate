import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { v2 as cloudinary } from 'cloudinary';
const port = process.env.PORT || 4000;

dotenv.config()

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true, }))
app.set('trust proxy', 1);
app.use(cookieParser());
app.use("/api/test", (req, res) => {
    return res.send("It works");
})
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLIENT_API_SECRET // Click 'View API Keys' above to copy your API secret
});
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// router.post("api/:id/upload-image", verifyToken, uploadProfileImg);

app.use("/", (req, res) => {
    return res.send("It works");
})
app.use((_err, _req, res, _next) => {
    res.status(500).json({
        status: 'Failed',
        message: 'Something went wrong',
    });
});
app.listen(port, () => console.log("Server running on port  " + port))