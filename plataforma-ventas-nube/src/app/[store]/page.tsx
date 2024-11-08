
//www.tienda-nube/electonicaDigital
"use server"
import { getStore } from "./getStore";

async function Main({params}:{params:{store:string}}) {
const {store} = params
     const tienda =await getStore(store)
     const color = tienda.data.ConfigurationStore.banner.color
     console.log(tienda.data.ConfigurationStore.banner.color)
    return ( 
        <div className="p-2 w-full flex justify-center">
            <h2 className={`text-[50px] font-semibold ${color}`}>{tienda.data.name}</h2>
        </div>
     );
}

export default Main;