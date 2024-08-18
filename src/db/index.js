const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connectioninstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected !! DB HOST :${connectioninstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error", error)
        process.exit(1)

    }
}
module.exports = connectDB