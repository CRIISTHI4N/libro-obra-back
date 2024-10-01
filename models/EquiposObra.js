import mongoose from "mongoose";

const EquiposObraSchema = mongoose.Schema({
    nombreEquipo: {
        type: String,
        trim: true
    },
    fechaAlquiler: {
        type: Date,
    },
    duracion: {
        type: String,
        trim: true
    },
    proveedor: {
        type: String,
        trim: true
    }
}, { timestamps: true });

export const EquiposObra = mongoose.model("EquiposObra", EquiposObraSchema);