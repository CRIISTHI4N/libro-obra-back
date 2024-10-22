import mongoose from "mongoose";

const UnidadesSchema = mongoose.Schema({
    nombreUnidad: {
        type: String,
        trim: true
    }
}, { timestamps: true })

export const Unidades = mongoose.model("Unidades", UnidadesSchema);