import { Children, createContext, useContext } from "react";

const CrudContexts = createContext();

export function useCrud (){
    return useContext(CrudContexts)
}

export const CrudProvider = ({children, value}) =>{
    return(
        <CrudContexts.Provider value={value}>
            {children}
        </CrudContexts.Provider>
    )
}