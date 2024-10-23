import { User } from "../models/User.js";

export const registrarUser = async (req, res) => {

    const { user } = req.body;

    const usuarioCreado = await User.findOne({ user })

    if (usuarioCreado) {
        return res.status(200).json({ msg: "Este usuario ya existe" })
    }

    const usuario = new User(req.body);

    try {

        await usuario.save();
        return res.status(200).json({ msg: "Usuario creado correctamente" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }

}


export const validarUsuario = async (req, res) => {

    const { user, pass } = req.body;

    const verificarUser = await User.findOne({ user });

    if (!verificarUser) {
        const error = new Error("Usuario incorrecto")
        return res.status(404).json({ msg: error.message })
    }

    try {

        if (await verificarUser.comprobarPassword(pass)) {

            req.usuario = {
                _id: verificarUser._id,
                nombre: verificarUser.nombre,
                user: verificarUser.user,
                tipo: verificarUser.tipo,
                token: process.env.KEY_USER
            }

            return res.json({
                _id: verificarUser._id,
                nombre: verificarUser.nombre,
                user: verificarUser.user,
                tipo: verificarUser.tipo,
                token: process.env.KEY_USER
            })

        } else {
            const error = new Error("Contraseña Incorrecta");
            return res.status(403).json({ msg: error.message })
        }

    } catch (e) {
        const error = new Error("Ups, Ocurrio un error!")
        return res.status(404).json({ msg: error.message })
    }

}