import mongoose from "mongoose";

const FormularioLibroObraSchema = mongoose.Schema({
    nombreProyecto: {
        type: String,
        trim: true
    },
    residentes: {
        type: [String],
        trim: true
    },
    horaInicio: {
        type: Date
    },
    horaSalida: {
        type: Date
    },
    clima: {
        type: [String],
        trim: true
    },
    actividades: [{
        idActividad: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actividades',
        },
        fotosActividad: [{ fotoActividadUrl: { type: String, trim: true } }],
    }],
    anexo: [{
        idActividad: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actividades',
        },
        nombreAnexo: { type: String, trim: true },
        fotosAnexo: [{ fotoAnexoUrl: { type: String, trim: true } }]
    }],
    equipos: [{
        equipoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'EquiposObra',
        },
        cantidad: { type: String, trim: true },
        horaSalida: { type: Date },
        horaEntrega: { type: Date }

    }],
    manosObra: [{
        descripcion: { type: String, trim: true },
        cantidad: { type: Number }
    }]
}, { timestamps: true })

FormularioLibroObraSchema.methods.setImgUrl = function setImgUrl(filename) {

    const urls = filename.reduce((acc, name) => {
        // Extraer el ID único
        const idUnico = name.split('-')[2]; // Obtener la tercera parte
        const lastGroup = acc[acc.length - 1];

        // Si es el primer elemento o diferente del anterior, crear un nuevo grupo
        if (!lastGroup || lastGroup[0].split('-')[2] !== idUnico) {
            acc.push([name]); // Agregar el nombre completo al nuevo grupo
        } else {
            // Si es igual, añadir al grupo actual
            lastGroup.push(name); // Agregar el nombre completo al grupo existente
        }

        return acc;
    }, []);

    urls.map((u, i) => {
        u.map((m, j) => {
            this.actividades[i].fotosActividad[j].fotoActividadUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${m}`;
        });
    });

}

FormularioLibroObraSchema.methods.setImgUrlAnexo = function setImgUrlAnexo(filename) {

    const urls = filename.reduce((acc, name) => {
        const idUnico = name.split('-')[2];
        const lastGroup = acc[acc.length - 1];

        if (!lastGroup || lastGroup[0].split('-')[2] !== idUnico) {
            acc.push([name]);
        } else {
            lastGroup.push(name);
        }

        return acc;
    }, []);

    urls.map((u, i) => {
        u.map((m, j) => {
            this.anexo[i].fotosAnexo[j].fotoAnexoUrl = `${process.env.URL_HOST}:${process.env.URL_PORT}/public/${m}`;
        });
    });

}

export const FormularioLibroObra = mongoose.model('FormularioLibroObra', FormularioLibroObraSchema);