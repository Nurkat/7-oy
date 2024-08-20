import { Children, createContext, useState } from "react";

export const Context = createContext()

export const CarsContext =({children}) =>{
    const [cars,setCars] = useState([])
     
    return(
        <Context.Provider value={{cars,setCars}}>{children}</Context.Provider>
    )
}