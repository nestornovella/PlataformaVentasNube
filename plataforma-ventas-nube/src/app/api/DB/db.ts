import { Sequelize } from "sequelize";
import pg from 'pg'
import path from "path";
import {readdirSync} from 'fs'
import { fileURLToPath } from "url";
import { Database } from "../interfaces";


const url:string =process.env.NEXT_PUBLIC_PSQL_URL_PRODUCTION || ""

const sequelize = new Sequelize(url , {
    dialect:'postgres',
    logging:false,
    dialectModule: pg
})

export function checkConection(){
        return sequelize.authenticate()
                .then(() => console.log('base de datos conectada'))

}

export async function connectDB(){
    try {
        await sequelize.sync({force:true})
        return "coneccion establecida"
       } catch (error) {
        console.error(error)
       }
}



async function importAndAsociateModels(){
    const db : Database = {}
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const modelsDir = path.join(__dirname, 'models');

        const modelsList = readdirSync(modelsDir)
            .filter(file => file.endsWith('.ts'))
            .map(file => file.replace('.ts', ''))
    
        for (const file of  modelsList) {
            const model = (await import(`./models/${file}`)).default(sequelize);
            db[model.name] = model;
        }
    
        Object.keys(db).forEach( k => {
            if(typeof db[k].associate == 'function'){
                db[k].associate(db)
            }
        })
        
    
        //console.log(sequelize.models)
        
    } catch (error) {
        console.error(error)
    }


}

importAndAsociateModels()


export default sequelize