import { Usuario } from "../models/Usuario.js"

export const obtenerUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(usuarios)

}

export const ingresarUsuario = async (req, res) => {

    const filename = req.files.map(f => f.filename);

    const usuario = new Usuario(req.body);

    try {

        usuario.setImgUrl(filename);
        await usuario.save();
        return res.status(200).json({ msg: "Usuario creado correctamente" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }

}

export const editarUsuario = async (req, res) => { }

export const eliminarUsuario = async (req, res) => { }