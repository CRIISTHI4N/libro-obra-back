import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        if (file.fieldname === "usuario") {
            cb(null, './storage/fotoUsuario')
        } else if (file.fieldname === "actividad") {
            cb(null, './storage/actividades')
        } else if (file.fieldname === "firmaslibro") {
            cb(null, './storage/firmaslibroobra')
        } else {
            cb(null, './storage/actividades')
        }

    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})

export const upload = multer({ storage })
