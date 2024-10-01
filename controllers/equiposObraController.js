import { EquiposObra } from "../models/EquiposObra.js";

export const obtenerEquiposObra = async (req, res) => {

    const equiposObra = await EquiposObra.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(equiposObra);
}

export const obtenerNombreEO = async (req, res) => {

    const equiposObra = await EquiposObra.find({})
        .sort({ createdAt: -1 })
        .select("-fechaAlquiler -duracion -proveedor -createdAt -updatedAt -__v")

    return res.json(equiposObra);
}

export const ingresarEquiposObra = async (req, res) => {

    const equiposObra = new EquiposObra(req.body);

    try {

        await equiposObra.save();
        return res.status(200).json({ msg: "Equipo ingresado correctamente" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }
}

export const editarEquiposObra = async (req, res) => {

}

export const eliminarEquiposObra = async (req, res) => {

}