const express = require("express");
const cors= require("cors");
const app = express();

const statusRoutes = require("./routes/statusRoutes");
app.use(cors());
app.use(express.static("public"));

app.use("/api/status", statusRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});