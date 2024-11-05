


export async function  getStore(name:string){

    try {
        const data = await fetch('http://localhost:3000/api/store/' + name)
        const toJson = await data.json()
        return toJson
    } catch (error) {
        console.error(error)
    }
    


}