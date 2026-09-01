import express from "express"
import "dotenv/config"
import indexRoute from "./routes/indexRoute.js"
// TODO: import your dbconfig.js connectDB function and call it below, e.g.
// import connectDB from "./config/dbconfig.js"
// connectDB()

const PORT = process.env.PORT || 1200

const app = express()
app.use(express.json())
app.use("/", indexRoute)

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))
