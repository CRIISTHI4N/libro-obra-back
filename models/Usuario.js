import mongoose from "mongoose";

const UsuarioSchema = mongoose.Schema({
    fotoUsuario: {
        type: String,
        trim: true
    },
    firmaUrl: {
        type: String,
        trim: true
    }
}, { timestamps: true });

UsuarioSchema.methods.setImgUrl = function setImgUrl(filename) {

    this.fotoUsuario = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${filename[0]}`
    this.firmaUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${filename[1]}`

}

export const Usuario = mongoose.model("Usuario", UsuarioSchema);