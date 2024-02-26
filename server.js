const app = require("./src/app")
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const { checkAge } = require("./middleware/middleware");
dotEnv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(checkAge);
require("./src/connectDB")

app.use("/user", userRoute)
app.use("/blog", blogRoute)
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`server started at port ${PORT}`);
})