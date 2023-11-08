import express from "express"
const Router = express.Router()
import pg from "pg"
import "dotenv/config"





const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { require: true }
})


const client = await pool.connect()

Router.get("/", (req, res) => {
  res.send("Hadoken!").status(200)
})



Router.get("/characters", async (req, res) => {
  const localQuery = "SELECT name FROM streetfighter"

  const response = await client.query(localQuery)
  const result = response.rows

   
  res.send(result).status(200)
})


Router.get("/character/:name", async (req, res) => {
  
  const { name } = req.params

  const localQuery = `SELECT * FROM streetfighter WHERE name = '${name}'`
  const response = await client.query(localQuery)

  const result = response.rows

  res.send(result).status(200)
})





export default Router
