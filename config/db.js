const mongoose = require("mongoose");
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.error(`Database couldn't connect: ${err.message}`)
        process.exit();
    }
})()