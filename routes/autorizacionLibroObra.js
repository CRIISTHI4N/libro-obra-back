import { Router } from "express";

const router = Router();

import {
    obtenerAutorizacionLibroObra,
    ingresarAutorizacionLibroObra,
    editarAutorizacionLibroObra,
    eliminarAutorizacionLibroObra
} from "../controllers/autorizacionLibroObraController.js";
import { upload } from "../libs/storage.js";

router.get('/obtener-autorizacion-lo', obtenerAutorizacionLibroObra);
router.post('/ingresar', upload.array('firmaslibro'), ingresarAutorizacionLibroObra);
router.put('/editar', editarAutorizacionLibroObra);
router.delete('/eliminar', eliminarAutorizacionLibroObra);

export default router;