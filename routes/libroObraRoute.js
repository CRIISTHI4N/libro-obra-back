import { Router } from "express";

const router = Router();

import {
    obtenerLibroObra,
    ingresarLibroObra,
    editarLibroObra,
    eliminarLibroObra
} from "../controllers/libroObra.js";

router.get('/obtener-libro-obra', obtenerLibroObra);
router.post('/ingresar', ingresarLibroObra);
router.put('/editar', editarLibroObra);
router.delete('/eliminar', eliminarLibroObra);

export default router;