import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = mongoose.Schema({
    cedula: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    },
    pass: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    }
}, { timestamps: true })

UserSchema.pre('save', async function (next) {

    // Si no está modificado el password, que no haga nada
    if (!this.isModified('pass')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.pass = await bcrypt.hash(this.pass, salt);
});

UserSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.pass)
}

export const User = mongoose.model("User", UserSchema);