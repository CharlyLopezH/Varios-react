import myOwnForm from "./funciones/myOwnForm";

const App=()=>{

    const initialForm={
        usrNombre:'....',
        email:'....@email.com',
        password:'YTRTERT'
    };
    
    //Llamado desestructurado de funciones al archivo externo
    const {formState, onHandlerClick, onHandlerInput}=myOwnForm(initialForm);

    const{usrNombre,email,password}=formState;

    return(
        <>
        <div className="container">
        <h2>Simple form</h2>
        <code>Ejemplo de formulario simple con un useForm personalizado. Toda la parte lógica se irá a una función para tal fin...</code> 
        <hr/>  

        <input className="form-control col-md-6 mt-2"
        type="text"
        name="usrNombre"        
        onChange={onHandlerInput}        
        value={usrNombre}
        >
        </input>

        <input className="form-control col-md-6 mt-2"
        type="email"
        name="email"        
        onChange={onHandlerInput}
        value={email}
        >
        </input>

        <input className="form-control col-md-6 mt-2"
        type="password"
        name="password"        
        onChange={onHandlerInput}
        value={password}
        >
        </input>




        <button
        className="btn btn-primary mt-2"
        onClick={onHandlerClick}
        >Click</button>
        </div>
        </>
    )
}
export default App;