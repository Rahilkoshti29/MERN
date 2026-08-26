import express from "express"
import "dotenv/config"

import userRoute from "./routes/userRoutes.js"
import connectDB from "./config/dbconnect.js"

const PORT = process.env.PORT || 1400
const app = express()

app.use(express.json())
connectDB(process.env.MONGO_URI)

app.use("/api",userRoute)


app.listen(PORT, ()=>console.log(`server started at http://localhost:${PORT}`))