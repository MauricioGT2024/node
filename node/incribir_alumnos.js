const fs = require("node:fs/promises")
const PATH = "./db/alumnos.json"

fs.readFile(PATH, "utf-8").then(text => {
    console.log(text)
    const lista = JSON.parse(text)
    lista.push( ("juan": 2)
    fs.writeFile(PATH, JSON.stringify(lista))
})
