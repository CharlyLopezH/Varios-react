import { useState } from "react";

export const useOperaciones=(val)=> {
    console.log('Voy...');
    const [numero,setNumero]=useState(val);

    const fncIncrementar=()=>{
        console.log('Sumando');
        setNumero(numero+1);
    }

    const fncRestar=()=>{
        console.log('Restando');
        setNumero(numero-1)
    }

    const fncRestablecer=()=>{
        console.log('Restableciendo')
        setNumero(0);    
    }

    return [numero, fncIncrementar,fncRestar,fncRestablecer];
}