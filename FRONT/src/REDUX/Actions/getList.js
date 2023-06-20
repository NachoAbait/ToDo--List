import axios from "axios"

export function getList() {
    return async function () {
        const listado = axios.get("/")

        return dispatch(
           {
            type: "GET_LIST",
            payload: listado
           }
        ) 
    }

    
}