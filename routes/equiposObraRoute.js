import { Router } from "express";

const router = Router();

import {
    obtenerEquiposObra,
    ingresarEquiposObra,
    editarEquiposObra,
    eliminarEquiposObra,
    obtenerNombreEO
} from "../controllers/equiposObraController.js";

router.get('/obtener-quipos-obra', obtenerEquiposObra);
router.get('/obtener-nombre-eo', obtenerNombreEO);
router.post('/ingresar', ingresarEquiposObra);
router.put('/editar', editarEquiposObra);
router.delete('/eliminar', eliminarEquiposObra);

export default router;