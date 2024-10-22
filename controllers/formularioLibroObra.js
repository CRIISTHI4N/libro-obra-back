import { FormularioLibroObra } from "../models/FormularioLibroObra.js"

export const obtenerFormularioLibroObra = async (req, res) => {

    const formulario = await FormularioLibroObra.find({})
        .sort({ createdAt: -1 })
        .select("-createdAt -updatedAt -__v")

    return res.json(formulario)
}

export const ingresarFormularioLibroObra = async (req, res) => {

    let filename;
    let filenameAnexo;

    req.files['actividad'] ? filename = req.files['actividad'].map(f => f.filename) : filename = [];
    req.files['anexo'] ? filenameAnexo = req.files['anexo'].map(f => f.filename) : filenameAnexo = [];

    // if (req.files['actividad']) {
    //     filename = req.files['actividad'].map(f => f.filename);
    // } else {
    //     filename = [];
    // }

    // if (req.files['anexo']) {
    //     filenameAnexo = req.files['anexo'].map(f => f.filename);

    // } else {
    //     filenameAnexo = [];
    // }

    const {
        nombreProyecto,
        residentes,
        horaInicio,
        horaSalida,
        clima,
        actividades,
        equipos,
        manosObra,
        anexo
    } = req.body

    try {

        const formulario = new FormularioLibroObra();

        //formulario.setImgUrl(filename);

        // formulario.horaInicio = horaInicio;
        // formulario.horaSalida = horaSalida;
        // formulario.clima = clima;
        // formulario.equipos = equipos;
        // formulario.manosObra = manosObra;
        // formulario.actividades = actividades;


        formulario.nombreProyecto = nombreProyecto;
        formulario.residentes = JSON.parse(residentes);
        formulario.horaInicio = horaInicio;
        formulario.horaSalida = horaSalida;
        formulario.clima = JSON.parse(clima);
        formulario.equipos = JSON.parse(equipos);
        formulario.manosObra = JSON.parse(manosObra);
        formulario.actividades = JSON.parse(actividades);
        formulario.anexo = JSON.parse(anexo);

        // ESTO VA AQUI CHUCHA!
        formulario.setImgUrl(filename);
        formulario.setImgUrlAnexo(filenameAnexo);

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