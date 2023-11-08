import Router from "./Routes.js"
import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 9000


app.use(cors())
app.use(Router)








app.listen(PORT, _ => console.log("Running"))



