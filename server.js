const express = require("express");

const app = express();

const statusRoutes = require("./routes/statusRoutes");

app.use(express.static("public"));

app.use("/api/status", statusRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});