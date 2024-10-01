import { FormularioLibroObra } from "../models/FormularioLibroObra.js"

export const obtenerFormularioLibroObra = async (req, res) => {

    const formulario = await FormularioLibroObra.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(formulario)


}

export const ingresarFormularioLibroObra = async (req, res) => {

    // const filename = req.files.map(f => f.filename);

    const formulario = new FormularioLibroObra(req.body);


    try {

        // formulario.setImgUrl(filename);

        await formulario.save();
        return res.status(200).json({ msg: "Libro Obra ingresado correctamente" })

    } catch (e) {
        const error = new Error("Ups, Ocurrio un error!");
        return res.status(404).json({ msg: error.message });
    }

}

export const editarFormularioLibroObra = async (req, res) => {

}

export const eliminarFormularioLibroObra = async (req, res) => {

}