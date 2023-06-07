import {useOperaciones} from './funciones/useOperaciones';

const App=()=>{

    const [numero, fncIncrementar,fncRestar,fncRestablecer]=useOperaciones(0);

    return(
        <>
        <h2> Llamado a funciones en hooks Personalizados</h2>
        <hr/>

        <h2>{numero}</h2> 

        <button 
         className="btn btn-success"         
         name="BtnSuma" 
         onClick={(e)=>fncIncrementar(e)}
         >
            Sumar
        </button>
        
        <button className="btn btn-warning "
        name="BtnResta"
        onClick={(e)=>fncRestar(e)}
        >
            Restar
        </button>

        <button className="btn btn-primary "
                onClick={(e)=>fncRestablecer(e)}>
            Reset
        </button>
        </>
    )
}
export default App