const app = require("./src/app")
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
dotEnv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./src/connectDB")

app.use("/user", userRoute)
app.use("/blog", blogRoute)
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`server started at port ${PORT}`);
})