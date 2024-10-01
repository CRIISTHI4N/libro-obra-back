import mongoose from "mongoose";

const LibroObraSchema = mongoose.Schema({
    formularioLibroObraId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FormularioLibroObraSchema"
    },
    autorizacionLibroObraId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AutorizacionLibroObra"
    }
}, { timestamps: true })

export const LibroObra = mongoose.model("LibroObra", LibroObraSchema);