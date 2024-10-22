import mongoose from "mongoose";

const BiometricoSchema = mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fechaBiometrico: {
        type: Date,
    },
    horaBiometrico: {
        type: Date
    },
    coordenadas: {
        type: String,
        trim: true
    },
    estado: {
        type: String,
        trim: true
    }
}, { timestamps: true })

export const Biometrico = mongoose.model("Biometrico", BiometricoSchema);