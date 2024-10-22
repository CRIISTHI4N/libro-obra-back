import { Actividades } from "../models/Actividades.js"

export const ingresarActividad = async (req, res) => {

    const actividad = new Actividades(req.body);

    try {

        await actividad.save();
        return res.status(200).json({ msg: "Actividad ingresada correctamente" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }

}

export const obtenerNombresActividad = async (req, res) => {

    const nombresActividad = await Actividades.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v");

    return res.json(nombresActividad);
}