const express = require("express");
const { Producto } = require("./producto");
const app = express();

const cors = require("cors")
app.use(cors())

app.get('/productos', (req,res) => {
    const producto1 = new Producto(24, 1, "leche");

    const producto2 = new Producto(32, 2, "huevos");

    const producto3 = new Producto(12, 3, "atun");


    const misProductos = [];
    misProductos.push(producto1, producto2, producto3);
    
    res.json(misProductos)
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor listo en ", PORT)
})