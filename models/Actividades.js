import mongoose from "mongoose";

const ActividadesSchema = mongoose.Schema({
    nombreActividad: {
        type: String,
        trim: true
    }
}, { timestamps: true })

export const Actividades = mongoose.model("Actividades", ActividadesSchema);