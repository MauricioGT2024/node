const process = require("process")
const express = require("express")
const { validarAlumno } from "./schemas/alumno"
const fs = require("node:fs/promises")
const port = process.env.port || 4444

const app = express()
app.disable("x-powered-by")

app.use(express.json())

app.get("*", (req, res) => {
    res.setHeader("Content-Type", "text/html;charset-utf-8")
    res.end("hola")
})  

app.post ("/inscripcion", (req, res) =>{
const result = validarAlumno(req.body)
    if(result.error){
        return res.status(400).json({ "error": result.error.message })
    }

    console.log(req.body)
    // res.json(JSON.stringify({"1":1}))
    res.status(200)

    res.end()
})


app.listen(port, () => {
    console.log(`escuchando en el puerto: http://localhost://${port}`)
})