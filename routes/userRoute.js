import { Router } from "express";

import {
    registrarUser,
    validarUsuario
} from "../controllers/userController.js";

const router = Router();

router.post('/registrar', registrarUser);
router.post('/validar-usuario', validarUsuario);

export default router;