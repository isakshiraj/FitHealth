const mongoose = require("mongoose");
require("dotenv").config(); // Make sure this is at the top

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Your schema and model below
const LogInSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    results: [
        {
            date: String,
            fluidintakestatus: String,
            mealsstatus: String,
            fruitssnackjunkfoodstatus: String
        }
    ]
});

const collection = mongoose.model("LogInConnection", LogInSchema);
module.exports = collection;
