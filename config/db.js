import mongoose from "mongoose";

export const conecctionDB = async () => {
    try {
        await mongoose.connect(process.env.URL_DB)
        console.log(`Conexión establecida`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}