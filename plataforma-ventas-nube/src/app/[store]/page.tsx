
//www.tienda-nube/electonicaDigital

import { getStore } from "./getStore";

async function Main({params}:{params:{store:string}}) {
const {store} = params
     const tienda =await getStore(store)
     console.log(tienda)
    return ( 
        <div className="p-2 w-full flex justify-center">
            <h2 className="text-[50px] font-semibold text-blue-400">{tienda.data.name}</h2>
        </div>
     );
}

export default Main;