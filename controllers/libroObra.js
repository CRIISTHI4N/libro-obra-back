import { LibroObra } from "../models/LibroObra.js"

export const obtenerLibroObra = async (req, res) => {

    const libroObra = await LibroObra.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(libroObra);

}

export const ingresarLibroObra = async (req, res) => {

    const libroObra = new LibroObra(req.body);

    try {

        await libroObra.save();
        return res.status(200).json({ msg: "Libro Obra ingresado correctamente" })

    } catch (e) {
        const error = new Error("Ups, Ocurrio un error!");
        return res.status(404).res.json({ msg: error.message });
    }

}

export const editarLibroObra = async (req, res) => {

}

export const eliminarLibroObra = (req, res) => {

}