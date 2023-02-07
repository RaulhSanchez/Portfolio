import { APIURL } from "../Components/Body/Components/complements/complements"


export const APIConsumer ={
  
    getBoxesData: async (data) => {
        try{
            let result = await fetch( APIURL+'RepoDataRoute/get' ,{
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            mode:"cors",
            body: data
        })
        const datos = await result.json() 
        return datos
        } catch (data){
            console.log(data)
        }
    },
}

export default APIConsumer


