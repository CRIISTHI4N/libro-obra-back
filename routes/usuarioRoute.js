import { Router } from "express";

import {
    obtenerUsuarios,
    ingresarUsuario,
    editarUsuario,
    eliminarUsuario
} from "../controllers/usuarioController.js"
import { upload } from "../libs/storage.js";

const router = Router();

router.get('/obtener-usuarios', obtenerUsuarios);
router.post('/ingresar', upload.array('usuario'), ingresarUsuario);
// router.put('/editar', editarUsuario);
// router.delete('/eliminar', eliminarUsuario);

export default router;