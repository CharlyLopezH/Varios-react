import { useState } from "react";

export const useCounter=(x)=>{    
    const [counter,setNumero]=useState(x);    
    const fncIncrementar=()=>{        
        setNumero(counter+1);
    }

    return[counter,fncIncrementar]
}