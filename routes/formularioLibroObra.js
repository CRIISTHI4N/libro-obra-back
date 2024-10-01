import { Router } from "express";

const router = new Router();

import {
    obtenerFormularioLibroObra,
    ingresarFormularioLibroObra,
    editarFormularioLibroObra,
    eliminarFormularioLibroObra
} from "../controllers/formularioLibroObra.js"
import { upload } from "../libs/storage.js";

router.get('/obtener-formulario', obtenerFormularioLibroObra);
router.post('/ingresar', upload.array('actividad'), ingresarFormularioLibroObra);
router.put('/editar', editarFormularioLibroObra);
router.delete('/eliminar', eliminarFormularioLibroObra);

export default router;