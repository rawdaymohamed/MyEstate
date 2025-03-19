import express from 'express';

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.use("/api/test", (req, res) => {
    return res.send("It works");
})
app.use((_err, _req, res, _next) => {
    res.status(500).json({
        status: 'Failed',
        message: 'Something went wrong',
    });
});


app.listen(port, () => console.log(`server running at http://localhost:${port}`));

export default app;