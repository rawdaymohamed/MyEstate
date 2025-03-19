import express from 'express';

const port = process.env.PORT || 4000;

import postRoutes from "../routes/post.route.js";
import userRoutes from "../routes/user.route.js";
import authRoutes from "../routes/auth.route.js";

const app = express();
app.use(express.json());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((_err, _req, res, _next) => {
    res.status(500).json({
        status: 'Failed',
        message: 'Something went wrong',
    });
});


app.listen(port, () => console.log(`server running at ${port}`));

export default app;