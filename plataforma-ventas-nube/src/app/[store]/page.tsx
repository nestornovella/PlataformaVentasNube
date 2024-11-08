
//www.tienda-nube/electonicaDigital
"use server"
import { getStore } from "./getStore";

async function Main({params}:{params:{store:string}}) {
const {store} = params
     const tienda =await getStore(store)
     console.log(tienda.data.ConfigurationStore.banner.color)
     const colors = {
        red: 'text-red-500',
        blue: 'text-blue-300'
     }
    return ( 
        <div className="p-2 w-full flex justify-center">
            <h2 className={`text-[50px] font-semibold  ${colors[tienda.data.ConfigurationStore.banner.color]}`}>{tienda.data.name}</h2>
        </div>
     );
}

export default Main;