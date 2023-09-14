import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://anubhav711:mongoDB@cluster0.5rulijv.mongodb.net/proshop?retryWrites=true&w=majority"
    )
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error:${error.message}`)
    process.exit(1)
  }
}

export default connectDB
