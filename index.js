// Librerias de Node
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

// librerias para trabajar con imagenes
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from "path";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Conección BD
import { conecctionDB } from "./config/db.js"

// Importación de rutas

import usuarioRoute from "./routes/usuarioRoute.js";
import libroObra from "./routes/libroObraRoute.js";
import formularioLibroObra from "./routes/formularioLibroObra.js";
import equiposObraRoute from "./routes/equiposObraRoute.js";
import autorizacionLibroObra from "./routes/autorizacionLibroObra.js";

const app = express()
dotenv.config()
app.use(express.json())
conecctionDB()

//Servir las imagenes (URL)
app.use('/public/', express.static(`${__dirname}/storage/fotoUsuario`));


const whiteList = [process.env.FRONT_END_URL, 'http://192.168.1.4:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Error de cors"))
        }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions))


// Rutas
app.get('/', (req, res) => {
    console.log('EN SERVICIO...');
    res.send('EN SERVICIO...')
})

app.use('/api/usuario', usuarioRoute);
app.use('/api/libro-obra', libroObra);
app.use('/api/formulario-libro-obra', formularioLibroObra);
app.use('/api/equipos-obra', equiposObraRoute);
app.use('/api/autorizacion-libro-obra', autorizacionLibroObra);

// Obtencion de imagenes
// app.get('/api/images/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const imagePath = path.join(__dirname, '/storage/fotoUsuario/', filename);

//     // Configura el encabezado de la respuesta para indicar el tipo de contenido
//     res.setHeader('Content-Type', 'image/jpeg');

//     // Lee el archivo y envía el contenido como respuesta
//     fs.createReadStream(imagePath).pipe(res);
// });

// const PORT = process.env.PORT || 4000
const PORT = 4000;

// Lanzamiento del servidor
app.listen(PORT, () => {
    console.log('CONECTANDO...');
})