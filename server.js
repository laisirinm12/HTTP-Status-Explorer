const express = require("express");
const cors= require("cors");
const app = express();

const statusRoutes = require("./routes/statusRoutes");
app.use(cors());
app.use(express.static("public"));

app.use("/api/status", statusRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});