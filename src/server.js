import express from 'express'
let app = express()
import http from 'http'
let server = http.createServer(app)
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(morgan('dev'))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'jade')

server.listen(3000 | process.env.PORT, ()=>{
  console.log("Listening on port", server.address().port);
})
