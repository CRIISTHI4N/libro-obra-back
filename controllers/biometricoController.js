import { Biometrico } from "../models/Biometrico.js";

export const ingresarBiometrico = async (req, res) => {

    // const { user, pass, tipo } = req.body;
    const biometrico = new Biometrico(req.body);

    try {

        await biometrico.save();
        return res.status(200).json({ msg: "Registro exitoso" })

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }

}

export const obtenerBiometricoUsuario = async (req, res) => {

    const { idUsuario } = req.params

    const biometricoUser = await Biometrico.find({ idUsuario: idUsuario })
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(biometricoUser);


}

export const obtenerBiometricoFiltrado = async (req, res) => {

    const { idUsuario, fechaInicio, fechaFinal } = req.params;

    try {

        const fechaInicioDate = new Date(fechaInicio);
        const fechaFinalDate = new Date(fechaFinal);

        const biometricoUser = await Biometrico.find({
            idUsuario,
            fechaBiometrico: {
                $gte: fechaInicioDate,
                $lte: fechaFinalDate
            }
        })
            .sort({ createdAt: -1 })
            .select("-createdAt -updatedAt -__v");

        return res.json(biometricoUser);

    } catch (e) {
        const error = new Error('Ups, Ocurrio un error!')
        return res.status(404).json({ msg: error.message })
    }
};

