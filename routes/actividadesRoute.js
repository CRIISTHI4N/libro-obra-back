import { Router } from "express";

const router = Router();

import {
    ingresarActividad,
    obtenerNombresActividad
} from "../controllers/actividadesController.js";

router.get('/obtener-nombres-actividad', obtenerNombresActividad);
router.post('/ingresar', ingresarActividad);
// router.put('/editar', editarAutorizacionLibroObra);
// router.delete('/eliminar', eliminarAutorizacionLibroObra);

export default router;