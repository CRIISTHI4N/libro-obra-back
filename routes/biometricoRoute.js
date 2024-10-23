import { Router } from "express";

const router = Router();

import {
    ingresarBiometrico,
    obtenerBiometricoUsuario,
    obtenerBiometricoFiltrado
} from "../controllers/biometricoController.js";

router.get('/obtener-biometrico-usuario/:idUsuario', obtenerBiometricoUsuario);
router.get('/obtener-biometrico-filtrado/:idUsuario/:fechaInicio/:fechaFinal', obtenerBiometricoFiltrado);
router.post('/ingresar', ingresarBiometrico);


export default router;