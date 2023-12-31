import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
import productRoutes from "./routes/productRoutes.js"
const port = process.env.PORT || 5000

connectDB() //connect to mongoDB

const app = express()

app.get("/", (req, res) => {
  res.send("Api is runing")
})

app.use("/api/products", productRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
