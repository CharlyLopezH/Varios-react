import { useState } from "react";
import { Small } from "./Components/Small";
import { useCounter } from "./funciones/useCounter";

export const App=()=>{

    const [counter, fncIncrementar] =  useCounter(0);
    const [show,setShow]=useState(true);

    return (
        <>
        <div className="container">
            <h1>Memorize</h1>
            <code>Ejemplo de como "memorizar" un componente; el efecto es que sólo cambia lo que aplica,
                en este caso sólamente se ejecutará el componente cuando cambie la variable counter, y no cada vez que 
                haya cualquier cambio en cualquier estado de la form.
            </code>
            <hr></hr>
            <h3>Counter: <Small value={counter}/>  </h3>            

            <button className="btn btn-success btn-md"
            onClick={(e)=>fncIncrementar(e)}>
              Click para +
            </button>

            <button className="btn btn-outline-danger btn-md"
            onClick={()=>setShow(!show)}
            >

            Show/Hide {JSON.stringify(show)}
            </button>
        </div>
        </>
    )
}
export default App;