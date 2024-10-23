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
router.post('/ingresar', upload.fields([{ name: 'actividad', maxCount: 40 }, { name: 'anexo', maxCount: 40 }]), ingresarFormularioLibroObra);
router.put('/editar', editarFormularioLibroObra);
router.delete('/eliminar', eliminarFormularioLibroObra);

export default router;