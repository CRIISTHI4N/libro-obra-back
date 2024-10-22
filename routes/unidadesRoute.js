import { Router } from "express";

const router = Router();

import {
    ingresarUnidad,
    obtenerUnidades
} from "../controllers/unidadesController.js";

router.get('/obtener', obtenerUnidades);
router.post('/ingresar', ingresarUnidad);

export default router;