import { Unidades } from "../models/Unidades.js";

export const ingresarUnidad = async (req, res) => {

    const unidad = new Unidades(req.body);

    try {

        await unidad.save();
        return res.status(200).json({ msg: "Unidad ingresada correctamente" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }
}

export const obtenerUnidades = async (req, res) => {


    const unidades = await Unidades.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(unidades)


}
