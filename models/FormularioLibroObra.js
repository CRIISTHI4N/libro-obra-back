import mongoose from "mongoose";

const FormularioLibroObraSchema = mongoose.Schema({
    horainicio: {
        type: Date
    },
    horaSalida: {
        type: Date
    },
    clima: {
        type: String,
        trim: true
    },
    actividades: [{
        nombreActividad: { type: String, trim: true },
        fotoActividadUrl: { type: String, trim: true },
        anexo: {
            nombreActividad: { type: String, trim: true },
            fotoUrl: { type: String, trim: true },
            dificultad: { type: String, trim: true }
        }
    }],
    equipo: [{
        equipoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'EquiposObra',
        },
        equipoDescripcion: {
            cantidad: { type: String, trim: true },
            horaSalida: { type: Date },
            horaEntrega: { type: Date }
        },
        manoObra: {
            descripcion: { type: String, trim: true },
            cantidad: { type: Number }
        }
    }]
}, { timestamps: true })

FormularioLibroObraSchema.methods.setImgUrl = function setImgUrl(filename) {

    filename.map((f, i) => {
        this.actividades[parseInt(i)].fotoActividadUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${f}`
    })

}

export const FormularioLibroObra = mongoose.model('FormularioLibroObra', FormularioLibroObraSchema);