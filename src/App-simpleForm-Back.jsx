import { useState } from "react";

export  const App=()=>{

    const initialForm={
        nombre:'',
        apellidos:'',
        password:''
    };

    const [formState, setFormState]=useState(initialForm);

    const onHandlerInputChange=({target})=>{        
        const {name,value} = target;
        console.log('OnHandlerInputChange '+name+' '+value);
        setFormState({
            ...formState, 
            [name]:value
        });
    }

    const onHandlerReset=()=>{
        console.log('Resetear');
        console.log(initialForm); 
        setFormState(initialForm); 
    }

return(
    <>
    <div className="container">
    <h2>Formulario sencillo</h2>
    <code>Ejemplo de como crear formularios genéricos sin clonar código</code>
    <hr/>

    <input
    className="form-control mt-2 col-md-6"
    placeholder="El nombre"
    type="text"
    name="nombre"    
    value={formState.nombre}
    onChange={(e)=>onHandlerInputChange(e)}
    >
    </input>

    <input
    className="form-control mt-2 col-md-6"
    placeholder="El apellido"
    type="text"
    name="apellidos"
    value={formState.apellidos}
    onChange={(e)=>onHandlerInputChange(e)}
    >
    </input>

    <input
    className="form-control mt-2 col-md-6"
    placeholder="La contraseña"
    type="password"
    name="password"
    value={formState.password}
    onChange={(e)=>onHandlerInputChange(e)}
    >
    </input>

<hr></hr>
    <button 
    className="btn btn-primary"
    onClick={onHandlerReset}
    >
     Restablecer
    </button>
    </div>
    </>    
)
}
export default App;