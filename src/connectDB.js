const mongoose = require("mongoose");
mongoose.connect(process.env.mongoDBUrl).then(() => {
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log("Error while Connecting DB:", err);
})