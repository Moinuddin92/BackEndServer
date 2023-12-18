const app = require("./src/app")
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();
require("./src/connectDB")

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`server started at port ${PORT}`);
})