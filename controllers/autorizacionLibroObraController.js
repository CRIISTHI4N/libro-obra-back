import { AutorizacionLibroObra } from "../models/AutorizacionLibroObra.js"

export const obtenerAutorizacionLibroObra = async (req, res) => {

    const autorizacionLO = await AutorizacionLibroObra.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v");

    return res.json(autorizacionLO);
}

export const ingresarAutorizacionLibroObra = async (req, res) => {

    const filename = req.files.map(f => f.filename);

    const autorizacionLO = new AutorizacionLibroObra(req.body);

    try {

        autorizacionLO.setImgUrl(filename);
        await autorizacionLO.save();
        return res.status(200).json({ msg: "Autorizado" })

    } catch (e) {
        const error = new Error("Ups, Ocurrio un error!");
        return res.status(404).res.json({ msg: error.message });
    }

}

export const editarAutorizacionLibroObra = async (req, res) => {

}

export const eliminarAutorizacionLibroObra = async (req, res) => {

}