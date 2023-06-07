import { useState } from "react";

export const useIncrementar=(val)=> {
    console.log('Incremenentando...'+val);    
    const [contador, setContador]=useState(val)
    const fncIncrementar=()=>{
        setContador(contador+1);
    }    
    //La función regresa el resultado y la función que contiene el hook useState
    return [contador,fncIncrementar];
}