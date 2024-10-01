import mongoose from "mongoose";

const AutorizacionLibroObraSchema = mongoose.Schema({
    formularioLibroObra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FormularioLibroObra'
    },
    firmaResponsableUrl: {
        type: String,
        trim: true
    },
    firmaPersonaAutorizadaUrl: {
        type: String,
        trim: true
    },
    nombreResponsable: {
        type: String,
        trim: true
    }
}, { timestamps: true })

AutorizacionLibroObraSchema.methods.setImgUrl = function setImgUrl(filename) {

    this.firmaResponsableUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${filename[0]}`
    this.firmaPersonaAutorizadaUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${filename[1]}`

}

export const AutorizacionLibroObra = mongoose.model("AutorizacionLibroObra", AutorizacionLibroObraSchema);