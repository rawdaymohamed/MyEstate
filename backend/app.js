import express from "express";
const app = express();
app.use("/api/test", (req, res) => {
    return res.send("It works");
})
app.listen(4000, () => console.log("Server running on port 4000"))